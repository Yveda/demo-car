import { AudioManager } from './AudioManager';
import { Constants } from './../data/Constants';
import { _decorator, Component, Node, Vec3, AnimationComponent } from "cc";
import { CustomEventListener } from "../data/CustomEventListener";
const { ccclass, property } = _decorator;

const _tempVec = new Vec3();
const EventName = Constants.EventName;

@ccclass("customerManager")
export class customerManager extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property({
        type: [Node]
    })
    customer: Node[] = [];

    @property
    walkTime = 2;

    private _currCustomer: Node = null;
    private _startPos = new Vec3();
    private _endPos = new Vec3();
    private _inTheOrder = false;//是否处于订单中，如果是才能执行运动逻辑
    private _deltaTime = 0;
    private _state = Constants.CustomerState.NONE;//乘客状态

    start () {
        CustomEventListener.on(EventName.GREETING, this._greetingCustomer, this);
        CustomEventListener.on(EventName.GOODBYE, this._takingCustomer, this);
    }

    update (dt: number) {
        if (this._inTheOrder) {
            this._deltaTime += dt;
            if (this._deltaTime > this.walkTime) {
                this._deltaTime = 0;
                this._inTheOrder = false;
                this._currCustomer.active = false;
                if (this._state === Constants.CustomerState.GOODBYE) {
                    this._currCustomer = null;
                }
                CustomEventListener.dispatchEvent(EventName.FINISH_EDWALK);
                if (this._state === Constants.CustomerState.GREETING) {
                    AudioManager.playSound(Constants.AudioSource.INCAR);
                }
            } else {
                //插值法的目的主要目的是限制位置的范围
                Vec3.lerp(_tempVec, this._startPos, this._endPos, this._deltaTime / this.walkTime);
                this._currCustomer.setWorldPosition(_tempVec);
            }
        }
    }

    _greetingCustomer (...args: any[]) {
        this._currCustomer = this.customer[Math.floor(Math.random() * this.customer.length)];
        this._state = Constants.CustomerState.GREETING;
        this._inTheOrder = true;

        if (!this._currCustomer) {
            return;
        }

        const carPos = args[0];
        const direction = args[1];

        //顾客开始位置
        Vec3.multiplyScalar(this._startPos, direction, 1.4);
        this._startPos.add(carPos);
        //顾客结束位置
        Vec3.multiplyScalar(this._endPos, direction, 0.5);
        this._endPos.add(carPos);

        this._currCustomer.setWorldPosition(this._startPos);
        this._currCustomer.active = true;

        //顾客朝向
        if (direction.x !== 0) {
            if (direction.x > 0) {//逆时针转90度
                this._currCustomer.eulerAngles = new Vec3(0, -90, 0);
            } else {//顺时针
                this._currCustomer.eulerAngles = new Vec3(0, 90, 0);
            }
        } else {
            if (direction.z > 0) {
                this._currCustomer.eulerAngles = new Vec3(0, 180, 0);
            } else {
                this._currCustomer.eulerAngles = new Vec3();
            }
        }

        const animComp = this._currCustomer.getComponent(AnimationComponent);
        animComp.play('walk');
    }

    _takingCustomer (...args: any[]) {
        this._state = Constants.CustomerState.GOODBYE;
        this._inTheOrder = true;

        const carPos = args[0];
        const direction = args[1];

        //顾客开始位置
        Vec3.multiplyScalar(this._startPos, direction, 0.5);
        this._startPos.add(carPos);
        //顾客结束位置
        Vec3.multiplyScalar(this._endPos, direction, 1.4);
        this._endPos.add(carPos);

        this._currCustomer.setWorldPosition(this._startPos);
        this._currCustomer.active = true;

        //顾客朝向
        if (direction.x !== 0) {
            if (direction.x > 0) {//逆时针转90度
                this._currCustomer.eulerAngles = new Vec3(0, 90, 0);
            } else {//顺时针
                this._currCustomer.eulerAngles = new Vec3(0, -90, 0);
            }
        } else {
            if (direction.z > 0) {
                this._currCustomer.eulerAngles = new Vec3();
            } else {
                this._currCustomer.eulerAngles = new Vec3(0, 180, 0);
            }
        }

        const animComp = this._currCustomer.getComponent(AnimationComponent);
        animComp.play('walk');
        AudioManager.playSound(Constants.AudioSource.GETMONEY);

    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
