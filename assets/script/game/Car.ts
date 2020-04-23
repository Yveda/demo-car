import { RoadPoint } from './RoadPoint';
import { _decorator, Component, Node, Vec3 } from "cc";
const { ccclass, property } = _decorator;

@ccclass("Car")
export class Car extends Component {
    //设置小车朝向问题
    private _crrRoadPoint: RoadPoint = null;
    private _pointA = new Vec3();
    private _pointB = new Vec3();

  //自己接收开始点
  public setEntry (entry: Node) {
    this.node.setWorldPosition(entry.worldPosition);
  }
}
