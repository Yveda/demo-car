System.register(["cc", "code-quality:cr", "./RoadPoint.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, RoadPoint, _decorator, Component, Vec3, _dec, _class, _temp, _crd, ccclass, property, _tempVec, Car;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "./RoadPoint", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
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
      property = _decorator.property;
      _tempVec = new Vec3();

      _export("Car", Car = (_dec = ccclass("Car"), _dec(_class = (_temp =
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
          _this._currRoadPoint = null;
          _this._pointA = new Vec3();
          _this._pointB = new Vec3();
          _this._currSpeed = 0.1;
          _this._isMoving = false;
          _this._offect = new Vec3();
          return _this;
        }

        _createClass(Car, [{
          key: "update",
          value: function update(dt) {
            if (this._isMoving) {
              this._offect.set(this.node.worldPosition);

              switch (this._currRoadPoint.moveType) {
                // case: RoadPoint.roadMoveType.BEND:
                //   break;
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

              if (_tempVec.length() <= 0.01) {
                this._arrivalStation();
              }
            }
          } //自己接收开始点

        }, {
          key: "setEntry",
          value: function setEntry(entry) {
            this.node.setWorldPosition(entry.worldPosition);
            this._currRoadPoint = entry.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
              error: Error()
            }), RoadPoint) : RoadPoint);

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
              var x = this._pointB.x - this._pointB.x;

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
            }
          }
        }, {
          key: "stopRunning",
          value: function stopRunning() {
            this._isMoving = false;
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
            } else {
              this._isMoving = false;
              this._currRoadPoint = null;
            }
          }
        }]);

        return Car;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiUm9hZFBvaW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiX3RlbXBWZWMiLCJDYXIiLCJfY3VyclJvYWRQb2ludCIsIl9wb2ludEEiLCJfcG9pbnRCIiwiX2N1cnJTcGVlZCIsIl9pc01vdmluZyIsIl9vZmZlY3QiLCJkdCIsInNldCIsIm5vZGUiLCJ3b3JsZFBvc2l0aW9uIiwibW92ZVR5cGUiLCJ6IiwieCIsInNldFdvcmxkUG9zaXRpb24iLCJzdWJ0cmFjdCIsImxlbmd0aCIsIl9hcnJpdmFsU3RhdGlvbiIsImVudHJ5IiwiZ2V0Q29tcG9uZW50IiwiY29uc29sZSIsIndhcm4iLCJuYW1lIiwibmV4dFN0YXRpb24iLCJldWxlckFuZ2xlcyIsImxvZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1NBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTs7OztBQUQ3QkMsTUFBQUEsUyxnQkFBQUEsUzs7Ozs7O0FBR0RDLE1BQUFBLE8sR0FBc0JKLFUsQ0FBdEJJLE87QUFBU0MsTUFBQUEsUSxHQUFhTCxVLENBQWJLLFE7QUFDWEMsTUFBQUEsUSxHQUFXLElBQUlKLElBQUosRTs7cUJBR0pLLEcsV0FEWkgsT0FBTyxDQUFDLEtBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR0VJLGMsR0FBNEIsSTtnQkFDNUJDLE8sR0FBVSxJQUFJUCxJQUFKLEU7Z0JBQ1ZRLE8sR0FBVSxJQUFJUixJQUFKLEU7Z0JBQ1ZTLFUsR0FBYSxHO2dCQUNiQyxTLEdBQVksSztnQkFDWkMsTyxHQUFVLElBQUlYLElBQUosRTs7Ozs7O2lDQUVKWSxFLEVBQVk7QUFDeEIsZ0JBQUksS0FBS0YsU0FBVCxF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LG1CQUFLcEIsT0FBTCxDQUFhSyxHQUFiLENBQWlCLEtBQUtQLGNBQUwsQ0FBb0JzQixXQUFwQixDQUFnQ2IsYUFBakQ7QUFDRCxhQUZELE1BRU87QUFDTCxtQkFBS0wsU0FBTCxHQUFpQixLQUFqQjtBQUNBLG1CQUFLSixjQUFMLEdBQXNCLElBQXRCO0FBQ0Q7QUFDRjs7OztRQXhHc0JQLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb2FkUG9pbnQgfSBmcm9tICcuL1JvYWRQb2ludCc7XHJcbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMyB9IGZyb20gXCJjY1wiO1xyXG5cclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuY29uc3QgX3RlbXBWZWMgPSBuZXcgVmVjMygpO1xyXG5cclxuQGNjY2xhc3MoXCJDYXJcIilcclxuZXhwb3J0IGNsYXNzIENhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgLy/orr7nva7lsI/ovabmnJ3lkJHpl67pophcclxuICBwcml2YXRlIF9jdXJyUm9hZFBvaW50OiBSb2FkUG9pbnQgPSBudWxsO1xyXG4gIHByaXZhdGUgX3BvaW50QSA9IG5ldyBWZWMzKCk7XHJcbiAgcHJpdmF0ZSBfcG9pbnRCID0gbmV3IFZlYzMoKTtcclxuICBwcml2YXRlIF9jdXJyU3BlZWQgPSAwLjE7XHJcbiAgcHJpdmF0ZSBfaXNNb3ZpbmcgPSBmYWxzZTtcclxuICBwcml2YXRlIF9vZmZlY3QgPSBuZXcgVmVjMygpO1xyXG5cclxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl9pc01vdmluZykge1xyXG4gICAgICB0aGlzLl9vZmZlY3Quc2V0KHRoaXMubm9kZS53b3JsZFBvc2l0aW9uKTtcclxuICAgICAgc3dpdGNoICh0aGlzLl9jdXJyUm9hZFBvaW50Lm1vdmVUeXBlKSB7XHJcbiAgICAgICAgLy8gY2FzZTogUm9hZFBvaW50LnJvYWRNb3ZlVHlwZS5CRU5EOlxyXG4gICAgICAgIC8vICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgICAgICAgaWYgKHogIT09IDApIHtcclxuICAgICAgICAgICAgaWYgKHogPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnogKz0gdGhpcy5fY3VyclNwZWVkO1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9vZmZlY3QueiA+IHRoaXMuX3BvaW50Qi56KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZlY3QueiA9IHRoaXMuX3BvaW50Qi56O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLl9vZmZlY3QueiAtPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX29mZmVjdC56IDwgdGhpcy5fcG9pbnRCLnopIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29mZmVjdC56ID0gdGhpcy5fcG9pbnRCLno7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCB4ID0gdGhpcy5fcG9pbnRCLnggLSB0aGlzLl9wb2ludEEueDtcclxuICAgICAgICAgICAgaWYgKHggPiAwKSB7XHJcbiAgICAgICAgICAgICAgdGhpcy5fb2ZmZWN0LnggKz0gdGhpcy5fY3VyclNwZWVkO1xyXG4gICAgICAgICAgICAgIGlmICh0aGlzLl9vZmZlY3QueCA+IHRoaXMuX3BvaW50Qi54KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9vZmZlY3QueCA9IHRoaXMuX3BvaW50Qi54O1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0aGlzLl9vZmZlY3QueCAtPSB0aGlzLl9jdXJyU3BlZWQ7XHJcbiAgICAgICAgICAgICAgaWYgKHRoaXMuX29mZmVjdC54IDwgdGhpcy5fcG9pbnRCLngpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX29mZmVjdC54ID0gdGhpcy5fcG9pbnRCLng7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm5vZGUuc2V0V29ybGRQb3NpdGlvbih0aGlzLl9vZmZlY3QpO1xyXG4gICAgICBWZWMzLnN1YnRyYWN0KF90ZW1wVmVjLCB0aGlzLl9wb2ludEIsIHRoaXMuX29mZmVjdCk7XHJcbiAgICAgIGlmIChfdGVtcFZlYy5sZW5ndGgoKSA8PSAwLjAxKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyaXZhbFN0YXRpb24oKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLy/oh6rlt7HmjqXmlLblvIDlp4vngrlcclxuICBwdWJsaWMgc2V0RW50cnkoZW50cnk6IE5vZGUpIHtcclxuICAgIHRoaXMubm9kZS5zZXRXb3JsZFBvc2l0aW9uKGVudHJ5LndvcmxkUG9zaXRpb24pO1xyXG4gICAgdGhpcy5fY3VyclJvYWRQb2ludCA9IGVudHJ5LmdldENvbXBvbmVudChSb2FkUG9pbnQpO1xyXG4gICAgaWYgKCF0aGlzLl9jdXJyUm9hZFBvaW50KSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignVGhlcmUgaXMgbm8gUm9hZFBvaW50IGluICcgKyBlbnRyeS5uYW1lKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX3BvaW50QS5zZXQoZW50cnkud29ybGRQb3NpdGlvbik7XHJcbiAgICB0aGlzLl9wb2ludEIuc2V0KHRoaXMuX2N1cnJSb2FkUG9pbnQubmV4dFN0YXRpb24ud29ybGRQb3NpdGlvbik7XHJcblxyXG4gICAgLy/liKTmlq3lvZPliY3mnJ3lkJFcclxuICAgIGNvbnN0IHogPSB0aGlzLl9wb2ludEIueiAtIHRoaXMuX3BvaW50QS56O1xyXG4gICAgaWYgKHogIT09IDApIHtcclxuICAgICAgaWYgKHogPCAwKSB7XHJcbiAgICAgICAgLy/mrKfmi4nop5LvvIwg5aaC5p6c5bCP5LqOMOWImeS4jeWBmuaUueWPmFxyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgMTgwLCAwKTtcclxuICAgICAgfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeCA9IHRoaXMuX3BvaW50Qi54IC0gdGhpcy5fcG9pbnRCLng7XHJcbiAgICAgIGlmICh4ID4gMCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5ldWxlckFuZ2xlcyA9IG5ldyBWZWMzKDAsIDI3MCwgMCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgOTAsIDApO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwdWJsaWMgc3RhcnRSdW5uaW5nKCkge1xyXG4gICAgaWYgKHRoaXMuX2N1cnJSb2FkUG9pbnQpIHtcclxuICAgICAgdGhpcy5faXNNb3ZpbmcgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHVibGljIHN0b3BSdW5uaW5nKCkge1xyXG4gICAgdGhpcy5faXNNb3ZpbmcgPSBmYWxzZTtcclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2Fycml2YWxTdGF0aW9uKCkge1xyXG4gICAgY29uc29sZS5sb2coJ2Fycml2YWwuLi4uJyk7XHJcbiAgICB0aGlzLl9wb2ludEEuc2V0KHRoaXMuX3BvaW50Qik7XHJcbiAgICB0aGlzLl9jdXJyUm9hZFBvaW50ID0gdGhpcy5fY3VyclJvYWRQb2ludC5uZXh0U3RhdGlvbi5nZXRDb21wb25lbnQoUm9hZFBvaW50KTtcclxuICAgIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50Lm5leHRTdGF0aW9uKSB7XHJcbiAgICAgIHRoaXMuX3BvaW50Qi5zZXQodGhpcy5fY3VyclJvYWRQb2ludC5uZXh0U3RhdGlvbi53b3JsZFBvc2l0aW9uKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuX2lzTW92aW5nID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuX2N1cnJSb2FkUG9pbnQgPSBudWxsO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuIl19