System.register(["cc", "code-quality:cr", "../data/PoolManager.js", "../data/Constants.js", "../data/CustomEventListener.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, PoolManager, Constants, CustomEventListener, _decorator, Component, Prefab, ParticleUtils, ParticleSystemComponent, instantiate, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, EffectManager;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'proposal-class-properties is enabled and set to use loose mode. ' + 'To use proposal-class-properties in spec mode with decorators, wait for ' + 'the next major version of decorators in stage 2.'); }

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./../data/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "./../data/CustomEventListener", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      ParticleUtils = _cc.ParticleUtils;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
      instantiate = _cc.instantiate;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataPoolManagerJs) {
      PoolManager = _dataPoolManagerJs.PoolManager;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_dataCustomEventListenerJs) {
      CustomEventListener = _dataCustomEventListenerJs.CustomEventListener;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "3dd84B6PtRAvJLr6zJhm3aw", "EffectManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("EffectManager", EffectManager = (_dec = ccclass("EffectManager"), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Prefab
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(EffectManager, _Component);

        function EffectManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, EffectManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(EffectManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "breakTrail", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "coin", _descriptor2, _assertThisInitialized(_this));

          _this._followTarget = null;
          _this._currBreaking = null;
          _this._coin = null;
          return _this;
        }

        _createClass(EffectManager, [{
          key: "start",
          //不需要用对象池管理，直接做个缓存
          value: function start() {
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).EventName.START_BREAKING, this._startBreaking, this);
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).EventName.END_BREAKING, this._endBreaking, this);
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).EventName.SHOW_COIN, this._showCoin, this);
          }
        }, {
          key: "update",
          value: function update() {
            if (this._currBreaking && this._followTarget) {
              this._currBreaking.setWorldPosition(this._followTarget.worldPosition);
            }
          }
        }, {
          key: "_startBreaking",
          value: function _startBreaking() {
            var follow = this._followTarget = arguments.length <= 0 ? undefined : arguments[0];
            this._currBreaking = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
              error: Error()
            }), PoolManager) : PoolManager).getNode(this.breakTrail, this.node);

            this._currBreaking.setWorldPosition(follow);

            ParticleUtils.play(this._currBreaking);
          }
        }, {
          key: "_endBreaking",
          value: function _endBreaking() {
            var currBreaking = this._currBreaking;

            if (currBreaking) {
              ParticleUtils.stop(currBreaking);
              this.scheduleOnce(function () {
                (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                  error: Error()
                }), PoolManager) : PoolManager).setNode(currBreaking);
              }, 2);
              this._currBreaking = null;
              this._followTarget = null;
            }
          }
        }, {
          key: "_showCoin",
          value: function _showCoin() {
            var pos = arguments.length <= 0 ? undefined : arguments[0];

            if (!this._coin) {
              var coin = instantiate(this.coin);
              coin.setParent(this.node);
              this._coin = coin.getComponent(ParticleSystemComponent);
            }

            this._coin.node.setWorldPosition(pos);

            this._coin.play();
          }
        }]);

        return EffectManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "breakTrail", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "coin", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvRWZmZWN0TWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiUHJlZmFiIiwiUGFydGljbGVVdGlscyIsIlBhcnRpY2xlU3lzdGVtQ29tcG9uZW50IiwiaW5zdGFudGlhdGUiLCJQb29sTWFuYWdlciIsIkNvbnN0YW50cyIsIkN1c3RvbUV2ZW50TGlzdGVuZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFZmZlY3RNYW5hZ2VyIiwidHlwZSIsIl9mb2xsb3dUYXJnZXQiLCJfY3VyckJyZWFraW5nIiwiX2NvaW4iLCJvbiIsIkV2ZW50TmFtZSIsIlNUQVJUX0JSRUFLSU5HIiwiX3N0YXJ0QnJlYWtpbmciLCJFTkRfQlJFQUtJTkciLCJfZW5kQnJlYWtpbmciLCJTSE9XX0NPSU4iLCJfc2hvd0NvaW4iLCJzZXRXb3JsZFBvc2l0aW9uIiwid29ybGRQb3NpdGlvbiIsImZvbGxvdyIsImdldE5vZGUiLCJicmVha1RyYWlsIiwibm9kZSIsInBsYXkiLCJjdXJyQnJlYWtpbmciLCJzdG9wIiwic2NoZWR1bGVPbmNlIiwic2V0Tm9kZSIsInBvcyIsImNvaW4iLCJzZXRQYXJlbnQiLCJnZXRDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsTSxPQUFBQSxNO0FBQVFDLE1BQUFBLGEsT0FBQUEsYTtBQUFxQkMsTUFBQUEsdUIsT0FBQUEsdUI7QUFBeUJDLE1BQUFBLFcsT0FBQUEsVzs7OztBQUhuRkMsTUFBQUEsVyxzQkFBQUEsVzs7QUFDQUMsTUFBQUEsUyxvQkFBQUEsUzs7QUFDQUMsTUFBQUEsbUIsOEJBQUFBLG1COzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQlQsVSxDQUF0QlMsTztBQUFTQyxNQUFBQSxRLEdBQWFWLFUsQ0FBYlUsUTs7K0JBR0pDLGEsV0FEWkYsT0FBTyxDQUFDLGVBQUQsQyxVQUVIQyxRQUFRLENBQUM7QUFDTkUsUUFBQUEsSUFBSSxFQUFDVjtBQURDLE9BQUQsQyxVQUtSUSxRQUFRLENBQUM7QUFDTkUsUUFBQUEsSUFBSSxFQUFFVjtBQURBLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFLRFcsYSxHQUFzQixJO2dCQUN0QkMsYSxHQUFzQixJO2dCQUN0QkMsSyxHQUFpQyxJOzs7Ozs7QUFBTTtrQ0FFdEM7QUFDTDtBQUFBO0FBQUEsNERBQW9CQyxFQUFwQixDQUF1QjtBQUFBO0FBQUEsd0NBQVVDLFNBQVYsQ0FBb0JDLGNBQTNDLEVBQTJELEtBQUtDLGNBQWhFLEVBQWdGLElBQWhGO0FBQ0E7QUFBQTtBQUFBLDREQUFvQkgsRUFBcEIsQ0FBdUI7QUFBQTtBQUFBLHdDQUFVQyxTQUFWLENBQW9CRyxZQUEzQyxFQUF5RCxLQUFLQyxZQUE5RCxFQUE0RSxJQUE1RTtBQUNBO0FBQUE7QUFBQSw0REFBb0JMLEVBQXBCLENBQXVCO0FBQUE7QUFBQSx3Q0FBVUMsU0FBVixDQUFvQkssU0FBM0MsRUFBc0QsS0FBS0MsU0FBM0QsRUFBc0UsSUFBdEU7QUFDSDs7O21DQUVTO0FBQ04sZ0JBQUksS0FBS1QsYUFBTCxJQUFzQixLQUFLRCxhQUEvQixFQUE4QztBQUMxQyxtQkFBS0MsYUFBTCxDQUFtQlUsZ0JBQW5CLENBQW9DLEtBQUtYLGFBQUwsQ0FBbUJZLGFBQXZEO0FBQ0g7QUFDSjs7OzJDQUV1QztBQUNwQyxnQkFBTUMsTUFBTSxHQUFHLEtBQUtiLGFBQUwsbURBQWY7QUFDQSxpQkFBS0MsYUFBTCxHQUFxQjtBQUFBO0FBQUEsNENBQVlhLE9BQVosQ0FBb0IsS0FBS0MsVUFBekIsRUFBcUMsS0FBS0MsSUFBMUMsQ0FBckI7O0FBQ0EsaUJBQUtmLGFBQUwsQ0FBbUJVLGdCQUFuQixDQUFvQ0UsTUFBcEM7O0FBQ0F2QixZQUFBQSxhQUFhLENBQUMyQixJQUFkLENBQW1CLEtBQUtoQixhQUF4QjtBQUNIOzs7eUNBRXVCO0FBQ3BCLGdCQUFNaUIsWUFBWSxHQUFHLEtBQUtqQixhQUExQjs7QUFDQSxnQkFBSWlCLFlBQUosRUFBa0I7QUFDZDVCLGNBQUFBLGFBQWEsQ0FBQzZCLElBQWQsQ0FBbUJELFlBQW5CO0FBQ0EsbUJBQUtFLFlBQUwsQ0FBa0IsWUFBSTtBQUNsQjtBQUFBO0FBQUEsZ0RBQVlDLE9BQVosQ0FBb0JILFlBQXBCO0FBRUgsZUFIRCxFQUdFLENBSEY7QUFLQSxtQkFBS2pCLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxtQkFBS0QsYUFBTCxHQUFxQixJQUFyQjtBQUNIO0FBQ0o7OztzQ0FFa0M7QUFDL0IsZ0JBQU1zQixHQUFHLG1EQUFUOztBQUNBLGdCQUFJLENBQUMsS0FBS3BCLEtBQVYsRUFBaUI7QUFDYixrQkFBTXFCLElBQUksR0FBRy9CLFdBQVcsQ0FBQyxLQUFLK0IsSUFBTixDQUF4QjtBQUNBQSxjQUFBQSxJQUFJLENBQUNDLFNBQUwsQ0FBZSxLQUFLUixJQUFwQjtBQUNBLG1CQUFLZCxLQUFMLEdBQWFxQixJQUFJLENBQUNFLFlBQUwsQ0FBa0JsQyx1QkFBbEIsQ0FBYjtBQUNIOztBQUVELGlCQUFLVyxLQUFMLENBQVdjLElBQVgsQ0FBZ0JMLGdCQUFoQixDQUFpQ1csR0FBakM7O0FBQ0EsaUJBQUtwQixLQUFMLENBQVdlLElBQVg7QUFDSDs7OztRQTFEOEI3QixTOzs7OztpQkFJVixJOzs7Ozs7O2lCQUtOLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQb29sTWFuYWdlciB9IGZyb20gJy4vLi4vZGF0YS9Qb29sTWFuYWdlcic7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vLi4vZGF0YS9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBDdXN0b21FdmVudExpc3RlbmVyIH0gZnJvbSAnLi8uLi9kYXRhL0N1c3RvbUV2ZW50TGlzdGVuZXInO1xyXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFByZWZhYiwgUGFydGljbGVVdGlscywgUG9vbCwgUGFydGljbGVTeXN0ZW1Db21wb25lbnQsIGluc3RhbnRpYXRlIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkVmZmVjdE1hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIEVmZmVjdE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOlByZWZhYlxyXG4gICAgfSlcclxuICAgIGJyZWFrVHJhaWw6IFByZWZhYiA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBQcmVmYWJcclxuICAgIH0pXHJcbiAgICBjb2luOiBQcmVmYWIgPSBudWxsO1xyXG5cclxuICAgIHByaXZhdGUgX2ZvbGxvd1RhcmdldDogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9jdXJyQnJlYWtpbmc6IE5vZGUgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfY29pbjogUGFydGljbGVTeXN0ZW1Db21wb25lbnQgPSBudWxsOyAvL+S4jemcgOimgeeUqOWvueixoeaxoOeuoeeQhu+8jOebtOaOpeWBmuS4que8k+WtmFxyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLm9uKENvbnN0YW50cy5FdmVudE5hbWUuU1RBUlRfQlJFQUtJTkcsIHRoaXMuX3N0YXJ0QnJlYWtpbmcsIHRoaXMpO1xyXG4gICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIub24oQ29uc3RhbnRzLkV2ZW50TmFtZS5FTkRfQlJFQUtJTkcsIHRoaXMuX2VuZEJyZWFraW5nLCB0aGlzKTtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLm9uKENvbnN0YW50cy5FdmVudE5hbWUuU0hPV19DT0lOLCB0aGlzLl9zaG93Q29pbiwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlICgpIHtcclxuICAgICAgICBpZiAodGhpcy5fY3VyckJyZWFraW5nICYmIHRoaXMuX2ZvbGxvd1RhcmdldCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyQnJlYWtpbmcuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9mb2xsb3dUYXJnZXQud29ybGRQb3NpdGlvbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3N0YXJ0QnJlYWtpbmcgKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3QgZm9sbG93ID0gdGhpcy5fZm9sbG93VGFyZ2V0ID0gYXJnc1swXTtcclxuICAgICAgICB0aGlzLl9jdXJyQnJlYWtpbmcgPSBQb29sTWFuYWdlci5nZXROb2RlKHRoaXMuYnJlYWtUcmFpbCwgdGhpcy5ub2RlKTtcclxuICAgICAgICB0aGlzLl9jdXJyQnJlYWtpbmcuc2V0V29ybGRQb3NpdGlvbihmb2xsb3cpO1xyXG4gICAgICAgIFBhcnRpY2xlVXRpbHMucGxheSh0aGlzLl9jdXJyQnJlYWtpbmcpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX2VuZEJyZWFraW5nICgpIHtcclxuICAgICAgICBjb25zdCBjdXJyQnJlYWtpbmcgPSB0aGlzLl9jdXJyQnJlYWtpbmc7XHJcbiAgICAgICAgaWYgKGN1cnJCcmVha2luZykge1xyXG4gICAgICAgICAgICBQYXJ0aWNsZVV0aWxzLnN0b3AoY3VyckJyZWFraW5nKTtcclxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcclxuICAgICAgICAgICAgICAgIFBvb2xNYW5hZ2VyLnNldE5vZGUoY3VyckJyZWFraW5nKTtcclxuICAgIFxyXG4gICAgICAgICAgICB9LDIpIFxyXG5cclxuICAgICAgICAgICAgdGhpcy5fY3VyckJyZWFraW5nID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5fZm9sbG93VGFyZ2V0ID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfc2hvd0NvaW4gKC4uLmFyZ3M6IGFueVtdKSB7XHJcbiAgICAgICAgY29uc3QgcG9zID0gYXJnc1swXTtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvaW4pIHtcclxuICAgICAgICAgICAgY29uc3QgY29pbiA9IGluc3RhbnRpYXRlKHRoaXMuY29pbikgYXMgTm9kZTtcclxuICAgICAgICAgICAgY29pbi5zZXRQYXJlbnQodGhpcy5ub2RlKTtcclxuICAgICAgICAgICAgdGhpcy5fY29pbiA9IGNvaW4uZ2V0Q29tcG9uZW50KFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuX2NvaW4ubm9kZS5zZXRXb3JsZFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgICAgdGhpcy5fY29pbi5wbGF5KCk7XHJcbiAgICB9XHJcbn1cclxuIl19