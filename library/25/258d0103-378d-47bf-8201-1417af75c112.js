System.register(["cc", "code-quality:cr", "../data/CustomEventListener.js", "../data/Constants.js", "./RoadPoint.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, CustomEventListener, Constants, RoadPoint, _decorator, Component, Vec3, ParticleSystemComponent, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, _tempVec, EventName, Car;

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
          return _this;
        }

        _createClass(Car, [{
          key: "start",
          //尾气
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
              this._isMoving = false;
              this._currRoadPoint = null;
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

            this._gas.play();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiUGFydGljbGVTeXN0ZW1Db21wb25lbnQiLCJDdXN0b21FdmVudExpc3RlbmVyIiwiQ29uc3RhbnRzIiwiUm9hZFBvaW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiX3RlbXBWZWMiLCJFdmVudE5hbWUiLCJDYXIiLCJfY3VyclJvYWRQb2ludCIsIl9wb2ludEEiLCJfcG9pbnRCIiwiX2N1cnJTcGVlZCIsIl9pc01vdmluZyIsIl9vZmZlY3QiLCJfb3JpZ2luUm90YXRpb24iLCJfdGFyZ2V0Um90YXRpb24iLCJfY2VudGVyUG9pbnQiLCJfcm90TWVhc3VyZSIsIl9hY2NsZXJhdGlvbiIsIl9pc01haW4iLCJfaXNJbk9yZGVyIiwiX2lzQnJlYWtpbmciLCJfZ2FzIiwib24iLCJGSU5JU0hfRURXQUxLIiwiX2ZpbmlzaGVkV2FsayIsImR0Iiwic2V0Iiwibm9kZSIsIndvcmxkUG9zaXRpb24iLCJtYXhTcGVlZCIsImRpc3BhdGNoRXZlbnQiLCJFTkRfQlJFQUtJTkciLCJtb3ZlVHlwZSIsIlJvYWRNb3ZlVHlwZSIsIkJFTkQiLCJvZmZzZXRSb3RhdGlvbiIsImN1cnJSb3RhdGlvbiIsIl9jb252ZXJzaW9uIiwiZXVsZXJBbmdsZXMiLCJ5IiwibmV4dFN0YXRpb24iLCJNYXRoIiwiYWJzIiwidGFyZ2V0Iiwicm90YXRlWSIsIlBJIiwieiIsIngiLCJzZXRXb3JsZFBvc2l0aW9uIiwic3VidHJhY3QiLCJsZW4iLCJsZW5ndGgiLCJfYXJyaXZhbFN0YXRpb24iLCJlbnRyeSIsImlzTWFpbiIsImdldENvbXBvbmVudCIsImNvbnNvbGUiLCJ3YXJuIiwibmFtZSIsImdhc05vZGUiLCJnZXRDaGlsZEJ5TmFtZSIsInBsYXkiLCJTVEFSVF9CUkVBS0lORyIsImxvZyIsInR5cGUiLCJSb2FkUG9pbnRUeXBlIiwiR1JFRVRJTkciLCJfZ3JlZXRpbmdDdXN0b21lciIsIkdPT0RCWUUiLCJfdGFraW5nQ3VzdG9tZXIiLCJjbG9ja3dpc2UiLCJyIiwic3RvcCIsImRpcmVjdGlvbiIsIlNIT1dfQ09JTiIsInZhbHVlIiwiYSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7QUFBbUJDLE1BQUFBLHVCLE9BQUFBLHVCOzs7O0FBSGhEQyxNQUFBQSxtQiw4QkFBQUEsbUI7O0FBQ0FDLE1BQUFBLFMsb0JBQUFBLFM7O0FBQ0FDLE1BQUFBLFMsZ0JBQUFBLFM7Ozs7OztBQUdEQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxRLEVBRWpCOztBQUNNQyxNQUFBQSxRLEdBQVcsSUFBSVAsSUFBSixFO0FBQ1hRLE1BQUFBLFMsR0FBWTtBQUFBO0FBQUEsa0NBQVVBLFM7O3FCQUdmQyxHLFdBRFpKLE9BQU8sQ0FBQyxLQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQU1FSyxjLEdBQTRCLEk7Z0JBQzVCQyxPLEdBQVUsSUFBSVgsSUFBSixFO2dCQUNWWSxPLEdBQVUsSUFBSVosSUFBSixFO2dCQUNWYSxVLEdBQWEsQztnQkFDYkMsUyxHQUFZLEs7Z0JBQ1pDLE8sR0FBVSxJQUFJZixJQUFKLEU7Z0JBQ1ZnQixlLEdBQWtCLEM7Z0JBQ2xCQyxlLEdBQWtCLEM7Z0JBQ2xCQyxZLEdBQWUsSUFBSWxCLElBQUosRTtnQkFDZm1CLFcsR0FBYyxDO2dCQUNkQyxZLEdBQWUsRztnQkFDZkMsTyxHQUFVLEs7Z0JBQ1ZDLFUsR0FBYSxLO2dCQUNiQyxXLEdBQWMsSztnQkFDZEMsSSxHQUFpQyxJOzs7Ozs7QUFBTTtrQ0FFL0I7QUFDZDtBQUFBO0FBQUEsNERBQW9CQyxFQUFwQixDQUF1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RztBQUNBO0FBQUE7QUFBQSw0REFBb0IzQyxhQUFwQixDQUFrQ3pCLFNBQVMsQ0FBQ3FFLFNBQTVDLEVBQXVELEtBQUsvQyxJQUFMLENBQVVDLGFBQWpFO0FBQ0Q7OzswQ0FFd0I7QUFDdkIsaUJBQUtULFVBQUwsR0FBa0IsS0FBbEI7O0FBQ0EsaUJBQUtFLElBQUwsQ0FBVXdDLElBQVY7QUFDRCxXLENBRUQ7Ozs7c0NBQ29CYyxLLEVBQWU7QUFDakMsZ0JBQUlDLENBQUMsR0FBR0QsS0FBUjs7QUFDQSxnQkFBSUMsQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNWQSxjQUFBQSxDQUFDLElBQUksR0FBTDtBQUNEOztBQUVELG1CQUFPQSxDQUFQO0FBQ0Q7Ozs7UUE1UHNCaEYsUyxvRkFDdEJPLFE7Ozs7O2lCQUNVLEciLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDdXN0b21FdmVudExpc3RlbmVyIH0gZnJvbSAnLi8uLi9kYXRhL0N1c3RvbUV2ZW50TGlzdGVuZXInO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLy4uL2RhdGEvQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgUm9hZFBvaW50IH0gZnJvbSAnLi9Sb2FkUG9pbnQnO1xyXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIFZlYzMsIHRleHR1cmVVdGlsLCBQYXJ0aWNsZVN5c3RlbUNvbXBvbmVudCB9IGZyb20gXCJjY1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbi8v5byE5Liq5pqC5a2Y5Y+Y6YePLOWboOS4uuiAg+iZkeWIsGpz55qE5YaF5a2Y5py65Yi277yM5omA5Lul5LiN5omT566X5bCG5a6a5LmJ5YaZ5ZyodXBkYXRl6YeM6Z2iXHJcbmNvbnN0IF90ZW1wVmVjID0gbmV3IFZlYzMoKTtcclxuY29uc3QgRXZlbnROYW1lID0gQ29uc3RhbnRzLkV2ZW50TmFtZTtcclxuXHJcbkBjY2NsYXNzKFwiQ2FyXCIpXHJcbmV4cG9ydCBjbGFzcyBDYXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gIEBwcm9wZXJ0eVxyXG4gIG1heFNwZWVkID0gMC4yO1xyXG5cclxuICAvL+iuvue9ruWwj+i9puacneWQkemXrumimFxyXG4gIHByaXZhdGUgX2N1cnJSb2FkUG9pbnQ6IFJvYWRQb2ludCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfcG9pbnRBID0gbmV3IFZlYzMoKTtcclxuICBwcml2YXRlIF9wb2ludEIgPSBuZXcgVmVjMygpO1xyXG4gIHByaXZhdGUgX2N1cnJTcGVlZCA9IDA7XHJcbiAgcHJpdmF0ZSBfaXNNb3ZpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIF9vZmZlY3QgPSBuZXcgVmVjMygpO1xyXG4gIHByaXZhdGUgX29yaWdpblJvdGF0aW9uID0gMDsvL+WIneWni+aXi+i9rOeCuVxyXG4gIHByaXZhdGUgX3RhcmdldFJvdGF0aW9uID0gMDsvL+ebruagh+aXi+i9rOeCuVxyXG4gIHByaXZhdGUgX2NlbnRlclBvaW50ID0gbmV3IFZlYzMoKTsvL+aXi+i9rOS4reW/g+eCuVxyXG4gIHByaXZhdGUgX3JvdE1lYXN1cmUgPSAwOy8v5bqm6YeP5YC8XHJcbiAgcHJpdmF0ZSBfYWNjbGVyYXRpb24gPSAwLjI7Ly/liqDpgJ/luqZcclxuICBwcml2YXRlIF9pc01haW4gPSBmYWxzZTsvL+W9k+WJjeaYr+WQpuaYr+Wwj+i9pu+8jOiAjOmdnmFpXHJcbiAgcHJpdmF0ZSBfaXNJbk9yZGVyID0gZmFsc2U7IC8v5b2T5YmN5piv5ZCm5Zyo6K6i5Y2V5LitXHJcbiAgcHJpdmF0ZSBfaXNCcmVha2luZyA9IGZhbHNlOy8v5piv5ZCm5aSE5LqO5Yi56L2mXHJcbiAgcHJpdmF0ZSBfZ2FzIDogUGFydGljbGVTeXN0ZW1Db21wb25lbnQgPSBudWxsOyAvL+WwvuawlFxyXG5cclxuICBwdWJsaWMgc3RhcnQgKCkge1xyXG4gICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5vbihFdmVudE5hbWUuRklOSVNIX0VEV0FMSywgdGhpcy5fZmluaXNoZWRXYWxrLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyB1cGRhdGUoZHQ6IG51bWJlcikge1xyXG4gICAgaWYgKCF0aGlzLl9pc01vdmluZyB8fCB0aGlzLl9pc0luT3JkZXIpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX29mZmVjdC5zZXQodGhpcy5ub2RlLndvcmxkUG9zaXRpb24pO1xyXG5cclxuICAgIHRoaXMuX2N1cnJTcGVlZCArPSB0aGlzLl9hY2NsZXJhdGlvbiAqIGR0O1xyXG4gICAgaWYgKHRoaXMuX2N1cnJTcGVlZCA+IHRoaXMubWF4U3BlZWQpIHtcclxuICAgICAgdGhpcy5fY3VyclNwZWVkID0gdGhpcy5tYXhTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGhpcy5fY3VyclNwZWVkIDw9IDAuMDAxKSB7XHJcbiAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcblxyXG4gICAgICBpZiAodGhpcy5faXNCcmVha2luZykge1xyXG4gICAgICAgIHRoaXMuX2lzQnJlYWtpbmcgPSB0cnVlO1xyXG4gICAgICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIuZGlzcGF0Y2hFdmVudChFdmVudE5hbWUuRU5EX0JSRUFLSU5HKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHN3aXRjaCAodGhpcy5fY3VyclJvYWRQb2ludC5tb3ZlVHlwZSkge1xyXG4gICAgICBjYXNlIFJvYWRQb2ludC5Sb2FkTW92ZVR5cGUuQkVORDpcclxuICAgICAgICAvL+mcgOimgeaXi+i9rOeahOinkuW6plxyXG4gICAgICAgIGNvbnN0IG9mZnNldFJvdGF0aW9uID0gdGhpcy5fdGFyZ2V0Um90YXRpb24gLSB0aGlzLl9vcmlnaW5Sb3RhdGlvbjtcclxuICAgICAgICAvL+W9k+WJjeW3sue7j+aXi+i9rOeahOinkuW6plxyXG4gICAgICAgIGNvbnN0IGN1cnJSb3RhdGlvbiA9IHRoaXMuX2NvbnZlcnNpb24odGhpcy5ub2RlLmV1bGVyQW5nbGVzLnkpO1xyXG4gICAgICAgIC8v5LiL5LiA56uZ6L+Q5Yqo6KeS5bqm77ya6YCf5bqm5piv6Lef5byn5bqm5oyC6ZKp55qE77yM5omA5Lul5Y+v5Lul55u45LmY5b6X5Yiw5b2T5YmN6L+Q5Yqo55qE6KeS5bqmXHJcbiAgICAgICAgbGV0IG5leHRTdGF0aW9uID0gKGN1cnJSb3RhdGlvbiAtIHRoaXMuX29yaWdpblJvdGF0aW9uKSArICh0aGlzLl9jdXJyU3BlZWQgKiB0aGlzLl9yb3RNZWFzdXJlICogKHRoaXMuX3RhcmdldFJvdGF0aW9uID4gdGhpcy5fb3JpZ2luUm90YXRpb24gPyAxIDogLTEpKTtcclxuICAgICAgICBpZiAoTWF0aC5hYnMobmV4dFN0YXRpb24pID4gTWF0aC5hYnMob2Zmc2V0Um90YXRpb24pKSB7XHJcbiAgICAgICAgICBuZXh0U3RhdGlvbiA9IG9mZnNldFJvdGF0aW9uO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+ecn+ato+imgeaXi+i9rOeahOinkuW6plxyXG4gICAgICAgIGNvbnN0IHRhcmdldCA9IG5leHRTdGF0aW9uICsgdGhpcy5fb3JpZ2luUm90YXRpb247XHJcbiAgICAgICAgX3RlbXBWZWMuc2V0KDAsIHRhcmdldCwgMCk7XHJcbiAgICAgICAgLy/lsI/ovabml4vovaxcclxuICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBfdGVtcFZlYztcclxuXHJcbiAgICAgICAgLy/ov5Dliqjovajov7nvvJog6YCa6L+H6KeS5bqm5rGC5Ye65byn5bqmXHJcbiAgICAgICAgLy8gY29uc3Qgc2luID0gTWF0aC5zaW4obmV4dFN0YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICAvLyBjb25zdCBjb3MgPSBNYXRoLmNvcyhuZXh0U3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgIC8vIGNvbnN0IHhMZW5ndGggPSB0aGlzLl9wb2ludEEueCAtIHRoaXMuX2NlbnRlclBvaW50Lng7XHJcbiAgICAgICAgLy8gY29uc3Qgekxlbmd0aCA9IHRoaXMuX3BvaW50QS56IC0gdGhpcy5fY2VudGVyUG9pbnQuejtcclxuICAgICAgICAvLyBjb25zdCB4UG9zID0geExlbmd0aCAqIGNvcyArIHpMZW5ndGggKiBzaW4gKyB0aGlzLl9jZW50ZXJQb2ludC54O1xyXG4gICAgICAgIC8vIGNvbnN0IHpQb3MgPSAteExlbmd0aCAqIHNpbiArIHpMZW5ndGggKiBjb3MgKyB0aGlzLl9jZW50ZXJQb2ludC56O1xyXG4gICAgICAgIC8vIHRoaXMuX29mZmVjdC5zZXQoeFBvcywgMCwgelBvcyk7XHJcblxyXG4gICAgICAgIC8v562J5LqO5aaC5LiK5Luj56CB5pWI5p6c77ya5Y+v5Lul55So5byV5pOO5YaF6YOoYXBpOiByb3RhdGVZ5a6e546w57uV5Lit5b+D5peL6L2sXHJcbiAgICAgICAgVmVjMy5yb3RhdGVZKHRoaXMuX29mZmVjdCwgdGhpcy5fcG9pbnRBLCB0aGlzLl9jZW50ZXJQb2ludCwgbmV4dFN0YXRpb24gKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICBjb25zdCB6ID0gdGhpcy5fcG9pbnRCLnogLSB0aGlzLl9wb2ludEEuejtcclxuICAgICAgICBpZiAoeiAhPT0gMCkge1xyXG4gICAgICAgICAgaWYgKHogPiAwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX29mZmVjdC56ICs9IHRoaXMuX2N1cnJTcGVlZDtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX29mZmVjdC56ID4gdGhpcy5fcG9pbnRCLnopIHtcclxuICAgICAgICAgICAgICB0aGlzLl9vZmZlY3QueiA9IHRoaXMuX3BvaW50Qi56O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLl9vZmZlY3QueiAtPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZmZlY3QueiA8IHRoaXMuX3BvaW50Qi56KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnogPSB0aGlzLl9wb2ludEIuejtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fcG9pbnRCLnggLSB0aGlzLl9wb2ludEEueDtcclxuICAgICAgICAgIGlmICh4ID4gMCkge1xyXG4gICAgICAgICAgICB0aGlzLl9vZmZlY3QueCArPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9vZmZlY3QueCA+IHRoaXMuX3BvaW50Qi54KSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnggPSB0aGlzLl9wb2ludEIueDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnggLT0gdGhpcy5fY3VyclNwZWVkO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fb2ZmZWN0LnggPCB0aGlzLl9wb2ludEIueCkge1xyXG4gICAgICAgICAgICAgIHRoaXMuX29mZmVjdC54ID0gdGhpcy5fcG9pbnRCLng7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICB0aGlzLm5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9vZmZlY3QpO1xyXG4gICAgVmVjMy5zdWJ0cmFjdChfdGVtcFZlYywgdGhpcy5fcG9pbnRCLCB0aGlzLl9vZmZlY3QpO1xyXG4gICAgbGV0IGxlbiA9IF90ZW1wVmVjLmxlbmd0aCgpO1xyXG4gICAgaWYgKGxlbiA8PSAwLjAxKSB7XHJcbiAgICAgIHRoaXMuX2Fycml2YWxTdGF0aW9uKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+iHquW3seaOpeaUtuW8gOWni+eCuVxyXG4gIHB1YmxpYyBzZXRFbnRyeShlbnRyeTogTm9kZSwgaXNNYWluID0gZmFsc2UpIHtcclxuICAgIHRoaXMubm9kZS5zZXRXb3JsZFBvc2l0aW9uKGVudHJ5LndvcmxkUG9zaXRpb24pO1xyXG4gICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IGVudHJ5LmdldENvbXBvbmVudChSb2FkUG9pbnQpO1xyXG4gICAgdGhpcy5faXNNYWluID0gaXNNYWluO1xyXG4gICAgaWYgKCF0aGlzLl9jdXJyUm9hZFBvaW50KSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignVGhlcmUgaXMgbm8gUm9hZFBvaW50IGluICcgKyBlbnRyeS5uYW1lKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BvaW50QS5zZXQoZW50cnkud29ybGRQb3NpdGlvbik7XHJcbiAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgLy/liKTmlq3lvZPliY3mnJ3lkJFcclxuICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgaWYgKHogIT09IDApIHtcclxuICAgICAgaWYgKHogPCAwKSB7XHJcbiAgICAgICAgLy/mrKfmi4nop5LvvIwg5aaC5p6c5bCP5LqOMOWImeS4jeWBmuaUueWPmFxyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgMTgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeCA9IHRoaXMuX3BvaW50Qi54IC0gdGhpcy5fcG9pbnRBLng7XHJcbiAgICAgIGlmICh4ID4gMCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIDI3MCwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgOTAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMuX2lzTWFpbikge1xyXG4gICAgICBjb25zdCBnYXNOb2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKCdnYXMnKTtcclxuICAgICAgdGhpcy5fZ2FzID0gZ2FzTm9kZS5nZXRDb21wb25lbnQoUGFydGljbGVTeXN0ZW1Db21wb25lbnQpO1xyXG4gICAgICB0aGlzLl9nYXMucGxheSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0YXJ0UnVubmluZygpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50KSB7XHJcbiAgICAgIHRoaXMuX2lzTW92aW5nID0gdHJ1ZTtcclxuICAgICAgdGhpcy5fY3VyclNwZWVkID0gMDtcclxuICAgICAgdGhpcy5fYWNjbGVyYXRpb24gPSAwLjI7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RvcFJ1bm5pbmcoKSB7XHJcbiAgICAvLyB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgdGhpcy5fYWNjbGVyYXRpb24gLT0gMC4zO1xyXG5cclxuICAgIC8v5omn6KGM5Yi56L2mXHJcbiAgICBDdXN0b21FdmVudExpc3RlbmVyLmRpc3BhdGNoRXZlbnQoRXZlbnROYW1lLlNUQVJUX0JSRUFLSU5HLCB0aGlzLm5vZGUpO1xyXG4gICAgdGhpcy5faXNCcmVha2luZyA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hcnJpdmFsU3RhdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhcnJpdmFsLi4uLicpO1xyXG4gICAgdGhpcy5fcG9pbnRBLnNldCh0aGlzLl9wb2ludEIpO1xyXG4gICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24uZ2V0Q29tcG9uZW50KFJvYWRQb2ludCk7XHJcbiAgICBpZiAodGhpcy5fY3VyclJvYWRQb2ludC5uZXh0U3RhdGlvbikge1xyXG4gICAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgICBpZiAodGhpcy5faXNNYWluKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2lzQnJlYWtpbmcpIHtcclxuICAgICAgICAgIHRoaXMuX2lzQnJlYWtpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5FTkRfQlJFQUtJTkcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQudHlwZSA9PT0gUm9hZFBvaW50LlJvYWRQb2ludFR5cGUuR1JFRVRJTkcpIHtcclxuICAgICAgICAgIHRoaXMuX2dyZWV0aW5nQ3VzdG9tZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQudHlwZSA9PSBSb2FkUG9pbnQuUm9hZFBvaW50VHlwZS5HT09EQllFKSB7XHJcbiAgICAgICAgICB0aGlzLl90YWtpbmdDdXN0b21lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy/liLDovr7mn5DkuKrnq5nkuobkuYvlkI7miY3lhrPlrpror7TopoHkuI3opoHml4vovaxcclxuICAgICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQubW92ZVR5cGUgPT09IFJvYWRQb2ludC5Sb2FkTW92ZVR5cGUuQkVORCkge1xyXG4gICAgICAgIC8v5qC55o2u6aG65pe26ZKI6YCG5pe26ZKI5Zub56eN5oOF5Ya15rGC5Ye65peL6L2s55qE5Lit5b+D5L2N572uXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQuY2xvY2t3aXNlKSB7Ly/pobrml7bpkohcclxuICAgICAgICAgIHRoaXMuX29yaWdpblJvdGF0aW9uID0gdGhpcy5fY29udmVyc2lvbih0aGlzLm5vZGUuZXVsZXJBbmdsZXMueSk7XHJcbiAgICAgICAgICB0aGlzLl90YXJnZXRSb3RhdGlvbiA9IHRoaXMuX29yaWdpblJvdGF0aW9uIC0gOTA7XHJcblxyXG4gICAgICAgICAgLy/pobrml7bpkogxXHJcbiAgICAgICAgICBpZiAoKHRoaXMuX3BvaW50Qi56IDwgdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPiB0aGlzLl9wb2ludEEueCkgfHwgKHRoaXMuX3BvaW50Qi56ID4gdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPCB0aGlzLl9wb2ludEEueCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2VudGVyUG9pbnQuc2V0KHRoaXMuX3BvaW50Qi54LCAwLCB0aGlzLl9wb2ludEEueik7XHJcbiAgICAgICAgICB9IGVsc2Ugey8v6aG65pe26ZKIMlxyXG4gICAgICAgICAgICB0aGlzLl9jZW50ZXJQb2ludC5zZXQodGhpcy5fcG9pbnRBLngsIDAsIHRoaXMuX3BvaW50Qi56KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgdGhpcy5fb3JpZ2luUm90YXRpb24gPSB0aGlzLl9jb252ZXJzaW9uKHRoaXMubm9kZS5ldWxlckFuZ2xlcy55KTtcclxuICAgICAgICAgIHRoaXMuX3RhcmdldFJvdGF0aW9uID0gdGhpcy5fb3JpZ2luUm90YXRpb24gKyA5MDtcclxuXHJcbiAgICAgICAgICAvL+mAhuaXtumSiDFcclxuICAgICAgICAgIGlmICgodGhpcy5fcG9pbnRCLnogPiB0aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA+IHRoaXMuX3BvaW50QS54KSB8fCAodGhpcy5fcG9pbnRCLnogPCB0aGlzLl9wb2ludEEueiAmJiB0aGlzLl9wb2ludEIueCA8IHRoaXMuX3BvaW50QS54KSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jZW50ZXJQb2ludC5zZXQodGhpcy5fcG9pbnRCLngsIDAsIHRoaXMuX3BvaW50QS56KTtcclxuICAgICAgICAgIH0gZWxzZSB7Ly/pgIbml7bpkogyXHJcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlclBvaW50LnNldCh0aGlzLl9wb2ludEEueCwgMCwgdGhpcy5fcG9pbnRCLnopO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy/msYLml4vovazljYrlvoRcclxuICAgICAgICBWZWMzLnN1YnRyYWN0KF90ZW1wVmVjLCB0aGlzLl9wb2ludEEsIHRoaXMuX2NlbnRlclBvaW50KTtcclxuICAgICAgICBjb25zdCByID0gX3RlbXBWZWMubGVuZ3RoKCk7XHJcbiAgICAgICAgdGhpcy5fcm90TWVhc3VyZSA9IDkwIC8gKE1hdGguUEkgKiByIC8gMik7Ly/lvpflh7rkuIDluqbnrYnkuo7lpJrlsJHlvKfluqZcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcclxuICAgICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IG51bGw7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9ncmVldGluZ0N1c3RvbWVyKCkge1xyXG4gICAgdGhpcy5faXNJbk9yZGVyID0gdHJ1ZTtcclxuICAgIHRoaXMuX2N1cnJTcGVlZCA9IDA7XHJcbiAgICB0aGlzLl9nYXMuc3RvcCgpO1xyXG4gICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5HUkVFVElORywgdGhpcy5ub2RlLndvcmxkUG9zaXRpb24sIHRoaXMuX2N1cnJSb2FkUG9pbnQuZGlyZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3Rha2luZ0N1c3RvbWVyKCkge1xyXG4gICAgdGhpcy5faXNJbk9yZGVyID0gdHJ1ZTtcclxuICAgIHRoaXMuX2N1cnJTcGVlZCA9IDA7XHJcbiAgICB0aGlzLl9nYXMuc3RvcCgpO1xyXG4gICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5HT09EQllFLCB0aGlzLm5vZGUud29ybGRQb3NpdGlvbiwgdGhpcy5fY3VyclJvYWRQb2ludC5kaXJlY3Rpb24pO1xyXG4gICAgQ3VzdG9tRXZlbnRMaXN0ZW5lci5kaXNwYXRjaEV2ZW50KEV2ZW50TmFtZS5TSE9XX0NPSU4sIHRoaXMubm9kZS53b3JsZFBvc2l0aW9uKTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2ZpbmlzaGVkV2FsayAoKSB7XHJcbiAgICB0aGlzLl9pc0luT3JkZXIgPSBmYWxzZTtcclxuICAgIHRoaXMuX2dhcy5wbGF5KCk7XHJcbiAgfVxyXG5cclxuICAvL+iuqeaXi+i9rOinkuW6puWPmOaIkOato+WAvFxyXG4gIHByaXZhdGUgX2NvbnZlcnNpb24odmFsdWU6IG51bWJlcikge1xyXG4gICAgbGV0IGEgPSB2YWx1ZTtcclxuICAgIGlmIChhIDw9IDApIHtcclxuICAgICAgYSArPSAzNjA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=