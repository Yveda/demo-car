import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameMap")
export class GameMap extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    //开放路径点只要开放每条路径的开始点就好了
    @property({
        type: [Node]
    })
    path: Node[] = [];

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
