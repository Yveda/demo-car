import { AudioManager } from './AudioManager';
import { CustomEventListener } from './../data/CustomEventListener';
import { Constants } from './../data/Constants';
import { RoadPoint } from './RoadPoint';
import { _decorator, Component, Node, Vec3, textureUtil, ParticleSystemComponent, BoxColliderComponent, RigidBodyComponent, ICollisionEvent } from "cc";

const { ccclass, property } = _decorator;

//弄个暂存变量,因为考虑到js的内存机制，所以不打算将定义写在update里面
const _tempVec = new Vec3();
const EventName = Constants.EventName;

@ccclass("Car")
export class Car extends Component {
  @property
  maxSpeed = 0.2;

  //设置小车朝向问题
  private _currRoadPoint: RoadPoint = null;
  private _pointA = new Vec3();
  private _pointB = new Vec3();
  private _currSpeed = 0;
  private _isMoving = false;
  private _offect = new Vec3();
  private _originRotation = 0;//初始旋转点
  private _targetRotation = 0;//目标旋转点
  private _centerPoint = new Vec3();//旋转中心点
  private _rotMeasure = 0;//度量值
  private _accleration = 0.2;//加速度
  private _isMain = false;//当前是否是小车，而非ai
  private _isInOrder = false; //当前是否在订单中
  private _isBreaking = false;//是否处于刹车
  private _gas: ParticleSystemComponent = null; //尾气
  private _overCD: Function = null;
  private _camera: Node = null;

  public start() {
    CustomEventListener.on(EventName.FINISH_EDWALK, this._finishedWalk, this);
  }

  public update(dt: number) {
    if (!this._isMoving || this._isInOrder) {
      return;
    }

    this._offect.set(this.node.worldPosition);

    this._currSpeed += this._accleration * dt;
    if (this._currSpeed > this.maxSpeed) {
      this._currSpeed = this.maxSpeed;
    }

    if (this._currSpeed <= 0.001) {
      this._isMoving = false;

      if (this._isBreaking) {
        this._isBreaking = true;
        CustomEventListener.dispatchEvent(EventName.END_BREAKING);
      }
    }

    switch (this._currRoadPoint.moveType) {
      case RoadPoint.RoadMoveType.BEND:
        //需要旋转的角度
        const offsetRotation = this._targetRotation - this._originRotation;
        //当前已经旋转的角度
        const currRotation = this._conversion(this.node.eulerAngles.y);
        //下一站运动角度：速度是跟弧度挂钩的，所以可以相乘得到当前运动的角度
        let nextStation = (currRotation - this._originRotation) + (this._currSpeed * this._rotMeasure * (this._targetRotation > this._originRotation ? 1 : -1));
        if (Math.abs(nextStation) > Math.abs(offsetRotation)) {
          nextStation = offsetRotation;
        }
        //真正要旋转的角度
        const target = nextStation + this._originRotation;
        _tempVec.set(0, target, 0);
        //小车旋转
        this.node.eulerAngles = _tempVec;

        //运动轨迹： 通过角度求出弧度
        // const sin = Math.sin(nextStation * Math.PI / 180);
        // const cos = Math.cos(nextStation * Math.PI / 180);
        // const xLength = this._pointA.x - this._centerPoint.x;
        // const zLength = this._pointA.z - this._centerPoint.z;
        // const xPos = xLength * cos + zLength * sin + this._centerPoint.x;
        // const zPos = -xLength * sin + zLength * cos + this._centerPoint.z;
        // this._offect.set(xPos, 0, zPos);

        //等于如上代码效果：可以用引擎内部api: rotateY实现绕中心旋转
        Vec3.rotateY(this._offect, this._pointA, this._centerPoint, nextStation * Math.PI / 180);
        break;
      default:
        const z = this._pointB.z - this._pointA.z;
        if (z !== 0) {
          if (z > 0) {
            this._offect.z += this._currSpeed;
            if (this._offect.z > this._pointB.z) {
              this._offect.z = this._pointB.z;
            }
          } else {
            this._offect.z -= this._currSpeed;
            if (this._offect.z < this._pointB.z) {
              this._offect.z = this._pointB.z;
            }
          }
        } else {
          const x = this._pointB.x - this._pointA.x;
          if (x > 0) {
            this._offect.x += this._currSpeed;
            if (this._offect.x > this._pointB.x) {
              this._offect.x = this._pointB.x;
            }
          } else {
            this._offect.x -= this._currSpeed;
            if (this._offect.x < this._pointB.x) {
              this._offect.x = this._pointB.x;
            }
          }
        }
        break;
    }
    this.node.setWorldPosition(this._offect);
    Vec3.subtract(_tempVec, this._pointB, this._offect);
    let len = _tempVec.length();
    if (len <= 0.01) {
      this._arrivalStation();
    }
  }

