import { PoolManager } from './../data/PoolManager';
import { Constants } from './../data/Constants';
import { CustomEventListener } from './../data/CustomEventListener';
import { _decorator, Component, Node, Prefab, ParticleUtils, Pool, ParticleSystemComponent, instantiate } from "cc";
const { ccclass, property } = _decorator;

@ccclass("EffectManager")
export class EffectManager extends Component {
    @property({
        type:Prefab
    })
    breakTrail: Prefab = null;

    @property({
        type: Prefab
    })
    coin: Prefab = null;

    private _followTarget: Node = null;
    private _currBreaking: Node = null;
    private _coin: ParticleSystemComponent = null; //不需要用对象池管理，直接做个缓存

    start () {
        CustomEventListener.on(Constants.EventName.START_BREAKING, this._startBreaking, this);
        CustomEventListener.on(Constants.EventName.END_BREAKING, this._endBreaking, this);
        CustomEventListener.on(Constants.EventName.SHOW_COIN, this._showCoin, this);
    }

    update () {
        if (this._currBreaking && this._followTarget) {
            this._currBreaking.setWorldPosition(this._followTarget.worldPosition);
        }
    }

    private _startBreaking (...args: any[]) {
        const follow = this._followTarget = args[0];
        this._currBreaking = PoolManager.getNode(this.breakTrail, this.node);
        this._currBreaking.setWorldPosition(follow);
        ParticleUtils.play(this._currBreaking);
    }

    private _endBreaking () {
        const currBreaking = this._currBreaking;
        if (currBreaking) {
            ParticleUtils.stop(currBreaking);
            this.scheduleOnce(()=>{
                PoolManager.setNode(currBreaking);
    
            },2) 

            this._currBreaking = null;
            this._followTarget = null;
        }
    }

    private _showCoin (...args: any[]) {
        const pos = args[0];
        if (!this._coin) {
            const coin = instantiate(this.coin) as Node;
            coin.setParent(this.node);
            this._coin = coin.getComponent(ParticleSystemComponent);
        }

        this._coin.node.setWorldPosition(pos);
        this._coin.play();
    }
}
