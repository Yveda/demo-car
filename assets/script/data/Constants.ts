import { _decorator, Component, Node } from "cc";
const { ccclass, property } = _decorator;

enum EventName {
    GREETING = 'greeting',
    GOODBYE = 'goodbye',
    FINISH_EDWALK = 'finished-walk',
    START_BREAKING = 'start-breaking',//什么时候开始刹车
    END_BREAKING = 'end-breaking',//什么时候结束
    SHOW_COIN = 'show-coin',//显示金币
    GMAE_START = 'game-start',
    GMAE_OVER = 'game-over',
}

enum CustomerState {
    NONE,
    GREETING,
    GOODBYE,
}

enum AudioSource {
    BACKGROUND = 'background',
    CLICK = 'click',
    CRASH = 'crash',
    GETMONEY = 'getMoney',
    INCAR = 'incar',
    NEWORDER = 'newOrder',
    START = 'start',
    STOP = 'stop',
    TOOTING1 = 'tooting1',
    TOOTING2 = 'tooting2',
    WIN = 'win',
}

//采用二进制方式
enum  CarGroup {
    NORMAL = 1 << 0,
    MAIN_CAR = 1 << 1,
    OTHER_CAR = 1 << 2
}

@ccclass("Constants")
export class Constants {
    public static EventName = EventName;
    public static CustomerState = CustomerState;
    public static AudioSource = AudioSource;
    public static CarGroup = CarGroup;
}
