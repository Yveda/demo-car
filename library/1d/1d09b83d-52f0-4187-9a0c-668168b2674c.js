System.register(["cc", "code-quality:cr", "./AudioManager.js", "../data/Constants.js", "../data/CustomEventListener.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, AudioManager, Constants, _decorator, Component, Node, Vec3, AnimationComponent, CustomEventListener, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, _tempVec, EventName, customerManager;

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

  function _reportPossibleCrUseOfAudioManager(extras) {
    _reporterNs.report("AudioManager", "./AudioManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "../data/CustomEventListener", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
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
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      AnimationComponent = _cc.AnimationComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_AudioManagerJs) {
      AudioManager = _AudioManagerJs.AudioManager;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_dataCustomEventListenerJs) {
      CustomEventListener = _dataCustomEventListenerJs.CustomEventListener;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "1d09bg9UvBBh5oMZoFosmdM", "customerManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;
      _tempVec = new Vec3();
      EventName = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
        error: Error()
      }), Constants) : Constants).EventName;

      _export("customerManager", customerManager = (_dec = ccclass("customerManager"), _dec2 = property({
        type: [Node]
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(customerManager, _Component);

        function customerManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, customerManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(customerManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "customer", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "walkTime", _descriptor2, _assertThisInitialized(_this));

          _this._currCustomer = null;
          _this._startPos = new Vec3();
          _this._endPos = new Vec3();
          _this._inTheOrder = false;
          _this._deltaTime = 0;
          _this._state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
            error: Error()
          }), Constants) : Constants).CustomerState.NONE;
          return _this;
        }

        _createClass(customerManager, [{
          key: "start",
          //乘客状态
          value: function start() {
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on(EventName.GREETING, this._greetingCustomer, this);
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on(EventName.GOODBYE, this._takingCustomer, this);
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (this._inTheOrder) {
              this._deltaTime += dt;

              if (this._deltaTime > this.walkTime) {
                this._deltaTime = 0;
                this._inTheOrder = false;
                this._currCustomer.active = false;

                if (this._state === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).CustomerState.GOODBYE) {
                  this._currCustomer = null;
                }

                (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                  error: Error()
                }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.FINISH_EDWALK);

                if (this._state === (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                  error: Error()
                }), Constants) : Constants).CustomerState.GREETING) {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).AudioSource.INCAR);
                }
              } else {
                //插值法的目的主要目的是限制位置的范围
                Vec3.lerp(_tempVec, this._startPos, this._endPos, this._deltaTime / this.walkTime);

                this._currCustomer.setWorldPosition(_tempVec);
              }
            }
          }
        }, {
          key: "_greetingCustomer",
          value: function _greetingCustomer() {
            this._currCustomer = this.customer[Math.floor(Math.random() * this.customer.length)];
            this._state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CustomerState.GREETING;
            this._inTheOrder = true;

            if (!this._currCustomer) {
              return;
            }

            var carPos = arguments.length <= 0 ? undefined : arguments[0];
            var direction = arguments.length <= 1 ? undefined : arguments[1]; //顾客开始位置

            Vec3.multiplyScalar(this._startPos, direction, 1.4);

            this._startPos.add(carPos); //顾客结束位置


            Vec3.multiplyScalar(this._endPos, direction, 0.5);

            this._endPos.add(carPos);

            this._currCustomer.setWorldPosition(this._startPos);

            this._currCustomer.active = true; //顾客朝向

            if (direction.x !== 0) {
              if (direction.x > 0) {
                //逆时针转90度
                this._currCustomer.eulerAngles = new Vec3(0, -90, 0);
              } else {
                //顺时针
                this._currCustomer.eulerAngles = new Vec3(0, 90, 0);
              }
            } else {
              if (direction.z > 0) {
                this._currCustomer.eulerAngles = new Vec3(0, 180, 0);
              } else {
                this._currCustomer.eulerAngles = new Vec3();
              }
            }

            var animComp = this._currCustomer.getComponent(AnimationComponent);

            animComp.play('walk');
          }
        }, {
          key: "_takingCustomer",
          value: function _takingCustomer() {
            this._state = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CustomerState.GOODBYE;
            this._inTheOrder = true;
            var carPos = arguments.length <= 0 ? undefined : arguments[0];
            var direction = arguments.length <= 1 ? undefined : arguments[1]; //顾客开始位置

            Vec3.multiplyScalar(this._startPos, direction, 0.5);

            this._startPos.add(carPos); //顾客结束位置


            Vec3.multiplyScalar(this._endPos, direction, 1.4);

            this._endPos.add(carPos);

            this._currCustomer.setWorldPosition(this._startPos);

            this._currCustomer.active = true; //顾客朝向

            if (direction.x !== 0) {
              if (direction.x > 0) {
                //逆时针转90度
                this._currCustomer.eulerAngles = new Vec3(0, 90, 0);
              } else {
                //顺时针
                this._currCustomer.eulerAngles = new Vec3(0, -90, 0);
              }
            } else {
              if (direction.z > 0) {
                this._currCustomer.eulerAngles = new Vec3();
              } else {
                this._currCustomer.eulerAngles = new Vec3(0, 180, 0);
              }
            }

            var animComp = this._currCustomer.getComponent(AnimationComponent);

            animComp.play('walk');
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).AudioSource.GETMONEY);
          } // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return customerManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "customer", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "walkTime", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 2;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvY3VzdG9tZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsIkFuaW1hdGlvbkNvbXBvbmVudCIsIkF1ZGlvTWFuYWdlciIsIkNvbnN0YW50cyIsIkN1c3RvbUV2ZW50TGlzdGVuZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJfdGVtcFZlYyIsIkV2ZW50TmFtZSIsImN1c3RvbWVyTWFuYWdlciIsInR5cGUiLCJfY3VyckN1c3RvbWVyIiwiX3N0YXJ0UG9zIiwiX2VuZFBvcyIsIl9pblRoZU9yZGVyIiwiX2RlbHRhVGltZSIsIl9zdGF0ZSIsIkN1c3RvbWVyU3RhdGUiLCJOT05FIiwib24iLCJHUkVFVElORyIsIl9ncmVldGluZ0N1c3RvbWVyIiwiR09PREJZRSIsIl90YWtpbmdDdXN0b21lciIsImR0Iiwid2Fsa1RpbWUiLCJhY3RpdmUiLCJkaXNwYXRjaEV2ZW50IiwiRklOSVNIX0VEV0FMSyIsInBsYXlTb3VuZCIsIkF1ZGlvU291cmNlIiwiSU5DQVIiLCJsZXJwIiwic2V0V29ybGRQb3NpdGlvbiIsImN1c3RvbWVyIiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiY2FyUG9zIiwiZGlyZWN0aW9uIiwibXVsdGlwbHlTY2FsYXIiLCJhZGQiLCJ4IiwiZXVsZXJBbmdsZXMiLCJ6IiwiYW5pbUNvbXAiLCJnZXRDb21wb25lbnQiLCJwbGF5IiwiR0VUTU9ORVkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsa0IsT0FBQUEsa0I7Ozs7QUFGbkND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QjtBQUNqQixxQkFBS2xDLGFBQUwsQ0FBbUJpQyxXQUFuQixHQUFpQyxJQUFJNUMsSUFBSixFQUFqQztBQUNILGVBRkQsTUFFTztBQUNILHFCQUFLVyxhQUFMLENBQW1CaUMsV0FBbkIsR0FBaUMsSUFBSTVDLElBQUosQ0FBUyxDQUFULEVBQVksR0FBWixFQUFpQixDQUFqQixDQUFqQztBQUNIO0FBQ0o7O0FBRUQsZ0JBQU04QyxRQUFRLEdBQUcsS0FBS25DLGFBQUwsQ0FBbUJvQyxZQUFuQixDQUFnQzlDLGtCQUFoQyxDQUFqQjs7QUFDQTZDLFlBQUFBLFFBQVEsQ0FBQ0UsSUFBVCxDQUFjLE1BQWQ7QUFDQTtBQUFBO0FBQUEsOENBQWFuQixTQUFiLENBQXVCO0FBQUE7QUFBQSx3Q0FBVUMsV0FBVixDQUFzQm1CLFFBQTdDO0FBRUgsVyxDQUVEO0FBQ0E7QUFDQTs7Ozs7UUFuSWlDbkQsUzs7Ozs7aUJBV2QsRTs7bUZBRWxCUSxROzs7OztpQkFDVSxDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSAnLi9BdWRpb01hbmFnZXInO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLy4uL2RhdGEvQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzLCBBbmltYXRpb25Db21wb25lbnQgfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgQ3VzdG9tRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuLi9kYXRhL0N1c3RvbUV2ZW50TGlzdGVuZXJcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmNvbnN0IF90ZW1wVmVjID0gbmV3IFZlYzMoKTtcclxuY29uc3QgRXZlbnROYW1lID0gQ29uc3RhbnRzLkV2ZW50TmFtZTtcclxuXHJcbkBjY2NsYXNzKFwiY3VzdG9tZXJNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBjdXN0b21lck1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogW05vZGVdXHJcbiAgICB9KVxyXG4gICAgY3VzdG9tZXI6IE5vZGVbXSA9IFtdO1xyXG5cclxuICAgIEBwcm9wZXJ0eVxyXG4gICAgd2Fsa1RpbWUgPSAyO1xyXG5cclxuICAgIHByaXZhdGUgX2N1cnJDdXN0b21lcjogTm9kZSA9IG51bGw7XHJcbiAgICBwcml2YXRlIF9zdGFydFBvcyA9IG5ldyBWZWMzKCk7XHJcbiAgICBwcml2YXRlIF9lbmRQb3MgPSBuZXcgVmVjMygpO1xyXG4gICAgcHJpdmF0ZSBfaW5UaGVPcmRlciA9IGZhbHNlOy8v5piv5ZCm5aSE5LqO6K6i5Y2V5Lit77yM5aaC5p6c5piv5omN6IO95omn6KGM6L+Q5Yqo6YC76L6RXHJcbiAgICBwcml2YXRlIF9kZWx0YVRpbWUgPSAwO1xyXG4gICAgcHJpdmF0ZSBfc3RhdGUgPSBDb25zdGFudHMuQ3VzdG9tZXJTdGF0ZS5OT05FOy8v5LmY5a6i54q25oCBXHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIub24oRXZlbnROYW1lLkdSRUVUSU5HLCB0aGlzLl9ncmVldGluZ0N1c3RvbWVyLCB0aGlzKTtcclxuICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLm9uKEV2ZW50TmFtZS5HT09EQllFLCB0aGlzLl90YWtpbmdDdXN0b21lciwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlIChkdDogbnVtYmVyKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2luVGhlT3JkZXIpIHtcclxuICAgICAgICAgICAgdGhpcy5fZGVsdGFUaW1lICs9IGR0O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fZGVsdGFUaW1lID4gdGhpcy53YWxrVGltZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVsdGFUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2luVGhlT3JkZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5hY3RpdmUgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGF0ZSA9PT0gQ29uc3RhbnRzLkN1c3RvbWVyU3RhdGUuR09PREJZRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lciA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkZJTklTSF9FRFdBTEspO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBDb25zdGFudHMuQ3VzdG9tZXJTdGF0ZS5HUkVFVElORykge1xyXG4gICAgICAgICAgICAgICAgICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLkF1ZGlvU291cmNlLklOQ0FSKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5o+S5YC85rOV55qE55uu55qE5Li76KaB55uu55qE5piv6ZmQ5Yi25L2N572u55qE6IyD5Zu0XHJcbiAgICAgICAgICAgICAgICBWZWMzLmxlcnAoX3RlbXBWZWMsIHRoaXMuX3N0YXJ0UG9zLCB0aGlzLl9lbmRQb3MsIHRoaXMuX2RlbHRhVGltZSAvIHRoaXMud2Fsa1RpbWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLnNldFdvcmxkUG9zaXRpb24oX3RlbXBWZWMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIF9ncmVldGluZ0N1c3RvbWVyICguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJDdXN0b21lciA9IHRoaXMuY3VzdG9tZXJbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5jdXN0b21lci5sZW5ndGgpXTtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IENvbnN0YW50cy5DdXN0b21lclN0YXRlLkdSRUVUSU5HO1xyXG4gICAgICAgIHRoaXMuX2luVGhlT3JkZXIgPSB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoIXRoaXMuX2N1cnJDdXN0b21lcikge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBjYXJQb3MgPSBhcmdzWzBdO1xyXG4gICAgICAgIGNvbnN0IGRpcmVjdGlvbiA9IGFyZ3NbMV07XHJcblxyXG4gICAgICAgIC8v6aG+5a6i5byA5aeL5L2N572uXHJcbiAgICAgICAgVmVjMy5tdWx0aXBseVNjYWxhcih0aGlzLl9zdGFydFBvcywgZGlyZWN0aW9uLCAxLjQpO1xyXG4gICAgICAgIHRoaXMuX3N0YXJ0UG9zLmFkZChjYXJQb3MpO1xyXG4gICAgICAgIC8v6aG+5a6i57uT5p2f5L2N572uXHJcbiAgICAgICAgVmVjMy5tdWx0aXBseVNjYWxhcih0aGlzLl9lbmRQb3MsIGRpcmVjdGlvbiwgMC41KTtcclxuICAgICAgICB0aGlzLl9lbmRQb3MuYWRkKGNhclBvcyk7XHJcblxyXG4gICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5zZXRXb3JsZFBvc2l0aW9uKHRoaXMuX3N0YXJ0UG9zKTtcclxuICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuYWN0aXZlID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgLy/pob7lrqLmnJ3lkJFcclxuICAgICAgICBpZiAoZGlyZWN0aW9uLnggIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi54ID4gMCkgey8v6YCG5pe26ZKI6L2sOTDluqZcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIC05MCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7Ly/pobrml7bpkohcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIDkwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24ueiA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIDE4MCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBhbmltQ29tcCA9IHRoaXMuX2N1cnJDdXN0b21lci5nZXRDb21wb25lbnQoQW5pbWF0aW9uQ29tcG9uZW50KTtcclxuICAgICAgICBhbmltQ29tcC5wbGF5KCd3YWxrJyk7XHJcbiAgICB9XHJcblxyXG4gICAgX3Rha2luZ0N1c3RvbWVyICguLi5hcmdzOiBhbnlbXSkge1xyXG4gICAgICAgIHRoaXMuX3N0YXRlID0gQ29uc3RhbnRzLkN1c3RvbWVyU3RhdGUuR09PREJZRTtcclxuICAgICAgICB0aGlzLl9pblRoZU9yZGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FyUG9zID0gYXJnc1swXTtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBhcmdzWzFdO1xyXG5cclxuICAgICAgICAvL+mhvuWuouW8gOWni+S9jee9rlxyXG4gICAgICAgIFZlYzMubXVsdGlwbHlTY2FsYXIodGhpcy5fc3RhcnRQb3MsIGRpcmVjdGlvbiwgMC41KTtcclxuICAgICAgICB0aGlzLl9zdGFydFBvcy5hZGQoY2FyUG9zKTtcclxuICAgICAgICAvL+mhvuWuoue7k+adn+S9jee9rlxyXG4gICAgICAgIFZlYzMubXVsdGlwbHlTY2FsYXIodGhpcy5fZW5kUG9zLCBkaXJlY3Rpb24sIDEuNCk7XHJcbiAgICAgICAgdGhpcy5fZW5kUG9zLmFkZChjYXJQb3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9zdGFydFBvcyk7XHJcbiAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8v6aG+5a6i5pyd5ZCRXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbi54ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24ueCA+IDApIHsvL+mAhuaXtumSiOi9rDkw5bqmXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCA5MCwgMCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7Ly/pobrml7bpkohcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIC05MCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLnogPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgMTgwLCAwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYW5pbUNvbXAgPSB0aGlzLl9jdXJyQ3VzdG9tZXIuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgYW5pbUNvbXAucGxheSgnd2FsaycpO1xyXG4gICAgICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLkF1ZGlvU291cmNlLkdFVE1PTkVZKTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=