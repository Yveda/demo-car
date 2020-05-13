import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

enum EventName {
    GREETING = 'greeting',
    GOODBYE = 'goodbye',
    FINISHEDWALK = 'finished-walk'
}

@ccclass("Constants")
export class Constants extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    public static EventName = EventName;

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
