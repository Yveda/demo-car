import { RoadPoint } from './RoadPoint';
import { _decorator, Component, Node, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Car")
export class Car extends Component {
  //设置小车朝向问题
  private _currRoadPoint: RoadPoint = null;
  private _pointA = new Vec3();
  private _pointB = new Vec3();
  private _currSpeed = 0.1;
  private _isMoving = false;

  public update(dt: number) {
    if (this._isMoving) {
      console.log('isMoving......');
    }
  }

  //自己接收开始点
  public setEntry (entry: Node) {
    this.node.setWorldPosition(entry.worldPosition);
    this._currRoadPoint = entry.getComponent(RoadPoint);
    if (!this._currRoadPoint) {
      console.warn('There is no RoadPoint in ' + entry.name);
      return;
    }

    this._pointA.set(entry.worldPosition);
    this._pointB.set(this._currRoadPoint.nextStation.worldPosition);

    //计算当前朝向问题
    const z = this._pointB.z - this._pointA.z;
    if (z !== 0) {
      if (z < 0) {
        //欧拉角， 如果小于0则不做改变
        this.node.eulerAngles = new Vec3();
      } else {
        this.node.eulerAngles = new Vec3(0, 180, 0);
      } 
    } else {
      const x = this._pointB.x - this._pointB.x;
      if (x >0) {
        this.node.eulerAngles = new Vec3(0, 270, 0);
      } else {
        this.node.eulerAngles = new Vec3(0, 90, 0);
      }
    }
  }
  
  startRunning () {
    if (this._currRoadPoint) {
      this._isMoving = true;
    }
  }

  stopRunning() {
      this._isMoving = false;

  }
}
