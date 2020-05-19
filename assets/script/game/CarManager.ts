import { PoolManager } from './../data/PoolManager';
import { RoadPoint } from './RoadPoint';
import { Car } from './Car';
import { _decorator, Component, Node, loader, Prefab } from "cc";
const { ccclass, property } = _decorator;
//小车管理
@ccclass("CarManager")
export class CarManager extends Component {

  @property({
    type: Car
  })
  mainCar: Car = null;

  private _currPath: Node[] = [];
  private _aiCars: Car[] = [];

  //接收所有的点
  public reset(points: Node[]) {
    if (points.length <= 0) {
      console.warn('There is no point in this map');
      return;
    }
    this._currPath = points;
    this._createMainCar(points[0]);
    this._startSchedule();
  }

  public _createMainCar(point: Node) {
    this.mainCar.setEntry(point, true);
  }

  public controlMoving(isRunning = true) {
    if (isRunning) {
      this.mainCar.startRunning();
    } else {
      this.mainCar.stopRunning();
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


}
