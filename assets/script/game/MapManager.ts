import { GameMap } from './GameMap';
import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;
//地图管理类
@ccclass("MapManager")
export class MapManager extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    public currPath:Node[] = [];

    public resetMap () {
        const curMap = this.node.children[0].getComponent(GameMap);
        this.currPath = curMap.path;//获取当前路径
    }

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
