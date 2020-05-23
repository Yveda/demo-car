import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

@ccclass("GameMap")
export class GameMap extends Component {
    //开放路径点只要开放每条路径的开始点就好了
    @property({
        type: [Node]
    })
    path: Node[] = [];

    @property
    public maxProgress = 2;
}
