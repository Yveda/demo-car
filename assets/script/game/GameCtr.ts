import { AudioManager } from './AudioManager';
import { CarManager } from './CarManager';
import { MapManager } from './MapManager';
import { _decorator, Component, Node, EventTouch, BoxColliderComponent, Vec3 } from "cc";
import { Constants } from '../data/Constants';
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

    //地板：静态刚体，不用添加rigidBody
    @property({
        type: Node,
    })
    group: Node = null;

    public onLoad() {
        //数据初始化
        this.mapManager.resetMap();
        this.carManager.reset(this.mapManager.currPath);

        //设置地板静态刚体
        const collider = this.group.getComponent(BoxColliderComponent);
        collider.setGroup(Constants.CarGroup.NORMAL);
        collider.setMask(-1);
    }

    public start () {
        this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
        this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);

        AudioManager.playMusic(Constants.AudioSource.BACKGROUND);
    }

    private _touchStart(touch: Touch, event: EventTouch) {
        this.carManager.controlMoving();
    }

    private _touchEnd(touch: Touch, event: EventTouch) {
        this.carManager.controlMoving(false);
    }
}