  //自己接收开始点
  public setEntry(entry: Node, isMain = false) {
    this.node.setWorldPosition(entry.worldPosition);
    this._currRoadPoint = entry.getComponent(RoadPoint);
    this._isMain = isMain;
    if (!this._currRoadPoint) {
      console.warn('There is no RoadPoint in ' + entry.name);
      return;
    }

    this._pointA.set(entry.worldPosition);
    this._pointB.set(this._currRoadPoint.nextStation.worldPosition);

    //判断当前朝向
    const z = this._pointB.z - this._pointA.z;
    if (z !== 0) {
      if (z < 0) {
        //欧拉角， 如果小于0则不做改变
        this.node.eulerAngles = new Vec3();
      } else {
        this.node.eulerAngles = new Vec3(0, 180, 0);
      }
    } else {
      const x = this._pointB.x - this._pointA.x;
      if (x > 0) {
        this.node.eulerAngles = new Vec3(0, 270, 0);
      } else {
        this.node.eulerAngles = new Vec3(0, 90, 0);
      }
    }

    const collider = this.node.getComponent(BoxColliderComponent);
    const rigidBody = this.node.getComponent(RigidBodyComponent);
    if (this._isMain) {
      const gasNode = this.node.getChildByName('gas');
      this._gas = gasNode.getComponent(ParticleSystemComponent);
      this._gas.play();

      collider.on('onCollisionEnter', this._onCollisionEnter, this);
      //我当前的组是什么
      collider.setGroup(Constants.CarGroup.MAIN_CAR);
      //我当前要碰撞的组是什么，玩家小车只能碰撞AI小车
      collider.setMask(Constants.CarGroup.OTHER_CAR);
    } else {
      //AI小车
      collider.setGroup(Constants.CarGroup.OTHER_CAR);
      //所有组都检测的话就是-1，就是跟所有组都可以碰撞
      collider.setMask(-1);
    }

    this._resetPhysical();
  }

  public setCamera(camera: Node, pos: Vec3, rotation: number) {
    if (this._isMain) {
      this._camera = camera;
      this._camera.parent = this.node;
      this._camera.setPosition(pos);
      this._camera.eulerAngles = new Vec3(rotation, 0, 0);
    }
  }

  public startRunning() {
    if (this._currRoadPoint) {
      this._isMoving = true;
      this._currSpeed = 0;
      this._accleration = 0.2;
    }
  }

  public stopRunning() {
    // this._isMoving = false;
    this._accleration -= 0.3;

    //执行刹车
    CustomEventListener.dispatchEvent(EventName.START_BREAKING, this.node);
    this._isBreaking = true;
    AudioManager.playSound(Constants.AudioSource.STOP);
  }

  public moveAfterFinished(cd: Function) {
    this._overCD = cd;
  }

  public stopImmediately () {
    this._isMoving = false;
    this._currSpeed = 0;
  }

  private _arrivalStation() {
    console.log('arrival....');
    this._pointA.set(this._pointB);
    this._currRoadPoint = this._currRoadPoint.nextStation.getComponent(RoadPoint);
    if (this._currRoadPoint.nextStation) {
      this._pointB.set(this._currRoadPoint.nextStation.worldPosition);

      if (this._isMain) {
        if (this._isBreaking) {
          this._isBreaking = true;
          CustomEventListener.dispatchEvent(EventName.END_BREAKING);
        }

        if (this._currRoadPoint.type === RoadPoint.RoadPointType.GREETING) {
          this._greetingCustomer();
        } else if (this._currRoadPoint.type == RoadPoint.RoadPointType.GOODBYE) {
          this._takingCustomer();
        } else if (this._currRoadPoint.type === RoadPoint.RoadPointType.END) {
          AudioManager.playSound(Constants.AudioSource.WIN);
        }
      }

      //到达某个站了之后才决定说要不要旋转
      if (this._currRoadPoint.moveType === RoadPoint.RoadMoveType.BEND) {
        //根据顺时针逆时针四种情况求出旋转的中心位置
        if (this._currRoadPoint.clockwise) {//顺时针
          this._originRotation = this._conversion(this.node.eulerAngles.y);
          this._targetRotation = this._originRotation - 90;

          //顺时针1
          if ((this._pointB.z < this._pointA.z && this._pointB.x > this._pointA.x) || (this._pointB.z > this._pointA.z && this._pointB.x < this._pointA.x)) {
            this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
          } else {//顺时针2
            this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
          }
        } else {
          this._originRotation = this._conversion(this.node.eulerAngles.y);
          this._targetRotation = this._originRotation + 90;

          //逆时针1
          if ((this._pointB.z > this._pointA.z && this._pointB.x > this._pointA.x) || (this._pointB.z < this._pointA.z && this._pointB.x < this._pointA.x)) {
            this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
          } else {//逆时针2
            this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
          }
        }

        //求旋转半径
        Vec3.subtract(_tempVec, this._pointA, this._centerPoint);
        const r = _tempVec.length();
        this._rotMeasure = 90 / (Math.PI * r / 2);//得出一度等于多少弧度
      }
    } else {
      //达到终点
      this._isMoving = false;
      this._currRoadPoint = null;

      if (this._overCD) {
        this._overCD(this);
        this._overCD = null;
      }
    }
  }

  private _onCollisionEnter (event: ICollisionEvent) {
    // console.log('collision enter: .......', event);
    const otherCollider = event.otherCollider;
    //如果碰到地面就return
    if (otherCollider.node.name === 'group') {
      return;
    }
    const otherRigidBody = otherCollider.node.getComponent(RigidBodyComponent);
    //使用重力，不然就会飘忽不定
    otherRigidBody.useGravity = true;
    //施加一个被撞倒的力。然后又翻转效果，把作用点设置在顶部
    otherRigidBody.applyForce(new Vec3(0, 3000, -1500), new Vec3(0, 0.5, 0));

    const collider = event.selfCollider;
    collider.addMask(Constants.CarGroup.NORMAL);

    const rigidBody = this.node.getComponent(RigidBodyComponent);
    rigidBody.useGravity = true;
    this._gameOver();
  }

  private _greetingCustomer() {
    this._isInOrder = true;
    this._currSpeed = 0;
    this._gas.stop();
    CustomEventListener.dispatchEvent(EventName.GREETING, this.node.worldPosition, this._currRoadPoint.direction);
  }

  private _takingCustomer() {
    this._isInOrder = true;
    this._currSpeed = 0;
    this._gas.stop();
    CustomEventListener.dispatchEvent(EventName.GOODBYE, this.node.worldPosition, this._currRoadPoint.direction);
    CustomEventListener.dispatchEvent(EventName.SHOW_COIN, this.node.worldPosition);
  }

  private _finishedWalk() {
    if (this._isMain) {
      this._isInOrder = false;
      this._gas.play();
    }
  }

  private _gameOver () {
    //游戏结束通知所有AI小车不要运动
    CustomEventListener.dispatchEvent(EventName.GMAE_OVER);
  }

  private _resetPhysical () {
    const rigidBody = this.node.getComponent(RigidBodyComponent);
    rigidBody.useGravity = false;
    rigidBody.sleep();
    //从对象池里面取出来再唤醒一下
    rigidBody.wakeUp();
  }

  //让旋转角度变成正值
  private _conversion(value: number) {
    let a = value;
    if (a <= 0) {
      a += 360;
    }

    return a;
  }

}
