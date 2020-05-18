import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

enum EventName {
    GREETING = 'greeting',
    GOODBYE = 'goodbye',
    FINISH_EDWALK = 'finished-walk',
    START_BREAKING = 'start-breaking',//什么时候开始刹车
    END_BREAKING = 'end-breaking',//什么时候结束
    SHOW_COIN = 'show-coin'//显示金币
}

enum CustomerState {
    NONE,
    GREETING,
    GOODBYE,
}

@ccclass("Constants")
export class Constants extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    public static EventName = EventName;
    public static CustomerState = CustomerState;

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
