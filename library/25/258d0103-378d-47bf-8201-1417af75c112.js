System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Vec3, _dec, _class, _temp, _crd, ccclass, property, Car;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

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
          _this._crrRoadPoint = null;
          _this._pointA = new Vec3();
          _this._pointB = new Vec3();
          return _this;
        }

        _createClass(Car, [{
          key: "setEntry",
          //自己接收开始点
          value: function setEntry(entry) {
            this.node.setWorldPosition(entry.worldPosition);
          }
        }]);

        return Car;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJWZWMzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2FyIiwiX2NyclJvYWRQb2ludCIsIl9wb2ludEEiLCJfcG9pbnRCIiwiZW50cnkiLCJub2RlIiwic2V0V29ybGRQb3NpdGlvbiIsIndvcmxkUG9zaXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1NBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBQzlCQyxNQUFBQSxPLEdBQXNCSCxVLENBQXRCRyxPO0FBQVNDLE1BQUFBLFEsR0FBYUosVSxDQUFiSSxROztxQkFHSkMsRyxXQURaRixPQUFPLENBQUMsS0FBRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztnQkFHSUcsYSxHQUEyQixJO2dCQUMzQkMsTyxHQUFVLElBQUlMLElBQUosRTtnQkFDVk0sTyxHQUFVLElBQUlOLElBQUosRTs7Ozs7O0FBRXBCO21DQUNpQk8sSyxFQUFhO0FBQzVCLGlCQUFLQyxJQUFMLENBQVVDLGdCQUFWLENBQTJCRixLQUFLLENBQUNHLGFBQWpDO0FBQ0Q7Ozs7UUFUc0JYLFMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBSb2FkUG9pbnQgfSBmcm9tICcuL1JvYWRQb2ludCc7XHJcbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMyB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJDYXJcIilcclxuZXhwb3J0IGNsYXNzIENhciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvL+iuvue9ruWwj+i9puacneWQkemXrumimFxyXG4gICAgcHJpdmF0ZSBfY3JyUm9hZFBvaW50OiBSb2FkUG9pbnQgPSBudWxsO1xyXG4gICAgcHJpdmF0ZSBfcG9pbnRBID0gbmV3IFZlYzMoKTtcclxuICAgIHByaXZhdGUgX3BvaW50QiA9IG5ldyBWZWMzKCk7XHJcblxyXG4gIC8v6Ieq5bex5o6l5pS25byA5aeL54K5XHJcbiAgcHVibGljIHNldEVudHJ5IChlbnRyeTogTm9kZSkge1xyXG4gICAgdGhpcy5ub2RlLnNldFdvcmxkUG9zaXRpb24oZW50cnkud29ybGRQb3NpdGlvbik7XHJcbiAgfVxyXG59XHJcbiJdfQ==