System.register(["cc", "code-quality:cr", "./RoadPoint.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, RoadPoint, _decorator, Component, Vec3, _dec, _class, _class2, _descriptor, _temp, _crd, ccclass, property, _tempVec, Car;

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
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_RoadPointJs) {
      RoadPoint = _RoadPointJs.RoadPoint;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "258d0EDN41Hv4IBFBevdcES", "Car", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property; //弄个暂存变量,因为考虑到js的内存机制，所以不打算将定义写在update里面

      _tempVec = new Vec3();

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
          return _this;
        }

        _createClass(Car, [{
          key: "update",
          value: function update(dt) {
            if (this._isMoving) {
              this._offect.set(this.node.worldPosition);

              this._currSpeed += this._accleration * dt;

              if (this._currSpeed > this.maxSpeed) {
                this._currSpeed = this.maxSpeed;
              }

              if (this._currSpeed <= 0.001) {
                this._isMoving = false;
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
            this._accleration -= 0.3;
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
          value: function _greetingCustomer() {}
        }, {
          key: "_takingCustomer",
          value: function _takingCustomer() {} //让旋转角度变成正值

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiUm9hZFBvaW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiX3RlbXBWZWMiLCJDYXIiLCJfY3VyclJvYWRQb2ludCIsIl9wb2ludEEiLCJfcG9pbnRCIiwiX2N1cnJTcGVlZCIsIl9pc01vdmluZyIsIl9vZmZlY3QiLCJfb3JpZ2luUm90YXRpb24iLCJfdGFyZ2V0Um90YXRpb24iLCJfY2VudGVyUG9pbnQiLCJfcm90TWVhc3VyZSIsIl9hY2NsZXJhdGlvbiIsIl9pc01haW4iLCJkdCIsInNldCIsIm5vZGUiLCJ3b3JsZFBvc2l0aW9uIiwibWF4U3BlZWQiLCJtb3ZlVHlwZSIsIlJvYWRNb3ZlVHlwZSIsIkJFTkQiLCJvZmZzZXRSb3RhdGlvbiIsImN1cnJSb3RhdGlvbiIsIl9jb252ZXJzaW9uIiwiZXVsZXJBbmdsZXMiLCJ5IiwibmV4dFN0YXRpb24iLCJNYXRoIiwiYWJzIiwidGFyZ2V0Iiwicm90YXRlWSIsIlBJIiwieiIsIngiLCJzZXRXb3JsZFBvc2l0aW9uIiwic3VidHJhY3QiLCJsZW4iLCJsZW5ndGgiLCJfYXJyaXZhbFN0YXRpb24iLCJlbnRyeSIsImlzTWFpbiIsImdldENvbXBvbmVudCIsImNvbnNvbGUiLCJ3YXJuIiwibmFtZSIsImxvZyIsInR5cGUiLCJSb2FkUG9pbnRUeXBlIiwiR1JFRVRJTkciLCJfZ3JlZXRpbmdDdXN0b21lciIsIkdPT0RCWUUiLCJfdGFraW5nQ3VzdG9tZXIiLCJjbG9ja3dpc2UiLCJyIiwidmFsdWUiLCJhIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQWlCQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFE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b0JBQU00QyxDQUFDLEdBQUd0RCxRQUFRLENBQUNzQyxNQUFULEVBQVY7O0FBQ0EscUJBQUszQixXQUFMLEdBQW1CLE1BQU1pQixJQUFJLENBQUNJLEVBQUwsR0FBVXNCLENBQVYsR0FBYyxDQUFwQixDQUFuQixDQTNCZ0UsQ0EyQnRCO0FBQzNDO0FBQ0YsYUF6Q0QsTUF5Q087QUFDTCxtQkFBS2hELFNBQUwsR0FBaUIsS0FBakI7QUFDQSxtQkFBS0osY0FBTCxHQUFzQixJQUF0QjtBQUNEO0FBQ0Y7Ozs4Q0FFNEIsQ0FFNUI7Ozs0Q0FFeUIsQ0FFekIsQyxDQUVEOzs7O3NDQUNvQnFELEssRUFBZTtBQUNqQyxnQkFBSUMsQ0FBQyxHQUFHRCxLQUFSOztBQUNBLGdCQUFJQyxDQUFDLElBQUksQ0FBVCxFQUFZO0FBQ1JBLGNBQUFBLENBQUMsSUFBSSxHQUFMO0FBQ0g7O0FBRUQsbUJBQU9BLENBQVA7QUFDRDs7OztRQW5Oc0I3RCxTLG9GQUN0QkksUTs7Ozs7aUJBQ1UsRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvYWRQb2ludCB9IGZyb20gJy4vUm9hZFBvaW50JztcclxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzIH0gZnJvbSBcImNjXCI7XHJcblxyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuLy/lvITkuKrmmoLlrZjlj5jph48s5Zug5Li66ICD6JmR5YiwanPnmoTlhoXlrZjmnLrliLbvvIzmiYDku6XkuI3miZPnrpflsIblrprkuYnlhpnlnKh1cGRhdGXph4zpnaJcclxuY29uc3QgX3RlbXBWZWMgPSBuZXcgVmVjMygpO1xyXG5cclxuQGNjY2xhc3MoXCJDYXJcIilcclxuZXhwb3J0IGNsYXNzIENhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgQHByb3BlcnR5XHJcbiAgbWF4U3BlZWQgPSAwLjI7XHJcblxyXG4gIC8v6K6+572u5bCP6L2m5pyd5ZCR6Zeu6aKYXHJcbiAgcHJpdmF0ZSBfY3VyclJvYWRQb2ludDogUm9hZFBvaW50ID0gbnVsbDtcclxuICBwcml2YXRlIF9wb2ludEEgPSBuZXcgVmVjMygpO1xyXG4gIHByaXZhdGUgX3BvaW50QiA9IG5ldyBWZWMzKCk7XHJcbiAgcHJpdmF0ZSBfY3VyclNwZWVkID0gMDtcclxuICBwcml2YXRlIF9pc01vdmluZyA9IGZhbHNlO1xyXG4gIHByaXZhdGUgX29mZmVjdCA9IG5ldyBWZWMzKCk7XHJcbiAgcHJpdmF0ZSBfb3JpZ2luUm90YXRpb24gPSAwOy8v5Yid5aeL5peL6L2s54K5XHJcbiAgcHJpdmF0ZSBfdGFyZ2V0Um90YXRpb24gPSAwOy8v55uu5qCH5peL6L2s54K5XHJcbiAgcHJpdmF0ZSBfY2VudGVyUG9pbnQgPSBuZXcgVmVjMygpOy8v5peL6L2s5Lit5b+D54K5XHJcbiAgcHJpdmF0ZSBfcm90TWVhc3VyZSA9IDA7Ly/luqbph4/lgLxcclxuICBwcml2YXRlIF9hY2NsZXJhdGlvbiA9IDAuMjsvL+WKoOmAn+W6plxyXG4gIHByaXZhdGUgX2lzTWFpbiA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl9pc01vdmluZykge1xyXG4gICAgICB0aGlzLl9vZmZlY3Quc2V0KHRoaXMubm9kZS53b3JsZFBvc2l0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMuX2N1cnJTcGVlZCArPSB0aGlzLl9hY2NsZXJhdGlvbiAqIGR0O1xyXG4gICAgICBpZiAodGhpcy5fY3VyclNwZWVkID4gdGhpcy5tYXhTcGVlZCkge1xyXG4gICAgICAgIHRoaXMuX2N1cnJTcGVlZCA9IHRoaXMubWF4U3BlZWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLl9jdXJyU3BlZWQgPD0gMC4wMDEpIHtcclxuICAgICAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBzd2l0Y2ggKHRoaXMuX2N1cnJSb2FkUG9pbnQubW92ZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFJvYWRQb2ludC5Sb2FkTW92ZVR5cGUuQkVORDpcclxuICAgICAgICAgIC8v6ZyA6KaB5peL6L2s55qE6KeS5bqmXHJcbiAgICAgICAgICBjb25zdCBvZmZzZXRSb3RhdGlvbiA9IHRoaXMuX3RhcmdldFJvdGF0aW9uIC0gdGhpcy5fb3JpZ2luUm90YXRpb247XHJcbiAgICAgICAgICAvL+W9k+WJjeW3sue7j+aXi+i9rOeahOinkuW6plxyXG4gICAgICAgICAgY29uc3QgY3VyclJvdGF0aW9uID0gdGhpcy5fY29udmVyc2lvbih0aGlzLm5vZGUuZXVsZXJBbmdsZXMueSk7XHJcbiAgICAgICAgICAvL+S4i+S4gOermei/kOWKqOinkuW6pu+8mumAn+W6puaYr+i3n+W8p+W6puaMgumSqeeahO+8jOaJgOS7peWPr+S7peebuOS5mOW+l+WIsOW9k+WJjei/kOWKqOeahOinkuW6plxyXG4gICAgICAgICAgbGV0IG5leHRTdGF0aW9uID0gKGN1cnJSb3RhdGlvbiAtIHRoaXMuX29yaWdpblJvdGF0aW9uKSArICh0aGlzLl9jdXJyU3BlZWQgKiB0aGlzLl9yb3RNZWFzdXJlICogKHRoaXMuX3RhcmdldFJvdGF0aW9uID4gdGhpcy5fb3JpZ2luUm90YXRpb24gPyAxOiAtMSkpO1xyXG4gICAgICAgICAgaWYgKE1hdGguYWJzKG5leHRTdGF0aW9uKSA+IE1hdGguYWJzKG9mZnNldFJvdGF0aW9uKSkge1xyXG4gICAgICAgICAgICBuZXh0U3RhdGlvbiA9IG9mZnNldFJvdGF0aW9uO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgLy/nnJ/mraPopoHml4vovaznmoTop5LluqZcclxuICAgICAgICAgIGNvbnN0IHRhcmdldCA9IG5leHRTdGF0aW9uICsgdGhpcy5fb3JpZ2luUm90YXRpb247XHJcbiAgICAgICAgICBfdGVtcFZlYy5zZXQoMCwgdGFyZ2V0LCAwKTtcclxuICAgICAgICAgIC8v5bCP6L2m5peL6L2sXHJcbiAgICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBfdGVtcFZlYztcclxuXHJcbiAgICAgICAgICAvL+i/kOWKqOi9qOi/ue+8miDpgJrov4fop5LluqbmsYLlh7rlvKfluqZcclxuICAgICAgICAgIC8vIGNvbnN0IHNpbiA9IE1hdGguc2luKG5leHRTdGF0aW9uICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICAgICAgICAvLyBjb25zdCBjb3MgPSBNYXRoLmNvcyhuZXh0U3RhdGlvbiAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgICAgICAgLy8gY29uc3QgeExlbmd0aCA9IHRoaXMuX3BvaW50QS54IC0gdGhpcy5fY2VudGVyUG9pbnQueDtcclxuICAgICAgICAgIC8vIGNvbnN0IHpMZW5ndGggPSB0aGlzLl9wb2ludEEueiAtIHRoaXMuX2NlbnRlclBvaW50Lno7XHJcbiAgICAgICAgICAvLyBjb25zdCB4UG9zID0geExlbmd0aCAqIGNvcyArIHpMZW5ndGggKiBzaW4gKyB0aGlzLl9jZW50ZXJQb2ludC54O1xyXG4gICAgICAgICAgLy8gY29uc3QgelBvcyA9IC14TGVuZ3RoICogc2luICsgekxlbmd0aCAqIGNvcyArIHRoaXMuX2NlbnRlclBvaW50Lno7XHJcbiAgICAgICAgICAvLyB0aGlzLl9vZmZlY3Quc2V0KHhQb3MsIDAsIHpQb3MpO1xyXG5cclxuICAgICAgICAgIC8v562J5LqO5aaC5LiK5Luj56CB5pWI5p6c77ya5Y+v5Lul55So5byV5pOO5YaF6YOoYXBpOiByb3RhdGVZ5a6e546w57uV5Lit5b+D5peL6L2sXHJcbiAgICAgICAgICBWZWMzLnJvdGF0ZVkodGhpcy5fb2ZmZWN0LCB0aGlzLl9wb2ludEEsIHRoaXMuX2NlbnRlclBvaW50LCBuZXh0U3RhdGlvbipNYXRoLlBJLzE4MCk7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgY29uc3QgeiA9IHRoaXMuX3BvaW50Qi56IC0gdGhpcy5fcG9pbnRBLno7XHJcbiAgICAgICAgICBpZiAoeiAhPT0gMCkge1xyXG4gICAgICAgICAgICBpZiAoeiA+IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLl9vZmZlY3QueiArPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX29mZmVjdC56ID4gdGhpcy5fcG9pbnRCLnopIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29mZmVjdC56ID0gdGhpcy5fcG9pbnRCLno7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuX29mZmVjdC56IC09IHRoaXMuX2N1cnJTcGVlZDtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5fb2ZmZWN0LnogPCB0aGlzLl9wb2ludEIueikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnogPSB0aGlzLl9wb2ludEIuejtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHggPSB0aGlzLl9wb2ludEIueCAtIHRoaXMuX3BvaW50QS54O1xyXG4gICAgICAgICAgICBpZiAoeCA+IDApIHtcclxuICAgICAgICAgICAgICB0aGlzLl9vZmZlY3QueCArPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX29mZmVjdC54ID4gdGhpcy5fcG9pbnRCLngpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29mZmVjdC54ID0gdGhpcy5fcG9pbnRCLng7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRoaXMuX29mZmVjdC54IC09IHRoaXMuX2N1cnJTcGVlZDtcclxuICAgICAgICAgICAgICBpZiAodGhpcy5fb2ZmZWN0LnggPCB0aGlzLl9wb2ludEIueCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnggPSB0aGlzLl9wb2ludEIueDtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubm9kZS5zZXRXb3JsZFBvc2l0aW9uKHRoaXMuX29mZmVjdCk7XHJcbiAgICAgIFZlYzMuc3VidHJhY3QoX3RlbXBWZWMsIHRoaXMuX3BvaW50QiwgdGhpcy5fb2ZmZWN0KTtcclxuICAgICAgbGV0IGxlbiA9IF90ZW1wVmVjLmxlbmd0aCgpO1xyXG4gICAgICBpZiAobGVuIDw9IDAuMDEpIHtcclxuICAgICAgICB0aGlzLl9hcnJpdmFsU3RhdGlvbigpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvL+iHquW3seaOpeaUtuW8gOWni+eCuVxyXG4gIHB1YmxpYyBzZXRFbnRyeShlbnRyeTogTm9kZSwgaXNNYWluID0gZmFsc2UpIHtcclxuICAgIHRoaXMubm9kZS5zZXRXb3JsZFBvc2l0aW9uKGVudHJ5LndvcmxkUG9zaXRpb24pO1xyXG4gICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IGVudHJ5LmdldENvbXBvbmVudChSb2FkUG9pbnQpO1xyXG4gICAgdGhpcy5faXNNYWluID0gaXNNYWluO1xyXG4gICAgaWYgKCF0aGlzLl9jdXJyUm9hZFBvaW50KSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignVGhlcmUgaXMgbm8gUm9hZFBvaW50IGluICcgKyBlbnRyeS5uYW1lKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BvaW50QS5zZXQoZW50cnkud29ybGRQb3NpdGlvbik7XHJcbiAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgLy/liKTmlq3lvZPliY3mnJ3lkJFcclxuICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgaWYgKHogIT09IDApIHtcclxuICAgICAgaWYgKHogPCAwKSB7XHJcbiAgICAgICAgLy/mrKfmi4nop5LvvIwg5aaC5p6c5bCP5LqOMOWImeS4jeWBmuaUueWPmFxyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgMTgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeCA9IHRoaXMuX3BvaW50Qi54IC0gdGhpcy5fcG9pbnRBLng7XHJcbiAgICAgIGlmICh4ID4gMCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIDI3MCwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgOTAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnRSdW5uaW5nKCkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQpIHtcclxuICAgICAgdGhpcy5faXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgICB0aGlzLl9jdXJyU3BlZWQgPSAwO1xyXG4gICAgICB0aGlzLl9hY2NsZXJhdGlvbiA9IDAuMjtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHB1YmxpYyBzdG9wUnVubmluZygpIHtcclxuICAgIC8vIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICB0aGlzLl9hY2NsZXJhdGlvbiAtPSAwLjM7XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9hcnJpdmFsU3RhdGlvbigpIHtcclxuICAgIGNvbnNvbGUubG9nKCdhcnJpdmFsLi4uLicpO1xyXG4gICAgdGhpcy5fcG9pbnRBLnNldCh0aGlzLl9wb2ludEIpO1xyXG4gICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24uZ2V0Q29tcG9uZW50KFJvYWRQb2ludCk7XHJcbiAgICBpZiAodGhpcy5fY3VyclJvYWRQb2ludC5uZXh0U3RhdGlvbikge1xyXG4gICAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgICBpZiAodGhpcy5faXNNYWluKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQudHlwZSA9PT0gUm9hZFBvaW50LlJvYWRQb2ludFR5cGUuR1JFRVRJTkcpIHtcclxuICAgICAgICAgIHRoaXMuX2dyZWV0aW5nQ3VzdG9tZXIoKTtcclxuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQudHlwZSA9PSBSb2FkUG9pbnQuUm9hZFBvaW50VHlwZS5HT09EQllFKSB7XHJcbiAgICAgICAgICB0aGlzLl90YWtpbmdDdXN0b21lcigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgLy/liLDovr7mn5DkuKrnq5nkuobkuYvlkI7miY3lhrPlrpror7TopoHkuI3opoHml4vovaxcclxuICAgICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQubW92ZVR5cGUgPT09IFJvYWRQb2ludC5Sb2FkTW92ZVR5cGUuQkVORCkge1xyXG4gICAgICAgIC8v5qC55o2u6aG65pe26ZKI6YCG5pe26ZKI5Zub56eN5oOF5Ya15rGC5Ye65peL6L2s55qE5Lit5b+D5L2N572uXHJcbiAgICAgICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQuY2xvY2t3aXNlKSB7Ly/pobrml7bpkohcclxuICAgICAgICAgIHRoaXMuX29yaWdpblJvdGF0aW9uID0gdGhpcy5fY29udmVyc2lvbih0aGlzLm5vZGUuZXVsZXJBbmdsZXMueSk7XHJcbiAgICAgICAgICB0aGlzLl90YXJnZXRSb3RhdGlvbiA9IHRoaXMuX29yaWdpblJvdGF0aW9uIC0gOTA7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIC8v6aG65pe26ZKIMVxyXG4gICAgICAgICAgaWYgKCh0aGlzLl9wb2ludEIueiA8IHRoaXMuX3BvaW50QS56ICYmIHRoaXMuX3BvaW50Qi54ID4gdGhpcy5fcG9pbnRBLngpIHx8ICh0aGlzLl9wb2ludEIueiA+IHRoaXMuX3BvaW50QS56ICYmIHRoaXMuX3BvaW50Qi54IDwgdGhpcy5fcG9pbnRBLngpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2NlbnRlclBvaW50LnNldCh0aGlzLl9wb2ludEIueCwgMCwgdGhpcy5fcG9pbnRBLnopO1xyXG4gICAgICAgICAgfSBlbHNlIHsvL+mhuuaXtumSiDJcclxuICAgICAgICAgICAgdGhpcy5fY2VudGVyUG9pbnQuc2V0KHRoaXMuX3BvaW50QS54LCAwLCB0aGlzLl9wb2ludEIueik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMuX29yaWdpblJvdGF0aW9uID0gdGhpcy5fY29udmVyc2lvbih0aGlzLm5vZGUuZXVsZXJBbmdsZXMueSk7XHJcbiAgICAgICAgICB0aGlzLl90YXJnZXRSb3RhdGlvbiA9IHRoaXMuX29yaWdpblJvdGF0aW9uICsgOTA7XHJcblxyXG4gICAgICAgICAgLy/pgIbml7bpkogxXHJcbiAgICAgICAgICBpZiAoKHRoaXMuX3BvaW50Qi56ID4gdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPiB0aGlzLl9wb2ludEEueCkgfHwgKHRoaXMuX3BvaW50Qi56IDwgdGhpcy5fcG9pbnRBLnogJiYgdGhpcy5fcG9pbnRCLnggPCB0aGlzLl9wb2ludEEueCkpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2VudGVyUG9pbnQuc2V0KHRoaXMuX3BvaW50Qi54LCAwLCB0aGlzLl9wb2ludEEueik7XHJcbiAgICAgICAgICB9IGVsc2Ugey8v6YCG5pe26ZKIMlxyXG4gICAgICAgICAgICB0aGlzLl9jZW50ZXJQb2ludC5zZXQodGhpcy5fcG9pbnRBLngsIDAsIHRoaXMuX3BvaW50Qi56KTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8v5rGC5peL6L2s5Y2K5b6EXHJcbiAgICAgICAgVmVjMy5zdWJ0cmFjdChfdGVtcFZlYywgdGhpcy5fcG9pbnRBLCB0aGlzLl9jZW50ZXJQb2ludCk7XHJcbiAgICAgICAgY29uc3QgciA9IF90ZW1wVmVjLmxlbmd0aCgpO1xyXG4gICAgICAgIHRoaXMuX3JvdE1lYXN1cmUgPSA5MCAvIChNYXRoLlBJICogciAvIDIpOy8v5b6X5Ye65LiA5bqm562J5LqO5aSa5bCR5byn5bqmXHJcbiAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfZ3JlZXRpbmdDdXN0b21lciAoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSBfdGFraW5nQ3VzdG9tZXIoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgLy/orqnml4vovazop5Lluqblj5jmiJDmraPlgLxcclxuICBwcml2YXRlIF9jb252ZXJzaW9uKHZhbHVlOiBudW1iZXIpIHtcclxuICAgIGxldCBhID0gdmFsdWU7XHJcbiAgICBpZiAoYSA8PSAwKSB7XHJcbiAgICAgICAgYSArPSAzNjA7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGE7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=