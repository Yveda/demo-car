import { Constants } from './../data/Constants';
import { _decorator, Component, Node, Vec3 } from "cc";
import { CustomEventListener } from "../data/CustomEventListener";
const { ccclass, property } = _decorator;
const _tempVec = new Vec3();
const EventName = Constants.EventName;

@ccclass("coustomerManager")
export class coustomerManager extends Component {
    /* class member could be defined like this */
    // dummy = '';

    /* use `property` decorator if your want the member to be serializable */
    // @property
    // serializableDummy = 0;

    @property({
        type: [Node]
    })
    coustomer: Node[] = [];

    private _currCustomer: Node = null;
    private _startPos = new Vec3();
    private _endPos = new Vec3();

    private start () {
        CustomEventListener.on(EventName.GREETING, this._greetingCustomer, this);
        CustomEventListener.on(EventName.GOODBYE, this._takingCustomer, this);

    }

    _greetingCustomer (...args: any[]) {
        this._currCustomer = this._currCustomer[Math.floor(Math.random() * this.coustomer.length)];

        if (this._currCustomer) {
            return;
        }

        const carPos = args[0];
        const direction = args[1];
        Vec3.multiplyScalar(this._startPos, direction, 1.4);
        this._startPos.add(carPos);
        Vec3.multiplyScalar(this._endPos, direction, 0.5);
        this._endPos.add(carPos);

        this._currCustomer.setWorldPosition(this._startPos);
        this._currCustomer.active = true;

        if (direction.x !== 0) {
            if (direction.x !== 0) {
                this._currCustomer.eulerAngles = new Vec3(0, 90, 0);
            } else {
                this._currCustomer.eulerAngles = new Vec3(0, -90, 0);
            }
        } else {
            if (direction.z !== 0) {
                this._currCustomer.eulerAngles = new Vec3(0, 180, 0);
            } else {
                this._currCustomer.eulerAngles = new Vec3();
            }
        }
    }

    _takingCustomer () {

    }

    // update (deltaTime: number) {
    //     // Your update function goes here.
    // }
}
