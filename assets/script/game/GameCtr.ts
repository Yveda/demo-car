import { CarManager } from './CarManager';
import { MapManager } from './MapManager';
import { _decorator, Component, Node, EventTouch } from "cc";
const { ccclass, property } = _decorator;
//游戏控制类
@ccclass("GameCtr")
export class GameCtr extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;


    @property({
        type: MapManager
    })
    mapManager: MapManager = null;

    @property({
        type: CarManager
    })
    carManager: CarManager = null;

    public onLoad() {
        //数据初始化
        this.mapManager.resetMap();
        this.carManager.resetCars(this.mapManager.currPath);
    }

    public start () {
        this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);
    }

    private _touchStart(touch: Touch, event: EventTouch) {
        this.carManager.controlMoving();
    }

    private _touchEnd(touch: Touch, event: EventTouch) {
        this.carManager.controlMoving(false);
    }
}
