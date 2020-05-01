import { _decorator, Component, Node, Vec3, Enum } from "cc";
const { ccclass, property } = _decorator;

enum ROAD_POINT_TYPE {
    NORMAL = 1,
    START,
    GREETING,
    GOODBYE,
    END,
    AI_START
}

//编辑器序列识别为枚举
Enum(ROAD_POINT_TYPE);

//路线类型, 没有定义开始编号的话一开始就是0
enum ROAD_MOVE_TYPE {
    LINE = 1,//直线
    CURVE,//转弯
}

Enum(ROAD_MOVE_TYPE);

@ccclass("RoadPoint")
export class RoadPoint extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property({
        type: ROAD_POINT_TYPE,
        displayOrder: 1,
    })
    type = ROAD_POINT_TYPE.NORMAL;//默认是normal

    @property({
        type: Node,
        displayOrder: 2,//编辑器排序
        visible: function(this: RoadPoint) {//显示的条件
            return this.type !== ROAD_POINT_TYPE.END
        }
    })
    nextStation: Node = null;

    @property({
        type: ROAD_MOVE_TYPE,
        displayOrder: 3,
        visible: function(this: RoadPoint) {
            return this.type !== ROAD_POINT_TYPE.END
        }
    })
    moveTyoe = ROAD_MOVE_TYPE.LINE

    @property({
        displayOrder: 4,
        visible: function(this: RoadPoint) {
            return this.type !== ROAD_POINT_TYPE.END && this.moveTyoe === ROAD_MOVE_TYPE.CURVE;
        }
    })
    clockwise = true;

    //接送客点方向, 默认右边
    @property({
        type: Vec3,
        visible: function(this: RoadPoint) {
            return this.type === ROAD_POINT_TYPE.GREETING || this.type === ROAD_POINT_TYPE.GOODBYE;
        }
    })
    direction = new Vec3(1, 0, 0);

    @property({
        visible: function(this: RoadPoint) {
            return this.type === ROAD_POINT_TYPE.AI_START;
        }
    })
    interval = 3;// AI产出间隔

    @property({
        visible: function(this: RoadPoint) {
            return this.type === ROAD_POINT_TYPE.AI_START; 
        }
    })
    delayTime = 0;

    @property({
        visible: function(this: RoadPoint) {
            return this.type === ROAD_POINT_TYPE.AI_START;
        }
    })
    speed = 0.05;

    @property({
        visible: function(this: RoadPoint) {
            return this.type === ROAD_POINT_TYPE.AI_START;
        }
    })
    cars = '201';



    start () {
        // Your initialization goes here.
    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
