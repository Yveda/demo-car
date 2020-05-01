System.register(["cc", "code-quality:cr", "./Car.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Car, _decorator, Component, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CarManager;

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

  function _reportPossibleCrUseOfCar(extras) {
    _reporterNs.report("Car", "./Car", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
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
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CarJs) {
      Car = _CarJs.Car;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "14769p8GH1Ma4L8BDgte9+O", "CarManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property; //小车管理

      _export("CarManager", CarManager = (_dec = ccclass("CarManager"), _dec2 = property({
        type: _crd && Car === void 0 ? (_reportPossibleCrUseOfCar({
          error: Error()
        }), Car) : Car
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(CarManager, _Component);

        function CarManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, CarManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CarManager)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "mainCar", _descriptor, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(CarManager, [{
          key: "resetCars",
          //接收所有的点
          value: function resetCars(points) {
            if (points.length <= 0) {
              console.warn('There is no point in this map');
              return;
            }

            this._createMainCar(points[0]);
          }
        }, {
          key: "_createMainCar",
          value: function _createMainCar(point) {
            this.mainCar.setEntry(point);
          }
        }, {
          key: "controlMoving",
          value: function controlMoving() {
            var isRunning = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            if (isRunning) {
              this.mainCar.startRunning();
            } else {
              this.mainCar.stopRunning();
            }
          }
        }]);

        return CarManager;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mainCar", [_dec2], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiQ2FyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ2FyTWFuYWdlciIsInR5cGUiLCJwb2ludHMiLCJsZW5ndGgiLCJjb25zb2xlIiwid2FybiIsIl9jcmVhdGVNYWluQ2FyIiwicG9pbnQiLCJtYWluQ2FyIiwic2V0RW50cnkiLCJpc1J1bm5pbmciLCJzdGFydFJ1bm5pbmciLCJzdG9wUnVubmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ1NBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7Ozs7QUFEWkMsTUFBQUEsRyxVQUFBQSxHOzs7Ozs7QUFFREMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUSxFQUNqQjs7NEJBRWFDLFUsV0FEWkYsT0FBTyxDQUFDLFlBQUQsQyxVQUdIQyxRQUFRLENBQUM7QUFDTkUsUUFBQUEsSUFBSTtBQUFBO0FBQUE7QUFERSxPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLWDtvQ0FDaUJDLE0sRUFBZ0I7QUFDN0IsZ0JBQUlBLE1BQU0sQ0FBQ0MsTUFBUCxJQUFpQixDQUFyQixFQUF3QjtBQUN0QkMsY0FBQUEsT0FBTyxDQUFDQyxJQUFSLENBQWEsK0JBQWI7QUFDQTtBQUNEOztBQUVILGlCQUFLQyxjQUFMLENBQW9CSixNQUFNLENBQUMsQ0FBRCxDQUExQjtBQUNEOzs7eUNBRXFCSyxLLEVBQWE7QUFDakMsaUJBQUtDLE9BQUwsQ0FBYUMsUUFBYixDQUFzQkYsS0FBdEI7QUFDRDs7OzBDQUVzQztBQUFBLGdCQUFsQkcsU0FBa0IsdUVBQU4sSUFBTTs7QUFDckMsZ0JBQUlBLFNBQUosRUFBZTtBQUNaLG1CQUFLRixPQUFMLENBQWFHLFlBQWI7QUFDRixhQUZELE1BRU87QUFDTCxtQkFBS0gsT0FBTCxDQUFhSSxXQUFiO0FBQ0Q7QUFDRjs7OztRQTNCNkJoQixTOzs7OztpQkFLYixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FyIH0gZnJvbSAnLi9DYXInO1xyXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuLy/lsI/ovabnrqHnkIZcclxuQGNjY2xhc3MoXCJDYXJNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBDYXJNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IENhclxyXG4gICAgfSlcclxuICAgIG1haW5DYXI6IENhciA9IG51bGw7XHJcblxyXG4gIC8v5o6l5pS25omA5pyJ55qE54K5XHJcbiAgcHVibGljIHJlc2V0Q2Fycyhwb2ludHM6IE5vZGVbXSkge1xyXG4gICAgICBpZiAocG9pbnRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdUaGVyZSBpcyBubyBwb2ludCBpbiB0aGlzIG1hcCcpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgIHRoaXMuX2NyZWF0ZU1haW5DYXIocG9pbnRzWzBdKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfY3JlYXRlTWFpbkNhcihwb2ludDogTm9kZSkge1xyXG4gICAgdGhpcy5tYWluQ2FyLnNldEVudHJ5KHBvaW50KTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb250cm9sTW92aW5nKGlzUnVubmluZyA9IHRydWUpIHtcclxuICAgIGlmIChpc1J1bm5pbmcpIHtcclxuICAgICAgIHRoaXMubWFpbkNhci5zdGFydFJ1bm5pbmcoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWFpbkNhci5zdG9wUnVubmluZygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==