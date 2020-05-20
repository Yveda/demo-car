import { Constants } from './../data/Constants';
import { PoolManager } from './../data/PoolManager';
import { RoadPoint } from './RoadPoint';
import { Car } from './Car';
import { _decorator, Component, Node, loader, Prefab, Vec3 } from "cc";
import { CustomEventListener } from '../data/CustomEventListener';
const { ccclass, property } = _decorator;
//小车管理
@ccclass("CarManager")
export class CarManager extends Component {

  @property({
    type: Car
  })
  mainCar: Car = null;

  @property({
    type: Node
  })
  camera: Node = null;

  @property
  cameraPos = new Vec3(0,8,8);

  @property
  cameraRotation = -45;

  private _currPath: Node[] = [];
  private _aiCars: Car[] = [];

  start () {
    CustomEventListener.on(Constants.EventName.GMAE_OVER, this._gameOver, this);
  }

  //接收所有的点
  public reset(points: Node[]) {
    if (points.length <= 0) {
      console.warn('There is no point in this map');
      return;
    }
    this._currPath = points;
    this._recycleAllAICar();
    this._createMainCar(points[0]);
    this._startSchedule();
  }

  public _createMainCar(point: Node) {
    this.mainCar.setEntry(point, true);
    this.mainCar.setCamera(this.camera, this.cameraPos, this.cameraRotation);
  }

  public controlMoving(isRunning = true) {
    if (isRunning) {
      this.mainCar.startRunning();
    } else {
      this.mainCar.stopRunning();
    }
  }

  private _gameOver () {
    this._stopSchedule();
    this.mainCar.stopImmediately();
    //保留当前世界变换
    this.camera.setParent(this.node.parent, true);
    for (let i = 0; i < this._aiCars.length; i++) {
      const car = this._aiCars[i];
      car.stopImmediately();
    }
  }

  private _startSchedule() {
    for (let i = 1; i < this._currPath.length; i++) {
      const node = this._currPath[i];
      const roadPoint = node.getComponent(RoadPoint);
      roadPoint.startSchedule(this._createEnemy.bind(this));
    }
  }

  private _stopSchedule () {
    for (let i = 1; i < this._currPath.length; i++) {
      const node = this._currPath[i];
      const roadPoint = node.getComponent(RoadPoint);
      roadPoint.stopSchedule();
    }
  }

  private _createEnemy (road: RoadPoint, carID: string) {
    const self = this;
    loader.loadRes(`car/car${carID}`, Prefab, (err: any, prefab: Prefab)=>{
      if (err) {
        console.warn(err);
        return;
      }

      const car = PoolManager.getNode(prefab, self.node);
      const carComp = car.getComponent(Car);
      this._aiCars.push(carComp);
      carComp.setEntry(road.node);
      carComp.maxSpeed = road.speed;
      carComp.startRunning();
      carComp.moveAfterFinished(this._recycleAICar.bind(this));
    })
  }

  private _recycleAICar(car: Car) {
    const index = this._aiCars.indexOf(car);
    if (index >= 0) {
      PoolManager.setNode(car.node);
      this._aiCars.splice(index, 1);
    }
  }

  private _recycleAllAICar () {
    for (let i = 0; i < this._aiCars.length; i++) {
      const car = this._aiCars[i];
      PoolManager.setNode(car.node);
    }

    this._aiCars.length = 0;
  }


}
