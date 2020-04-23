import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;
//消息传递:通过ID接收回调，回调对象，然后再把事件派发出去

//结构定制：事件名对应多个回调
interface IEventData {
    func: Function;
    target: any;
}

interface IEvent {
    [eventName: string]: IEventData[];//根据当前事件名可以有多个回调以及多个目标
}

@ccclass("CustomEventListener")
export class CustomEventListener extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    //定义处理器
    public static handle: IEvent = {};

    //事件监听
    public static on(eventName: string, cb: Function, target: any) {
        //如果当前处理器没有相应事件名的话则建立这个事件名的数据
        if (!this.handle[eventName]) {
            this.handle[eventName] = [];
        }

        const data: IEventData = { func: cb, target};
        this.handle[eventName].push(data);
    }

    //事件注销
    public static off(eventName: string, cb: Function, target?: any) {
        const list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }

        for (let i = 0; i < list.length; i++) {
            const event = list[i];
            if (event.func === cb && (!target || target === event.target)) {
                list.splice(i, 1);
                break;
            }
            
        }
    }

    //事件派发
    public static dispatchEvent (eventName: string, ...args:any) {
        const list = this.handle[eventName];
        if (!list || list.length <= 0) {
            return;
        }

        for (let i = 0; i < list.length; i++) {
            const event = list[i];
           event.func.apply(event.target, args);
        }
    }

    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
