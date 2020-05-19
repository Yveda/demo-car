System.register(["cc", "code-quality:cr", "../data/PoolManager.js", "./RoadPoint.js", "./Car.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, PoolManager, RoadPoint, Car, _decorator, Component, loader, Prefab, _dec, _dec2, _class, _class2, _descriptor, _temp, _crd, ccclass, property, CarManager;

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

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./../data/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "./RoadPoint", _context.meta, extras);
  }

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
      loader = _cc.loader;
      Prefab = _cc.Prefab;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataPoolManagerJs) {
      PoolManager = _dataPoolManagerJs.PoolManager;
    }, function (_RoadPointJs) {
      RoadPoint = _RoadPointJs.RoadPoint;
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

          _this._currPath = [];
          _this._aiCars = [];
          return _this;
        }

        _createClass(CarManager, [{
          key: "reset",
          //接收所有的点
          value: function reset(points) {
            if (points.length <= 0) {
              console.warn('There is no point in this map');
              return;
            }

            this._currPath = points;

            this._createMainCar(points[0]);

            this._startSchedule();
          }
        }, {
          key: "_createMainCar",
          value: function _createMainCar(point) {
            this.mainCar.setEntry(point, true);
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
        }, {
          key: "_startSchedule",
          value: function _startSchedule() {
            for (var i = 1; i < this._currPath.length; i++) {
              var node = this._currPath[i];
              var roadPoint = node.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint);
              roadPoint.startSchedule(this._createEnemy.bind(this));
            }
          }
        }, {
          key: "_stopSchedule",
          value: function _stopSchedule() {}
        }, {
          key: "_createEnemy",
          value: function _createEnemy(road, carID) {
            var _this2 = this;

            var self = this;
            loader.loadRes("car/car".concat(carID), Prefab, function (err, prefab) {
              if (err) {
                console.warn(err);
                return;
              }

              var car = (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).getNode(prefab, self.node);
              var carComp = car.getComponent(_crd && Car === void 0 ? (_reportPossibleCrUseOfCar({
                error: Error()
              }), Car) : Car);

              _this2._aiCars.push(carComp);

              carComp.setEntry(road.node);
              carComp.maxSpeed = road.speed;
              carComp.startRunning();
              carComp.moveAfterFinished(_this2._recycleAICar.bind(_this2));
            });
          }
        }, {
          key: "_recycleAICar",
          value: function _recycleAICar(car) {
            var index = this._aiCars.indexOf(car);

            if (index >= 0) {
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).setNode(car.node);

              this._aiCars.splice(index, 1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwibG9hZGVyIiwiUHJlZmFiIiwiUG9vbE1hbmFnZXIiLCJSb2FkUG9pbnQiLCJDYXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDYXJNYW5hZ2VyIiwidHlwZSIsIl9jdXJyUGF0aCIsIl9haUNhcnMiLCJwb2ludHMiLCJsZW5ndGgiLCJjb25zb2xlIiwid2FybiIsIl9jcmVhdGVNYWluQ2FyIiwiX3N0YXJ0U2NoZWR1bGUiLCJwb2ludCIsIm1haW5DYXIiLCJzZXRFbnRyeSIsImlzUnVubmluZyIsInN0YXJ0UnVubmluZyIsInN0b3BSdW5uaW5nIiwiaSIsIm5vZGUiLCJyb2FkUG9pbnQiLCJnZXRDb21wb25lbnQiLCJzdGFydFNjaGVkdWxlIiwiX2NyZWF0ZUVuZW15IiwiYmluZCIsInJvYWQiLCJjYXJJRCIsInNlbGYiLCJsb2FkUmVzIiwiZXJyIiwicHJlZmFiIiwiY2FyIiwiZ2V0Tm9kZSIsImNhckNvbXAiLCJwdXNoIiwibWF4U3BlZWQiLCJzcGVlZCIsIm1vdmVBZnRlckZpbmlzaGVkIiwiX3JlY3ljbGVBSUNhciIsImluZGV4IiwiaW5kZXhPZiIsInNldE5vZGUiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1NBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBaUJDLE1BQUFBLE0sT0FBQUEsTTtBQUFRQyxNQUFBQSxNLE9BQUFBLE07Ozs7QUFIckNDLE1BQUFBLFcsc0JBQUFBLFc7O0FBQ0FDLE1BQUFBLFMsZ0JBQUFBLFM7O0FBQ0FDLE1BQUFBLEcsVUFBQUEsRzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JQLFUsQ0FBdEJPLE87QUFBU0MsTUFBQUEs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O0FBQ0Q7QUFDRjs7OztRQXJFNkI3QyxTOzs7OztpQkFLZixJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9vbE1hbmFnZXIgfSBmcm9tICcuLy4uL2RhdGEvUG9vbE1hbmFnZXInO1xyXG5pbXBvcnQgeyBSb2FkUG9pbnQgfSBmcm9tICcuL1JvYWRQb2ludCc7XHJcbmltcG9ydCB7IENhciB9IGZyb20gJy4vQ2FyJztcclxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBsb2FkZXIsIFByZWZhYiB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG4vL+Wwj+i9pueuoeeQhlxyXG5AY2NjbGFzcyhcIkNhck1hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIENhck1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG5cclxuICBAcHJvcGVydHkoe1xyXG4gICAgdHlwZTogQ2FyXHJcbiAgfSlcclxuICBtYWluQ2FyOiBDYXIgPSBudWxsO1xyXG5cclxuICBwcml2YXRlIF9jdXJyUGF0aDogTm9kZVtdID0gW107XHJcbiAgcHJpdmF0ZSBfYWlDYXJzOiBDYXJbXSA9IFtdO1xyXG5cclxuICAvL+aOpeaUtuaJgOacieeahOeCuVxyXG4gIHB1YmxpYyByZXNldChwb2ludHM6IE5vZGVbXSkge1xyXG4gICAgaWYgKHBvaW50cy5sZW5ndGggPD0gMCkge1xyXG4gICAgICBjb25zb2xlLndhcm4oJ1RoZXJlIGlzIG5vIHBvaW50IGluIHRoaXMgbWFwJyk7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHRoaXMuX2N1cnJQYXRoID0gcG9pbnRzO1xyXG4gICAgdGhpcy5fY3JlYXRlTWFpbkNhcihwb2ludHNbMF0pO1xyXG4gICAgdGhpcy5fc3RhcnRTY2hlZHVsZSgpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIF9jcmVhdGVNYWluQ2FyKHBvaW50OiBOb2RlKSB7XHJcbiAgICB0aGlzLm1haW5DYXIuc2V0RW50cnkocG9pbnQsIHRydWUpO1xyXG4gIH1cclxuXHJcbiAgcHVibGljIGNvbnRyb2xNb3ZpbmcoaXNSdW5uaW5nID0gdHJ1ZSkge1xyXG4gICAgaWYgKGlzUnVubmluZykge1xyXG4gICAgICB0aGlzLm1haW5DYXIuc3RhcnRSdW5uaW5nKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1haW5DYXIuc3RvcFJ1bm5pbmcoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N0YXJ0U2NoZWR1bGUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuX2N1cnJQYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9jdXJyUGF0aFtpXTtcclxuICAgICAgY29uc3Qgcm9hZFBvaW50ID0gbm9kZS5nZXRDb21wb25lbnQoUm9hZFBvaW50KTtcclxuICAgICAgcm9hZFBvaW50LnN0YXJ0U2NoZWR1bGUodGhpcy5fY3JlYXRlRW5lbXkuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdG9wU2NoZWR1bGUgKCkge1xyXG5cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NyZWF0ZUVuZW15IChyb2FkOiBSb2FkUG9pbnQsIGNhcklEOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgbG9hZGVyLmxvYWRSZXMoYGNhci9jYXIke2NhcklEfWAsIFByZWZhYiwgKGVycjogYW55LCBwcmVmYWI6IFByZWZhYik9PntcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2FyID0gUG9vbE1hbmFnZXIuZ2V0Tm9kZShwcmVmYWIsIHNlbGYubm9kZSk7XHJcbiAgICAgIGNvbnN0IGNhckNvbXAgPSBjYXIuZ2V0Q29tcG9uZW50KENhcik7XHJcbiAgICAgIHRoaXMuX2FpQ2Fycy5wdXNoKGNhckNvbXApO1xyXG4gICAgICBjYXJDb21wLnNldEVudHJ5KHJvYWQubm9kZSk7XHJcbiAgICAgIGNhckNvbXAubWF4U3BlZWQgPSByb2FkLnNwZWVkO1xyXG4gICAgICBjYXJDb21wLnN0YXJ0UnVubmluZygpO1xyXG4gICAgICBjYXJDb21wLm1vdmVBZnRlckZpbmlzaGVkKHRoaXMuX3JlY3ljbGVBSUNhci5iaW5kKHRoaXMpKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZWN5Y2xlQUlDYXIoY2FyOiBDYXIpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYWlDYXJzLmluZGV4T2YoY2FyKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIFBvb2xNYW5hZ2VyLnNldE5vZGUoY2FyLm5vZGUpO1xyXG4gICAgICB0aGlzLl9haUNhcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxufVxyXG4iXX0=