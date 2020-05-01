import { Car } from './Car';
import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;
//小车管理
@ccclass("CarManager")
export class CarManager extends Component {

    @property({
        type: Car
    })
    mainCar: Car = null;

  //接收所有的点
  public resetCars(points: Node[]) {
      if (points.length <= 0) {
        console.warn('There is no point in this map');
        return;
      }

    this._createMainCar(points[0]);
  }

  public _createMainCar(point: Node) {
    this.mainCar.setEntry(point);
  }

  public controlMoving(isRunning = true) {
    if (isRunning) {
       this.mainCar.startRunning();
    } else {
      this.mainCar.stopRunning();
    }
  }


}
