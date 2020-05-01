System.register(["cc", "code-quality:cr", "./RoadPoint.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, RoadPoint, _decorator, Component, Vec3, _dec, _class, _temp, _crd, ccclass, property, Car;

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
          return _this;
        }

        _createClass(Car, [{
          key: "update",
          value: function update(dt) {
            if (this._isMoving) {
              console.log('isMoving......');
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

            this._pointB.set(this._currRoadPoint.nextStation.worldPosition); //计算当前朝向问题


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
        }]);

        return Car;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiUm9hZFBvaW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2FyIiwiX2N1cnJSb2FkUG9pbnQiLCJfcG9pbnRBIiwiX3BvaW50QiIsIl9jdXJyU3BlZWQiLCJfaXNNb3ZpbmciLCJkdCIsImNvbnNvbGUiLCJsb2ciLCJlbnRyeSIsIm5vZGUiLCJzZXRXb3JsZFBvc2l0aW9uIiwid29ybGRQb3NpdGlvbiIsImdldENvbXBvbmVudCIsIndhcm4iLCJuYW1lIiwic2V0IiwibmV4dFN0YXRpb24iLCJ6IiwiZXVsZXJBbmdsZXMiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFpQkMsTUFBQUEsSSxPQUFBQSxJOzs7O0FBRDdCQyxNQUFBQSxTLGdCQUFBQSxTOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQkosVSxDQUF0QkksTztBQUFTQyxNQUFBQSxRLEdBQWFMLFUsQ0FBYkssUTs7cUJBR0pDLEcsV0FEWkYsT0FBTyxDQUFDLEtBQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBR0VHLGMsR0FBNEIsSTtnQkFDNUJDLE8sR0FBVSxJQUFJTixJQUFKLEU7Z0JBQ1ZPLE8sR0FBVSxJQUFJUCxJQUFKLEU7Z0JBQ1ZRLFUsR0FBYSxHO2dCQUNiQyxTLEdBQVksSzs7Ozs7O2lDQUVOQyxFLEVBQVk7QUFDeEIsZ0JBQUksS0FBS0QsU0FBVCxFQUFvQjtBQUNsQkUsY0FBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFDRDtBQUNGLFcsQ0FFRDs7OzttQ0FDaUJDLEssRUFBYTtBQUM1QixpQkFBS0MsSUFBTCxDQUFVQyxnQkFBVixDQUEyQkYsS0FBSyxDQUFDRyxhQUFqQztBQUNBLGlCQUFLWCxjQUFMLEdBQXNCUSxLQUFLLENBQUNJLFlBQU47QUFBQTtBQUFBLHVDQUF0Qjs7QUFDQSxnQkFBSSxDQUFDLEtBQUtaLGNBQVYsRUFBMEI7QUFDeEJNLGNBQUFBLE9BQU8sQ0FBQ08sSUFBUixDQUFhLDhCQUE4QkwsS0FBSyxDQUFDTSxJQUFqRDtBQUNBO0FBQ0Q7O0FBRUQsaUJBQUtiLE9BQUwsQ0FBYWMsR0FBYixDQUFpQlAsS0FBSyxDQUFDRyxhQUF2Qjs7QUFDQSxpQkFBS1QsT0FBTCxDQUFhYSxHQUFiLENBQWlCLEtBQUtmLGNBQUwsQ0FBb0JnQixXQUFwQixDQUFnQ0wsYUFBakQsRUFUNEIsQ0FXNUI7OztBQUNBLGdCQUFNTSxDQUFDLEdBQUcsS0FBS2YsT0FBTCxDQUFhZSxDQUFiLEdBQWlCLEtBQUtoQixPQUFMLENBQWFnQixDQUF4Qzs7QUFDQSxnQkFBSUEsQ0FBQyxLQUFLLENBQVYsRUFBYTtBQUNYLGtCQUFJQSxDQUFDLEdBQUcsQ0FBUixFQUFXO0FBQ1Q7QUFDQSxxQkFBS1IsSUFBTCxDQUFVUyxXQUFWLEdBQXdCLElBQUl2QixJQUFKLEVBQXhCO0FBQ0QsZUFIRCxNQUdPO0FBQ0wscUJBQUtjLElBQUwsQ0FBVVMsV0FBVixHQUF3QixJQUFJdkIsSUFBSixDQUFTLENBQVQsRUFBWSxHQUFaLEVBQWlCLENBQWpCLENBQXhCO0FBQ0Q7QUFDRixhQVBELE1BT087QUFDTCxrQkFBTXdCLENBQUMsR0FBRyxLQUFLakIsT0FBTCxDQUFhaUIsQ0FBYixHQUFpQixLQUFLakIsT0FBTCxDQUFhaUIsQ0FBeEM7O0FBQ0Esa0JBQUlBLENBQUMsR0FBRSxDQUFQLEVBQVU7QUFDUixxQkFBS1YsSUFBTCxDQUFVUyxXQUFWLEdBQXdCLElBQUl2QixJQUFKLENBQVMsQ0FBVCxFQUFZLEdBQVosRUFBaUIsQ0FBakIsQ0FBeEI7QUFDRCxlQUZELE1BRU87QUFDTCxxQkFBS2MsSUFBTCxDQUFVUyxXQUFWLEdBQXdCLElBQUl2QixJQUFKLENBQVMsQ0FBVCxFQUFZLEVBQVosRUFBZ0IsQ0FBaEIsQ0FBeEI7QUFDRDtBQUNGO0FBQ0Y7Ozt5Q0FFZTtBQUNkLGdCQUFJLEtBQUtLLGNBQVQsRUFBeUI7QUFDdkIsbUJBQUtJLFNBQUwsR0FBaUIsSUFBakI7QUFDRDtBQUNGOzs7d0NBRWE7QUFDVixpQkFBS0EsU0FBTCxHQUFpQixLQUFqQjtBQUVIOzs7O1FBdERzQlYsUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFJvYWRQb2ludCB9IGZyb20gJy4vUm9hZFBvaW50JztcclxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBWZWMzIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkNhclwiKVxyXG5leHBvcnQgY2xhc3MgQ2FyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAvL+iuvue9ruWwj+i9puacneWQkemXrumimFxyXG4gIHByaXZhdGUgX2N1cnJSb2FkUG9pbnQ6IFJvYWRQb2ludCA9IG51bGw7XHJcbiAgcHJpdmF0ZSBfcG9pbnRBID0gbmV3IFZlYzMoKTtcclxuICBwcml2YXRlIF9wb2ludEIgPSBuZXcgVmVjMygpO1xyXG4gIHByaXZhdGUgX2N1cnJTcGVlZCA9IDAuMTtcclxuICBwcml2YXRlIF9pc01vdmluZyA9IGZhbHNlO1xyXG5cclxuICBwdWJsaWMgdXBkYXRlKGR0OiBudW1iZXIpIHtcclxuICAgIGlmICh0aGlzLl9pc01vdmluZykge1xyXG4gICAgICBjb25zb2xlLmxvZygnaXNNb3ZpbmcuLi4uLi4nKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIC8v6Ieq5bex5o6l5pS25byA5aeL54K5XHJcbiAgcHVibGljIHNldEVudHJ5IChlbnRyeTogTm9kZSkge1xyXG4gICAgdGhpcy5ub2RlLnNldFdvcmxkUG9zaXRpb24oZW50cnkud29ybGRQb3NpdGlvbik7XHJcbiAgICB0aGlzLl9jdXJyUm9hZFBvaW50ID0gZW50cnkuZ2V0Q29tcG9uZW50KFJvYWRQb2ludCk7XHJcbiAgICBpZiAoIXRoaXMuX2N1cnJSb2FkUG9pbnQpIHtcclxuICAgICAgY29uc29sZS53YXJuKCdUaGVyZSBpcyBubyBSb2FkUG9pbnQgaW4gJyArIGVudHJ5Lm5hbWUpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5fcG9pbnRBLnNldChlbnRyeS53b3JsZFBvc2l0aW9uKTtcclxuICAgIHRoaXMuX3BvaW50Qi5zZXQodGhpcy5fY3VyclJvYWRQb2ludC5uZXh0U3RhdGlvbi53b3JsZFBvc2l0aW9uKTtcclxuXHJcbiAgICAvL+iuoeeul+W9k+WJjeacneWQkemXrumimFxyXG4gICAgY29uc3QgeiA9IHRoaXMuX3BvaW50Qi56IC0gdGhpcy5fcG9pbnRBLno7XHJcbiAgICBpZiAoeiAhPT0gMCkge1xyXG4gICAgICBpZiAoeiA8IDApIHtcclxuICAgICAgICAvL+asp+aLieinku+8jCDlpoLmnpzlsI/kuo4w5YiZ5LiN5YGa5pS55Y+YXHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCAxODAsIDApO1xyXG4gICAgICB9IFxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc3QgeCA9IHRoaXMuX3BvaW50Qi54IC0gdGhpcy5fcG9pbnRCLng7XHJcbiAgICAgIGlmICh4ID4wKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLmV1bGVyQW5nbGVzID0gbmV3IFZlYzMoMCwgMjcwLCAwKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm5vZGUuZXVsZXJBbmdsZXMgPSBuZXcgVmVjMygwLCA5MCwgMCk7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgc3RhcnRSdW5uaW5nICgpIHtcclxuICAgIGlmICh0aGlzLl9jdXJyUm9hZFBvaW50KSB7XHJcbiAgICAgIHRoaXMuX2lzTW92aW5nID0gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN0b3BSdW5uaW5nKCkge1xyXG4gICAgICB0aGlzLl9pc01vdmluZyA9IGZhbHNlO1xyXG5cclxuICB9XHJcbn1cclxuIl19