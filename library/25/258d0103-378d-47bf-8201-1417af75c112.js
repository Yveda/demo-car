System.register(["cc", "code-quality:cr", "./AudioManager.js", "../data/CustomEventListener.js", "../data/Constants.js", "./RoadPoint.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, AudioManager, CustomEventListener, Constants, RoadPoint, _decorator, Component, Vec3, ParticleSystemComponent, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, _tempVec, EventName, Car;

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

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "./../data/CustomEventListener", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "./../data/Constants", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "./RoadPoint", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Vec3 = _cc.Vec3;
      ParticleSystemComponent = _cc.ParticleSystemComponent;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_AudioManagerJs) {
      AudioManager = _AudioManagerJs.AudioManager;
    }, function (_dataCustomEventListenerJs) {
      CustomEventListener = _dataCustomEventListenerJs.CustomEventListener;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_RoadPointJs) {
      RoadPoint = _RoadPointJs.RoadPoint;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "258d0EDN41Hv4IBFBevdcES", "Car", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property; //弄个暂存变量,因为考虑到js的内存机制，所以不打算将定义写在update里面

      _tempVec = new Vec3();
      EventName = (_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
        error: Error()
      }), Constants) : Constants).EventName;

      _export("Car", Car = (_dec = ccclass("Car"), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(Car, _Component);

        function Car() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, Car);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Car)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "maxSpeed", _descriptor, _assertThisInitialized(_this));

          _this._currRoadPoint = null;
          _this._pointA = new Vec3();
          _this._pointB = new Vec3();
          _this._currSpeed = 0;
          _this._isMoving = false;
          _this._offect = new Vec3();
          _this._originRotation = 0;
          _this._targetRotation = 0;
          _this._centerPoint = new Vec3();
          _this._rotMeasure = 0;
          _this._accleration = 0.2;
          _this._isMain = false;
          _this._isInOrder = false;
          _this._isBreaking = false;
          _this._gas = null;
          _this._overCD = null;
          return _this;
        }

        _createClass(Car, [{
          key: "start",
          value: function start() {
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on(EventName.FINISH_EDWALK, this._finishedWalk, this);
          }
        }, {
          key: "update",
          value: function update(dt) {
            if (!this._isMoving || this._isInOrder) {
              return;
            }

            this._offect.set(this.node.worldPosition);

            this._currSpeed += this._accleration * dt;

            if (this._currSpeed > this.maxSpeed) {
              this._currSpeed = this.maxSpeed;
            }

            if (this._currSpeed <= 0.001) {
              this._isMoving = false;

              if (this._isBreaking) {
                this._isBreaking = true;
                (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                  error: Error()
                }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.END_BREAKING);
              }
            }

            switch (this._currRoadPoint.moveType) {
              case (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadMoveType.BEND:
                //需要旋转的角度
                var offsetRotation = this._targetRotation - this._originRotation; //当前已经旋转的角度

                var currRotation = this._conversion(this.node.eulerAngles.y); //下一站运动角度：速度是跟弧度挂钩的，所以可以相乘得到当前运动的角度


                var nextStation = currRotation - this._originRotation + this._currSpeed * this._rotMeasure * (this._targetRotation > this._originRotation ? 1 : -1);

                if (Math.abs(nextStation) > Math.abs(offsetRotation)) {
                  nextStation = offsetRotation;
                } //真正要旋转的角度


                var target = nextStation + this._originRotation;

                _tempVec.set(0, target, 0); //小车旋转


                this.node.eulerAngles = _tempVec; //运动轨迹： 通过角度求出弧度
                // const sin = Math.sin(nextStation * Math.PI / 180);
                // const cos = Math.cos(nextStation * Math.PI / 180);
                // const xLength = this._pointA.x - this._centerPoint.x;
                // const zLength = this._pointA.z - this._centerPoint.z;
                // const xPos = xLength * cos + zLength * sin + this._centerPoint.x;
                // const zPos = -xLength * sin + zLength * cos + this._centerPoint.z;
                // this._offect.set(xPos, 0, zPos);
                //等于如上代码效果：可以用引擎内部api: rotateY实现绕中心旋转

                Vec3.rotateY(this._offect, this._pointA, this._centerPoint, nextStation * Math.PI / 180);
                break;

              default:
                var z = this._pointB.z - this._pointA.z;

                if (z !== 0) {
                  if (z > 0) {
                    this._offect.z += this._currSpeed;

                    if (this._offect.z > this._pointB.z) {
                      this._offect.z = this._pointB.z;
                    }
                  } else {
                    this._offect.z -= this._currSpeed;

                    if (this._offect.z < this._pointB.z) {
                      this._offect.z = this._pointB.z;
                    }
                  }
                } else {
                  var x = this._pointB.x - this._pointA.x;

                  if (x > 0) {
                    this._offect.x += this._currSpeed;

                    if (this._offect.x > this._pointB.x) {
                      this._offect.x = this._pointB.x;
                    }
                  } else {
                    this._offect.x -= this._currSpeed;

                    if (this._offect.x < this._pointB.x) {
                      this._offect.x = this._pointB.x;
                    }
                  }
                }

                break;
            }

            this.node.setWorldPosition(this._offect);
            Vec3.subtract(_tempVec, this._pointB, this._offect);

            var len = _tempVec.length();

            if (len <= 0.01) {
              this._arrivalStation();
            }
          } //自己接收开始点

        }, {
          key: "setEntry",
          value: function setEntry(entry) {
            var isMain = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
            this.node.setWorldPosition(entry.worldPosition);
            this._currRoadPoint = entry.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint);
            this._isMain = isMain;

            if (!this._currRoadPoint) {
              console.warn('There is no RoadPoint in ' + entry.name);
              return;
            }

            this._pointA.set(entry.worldPosition);

            this._pointB.set(this._currRoadPoint.nextStation.worldPosition); //判断当前朝向


            var z = this._pointB.z - this._pointA.z;

            if (z !== 0) {
              if (z < 0) {
                //欧拉角， 如果小于0则不做改变
                this.node.eulerAngles = new Vec3();
              } else {
                this.node.eulerAngles = new Vec3(0, 180, 0);
              }
            } else {
              var x = this._pointB.x - this._pointA.x;

              if (x > 0) {
                this.node.eulerAngles = new Vec3(0, 270, 0);
              } else {
                this.node.eulerAngles = new Vec3(0, 90, 0);
              }
            }

            if (this._isMain) {
              var gasNode = this.node.getChildByName('gas');
              this._gas = gasNode.getComponent(ParticleSystemComponent);

              this._gas.play();
            }
          }
        }, {
          key: "startRunning",
          value: function startRunning() {
            if (this._currRoadPoint) {
              this._isMoving = true;
              this._currSpeed = 0;
              this._accleration = 0.2;
            }
          }
        }, {
          key: "stopRunning",
          value: function stopRunning() {
            // this._isMoving = false;
            this._accleration -= 0.3; //执行刹车

            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.START_BREAKING, this.node);
            this._isBreaking = true;
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).AudioSource.STOP);
          }
        }, {
          key: "moveAfterFinished",
          value: function moveAfterFinished(cd) {
            this._overCD = cd;
          }
        }, {
          key: "_arrivalStation",
          value: function _arrivalStation() {
            console.log('arrival....');

            this._pointA.set(this._pointB);

            this._currRoadPoint = this._currRoadPoint.nextStation.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint);

            if (this._currRoadPoint.nextStation) {
              this._pointB.set(this._currRoadPoint.nextStation.worldPosition);

              if (this._isMain) {
                if (this._isBreaking) {
                  this._isBreaking = true;
                  (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
                    error: Error()
                  }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.END_BREAKING);
                }

                if (this._currRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.GREETING) {
                  this._greetingCustomer();
                } else if (this._currRoadPoint.type == (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.GOODBYE) {
                  this._takingCustomer();
                } else if (this._currRoadPoint.type === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                  error: Error()
                }), RoadPoint) : RoadPoint).RoadPointType.END) {
                  (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
                    error: Error()
                  }), AudioManager) : AudioManager).playSound((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                    error: Error()
                  }), Constants) : Constants).AudioSource.WIN);
                }
              } //到达某个站了之后才决定说要不要旋转


              if (this._currRoadPoint.moveType === (_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint).RoadMoveType.BEND) {
                //根据顺时针逆时针四种情况求出旋转的中心位置
                if (this._currRoadPoint.clockwise) {
                  //顺时针
                  this._originRotation = this._conversion(this.node.eulerAngles.y);
                  this._targetRotation = this._originRotation - 90; //顺时针1

                  if (this._pointB.z < this._pointA.z && this._pointB.x > this._pointA.x || this._pointB.z > this._pointA.z && this._pointB.x < this._pointA.x) {
                    this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
                  } else {
                    //顺时针2
                    this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
                  }
                } else {
                  this._originRotation = this._conversion(this.node.eulerAngles.y);
                  this._targetRotation = this._originRotation + 90; //逆时针1

                  if (this._pointB.z > this._pointA.z && this._pointB.x > this._pointA.x || this._pointB.z < this._pointA.z && this._pointB.x < this._pointA.x) {
                    this._centerPoint.set(this._pointB.x, 0, this._pointA.z);
                  } else {
                    //逆时针2
                    this._centerPoint.set(this._pointA.x, 0, this._pointB.z);
                  }
                } //求旋转半径


                Vec3.subtract(_tempVec, this._pointA, this._centerPoint);

                var r = _tempVec.length();

                this._rotMeasure = 90 / (Math.PI * r / 2); //得出一度等于多少弧度
              }
            } else {
              //达到终点
              this._isMoving = false;
              this._currRoadPoint = null;

              if (this._overCD) {
                this._overCD(this);

                this._overCD = null;
              }
            }
          }
        }, {
          key: "_greetingCustomer",
          value: function _greetingCustomer() {
            this._isInOrder = true;
            this._currSpeed = 0;

            this._gas.stop();

            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GREETING, this.node.worldPosition, this._currRoadPoint.direction);
          }
        }, {
          key: "_takingCustomer",
          value: function _takingCustomer() {
            this._isInOrder = true;
            this._currSpeed = 0;

            this._gas.stop();

            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GOODBYE, this.node.worldPosition, this._currRoadPoint.direction);
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.SHOW_COIN, this.node.worldPosition);
          }
        }, {
          key: "_finishedWalk",
          value: function _finishedWalk() {
            this._isInOrder = false;
            this._gas && this._gas.play();
          } //让旋转角度变成正值

        }, {
          key: "_conversion",
          value: function _conversion(value) {
            var a = value;

            if (a <= 0) {
              a += 360;
            }

            return a;
          }
        }]);

        return Car;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "maxSpeed", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.2;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiUGFydGljbGVTeXN0ZW1Db21wb25lbnQiLCJBdWRpb01hbmFnZXIiLCJDdXN0b21FdmVudExpc3RlbmVyIiwiQ29uc3RhbnRzIiwiUm9hZFBvaW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiX3RlbXBWZWMiLCJFdmVudE5hbWUiLCJDYXIiLCJfY3VyclJvYWRQb2ludCIsIl9wb2ludEEiLCJfcG9pbnRCIiwiX2N1cnJTcGVlZCIsIl9pc01vdmluZyIsIl9vZmZlY3QiLCJfb3JpZ2luUm90YXRpb24iLCJfdGFyZ2V0Um90YXRpb24iLCJfY2VudGVyUG9pbnQiLCJfcm90TWVhc3VyZSIsIl9hY2NsZXJhdGlvbiIsIl9pc01haW4iLCJfaXNJbk9yZGVyIiwiX2lzQnJlYWtpbmciLCJfZ2FzIiwiX292ZXJDRCIsIm9uIiwiRklOSVNIX0VEV0FMSyIsIl9maW5pc2hlZFdhbGsiLCJkdCIsInNldCIsIm5vZGUiLCJ3b3JsZFBvc2l0aW9uIiwibWF4U3BlZWQiLCJkaXNwYXRjaEV2ZW50IiwiRU5EX0JSRUFLSU5HIiwibW92ZVR5cGUiLCJSb2FkTW92ZVR5cGUiLCJCRU5EIiwib2Zmc2V0Um90YXRpb24iLCJjdXJyUm90YXRpb24iLCJfY29udmVyc2lvbiIsImV1bGVyQW5nbGVzIiwieSIsIm5leHRTdGF0aW9uIiwiTWF0aCIsImFicyIsInRhcmdldCIsInJvdGF0ZVkiLCJQSSIsInoiLCJ4Iiwic2V0V29ybGRQb3NpdGlvbiIsInN1YnRyYWN0IiwibGVuIiwibGVuZ3RoIiwiX2Fycml2YWxTdGF0aW9uIiwiZW50cnkiLCJpc01haW4iLCJnZXRDb21wb25lbnQiLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJnYXNOb2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJwbGF5IiwiU1RBUlRfQlJFQUtJTkciLCJwbGF5U291bmQiLCJBdWRpb1NvdXJjZSIsIlNUT1AiLCJjZCIsImxvZyIsInR5cGUiLCJSb2FkUG9pbnRUeXBlIiwiR1JFRVRJTkciLCJfZ3JlZXRpbmdDdXN0b21lciIsIkdPT0RCWUUiLCJfdGFraW5nQ3VzdG9tZXIiLCJFTkQiLCJXSU4iLCJjbG9ja3dpc2UiLCJyIiwic3RvcCIsImRpcmVjdGlvbiIsIlNIT1dfQ09JTiIsInZhbHVlIiwiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSx1QixPQUFBQSx1Qjs7OztBQUpoREMsTUFBQUEsWSxtQkFBQUEsWTs7QUFDQUMsTUFBQUEsbUIsOEJBQUFBLG1COztBQUNBQyxNQUFBQSxTLG9CQUFBQSxTOztBQUNBQyxNQUFBQSxTLGdCQUFBQSxTOzs7Ozs7QUFHREMsTUFBQUEsTyxHQUFzQlIsVSxDQUF0QlEsTztBQUFTQyxNQUFBQSxRLEdBQWFULFUsQ0FBYlMsUSxFQUVqQjs7QUFDTUMsTUFBQUEsUSxHQUFXLElBQUlSLElBQUosRTtBQUNYUyxNQUFBQSxTLEdBQVk7QUFBQTtBQUFBLGtDQUFVQSxTOztxQkFHZkMsRyxXQURaSixPQUFPLENBQUMsS0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztnQkFNRUssYyxHQUE0QixJO2dCQUM1QkMsTyxHQUFVLElBQUlaLElBQUosRTtnQkFDVmEsTyxHQUFVLElBQUliLElBQUosRTtnQkFDVmMsVSxHQUFhLEM7Z0JBQ2JDLFMsR0FBWSxLO2dCQUNaQyxPLEdBQVUsSUFBSWhCLElBQUosRTtnQkFDVmlCLGUsR0FBa0IsQztnQkFDbEJDLGUsR0FBa0IsQztnQkFDbEJDLFksR0FBZSxJQUFJbkIsSUFBSixFO2dCQUNmb0IsVyxHQUFjLEM7Z0JBQ2RDLFksR0FBZSxHO2dCQUNmQyxPLEdB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bmFnZXIgfSBmcm9tICcuL0F1ZGlvTWFuYWdlcic7XHJcbmltcG9ydCB7IEN1c3RvbUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLy4uL2RhdGEvQ3VzdG9tRXZlbnRMaXN0ZW5lcic7XHJcbmltcG9ydCB7IENvbnN0YW50cyB9IGZyb20gJy4vLi4vZGF0YS9Db25zdGFudHMnO1xyXG5pbXBvcnQgeyBSb2FkUG9pbnQgfSBmcm9tICcuL1JvYWRQb2ludCc7XHJcbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgdGV4dHVyZVV0aWwsIFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50IH0gZnJvbSBcImNjXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuLy/lvITkuKrmmoLlrZjlj5jph48s5Zug5Li66ICD6JmR5YiwanPnmoTlhoXlrZjmnLrliLbvvIzmiYDku6XkuI3miZPnrpflsIblrprkuYnlhpnlnKh1cGRhdGXph4zpnaJcclxuY29uc3QgX3RlbXBWZWMgPSBuZXcgVmVjMygpO1xyXG5jb25zdCBFdmVudE5hbWUgPSBDb25zdGFudHMuRXZlbnROYW1lO1xyXG5cclxuQGNjY2xhc3MoXCJDYXJcIilcclxuZXhwb3J0IGNsYXNzIENhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5XHJcbiAgbWF4U3BlZWQgPSAwLjI7XHJcblxyXG4gIC8v6K6+572u5bCP6L2m5pyd5ZCR6Zeu6aKYXHJcbiAgcHJpdmF0ZSBfY3VyclJvYWRQb2ludDogUm9hZFBvaW50ID0gbnVsbDtcclxuICBwcml2YXRlIF9wb2ludEEgPSBuZXcgVmVjMygpO1xyXG4gIHByaXZhdGUgX3BvaW50QiA9IG5ldyBWZWMzKCk7XHJcbiAgcHJpdmF0ZSBfY3VyclNwZWVkID0gMDtcclxuICBwcml2YXRlIF9pc01vdmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX29mZmVjdCA9IG5ldyBWZWMzKCk7XHJcbiAgcHJpdmF0ZSBfb3JpZ2luUm90YXRpb24gPSAwOy8v5Yid5aeL5peL6L2s54K5XHJcbiAgcHJpdmF0ZSBfdGFyZ2V0Um90YXRpb24gPSAwOy8v55uu5qCH5peL6L2s54K5XHJcbiAgcHJpdmF0ZSBfY2VudGVyUG9pbnQgPSBuZXcgVmVjMygpOy8v5peL6L2s5Lit5b+D54K5XHJcbiAgcHJpdmF0ZSBfcm90TWVhc3VyZSA9IDA7Ly/luqbph4/lgLxcclxuICBwcml2YXRlIF9hY2NsZXJhdGlvbiA9IDAuMjsvL+WKoOmAn+W6plxyXG4gIHByaXZhdGUgX2lzTWFpbiA9IGZhbHNlOy8v5b2T5YmN5piv5ZCm5piv5bCP6L2m77yM6ICM6Z2eYWlcclxuICBwcml2YXRlIF9pc0luT3JkZXIgPSBmYWxzZTsgLy/lvZPliY3mmK/lkKblnKjorqLljZXkuK1cclxuICBwcml2YXRlIF9pc0JyZWFraW5nID0gZmFsc2U7Ly/mmK/lkKblpITkuo7liLnovaZcclxuICBwcml2YXRlIF9nYXM6IFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50ID0gbnVsbDsgLy/lsL7msJRcclxuICBwcml2YXRlIF9vdmVyQ0Q6IEZ1bmN0aW9uID0gbnVsbDtcclxuXHJcbiAgcHVibGljIHN0YXJ0KCkge1xyXG4gICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5vbihFdmVudE5hbWUuRklOSVNIX0VEV0FMSywgdGhpcy5fZmluaXNoZWRXYWxrLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLl9pc01vdmluZyB8fCB0aGlzLl9pc0luT3JkZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX29mZmVjdC5zZXQodGhpcy5ub2RlLndvcmxkUG9zaXRpb24pO1xyXG5cclxuICAgIHRoaXMuX2N1cnJTcGVlZCArPSB0aGlzLl9hY2NsZXJhdGlvbiAqIGR0O1xyXG4gICAgaWYgKHRoaXMuX2N1cnJTcGVlZCA+IHRoaXMubWF4U3BlZWQpIHtcclxuICAgICAgdGhpcy5fY3VyclNwZWVkID0gdGhpcy5tYXhTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fY3VyclNwZWVkIDw9IDAuMDAxKSB7XHJcbiAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5faXNCcmVha2luZykge1xyXG4gICAgICAgIHRoaXMuX2lzQnJlYWtpbmcgPSB0cnVlO1xyXG4gICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIuZGlzcGF0Y2hFdmVudChFdmVudE5hbWUuRU5EX0JSRUFLSU5HKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodGhpcy5fY3VyclJvYWRQb2ludC5tb3ZlVHlwZSkge1xyXG4gICAgICBjYXNlIFJvYWRQb2ludC5Sb2FkTW92ZVR5cGUuQkVORDpcclxuICAgICAgICAvL+mcgOimgeaXi+i9rOeahOinkuW6plxyXG4gICAgICAgIGNvbnN0IG9mZnNldFJvdGF0aW9uID0gdGhpcy5fdGFyZ2V0Um90YXRpb24gLSB0aGlzLl9vcmlnaW5Sb3RhdGlvbjtcclxuICAgICAgICAvL+W9k+WJjeW3sue7j+aXi+i9rOeahOinkuW6plxyXG4gICAgICAgIGNvbnN0IGN1cnJSb3RhdGlvbiA9IHRoaXMuX2NvbnZlcnNpb24odGhpcy5ub2RlLmV1bGVyQW5nbGVzLnkpO1xyXG4gICAgICAgIC8v5LiL5LiA56uZ6L+Q5Yqo6KeS5bqm77ya6YCf5bqm5piv6Lef5byn5bqm5oyC6ZKp55qE77yM5omA5Lul5Y+v5Lul55u45LmY5b6X5Yiw5b2T5YmN6L+Q5Yqo55qE6KeS5bqmXHJcbiAgICAgICAgbGV0IG5leHRTdGF0aW9uID0gKGN1cnJSb3RhdGlvbiAtIHRoaXMuX29yaWdpblJvdGF0aW9uKSArICh0aGlzLl9jdXJyU3BlZWQgKiB0aGlzLl9yb3RNZWFzdXJlICogKHRoaXMuX3RhcmdldFJvdGF0aW9uID4gdGhpcy5fb3JpZ2luUm90YXRpb24gPyAxIDogLTEpKTtcclxuICAgICAgICBpZiAoTWF0aC5hYnMobmV4dFN0YXRpb24pID4gTWF0aC5hYnMob2Zmc2V0Um90YXRpb24pKSB7XHJcbiAgICAgICAgICBuZXh0U3RhdGlvbiA9IG9mZnNldFJvdGF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+ecn+ato+imgeaXi+i9rOeahOinkuW6plxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG5leHRTdGF0aW9uICsgdGhpcy5fb3JpZ2luUm90YXRpb247XHJcbiAgICAgICAgX3RlbXBWZWMuc2V0KDAsIHRhcmdldCwgMCk7XHJcbiAgICAgICAgLy/lsI/ovabml4vovaxcclxuICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBfdGVtcFZlYztcclxuXHJcbiAgICAgICAgLy/ov5Dliqjovajov7nvvJog6YCa6L+H6KeS5bqm5rGC5Ye65byn5bqmXHJcbiAgICAgICAgLy8gY29uc3Qgc2luID0gTWF0aC5zaW4obmV4dFN0YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAvLyBjb25zdCBjb3MgPSBNYXRoLmNvcyhuZXh0U3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgIC8vIGNvbnN0IHhMZW5ndGggPSB0aGlzLl9wb2ludEEueCAtIHRoaXMuX2NlbnRlclBvaW50Lng7XHJcbiAgICAgICAgLy8gY29uc3Qgekxlbmd0aCA9IHRoaXMuX3BvaW50QS56IC0gdGhpcy5fY2VudGVyUG9pbnQuejtcclxuICAgICAgICAvLyBjb25zdCB4UG9zID0geExlbmd0aCAqIGNvcyArIHpMZW5ndGggKiBzaW4gKyB0aGlzLl9jZW50ZXJQb2ludC54O1xyXG4gICAgICAgIC8vIGNvbnN0IHpQb3MgPSAteExlbmd0aCAqIHNpbiArIHpMZW5ndGggKiBjb3MgKyB0aGlzLl9jZW50ZXJQb2ludC56O1xyXG4gICAgICAgIC8vIHRoaXMuX29mZmVjdC5zZXQoeFBvcywgMCwgelBvcyk7XHJcblxyXG4gICAgICAgIC8v562J5LqO5aaC5LiK5Luj56CB5pWI5p6c77ya5Y+v5Lul55So5byV5pOO5YaF6YOoYXBpOiByb3RhdGVZ5a6e546w57uV5Lit5b+D5peL6L2sXHJcbiAgICAgICAgVmVjMy5yb3RhdGVZKHRoaXMuX29mZmVjdCwgdGhpcy5fcG9pbnRBLCB0aGlzLl9jZW50ZXJQb2ludCwgbmV4dFN0YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zdCB6ID0gdGhpcy5fcG9pbnRCLnogLSB0aGlzLl9wb2ludEEuejtcclxuICAgICAgICBpZiAoeiAhPT0gMCkge1xyXG4gICAgICAgICAgaWYgKHogPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29mZmVjdC56ICs9IHRoaXMuX2N1cnJTcGVlZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29mZmVjdC56ID4gdGhpcy5fcG9pbnRCLnopIHtcclxuICAgICAgICAgICAgICB0aGlzLl9vZmZlY3QueiA9IHRoaXMuX3BvaW50Qi56O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vZmZlY3QueiAtPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZmZlY3QueiA8IHRoaXMuX3BvaW50Qi56KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnogPSB0aGlzLl9wb2ludEIuejtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fcG9pbnRCLnggLSB0aGlzLl9wb2ludEEueDtcclxuICAgICAgICAgIGlmICh4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vZmZlY3QueCArPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZmZlY3QueCA+IHRoaXMuX3BvaW50Qi54KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnggPSB0aGlzLl9wb2ludEIueDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnggLT0gdGhpcy5fY3VyclNwZWVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb2ZmZWN0LnggPCB0aGlzLl9wb2ludEIueCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuX29mZmVjdC54ID0gdGhpcy5fcG9pbnRCLng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9vZmZlY3QpO1xyXG4gICAgVmVjMy5zdWJ0cmFjdChfdGVtcFZlYywgdGhpcy5fcG9pbnRCLCB0aGlzLl9vZmZlY3QpO1xyXG4gICAgbGV0IGxlbiA9IF90ZW1wVmVjLmxlbmd0aCgpO1xyXG4gICAgaWYgKGxlbiA8PSAwLjAxKSB7XHJcbiAgICAgIHRoaXMuX2Fycml2YWxTdGF0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+iHquW3seaOpeaUtuW8gOWni+eCuVxyXG4gIHB1YmxpYyBzZXRFbnRyeShlbnRyeTogTm9kZSwgaXNNYWluID0gZmFsc2UpIHtcclxuICAgIHRoaXMubm9kZS5zZXRXb3JsZFBvc2l0aW9uKGVudHJ5LndvcmxkUG9zaXRpb24pO1xyXG4gICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IGVudHJ5LmdldENvbXBvbmVudChSb2FkUG9pbnQpO1xyXG4gICAgdGhpcy5faXNNYWluID0gaXNNYWluO1xyXG4gICAgaWYgKCF0aGlzLl9jdXJyUm9hZFBvaW50KSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignVGhlcmUgaXMgbm8gUm9hZFBvaW50IGluICcgKyBlbnRyeS5uYW1lKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BvaW50QS5zZXQoZW50cnkud29ybGRQb3NpdGlvbik7XHJcbiAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgLy/liKTmlq3lvZPliY3mnJ3lkJFcclxuICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgaWYgKHogIT09IDApIHtcclxuICAgICAgaWYgKHogPCAwKSB7XHJcbiAgICAgICAgLy/mrKfmi4nop5LvvIwg5aaC5p6c5bCP5LqOMOWImeS4jeWBmuaUueWPmFxyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgMTgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeCA9IHRoaXMuX3BvaW50Qi54IC0gdGhpcy5fcG9pbnRBLng7XHJcbiAgICAgIGlmICh4ID4gMCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIDI3MCwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgOTAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2lzTWFpbikge1xyXG4gICAgICBjb25zdCBnYXNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdnYXMnKTtcclxuICAgICAgdGhpcy5fZ2FzID0gZ2FzTm9kZS5nZXRDb21wb25lbnQoUGFydGljbGVTeXN0ZW1Db21wb25lbnQpO1xyXG4gICAgICB0aGlzLl9nYXMucGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0UnVubmluZygpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50KSB7XHJcbiAgICAgIHRoaXMuX2lzTW92aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fY3VyclNwZWVkID0gMDtcclxuICAgICAgdGhpcy5fYWNjbGVyYXRpb24gPSAwLjI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcFJ1bm5pbmcoKSB7XHJcbiAgICAvLyB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fYWNjbGVyYXRpb24gLT0gMC4zO1xyXG5cclxuICAgIC8v5omn6KGM5Yi56L2mXHJcbiAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLlNUQVJUX0JSRUFLSU5HLCB0aGlzLm5vZGUpO1xyXG4gICAgdGhpcy5faXNCcmVha2luZyA9IHRydWU7XHJcbiAgICBBdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5BdWRpb1NvdXJjZS5TVE9QKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBtb3ZlQWZ0ZXJGaW5pc2hlZChjZDogRnVuY3Rpb24pIHtcclxuICAgIHRoaXMuX292ZXJDRCA9IGNkO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfYXJyaXZhbFN0YXRpb24oKSB7XHJcbiAgICBjb25zb2xlLmxvZygnYXJyaXZhbC4uLi4nKTtcclxuICAgIHRoaXMuX3BvaW50QS5zZXQodGhpcy5fcG9pbnRCKTtcclxuICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSB0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uLmdldENvbXBvbmVudChSb2FkUG9pbnQpO1xyXG4gICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24pIHtcclxuICAgICAgdGhpcy5fcG9pbnRCLnNldCh0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uLndvcmxkUG9zaXRpb24pO1xyXG5cclxuICAgICAgaWYgKHRoaXMuX2lzTWFpbikge1xyXG4gICAgICAgIGlmICh0aGlzLl9pc0JyZWFraW5nKSB7XHJcbiAgICAgICAgICB0aGlzLl9pc0JyZWFraW5nID0gdHJ1ZTtcclxuICAgICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIuZGlzcGF0Y2hFdmVudChFdmVudE5hbWUuRU5EX0JSRUFLSU5HKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50LnR5cGUgPT09IFJvYWRQb2ludC5Sb2FkUG9pbnRUeXBlLkdSRUVUSU5HKSB7XHJcbiAgICAgICAgICB0aGlzLl9ncmVldGluZ0N1c3RvbWVyKCk7XHJcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50LnR5cGUgPT0gUm9hZFBvaW50LlJvYWRQb2ludFR5cGUuR09PREJZRSkge1xyXG4gICAgICAgICAgdGhpcy5fdGFraW5nQ3VzdG9tZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQudHlwZSA9PT0gUm9hZFBvaW50LlJvYWRQb2ludFR5cGUuRU5EKSB7XHJcbiAgICAgICAgICBBdWRpb01hbmFnZXIucGxheVNvdW5kKENvbnN0YW50cy5BdWRpb1NvdXJjZS5XSU4pO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy/liLDovr7mn5DkuKrnq5nkuobkuYvlkI7miY3lhrPlrpror7TopoHkuI3opoHml4vovaxcclxuICAgICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQubW92ZVR5cGUgPT09IFJvYWRQb2ludC5Sb2FkTW92ZVR5cGUuQkVORCkge1xyXG4gICAgICAgIC8v5qC55o2u6aG65pe26ZKI6YCG5pe26ZKI5Zub56eN5oOF5Ya15rGC5Ye65peL6L2s55qE5Lit5b+D5L2N572uXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQuY2xvY2t3aXNlKSB7Ly/pobrml7bpkohcclxuICAgICAgICAgIHRoaXMuX29yaWdpblJvdGF0aW9uID0gdGhpcy5fY29udmVyc2lvbih0aGlzLm5vZGUuZXVsZXJBbmdsZXMueSk7XHJcbiAgICAgICAgICB0aGlzLl90YXJnZXRSb3RhdGlvbiA9IHRoaXMuX29yaWdpblJvdGF0aW9uIC0gOTA7XHJcblxyXG4gICAgICAgICAgLy/pobrml7bpkogxXHJcbiAgICAgICAgICBpZiAoKHRoaXMuX3BvaW50Qi56IDwgdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPiB0aGlzLl9wb2ludEEueCkgfHwgKHRoaXMuX3BvaW50Qi56ID4gdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPCB0aGlzLl9wb2ludEEueCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2VudGVyUG9pbnQuc2V0KHRoaXMuX3BvaW50Qi54LCAwLCB0aGlzLl9wb2ludEEueik7XHJcbiAgICAgICAgICB9IGVsc2Ugey8v6aG65pe26ZKIMlxyXG4gICAgICAgICAgICB0aGlzLl9jZW50ZXJQb2ludC5zZXQodGhpcy5fcG9pbnRBLngsIDAsIHRoaXMuX3BvaW50Qi56KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fb3JpZ2luUm90YXRpb24gPSB0aGlzLl9jb252ZXJzaW9uKHRoaXMubm9kZS5ldWxlckFuZ2xlcy55KTtcclxuICAgICAgICAgIHRoaXMuX3RhcmdldFJvdGF0aW9uID0gdGhpcy5fb3JpZ2luUm90YXRpb24gKyA5MDtcclxuXHJcbiAgICAgICAgICAvL+mAhuaXtumSiDFcclxuICAgICAgICAgIGlmICgodGhpcy5fcG9pbnRCLnogPiB0aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA+IHRoaXMuX3BvaW50QS54KSB8fCAodGhpcy5fcG9pbnRCLnogPCB0aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA8IHRoaXMuX3BvaW50QS54KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jZW50ZXJQb2ludC5zZXQodGhpcy5fcG9pbnRCLngsIDAsIHRoaXMuX3BvaW50QS56KTtcclxuICAgICAgICAgIH0gZWxzZSB7Ly/pgIbml7bpkogyXHJcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlclBvaW50LnNldCh0aGlzLl9wb2ludEEueCwgMCwgdGhpcy5fcG9pbnRCLnopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/msYLml4vovazljYrlvoRcclxuICAgICAgICBWZWMzLnN1YnRyYWN0KF90ZW1wVmVjLCB0aGlzLl9wb2ludEEsIHRoaXMuX2NlbnRlclBvaW50KTtcclxuICAgICAgICBjb25zdCByID0gX3RlbXBWZWMubGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5fcm90TWVhc3VyZSA9IDkwIC8gKE1hdGguUEkgKiByIC8gMik7Ly/lvpflh7rkuIDluqbnrYnkuo7lpJrlsJHlvKfluqZcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy/ovr7liLDnu4jngrlcclxuICAgICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IG51bGw7XHJcblxyXG4gICAgICBpZiAodGhpcy5fb3ZlckNEKSB7XHJcbiAgICAgICAgdGhpcy5fb3ZlckNEKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuX292ZXJDRCA9IG51bGw7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2dyZWV0aW5nQ3VzdG9tZXIoKSB7XHJcbiAgICB0aGlzLl9pc0luT3JkZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5fY3VyclNwZWVkID0gMDtcclxuICAgIHRoaXMuX2dhcy5zdG9wKCk7XHJcbiAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkdSRUVUSU5HLCB0aGlzLm5vZGUud29ybGRQb3NpdGlvbiwgdGhpcy5fY3VyclJvYWRQb2ludC5kaXJlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdGFraW5nQ3VzdG9tZXIoKSB7XHJcbiAgICB0aGlzLl9pc0luT3JkZXIgPSB0cnVlO1xyXG4gICAgdGhpcy5fY3VyclNwZWVkID0gMDtcclxuICAgIHRoaXMuX2dhcy5zdG9wKCk7XHJcbiAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkdPT0RCWUUsIHRoaXMubm9kZS53b3JsZFBvc2l0aW9uLCB0aGlzLl9jdXJyUm9hZFBvaW50LmRpcmVjdGlvbik7XHJcbiAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLlNIT1dfQ09JTiwgdGhpcy5ub2RlLndvcmxkUG9zaXRpb24pO1xyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZmluaXNoZWRXYWxrKCkge1xyXG4gICAgdGhpcy5faXNJbk9yZGVyID0gZmFsc2U7XHJcbiAgICB0aGlzLl9nYXMgJiYgdGhpcy5fZ2FzLnBsYXkoKTtcclxuICB9XHJcblxyXG4gIC8v6K6p5peL6L2s6KeS5bqm5Y+Y5oiQ5q2j5YC8XHJcbiAgcHJpdmF0ZSBfY29udmVyc2lvbih2YWx1ZTogbnVtYmVyKSB7XHJcbiAgICBsZXQgYSA9IHZhbHVlO1xyXG4gICAgaWYgKGEgPD0gMCkge1xyXG4gICAgICBhICs9IDM2MDtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gYTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==