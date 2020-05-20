System.register(["cc", "code-quality:cr", "./AudioManager.js", "../data/CustomEventListener.js", "../data/Constants.js", "./RoadPoint.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, AudioManager, CustomEventListener, Constants, RoadPoint, _decorator, Component, Vec3, ParticleSystemComponent, BoxColliderComponent, RigidBodyComponent, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, _tempVec, EventName, Car;

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
      BoxColliderComponent = _cc.BoxColliderComponent;
      RigidBodyComponent = _cc.RigidBodyComponent;
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
          _this._camera = null;
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

            var collider = this.node.getComponent(BoxColliderComponent);
            var rigidBody = this.node.getComponent(RigidBodyComponent);

            if (this._isMain) {
              var gasNode = this.node.getChildByName('gas');
              this._gas = gasNode.getComponent(ParticleSystemComponent);

              this._gas.play();

              collider.on('onCollisionEnter', this._onCollisionEnter, this); //我当前的组是什么

              collider.setGroup((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).CarGroup.MAIN_CAR); //我当前要碰撞的组是什么，玩家小车只能碰撞AI小车

              collider.setMask((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).CarGroup.OTHER_CAR);
            } else {
              //AI小车
              collider.setGroup((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
                error: Error()
              }), Constants) : Constants).CarGroup.OTHER_CAR); //所有组都检测的话就是-1，就是跟所有组都可以碰撞

              collider.setMask(-1);
            }

            this._resetPhysical();
          }
        }, {
          key: "setCamera",
          value: function setCamera(camera, pos, rotation) {
            if (this._isMain) {
              this._camera = camera;
              this._camera.parent = this.node;

              this._camera.setPosition(pos);

              this._camera.eulerAngles = new Vec3(rotation, 0, 0);
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
          key: "stopImmediately",
          value: function stopImmediately() {
            this._isMoving = false;
            this._currSpeed = 0;
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
          key: "_onCollisionEnter",
          value: function _onCollisionEnter(event) {
            // console.log('collision enter: .......', event);
            var otherCollider = event.otherCollider; //如果碰到地面就return

            if (otherCollider.node.name === 'group') {
              return;
            }

            var otherRigidBody = otherCollider.node.getComponent(RigidBodyComponent); //使用重力，不然就会飘忽不定

            otherRigidBody.useGravity = true; //施加一个被撞倒的力。然后又翻转效果，把作用点设置在顶部

            otherRigidBody.applyForce(new Vec3(0, 3000, -1500), new Vec3(0, 0.5, 0));
            var collider = event.selfCollider;
            collider.addMask((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CarGroup.NORMAL);
            var rigidBody = this.node.getComponent(RigidBodyComponent);
            rigidBody.useGravity = true;

            this._gameOver();
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
            if (this._isMain) {
              this._isInOrder = false;

              this._gas.play();
            }
          }
        }, {
          key: "_gameOver",
          value: function _gameOver() {
            //游戏结束通知所有AI小车不要运动
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).dispatchEvent(EventName.GMAE_OVER);
          }
        }, {
          key: "_resetPhysical",
          value: function _resetPhysical() {
            var rigidBody = this.node.getComponent(RigidBodyComponent);
            rigidBody.useGravity = false;
            rigidBody.sleep(); //从对象池里面取出来再唤醒一下

            rigidBody.wakeUp();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiUGFydGljbGVTeXN0ZW1Db21wb25lbnQiLCJCb3hDb2xsaWRlckNvbXBvbmVudCIsIlJpZ2lkQm9keUNvbXBvbmVudCIsIkF1ZGlvTWFuYWdlciIsIkN1c3RvbUV2ZW50TGlzdGVuZXIiLCJDb25zdGFudHMiLCJSb2FkUG9pbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJfdGVtcFZlYyIsIkV2ZW50TmFtZSIsIkNhciIsIl9jdXJyUm9hZFBvaW50IiwiX3BvaW50QSIsIl9wb2ludEIiLCJfY3VyclNwZWVkIiwiX2lzTW92aW5nIiwiX29mZmVjdCIsIl9vcmlnaW5Sb3RhdGlvbiIsIl90YXJnZXRSb3RhdGlvbiIsIl9jZW50ZXJQb2ludCIsIl9yb3RNZWFzdXJlIiwiX2FjY2xlcmF0aW9uIiwiX2lzTWFpbiIsIl9pc0luT3JkZXIiLCJfaXNCcmVha2luZyIsIl9nYXMiLCJfb3ZlckNEIiwiX2NhbWVyYSIsIm9uIiwiRklOSVNIX0VEV0FMSyIsIl9maW5pc2hlZFdhbGsiLCJkdCIsInNldCIsIm5vZGUiLCJ3b3JsZFBvc2l0aW9uIiwibWF4U3BlZWQiLCJkaXNwYXRjaEV2ZW50IiwiRU5EX0JSRUFLSU5HIiwibW92ZVR5cGUiLCJSb2FkTW92ZVR5cGUiLCJCRU5EIiwib2Zmc2V0Um90YXRpb24iLCJjdXJyUm90YXRpb24iLCJfY29udmVyc2lvbiIsImV1bGVyQW5nbGVzIiwieSIsIm5leHRTdGF0aW9uIiwiTWF0aCIsImFicyIsInRhcmdldCIsInJvdGF0ZVkiLCJQSSIsInoiLCJ4Iiwic2V0V29ybGRQb3NpdGlvbiIsInN1YnRyYWN0IiwibGVuIiwibGVuZ3RoIiwiX2Fycml2YWxTdGF0aW9uIiwiZW50cnkiLCJpc01haW4iLCJnZXRDb21wb25lbnQiLCJjb25zb2xlIiwid2FybiIsIm5hbWUiLCJjb2xsaWRlciIsInJpZ2lkQm9keSIsImdhc05vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsInBsYXkiLCJfb25Db2xsaXNpb25FbnRlciIsInNldEdyb3VwIiwiQ2FyR3JvdXAiLCJNQUlOX0NBUiIsInNldE1hc2siLCJPVEhFUl9DQVIiLCJfcmVzZXRQaHlzaWNhbCIsImNhbWVyYSIsInBvcyIsInJvdGF0aW9uIiwicGFyZW50Iiwic2V0UG9zaXRpb24iLCJTVEFSVF9CUkVBS0lORyIsInBsYXlTb3VuZCIsIkF1ZGlvU291cmNlIiwiU1RPUCIsImNkIiwibG9nIiwidHlwZSIsIlJvYWRQb2ludFR5cGUiLCJHUkVFVElORyIsIl9ncmVldGluZ0N1c3RvbWVyIiwiR09PREJZRSIsIl90YWtpbmdDdXN0b21lciIsIkVORCIsIldJTiIsImNsb2Nrd2lzZSIsInIiLCJldmVudCIsIm90aGVyQ29sbGlkZXIiLCJvdGhlclJpZ2lkQm9keSIsInVzZUdyYXZpdHkiLCJhcHBseUZvcmNlIiwic2VsZkNvbGxpZGVyIiwiYWRkTWFzayIsIk5PUk1BTCIsIl9nYW1lT3ZlciIsInN0b3AiLCJkaXJlY3Rpb24iLCJTSE9XX0NPSU4iLCJHTUFFX09WRVIiLCJzbGVlcCIsIndha2VVcCIsInZhbHVlIiwiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsSSxPQUFBQSxJO0FBQW1CQyxNQUFBQSx1QixPQUFBQSx1QjtBQUF5QkMsTUFBQUEsb0IsT0FBQUEsb0I7QUFBc0JDLE1BQUFBLGtCLE9BQUFBLGtCOzs7O0FBSi9GQyxNQUFBQSxZLG1CQUFBQSxZOztBQUNBQyxNQUFBQSxtQiw4QkFBQUEsbUI7O0FBQ0FDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7OztBQUdEQyxNQUFBQSxPLEdBQXNCVixV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QyxJQUFWO0FBQ0Q7QUFDRjs7O3NDQUVvQjtBQUNuQjtBQUNBO0FBQUE7QUFBQSw0REFBb0JqQyxhQUFwQixDQUFrQzNCLFNBQVMsQ0FBQ3FHLFNBQTVDO0FBQ0Q7OzsyQ0FFeUI7QUFDeEIsZ0JBQU01QyxTQUFTLEdBQUcsS0FBS2pDLElBQUwsQ0FBVTRCLFlBQVYsQ0FBdUI1RCxrQkFBdkIsQ0FBbEI7QUFDQWlFLFlBQUFBLFNBQVMsQ0FBQ21DLFVBQVYsR0FBdUIsS0FBdkI7QUFDQW5DLFlBQUFBLFNBQVMsQ0FBQzZDLEtBQVYsR0FId0IsQ0FJeEI7O0FBQ0E3QyxZQUFBQSxTQUFTLENBQUM4QyxNQUFWO0FBQ0QsVyxDQUVEOzs7O3NDQUNvQkMsSyxFQUFlO0FBQ2pDLGdCQUFJQyxDQUFDLEdBQUdELEtBQVI7O0FBQ0EsZ0JBQUlDLENBQUMsSUFBSSxDQUFULEVBQVk7QUFDVkEsY0FBQUEsQ0FBQyxJQUFJLEdBQUw7QUFDRDs7QUFFRCxtQkFBT0EsQ0FBUDtBQUNEOzs7O1FBNVVzQnJILFMsb0ZBQ3RCVSxROzs7OztpQkFDVSxHIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXVkaW9NYW5hZ2VyIH0gZnJvbSAnLi9BdWRpb01hbmFnZXInO1xyXG5pbXBvcnQgeyBDdXN0b21FdmVudExpc3RlbmVyIH0gZnJvbSAnLi8uLi9kYXRhL0N1c3RvbUV2ZW50TGlzdGVuZXInO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLy4uL2RhdGEvQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgUm9hZFBvaW50IH0gZnJvbSAnLi9Sb2FkUG9pbnQnO1xyXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIHRleHR1cmVVdGlsLCBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCwgQm94Q29sbGlkZXJDb21wb25lbnQsIFJpZ2lkQm9keUNvbXBvbmVudCwgSUNvbGxpc2lvbkV2ZW50IH0gZnJvbSBcImNjXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuLy/lvITkuKrmmoLlrZjlj5jph48s5Zug5Li66ICD6JmR5YiwanPnmoTlhoXlrZjmnLrliLbvvIzmiYDku6XkuI3miZPnrpflsIblrprkuYnlhpnlnKh1cGRhdGXph4zpnaJcclxuY29uc3QgX3RlbXBWZWMgPSBuZXcgVmVjMygpO1xyXG5jb25zdCBFdmVudE5hbWUgPSBDb25zdGFudHMuRXZlbnROYW1lO1xyXG5cclxuQGNjY2xhc3MoXCJDYXJcIilcclxuZXhwb3J0IGNsYXNzIENhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5XHJcbiAgbWF4U3BlZWQgPSAwLjI7XHJcblxyXG4gIC8v6K6+572u5bCP6L2m5pyd5ZCR6Zeu6aKYXHJcbiAgcHJpdmF0ZSBfY3VyclJvYWRQb2ludDogUm9hZFBvaW50ID0gbnVsbDtcclxuICBwcml2YXRlIF9wb2ludEEgPSBuZXcgVmVjMygpO1xyXG4gIHByaXZhdGUgX3BvaW50QiA9IG5ldyBWZWMzKCk7XHJcbiAgcHJpdmF0ZSBfY3VyclNwZWVkID0gMDtcclxuICBwcml2YXRlIF9pc01vdmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX29mZmVjdCA9IG5ldyBWZWMzKCk7XHJcbiAgcHJpdmF0ZSBfb3JpZ2luUm90YXRpb24gPSAwOy8v5Yid5aeL5peL6L2s54K5XHJcbiAgcHJpdmF0ZSBfdGFyZ2V0Um90YXRpb24gPSAwOy8v55uu5qCH5peL6L2s54K5XHJcbiAgcHJpdmF0ZSBfY2VudGVyUG9pbnQgPSBuZXcgVmVjMygpOy8v5peL6L2s5Lit5b+D54K5XHJcbiAgcHJpdmF0ZSBfcm90TWVhc3VyZSA9IDA7Ly/luqbph4/lgLxcclxuICBwcml2YXRlIF9hY2NsZXJhdGlvbiA9IDAuMjsvL+WKoOmAn+W6plxyXG4gIHByaXZhdGUgX2lzTWFpbiA9IGZhbHNlOy8v5b2T5YmN5piv5ZCm5piv5bCP6L2m77yM6ICM6Z2eYWlcclxuICBwcml2YXRlIF9pc0luT3JkZXIgPSBmYWxzZTsgLy/lvZPliY3mmK/lkKblnKjorqLljZXkuK1cclxuICBwcml2YXRlIF9pc0JyZWFraW5nID0gZmFsc2U7Ly/mmK/lkKblpITkuo7liLnovaZcclxuICBwcml2YXRlIF9nYXM6IFBhcnRpY2xlU3lzdGVtQ29tcG9uZW50ID0gbnVsbDsgLy/lsL7msJRcclxuICBwcml2YXRlIF9vdmVyQ0Q6IEZ1bmN0aW9uID0gbnVsbDtcclxuICBwcml2YXRlIF9jYW1lcmE6IE5vZGUgPSBudWxsO1xyXG5cclxuICBwdWJsaWMgc3RhcnQoKSB7XHJcbiAgICBDdXN0b21FdmVudExpc3RlbmVyLm9uKEV2ZW50TmFtZS5GSU5JU0hfRURXQUxLLCB0aGlzLl9maW5pc2hlZFdhbGssIHRoaXMpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIHVwZGF0ZShkdDogbnVtYmVyKSB7XHJcbiAgICBpZiAoIXRoaXMuX2lzTW92aW5nIHx8IHRoaXMuX2lzSW5PcmRlcikge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fb2ZmZWN0LnNldCh0aGlzLm5vZGUud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgdGhpcy5fY3VyclNwZWVkICs9IHRoaXMuX2FjY2xlcmF0aW9uICogZHQ7XHJcbiAgICBpZiAodGhpcy5fY3VyclNwZWVkID4gdGhpcy5tYXhTcGVlZCkge1xyXG4gICAgICB0aGlzLl9jdXJyU3BlZWQgPSB0aGlzLm1heFNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLl9jdXJyU3BlZWQgPD0gMC4wMDEpIHtcclxuICAgICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9pc0JyZWFraW5nKSB7XHJcbiAgICAgICAgdGhpcy5faXNCcmVha2luZyA9IHRydWU7XHJcbiAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5FTkRfQlJFQUtJTkcpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3dpdGNoICh0aGlzLl9jdXJyUm9hZFBvaW50Lm1vdmVUeXBlKSB7XHJcbiAgICAgIGNhc2UgUm9hZFBvaW50LlJvYWRNb3ZlVHlwZS5CRU5EOlxyXG4gICAgICAgIC8v6ZyA6KaB5peL6L2s55qE6KeS5bqmXHJcbiAgICAgICAgY29uc3Qgb2Zmc2V0Um90YXRpb24gPSB0aGlzLl90YXJnZXRSb3RhdGlvbiAtIHRoaXMuX29yaWdpblJvdGF0aW9uO1xyXG4gICAgICAgIC8v5b2T5YmN5bey57uP5peL6L2s55qE6KeS5bqmXHJcbiAgICAgICAgY29uc3QgY3VyclJvdGF0aW9uID0gdGhpcy5fY29udmVyc2lvbih0aGlzLm5vZGUuZXVsZXJBbmdsZXMueSk7XHJcbiAgICAgICAgLy/kuIvkuIDnq5nov5Dliqjop5LluqbvvJrpgJ/luqbmmK/ot5/lvKfluqbmjILpkqnnmoTvvIzmiYDku6Xlj6/ku6Xnm7jkuZjlvpfliLDlvZPliY3ov5DliqjnmoTop5LluqZcclxuICAgICAgICBsZXQgbmV4dFN0YXRpb24gPSAoY3VyclJvdGF0aW9uIC0gdGhpcy5fb3JpZ2luUm90YXRpb24pICsgKHRoaXMuX2N1cnJTcGVlZCAqIHRoaXMuX3JvdE1lYXN1cmUgKiAodGhpcy5fdGFyZ2V0Um90YXRpb24gPiB0aGlzLl9vcmlnaW5Sb3RhdGlvbiA/IDEgOiAtMSkpO1xyXG4gICAgICAgIGlmIChNYXRoLmFicyhuZXh0U3RhdGlvbikgPiBNYXRoLmFicyhvZmZzZXRSb3RhdGlvbikpIHtcclxuICAgICAgICAgIG5leHRTdGF0aW9uID0gb2Zmc2V0Um90YXRpb247XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v55yf5q2j6KaB5peL6L2s55qE6KeS5bqmXHJcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gbmV4dFN0YXRpb24gKyB0aGlzLl9vcmlnaW5Sb3RhdGlvbjtcclxuICAgICAgICBfdGVtcFZlYy5zZXQoMCwgdGFyZ2V0LCAwKTtcclxuICAgICAgICAvL+Wwj+i9puaXi+i9rFxyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IF90ZW1wVmVjO1xyXG5cclxuICAgICAgICAvL+i/kOWKqOi9qOi/ue+8miDpgJrov4fop5LluqbmsYLlh7rlvKfluqZcclxuICAgICAgICAvLyBjb25zdCBzaW4gPSBNYXRoLnNpbihuZXh0U3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgIC8vIGNvbnN0IGNvcyA9IE1hdGguY29zKG5leHRTdGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgLy8gY29uc3QgeExlbmd0aCA9IHRoaXMuX3BvaW50QS54IC0gdGhpcy5fY2VudGVyUG9pbnQueDtcclxuICAgICAgICAvLyBjb25zdCB6TGVuZ3RoID0gdGhpcy5fcG9pbnRBLnogLSB0aGlzLl9jZW50ZXJQb2ludC56O1xyXG4gICAgICAgIC8vIGNvbnN0IHhQb3MgPSB4TGVuZ3RoICogY29zICsgekxlbmd0aCAqIHNpbiArIHRoaXMuX2NlbnRlclBvaW50Lng7XHJcbiAgICAgICAgLy8gY29uc3QgelBvcyA9IC14TGVuZ3RoICogc2luICsgekxlbmd0aCAqIGNvcyArIHRoaXMuX2NlbnRlclBvaW50Lno7XHJcbiAgICAgICAgLy8gdGhpcy5fb2ZmZWN0LnNldCh4UG9zLCAwLCB6UG9zKTtcclxuXHJcbiAgICAgICAgLy/nrYnkuo7lpoLkuIrku6PnoIHmlYjmnpzvvJrlj6/ku6XnlKjlvJXmk47lhoXpg6hhcGk6IHJvdGF0ZVnlrp7njrDnu5XkuK3lv4Pml4vovaxcclxuICAgICAgICBWZWMzLnJvdGF0ZVkodGhpcy5fb2ZmZWN0LCB0aGlzLl9wb2ludEEsIHRoaXMuX2NlbnRlclBvaW50LCBuZXh0U3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgICAgIGlmICh6ICE9PSAwKSB7XHJcbiAgICAgICAgICBpZiAoeiA+IDApIHtcclxuICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnogKz0gdGhpcy5fY3VyclNwZWVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb2ZmZWN0LnogPiB0aGlzLl9wb2ludEIueikge1xyXG4gICAgICAgICAgICAgIHRoaXMuX29mZmVjdC56ID0gdGhpcy5fcG9pbnRCLno7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29mZmVjdC56IC09IHRoaXMuX2N1cnJTcGVlZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29mZmVjdC56IDwgdGhpcy5fcG9pbnRCLnopIHtcclxuICAgICAgICAgICAgICB0aGlzLl9vZmZlY3QueiA9IHRoaXMuX3BvaW50Qi56O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHggPSB0aGlzLl9wb2ludEIueCAtIHRoaXMuX3BvaW50QS54O1xyXG4gICAgICAgICAgaWYgKHggPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29mZmVjdC54ICs9IHRoaXMuX2N1cnJTcGVlZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29mZmVjdC54ID4gdGhpcy5fcG9pbnRCLngpIHtcclxuICAgICAgICAgICAgICB0aGlzLl9vZmZlY3QueCA9IHRoaXMuX3BvaW50Qi54O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vZmZlY3QueCAtPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZmZlY3QueCA8IHRoaXMuX3BvaW50Qi54KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnggPSB0aGlzLl9wb2ludEIueDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHRoaXMubm9kZS5zZXRXb3JsZFBvc2l0aW9uKHRoaXMuX29mZmVjdCk7XHJcbiAgICBWZWMzLnN1YnRyYWN0KF90ZW1wVmVjLCB0aGlzLl9wb2ludEIsIHRoaXMuX29mZmVjdCk7XHJcbiAgICBsZXQgbGVuID0gX3RlbXBWZWMubGVuZ3RoKCk7XHJcbiAgICBpZiAobGVuIDw9IDAuMDEpIHtcclxuICAgICAgdGhpcy5fYXJyaXZhbFN0YXRpb24oKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v6Ieq5bex5o6l5pS25byA5aeL54K5XHJcbiAgcHVibGljIHNldEVudHJ5KGVudHJ5OiBOb2RlLCBpc01haW4gPSBmYWxzZSkge1xyXG4gICAgdGhpcy5ub2RlLnNldFdvcmxkUG9zaXRpb24oZW50cnkud29ybGRQb3NpdGlvbik7XHJcbiAgICB0aGlzLl9jdXJyUm9hZFBvaW50ID0gZW50cnkuZ2V0Q29tcG9uZW50KFJvYWRQb2ludCk7XHJcbiAgICB0aGlzLl9pc01haW4gPSBpc01haW47XHJcbiAgICBpZiAoIXRoaXMuX2N1cnJSb2FkUG9pbnQpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdUaGVyZSBpcyBubyBSb2FkUG9pbnQgaW4gJyArIGVudHJ5Lm5hbWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcG9pbnRBLnNldChlbnRyeS53b3JsZFBvc2l0aW9uKTtcclxuICAgIHRoaXMuX3BvaW50Qi5zZXQodGhpcy5fY3VyclJvYWRQb2ludC5uZXh0U3RhdGlvbi53b3JsZFBvc2l0aW9uKTtcclxuXHJcbiAgICAvL+WIpOaWreW9k+WJjeacneWQkVxyXG4gICAgY29uc3QgeiA9IHRoaXMuX3BvaW50Qi56IC0gdGhpcy5fcG9pbnRBLno7XHJcbiAgICBpZiAoeiAhPT0gMCkge1xyXG4gICAgICBpZiAoeiA8IDApIHtcclxuICAgICAgICAvL+asp+aLieinku+8jCDlpoLmnpzlsI/kuo4w5YiZ5LiN5YGa5pS55Y+YXHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCAxODAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBjb25zdCB4ID0gdGhpcy5fcG9pbnRCLnggLSB0aGlzLl9wb2ludEEueDtcclxuICAgICAgaWYgKHggPiAwKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgMjcwLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCA5MCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjb2xsaWRlciA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoQm94Q29sbGlkZXJDb21wb25lbnQpO1xyXG4gICAgY29uc3QgcmlnaWRCb2R5ID0gdGhpcy5ub2RlLmdldENvbXBvbmVudChSaWdpZEJvZHlDb21wb25lbnQpO1xyXG4gICAgaWYgKHRoaXMuX2lzTWFpbikge1xyXG4gICAgICBjb25zdCBnYXNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdnYXMnKTtcclxuICAgICAgdGhpcy5fZ2FzID0gZ2FzTm9kZS5nZXRDb21wb25lbnQoUGFydGljbGVTeXN0ZW1Db21wb25lbnQpO1xyXG4gICAgICB0aGlzLl9nYXMucGxheSgpO1xyXG5cclxuICAgICAgY29sbGlkZXIub24oJ29uQ29sbGlzaW9uRW50ZXInLCB0aGlzLl9vbkNvbGxpc2lvbkVudGVyLCB0aGlzKTtcclxuICAgICAgLy/miJHlvZPliY3nmoTnu4TmmK/ku4DkuYhcclxuICAgICAgY29sbGlkZXIuc2V0R3JvdXAoQ29uc3RhbnRzLkNhckdyb3VwLk1BSU5fQ0FSKTtcclxuICAgICAgLy/miJHlvZPliY3opoHnorDmkp7nmoTnu4TmmK/ku4DkuYjvvIznjqnlrrblsI/ovablj6rog73norDmkp5BSeWwj+i9plxyXG4gICAgICBjb2xsaWRlci5zZXRNYXNrKENvbnN0YW50cy5DYXJHcm91cC5PVEhFUl9DQVIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy9BSeWwj+i9plxyXG4gICAgICBjb2xsaWRlci5zZXRHcm91cChDb25zdGFudHMuQ2FyR3JvdXAuT1RIRVJfQ0FSKTtcclxuICAgICAgLy/miYDmnInnu4Tpg73mo4DmtYvnmoTor53lsLHmmK8tMe+8jOWwseaYr+i3n+aJgOaciee7hOmDveWPr+S7peeisOaSnlxyXG4gICAgICBjb2xsaWRlci5zZXRNYXNrKC0xKTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLl9yZXNldFBoeXNpY2FsKCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc2V0Q2FtZXJhKGNhbWVyYTogTm9kZSwgcG9zOiBWZWMzLCByb3RhdGlvbjogbnVtYmVyKSB7XHJcbiAgICBpZiAodGhpcy5faXNNYWluKSB7XHJcbiAgICAgIHRoaXMuX2NhbWVyYSA9IGNhbWVyYTtcclxuICAgICAgdGhpcy5fY2FtZXJhLnBhcmVudCA9IHRoaXMubm9kZTtcclxuICAgICAgdGhpcy5fY2FtZXJhLnNldFBvc2l0aW9uKHBvcyk7XHJcbiAgICAgIHRoaXMuX2NhbWVyYS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKHJvdGF0aW9uLCAwLCAwKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdGFydFJ1bm5pbmcoKSB7XHJcbiAgICBpZiAodGhpcy5fY3VyclJvYWRQb2ludCkge1xyXG4gICAgICB0aGlzLl9pc01vdmluZyA9IHRydWU7XHJcbiAgICAgIHRoaXMuX2N1cnJTcGVlZCA9IDA7XHJcbiAgICAgIHRoaXMuX2FjY2xlcmF0aW9uID0gMC4yO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3BSdW5uaW5nKCkge1xyXG4gICAgLy8gdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuX2FjY2xlcmF0aW9uIC09IDAuMztcclxuXHJcbiAgICAvL+aJp+ihjOWIuei9plxyXG4gICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5TVEFSVF9CUkVBS0lORywgdGhpcy5ub2RlKTtcclxuICAgIHRoaXMuX2lzQnJlYWtpbmcgPSB0cnVlO1xyXG4gICAgQXVkaW9NYW5hZ2VyLnBsYXlTb3VuZChDb25zdGFudHMuQXVkaW9Tb3VyY2UuU1RPUCk7XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgbW92ZUFmdGVyRmluaXNoZWQoY2Q6IEZ1bmN0aW9uKSB7XHJcbiAgICB0aGlzLl9vdmVyQ0QgPSBjZDtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wSW1tZWRpYXRlbHkgKCkge1xyXG4gICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgIHRoaXMuX2N1cnJTcGVlZCA9IDA7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hcnJpdmFsU3RhdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhcnJpdmFsLi4uLicpO1xyXG4gICAgdGhpcy5fcG9pbnRBLnNldCh0aGlzLl9wb2ludEIpO1xyXG4gICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24uZ2V0Q29tcG9uZW50KFJvYWRQb2ludCk7XHJcbiAgICBpZiAodGhpcy5fY3VyclJvYWRQb2ludC5uZXh0U3RhdGlvbikge1xyXG4gICAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgICBpZiAodGhpcy5faXNNYWluKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzQnJlYWtpbmcpIHtcclxuICAgICAgICAgIHRoaXMuX2lzQnJlYWtpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5FTkRfQlJFQUtJTkcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQudHlwZSA9PT0gUm9hZFBvaW50LlJvYWRQb2ludFR5cGUuR1JFRVRJTkcpIHtcclxuICAgICAgICAgIHRoaXMuX2dyZWV0aW5nQ3VzdG9tZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQudHlwZSA9PSBSb2FkUG9pbnQuUm9hZFBvaW50VHlwZS5HT09EQllFKSB7XHJcbiAgICAgICAgICB0aGlzLl90YWtpbmdDdXN0b21lcigpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5fY3VyclJvYWRQb2ludC50eXBlID09PSBSb2FkUG9pbnQuUm9hZFBvaW50VHlwZS5FTkQpIHtcclxuICAgICAgICAgIEF1ZGlvTWFuYWdlci5wbGF5U291bmQoQ29uc3RhbnRzLkF1ZGlvU291cmNlLldJTik7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICAvL+WIsOi+vuafkOS4quermeS6huS5i+WQjuaJjeWGs+WumuivtOimgeS4jeimgeaXi+i9rFxyXG4gICAgICBpZiAodGhpcy5fY3VyclJvYWRQb2ludC5tb3ZlVHlwZSA9PT0gUm9hZFBvaW50LlJvYWRNb3ZlVHlwZS5CRU5EKSB7XHJcbiAgICAgICAgLy/moLnmja7pobrml7bpkojpgIbml7bpkojlm5vnp43mg4XlhrXmsYLlh7rml4vovaznmoTkuK3lv4PkvY3nva5cclxuICAgICAgICBpZiAodGhpcy5fY3VyclJvYWRQb2ludC5jbG9ja3dpc2UpIHsvL+mhuuaXtumSiFxyXG4gICAgICAgICAgdGhpcy5fb3JpZ2luUm90YXRpb24gPSB0aGlzLl9jb252ZXJzaW9uKHRoaXMubm9kZS5ldWxlckFuZ2xlcy55KTtcclxuICAgICAgICAgIHRoaXMuX3RhcmdldFJvdGF0aW9uID0gdGhpcy5fb3JpZ2luUm90YXRpb24gLSA5MDtcclxuXHJcbiAgICAgICAgICAvL+mhuuaXtumSiDFcclxuICAgICAgICAgIGlmICgodGhpcy5fcG9pbnRCLnogPCB0aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA+IHRoaXMuX3BvaW50QS54KSB8fCAodGhpcy5fcG9pbnRCLnogPiB0aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA8IHRoaXMuX3BvaW50QS54KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jZW50ZXJQb2ludC5zZXQodGhpcy5fcG9pbnRCLngsIDAsIHRoaXMuX3BvaW50QS56KTtcclxuICAgICAgICAgIH0gZWxzZSB7Ly/pobrml7bpkogyXHJcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlclBvaW50LnNldCh0aGlzLl9wb2ludEEueCwgMCwgdGhpcy5fcG9pbnRCLnopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLl9vcmlnaW5Sb3RhdGlvbiA9IHRoaXMuX2NvbnZlcnNpb24odGhpcy5ub2RlLmV1bGVyQW5nbGVzLnkpO1xyXG4gICAgICAgICAgdGhpcy5fdGFyZ2V0Um90YXRpb24gPSB0aGlzLl9vcmlnaW5Sb3RhdGlvbiArIDkwO1xyXG5cclxuICAgICAgICAgIC8v6YCG5pe26ZKIMVxyXG4gICAgICAgICAgaWYgKCh0aGlzLl9wb2ludEIueiA+IHRoaXMuX3BvaW50QS56ICYmIHRoaXMuX3BvaW50Qi54ID4gdGhpcy5fcG9pbnRBLngpIHx8ICh0aGlzLl9wb2ludEIueiA8IHRoaXMuX3BvaW50QS56ICYmIHRoaXMuX3BvaW50Qi54IDwgdGhpcy5fcG9pbnRBLngpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlclBvaW50LnNldCh0aGlzLl9wb2ludEIueCwgMCwgdGhpcy5fcG9pbnRBLnopO1xyXG4gICAgICAgICAgfSBlbHNlIHsvL+mAhuaXtumSiDJcclxuICAgICAgICAgICAgdGhpcy5fY2VudGVyUG9pbnQuc2V0KHRoaXMuX3BvaW50QS54LCAwLCB0aGlzLl9wb2ludEIueik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL+axguaXi+i9rOWNiuW+hFxyXG4gICAgICAgIFZlYzMuc3VidHJhY3QoX3RlbXBWZWMsIHRoaXMuX3BvaW50QSwgdGhpcy5fY2VudGVyUG9pbnQpO1xyXG4gICAgICAgIGNvbnN0IHIgPSBfdGVtcFZlYy5sZW5ndGgoKTtcclxuICAgICAgICB0aGlzLl9yb3RNZWFzdXJlID0gOTAgLyAoTWF0aC5QSSAqIHIgLyAyKTsvL+W+l+WHuuS4gOW6puetieS6juWkmuWwkeW8p+W6plxyXG4gICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL+i+vuWIsOe7iOeCuVxyXG4gICAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLl9jdXJyUm9hZFBvaW50ID0gbnVsbDtcclxuXHJcbiAgICAgIGlmICh0aGlzLl9vdmVyQ0QpIHtcclxuICAgICAgICB0aGlzLl9vdmVyQ0QodGhpcyk7XHJcbiAgICAgICAgdGhpcy5fb3ZlckNEID0gbnVsbDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfb25Db2xsaXNpb25FbnRlciAoZXZlbnQ6IElDb2xsaXNpb25FdmVudCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ2NvbGxpc2lvbiBlbnRlcjogLi4uLi4uLicsIGV2ZW50KTtcclxuICAgIGNvbnN0IG90aGVyQ29sbGlkZXIgPSBldmVudC5vdGhlckNvbGxpZGVyO1xyXG4gICAgLy/lpoLmnpznorDliLDlnLDpnaLlsLFyZXR1cm5cclxuICAgIGlmIChvdGhlckNvbGxpZGVyLm5vZGUubmFtZSA9PT0gJ2dyb3VwJykge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcbiAgICBjb25zdCBvdGhlclJpZ2lkQm9keSA9IG90aGVyQ29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcclxuICAgIC8v5L2/55So6YeN5Yqb77yM5LiN54S25bCx5Lya6aOY5b+95LiN5a6aXHJcbiAgICBvdGhlclJpZ2lkQm9keS51c2VHcmF2aXR5ID0gdHJ1ZTtcclxuICAgIC8v5pa95Yqg5LiA5Liq6KKr5pKe5YCS55qE5Yqb44CC54S25ZCO5Y+I57+76L2s5pWI5p6c77yM5oqK5L2c55So54K56K6+572u5Zyo6aG26YOoXHJcbiAgICBvdGhlclJpZ2lkQm9keS5hcHBseUZvcmNlKG5ldyBWZWMzKDAsIDMwMDAsIC0xNTAwKSwgbmV3IFZlYzMoMCwgMC41LCAwKSk7XHJcblxyXG4gICAgY29uc3QgY29sbGlkZXIgPSBldmVudC5zZWxmQ29sbGlkZXI7XHJcbiAgICBjb2xsaWRlci5hZGRNYXNrKENvbnN0YW50cy5DYXJHcm91cC5OT1JNQUwpO1xyXG5cclxuICAgIGNvbnN0IHJpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcclxuICAgIHJpZ2lkQm9keS51c2VHcmF2aXR5ID0gdHJ1ZTtcclxuICAgIHRoaXMuX2dhbWVPdmVyKCk7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9ncmVldGluZ0N1c3RvbWVyKCkge1xyXG4gICAgdGhpcy5faXNJbk9yZGVyID0gdHJ1ZTtcclxuICAgIHRoaXMuX2N1cnJTcGVlZCA9IDA7XHJcbiAgICB0aGlzLl9nYXMuc3RvcCgpO1xyXG4gICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5HUkVFVElORywgdGhpcy5ub2RlLndvcmxkUG9zaXRpb24sIHRoaXMuX2N1cnJSb2FkUG9pbnQuZGlyZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3Rha2luZ0N1c3RvbWVyKCkge1xyXG4gICAgdGhpcy5faXNJbk9yZGVyID0gdHJ1ZTtcclxuICAgIHRoaXMuX2N1cnJTcGVlZCA9IDA7XHJcbiAgICB0aGlzLl9nYXMuc3RvcCgpO1xyXG4gICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5HT09EQllFLCB0aGlzLm5vZGUud29ybGRQb3NpdGlvbiwgdGhpcy5fY3VyclJvYWRQb2ludC5kaXJlY3Rpb24pO1xyXG4gICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5TSE9XX0NPSU4sIHRoaXMubm9kZS53b3JsZFBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbmlzaGVkV2FsaygpIHtcclxuICAgIGlmICh0aGlzLl9pc01haW4pIHtcclxuICAgICAgdGhpcy5faXNJbk9yZGVyID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX2dhcy5wbGF5KCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nYW1lT3ZlciAoKSB7XHJcbiAgICAvL+a4uOaIj+e7k+adn+mAmuefpeaJgOaciUFJ5bCP6L2m5LiN6KaB6L+Q5YqoXHJcbiAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLkdNQUVfT1ZFUik7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZXNldFBoeXNpY2FsICgpIHtcclxuICAgIGNvbnN0IHJpZ2lkQm9keSA9IHRoaXMubm9kZS5nZXRDb21wb25lbnQoUmlnaWRCb2R5Q29tcG9uZW50KTtcclxuICAgIHJpZ2lkQm9keS51c2VHcmF2aXR5ID0gZmFsc2U7XHJcbiAgICByaWdpZEJvZHkuc2xlZXAoKTtcclxuICAgIC8v5LuO5a+56LGh5rGg6YeM6Z2i5Y+W5Ye65p2l5YaN5ZSk6YaS5LiA5LiLXHJcbiAgICByaWdpZEJvZHkud2FrZVVwKCk7XHJcbiAgfVxyXG5cclxuICAvL+iuqeaXi+i9rOinkuW6puWPmOaIkOato+WAvFxyXG4gIHByaXZhdGUgX2NvbnZlcnNpb24odmFsdWU6IG51bWJlcikge1xyXG4gICAgbGV0IGEgPSB2YWx1ZTtcclxuICAgIGlmIChhIDw9IDApIHtcclxuICAgICAgYSArPSAzNjA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=