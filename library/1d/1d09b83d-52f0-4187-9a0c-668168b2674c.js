System.register(["cc", "code-quality:cr", "../data/Constants.js", "../data/CustomEventListener.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Constants, _decorator, Component, Node, Vec3, AnimationComponent, CustomEventListener, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, _tempVec, EventName, customerManager;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvY3VzdG9tZXJNYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsIkFuaW1hdGlvbkNvbXBvbmVudCIsIkNvbnN0YW50cyIsIkN1c3RvbUV2ZW50TGlzdGVuZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJfdGVtcFZlYyIsIkV2ZW50TmFtZSIsImN1c3RvbWVyTWFuYWdlciIsInR5cGUiLCJfY3VyckN1c3RvbWVyIiwiX3N0YXJ0UG9zIiwiX2VuZFBvcyIsIl9pblRoZU9yZGVyIiwiX2RlbHRhVGltZSIsIl9zdGF0ZSIsIkN1c3RvbWVyU3RhdGUiLCJOT05FIiwib24iLCJHUkVFVElORyIsIl9ncmVldGluZ0N1c3RvbWVyIiwiR09PREJZRSIsIl90YWtpbmdDdXN0b21lciIsImR0Iiwid2Fsa1RpbWUiLCJhY3RpdmUiLCJkaXNwYXRjaEV2ZW50IiwiRklOSVNIX0VEV0FMSyIsImxlcnAiLCJzZXRXb3JsZFBvc2l0aW9uIiwiY3VzdG9tZXIiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJjYXJQb3MiLCJkaXJlY3Rpb24iLCJtdWx0aXBseVNjYWxhciIsImFkZCIsIngiLCJldWxlckFuZ2xlcyIsInoiLCJhbmltQ29tcCIsImdldENvbXBvbmVudCIsInBsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1NBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxrQixPQUFBQSxrQjs7OztBQURuQ0MsTUFBQUEsUyxvQkFBQUEsUzs7QUFFQUMsTUFBQUEsbUIsOEJBQUFBLG1COzs7Ozs7QUFDREMsTUFBQUEsTyxH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QWhDLENBQWpCOztBQUNBeUMsWUFBQUEsUUFBUSxDQUFDRSxJQUFULENBQWMsTUFBZDtBQUNILFcsQ0FFRDtBQUNBO0FBQ0E7Ozs7O1FBOUhpQzlDLFM7Ozs7O2lCQVdkLEU7O21GQUVsQk8sUTs7Ozs7aUJBQ1UsQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vLi4vZGF0YS9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIEFuaW1hdGlvbkNvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBDdXN0b21FdmVudExpc3RlbmVyIH0gZnJvbSBcIi4uL2RhdGEvQ3VzdG9tRXZlbnRMaXN0ZW5lclwiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuY29uc3QgX3RlbXBWZWMgPSBuZXcgVmVjMygpO1xyXG5jb25zdCBFdmVudE5hbWUgPSBDb25zdGFudHMuRXZlbnROYW1lO1xyXG5cclxuQGNjY2xhc3MoXCJjdXN0b21lck1hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIGN1c3RvbWVyTWFuYWdlciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBbTm9kZV1cclxuICAgIH0pXHJcbiAgICBjdXN0b21lcjogTm9kZVtdID0gW107XHJcblxyXG4gICAgQHByb3BlcnR5XHJcbiAgICB3YWxrVGltZSA9IDI7XHJcblxyXG4gICAgcHJpdmF0ZSBfY3VyckN1c3RvbWVyOiBOb2RlID0gbnVsbDtcclxuICAgIHByaXZhdGUgX3N0YXJ0UG9zID0gbmV3IFZlYzMoKTtcclxuICAgIHByaXZhdGUgX2VuZFBvcyA9IG5ldyBWZWMzKCk7XHJcbiAgICBwcml2YXRlIF9pblRoZU9yZGVyID0gZmFsc2U7Ly/mmK/lkKblpITkuo7orqLljZXkuK3vvIzlpoLmnpzmmK/miY3og73miafooYzov5DliqjpgLvovpFcclxuICAgIHByaXZhdGUgX2RlbHRhVGltZSA9IDA7XHJcbiAgICBwcml2YXRlIF9zdGF0ZSA9IENvbnN0YW50cy5DdXN0b21lclN0YXRlLk5PTkU7Ly/kuZjlrqLnirbmgIFcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5vbihFdmVudE5hbWUuR1JFRVRJTkcsIHRoaXMuX2dyZWV0aW5nQ3VzdG9tZXIsIHRoaXMpO1xyXG4gICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIub24oRXZlbnROYW1lLkdPT0RCWUUsIHRoaXMuX3Rha2luZ0N1c3RvbWVyLCB0aGlzKTtcclxuICAgIH1cclxuXHJcbiAgICB1cGRhdGUgKGR0OiBudW1iZXIpIHtcclxuICAgICAgICBpZiAodGhpcy5faW5UaGVPcmRlcikge1xyXG4gICAgICAgICAgICB0aGlzLl9kZWx0YVRpbWUgKz0gZHQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9kZWx0YVRpbWUgPiB0aGlzLndhbGtUaW1lKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9kZWx0YVRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5faW5UaGVPcmRlciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmFjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0YXRlID09PSBDb25zdGFudHMuQ3VzdG9tZXJTdGF0ZS5HT09EQllFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIuZGlzcGF0Y2hFdmVudChFdmVudE5hbWUuRklOSVNIX0VEV0FMSyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+aPkuWAvOazleeahOebrueahOS4u+imgeebrueahOaYr+mZkOWItuS9jee9rueahOiMg+WbtFxyXG4gICAgICAgICAgICAgICAgVmVjMy5sZXJwKF90ZW1wVmVjLCB0aGlzLl9zdGFydFBvcywgdGhpcy5fZW5kUG9zLCB0aGlzLl9kZWx0YVRpbWUgLyB0aGlzLndhbGtUaW1lKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5zZXRXb3JsZFBvc2l0aW9uKF90ZW1wVmVjKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBfZ3JlZXRpbmdDdXN0b21lciAoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIgPSB0aGlzLmN1c3RvbWVyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRoaXMuY3VzdG9tZXIubGVuZ3RoKV07XHJcbiAgICAgICAgdGhpcy5fc3RhdGUgPSBDb25zdGFudHMuQ3VzdG9tZXJTdGF0ZS5HUkVFVElORztcclxuICAgICAgICB0aGlzLl9pblRoZU9yZGVyID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgaWYgKCF0aGlzLl9jdXJyQ3VzdG9tZXIpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgY2FyUG9zID0gYXJnc1swXTtcclxuICAgICAgICBjb25zdCBkaXJlY3Rpb24gPSBhcmdzWzFdO1xyXG5cclxuICAgICAgICAvL+mhvuWuouW8gOWni+S9jee9rlxyXG4gICAgICAgIFZlYzMubXVsdGlwbHlTY2FsYXIodGhpcy5fc3RhcnRQb3MsIGRpcmVjdGlvbiwgMS40KTtcclxuICAgICAgICB0aGlzLl9zdGFydFBvcy5hZGQoY2FyUG9zKTtcclxuICAgICAgICAvL+mhvuWuoue7k+adn+S9jee9rlxyXG4gICAgICAgIFZlYzMubXVsdGlwbHlTY2FsYXIodGhpcy5fZW5kUG9zLCBkaXJlY3Rpb24sIDAuNSk7XHJcbiAgICAgICAgdGhpcy5fZW5kUG9zLmFkZChjYXJQb3MpO1xyXG5cclxuICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9zdGFydFBvcyk7XHJcbiAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmFjdGl2ZSA9IHRydWU7XHJcblxyXG4gICAgICAgIC8v6aG+5a6i5pyd5ZCRXHJcbiAgICAgICAgaWYgKGRpcmVjdGlvbi54ICE9PSAwKSB7XHJcbiAgICAgICAgICAgIGlmIChkaXJlY3Rpb24ueCA+IDApIHsvL+mAhuaXtumSiOi9rDkw5bqmXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCAtOTAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Ugey8v6aG65pe26ZKIXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCA5MCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLnogPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCAxODAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgYW5pbUNvbXAgPSB0aGlzLl9jdXJyQ3VzdG9tZXIuZ2V0Q29tcG9uZW50KEFuaW1hdGlvbkNvbXBvbmVudCk7XHJcbiAgICAgICAgYW5pbUNvbXAucGxheSgnd2FsaycpO1xyXG4gICAgfVxyXG5cclxuICAgIF90YWtpbmdDdXN0b21lciAoLi4uYXJnczogYW55W10pIHtcclxuICAgICAgICB0aGlzLl9zdGF0ZSA9IENvbnN0YW50cy5DdXN0b21lclN0YXRlLkdPT0RCWUU7XHJcbiAgICAgICAgdGhpcy5faW5UaGVPcmRlciA9IHRydWU7XHJcblxyXG4gICAgICAgIGNvbnN0IGNhclBvcyA9IGFyZ3NbMF07XHJcbiAgICAgICAgY29uc3QgZGlyZWN0aW9uID0gYXJnc1sxXTtcclxuXHJcbiAgICAgICAgLy/pob7lrqLlvIDlp4vkvY3nva5cclxuICAgICAgICBWZWMzLm11bHRpcGx5U2NhbGFyKHRoaXMuX3N0YXJ0UG9zLCBkaXJlY3Rpb24sIDAuNSk7XHJcbiAgICAgICAgdGhpcy5fc3RhcnRQb3MuYWRkKGNhclBvcyk7XHJcbiAgICAgICAgLy/pob7lrqLnu5PmnZ/kvY3nva5cclxuICAgICAgICBWZWMzLm11bHRpcGx5U2NhbGFyKHRoaXMuX2VuZFBvcywgZGlyZWN0aW9uLCAxLjQpO1xyXG4gICAgICAgIHRoaXMuX2VuZFBvcy5hZGQoY2FyUG9zKTtcclxuXHJcbiAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLnNldFdvcmxkUG9zaXRpb24odGhpcy5fc3RhcnRQb3MpO1xyXG4gICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5hY3RpdmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAvL+mhvuWuouacneWQkVxyXG4gICAgICAgIGlmIChkaXJlY3Rpb24ueCAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoZGlyZWN0aW9uLnggPiAwKSB7Ly/pgIbml7bpkojovaw5MOW6plxyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgOTAsIDApO1xyXG4gICAgICAgICAgICB9IGVsc2Ugey8v6aG65pe26ZKIXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jdXJyQ3VzdG9tZXIuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCAtOTAsIDApO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgaWYgKGRpcmVjdGlvbi56ID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fY3VyckN1c3RvbWVyLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2N1cnJDdXN0b21lci5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIDE4MCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IGFuaW1Db21wID0gdGhpcy5fY3VyckN1c3RvbWVyLmdldENvbXBvbmVudChBbmltYXRpb25Db21wb25lbnQpO1xyXG4gICAgICAgIGFuaW1Db21wLnBsYXkoJ3dhbGsnKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyB1cGRhdGUgKGRlbHRhVGltZTogbnVtYmVyKSB7XHJcbiAgICAvLyAgICAgLy8gWW91ciB1cGRhdGUgZnVuY3Rpb24gZ29lcyBoZXJlLlxyXG4gICAgLy8gfVxyXG59XHJcbiJdfQ==