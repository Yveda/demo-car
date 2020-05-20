System.register(["cc", "code-quality:cr", "../data/Constants.js", "../data/PoolManager.js", "./RoadPoint.js", "./Car.js", "../data/CustomEventListener.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, Constants, PoolManager, RoadPoint, Car, _decorator, Component, Node, loader, Prefab, Vec3, CustomEventListener, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _temp, _crd, ccclass, property, CarManager;

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

  function _reportPossibleCrUseOfPoolManager(extras) {
    _reporterNs.report("PoolManager", "./../data/PoolManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoadPoint(extras) {
    _reporterNs.report("RoadPoint", "./RoadPoint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCar(extras) {
    _reporterNs.report("Car", "./Car", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCustomEventListener(extras) {
    _reporterNs.report("CustomEventListener", "../data/CustomEventListener", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      loader = _cc.loader;
      Prefab = _cc.Prefab;
      Vec3 = _cc.Vec3;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
    }, function (_dataPoolManagerJs) {
      PoolManager = _dataPoolManagerJs.PoolManager;
    }, function (_RoadPointJs) {
      RoadPoint = _RoadPointJs.RoadPoint;
    }, function (_CarJs) {
      Car = _CarJs.Car;
    }, function (_dataCustomEventListenerJs) {
      CustomEventListener = _dataCustomEventListenerJs.CustomEventListener;
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
      }), _dec3 = property({
        type: Node
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

          _initializerDefineProperty(_this, "camera", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraPos", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cameraRotation", _descriptor4, _assertThisInitialized(_this));

          _this._currPath = [];
          _this._aiCars = [];
          return _this;
        }

        _createClass(CarManager, [{
          key: "start",
          value: function start() {
            (_crd && CustomEventListener === void 0 ? (_reportPossibleCrUseOfCustomEventListener({
              error: Error()
            }), CustomEventListener) : CustomEventListener).on((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).EventName.GMAE_OVER, this._gameOver, this);
          } //接收所有的点

        }, {
          key: "reset",
          value: function reset(points) {
            if (points.length <= 0) {
              console.warn('There is no point in this map');
              return;
            }

            this._currPath = points;

            this._recycleAllAICar();

            this._createMainCar(points[0]);

            this._startSchedule();
          }
        }, {
          key: "_createMainCar",
          value: function _createMainCar(point) {
            this.mainCar.setEntry(point, true);
            this.mainCar.setCamera(this.camera, this.cameraPos, this.cameraRotation);
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
          key: "_gameOver",
          value: function _gameOver() {
            this._stopSchedule();

            this.mainCar.stopImmediately(); //保留当前世界变换

            this.camera.setParent(this.node.parent, true);

            for (var i = 0; i < this._aiCars.length; i++) {
              var car = this._aiCars[i];
              car.stopImmediately();
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
          value: function _stopSchedule() {
            for (var i = 1; i < this._currPath.length; i++) {
              var node = this._currPath[i];
              var roadPoint = node.getComponent(_crd && RoadPoint === void 0 ? (_reportPossibleCrUseOfRoadPoint({
                error: Error()
              }), RoadPoint) : RoadPoint);
              roadPoint.stopSchedule();
            }
          }
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
        }, {
          key: "_recycleAllAICar",
          value: function _recycleAllAICar() {
            for (var i = 0; i < this._aiCars.length; i++) {
              var car = this._aiCars[i];
              (_crd && PoolManager === void 0 ? (_reportPossibleCrUseOfPoolManager({
                error: Error()
              }), PoolManager) : PoolManager).setNode(car.node);
            }

            this._aiCars.length = 0;
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
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "camera", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "cameraPos", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(0, 8, 8);
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "cameraRotation", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return -45;
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQ2FyTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsImxvYWRlciIsIlByZWZhYiIsIlZlYzMiLCJDb25zdGFudHMiLCJQb29sTWFuYWdlciIsIlJvYWRQb2ludCIsIkNhciIsIkN1c3RvbUV2ZW50TGlzdGVuZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJDYXJNYW5hZ2VyIiwidHlwZSIsIl9jdXJyUGF0aCIsIl9haUNhcnMiLCJvbiIsIkV2ZW50TmFtZSIsIkdNQUVfT1ZFUiIsIl9nYW1lT3ZlciIsInBvaW50cyIsImxlbmd0aCIsImNvbnNvbGUiLCJ3YXJuIiwiX3JlY3ljbGVBbGxBSUNhciIsIl9jcmVhdGVNYWluQ2FyIiwiX3N0YXJ0U2NoZWR1bGUiLCJwb2ludCIsIm1haW5DYXIiLCJzZXRFbnRyeSIsInNldENhbWVyYSIsImNhbWVyYSIsImNhbWVyYVBvcyIsImNhbWVyYVJvdGF0aW9uIiwiaXNSdW5uaW5nIiwic3RhcnRSdW5uaW5nIiwic3RvcFJ1bm5pbmciLCJfc3RvcFNjaGVkdWxlIiwic3RvcEltbWVkaWF0ZWx5Iiwic2V0UGFyZW50Iiwibm9kZSIsInBhcmVudCIsImkiLCJjYXIiLCJyb2FkUG9pbnQiLCJnZXRDb21wb25lbnQiLCJzdGFydFNjaGVkdWxlIiwiX2NyZWF0ZUVuZW15IiwiYmluZCIsInN0b3BTY2hlZHVsZSIsInJvYWQiLCJjYXJJRCIsInNlbGYiLCJsb2FkUmVzIiwiZXJyIiwicHJlZmFiIiwiZ2V0Tm9kZSIsImNhckNvbXAiLCJwdXNoIiwibWF4U3BlZWQiLCJzcGVlZCIsIm1vdmVBZnRlckZpbmlzaGVkIiwiX3JlY3ljbGVBSUNhciIsImluZGV4IiwiaW5kZXhPZiIsInNldE5vZGUiLCJzcGxpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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SSxDQUFDQyxhQUFMLENBQW1CZCxJQUFuQixDQUF3QixNQUF4QixDQUExQjtBQUNELGFBYkQ7QUFjRDs7O3dDQUVxQkwsRyxFQUFVO0FBQzlCLGdCQUFNb0IsS0FBSyxHQUFHLEtBQUtoRCxPQUFMLENBQWFpRCxPQUFiLENBQXFCckIsR0FBckIsQ0FBZDs7QUFDQSxnQkFBSW9CLEtBQUssSUFBSSxDQUFiLEVBQWdCO0FBQ2Q7QUFBQTtBQUFBLDhDQUFZRSxPQUFaLENBQW9CdEIsR0FBRyxDQUFDSCxJQUF4Qjs7QUFDQSxtQkFBS3pCLE9BQUwsQ0FBYW1ELE1BQWIsQ0FBb0JILEtBQXBCLEVBQTJCLENBQTNCO0FBQ0Q7QUFDRjs7OzZDQUUyQjtBQUMxQixpQkFBSyxJQUFJckIsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxLQUFLM0IsT0FBTCxDQUFhTSxNQUFqQyxFQUF5Q3FCLENBQUMsRUFBMUMsRUFBOEM7QUFDNUMsa0JBQU1DLEdBQUcsR0FBRyxLQUFLNUIsT0FBTCxDQUFhMkIsQ0FBYixDQUFaO0FBQ0E7QUFBQTtBQUFBLDhDQUFZdUIsT0FBWixDQUFvQnRCLEdBQUcsQ0FBQ0gsSUFBeEI7QUFDRDs7QUFFRCxpQkFBS3pCLE9BQUwsQ0FBYU0sTUFBYixHQUFzQixDQUF0QjtBQUNEOzs7O1FBOUc2QnJCLFM7Ozs7O2lCQUtmLEk7Ozs7Ozs7aUJBS0EsSTs7b0ZBRWRXLFE7Ozs7O2lCQUNXLElBQUlQLElBQUosQ0FBUyxDQUFULEVBQVcsQ0FBWCxFQUFhLENBQWIsQzs7eUZBRVhPLFE7Ozs7O2lCQUNnQixDQUFDLEUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLy4uL2RhdGEvQ29uc3RhbnRzJztcclxuaW1wb3J0IHsgUG9vbE1hbmFnZXIgfSBmcm9tICcuLy4uL2RhdGEvUG9vbE1hbmFnZXInO1xyXG5pbXBvcnQgeyBSb2FkUG9pbnQgfSBmcm9tICcuL1JvYWRQb2ludCc7XHJcbmltcG9ydCB7IENhciB9IGZyb20gJy4vQ2FyJztcclxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBsb2FkZXIsIFByZWZhYiwgVmVjMyB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBDdXN0b21FdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vZGF0YS9DdXN0b21FdmVudExpc3RlbmVyJztcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuLy/lsI/ovabnrqHnkIZcclxuQGNjY2xhc3MoXCJDYXJNYW5hZ2VyXCIpXHJcbmV4cG9ydCBjbGFzcyBDYXJNYW5hZ2VyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuXHJcbiAgQHByb3BlcnR5KHtcclxuICAgIHR5cGU6IENhclxyXG4gIH0pXHJcbiAgbWFpbkNhcjogQ2FyID0gbnVsbDtcclxuXHJcbiAgQHByb3BlcnR5KHtcclxuICAgIHR5cGU6IE5vZGVcclxuICB9KVxyXG4gIGNhbWVyYTogTm9kZSA9IG51bGw7XHJcblxyXG4gIEBwcm9wZXJ0eVxyXG4gIGNhbWVyYVBvcyA9IG5ldyBWZWMzKDAsOCw4KTtcclxuXHJcbiAgQHByb3BlcnR5XHJcbiAgY2FtZXJhUm90YXRpb24gPSAtNDU7XHJcblxyXG4gIHByaXZhdGUgX2N1cnJQYXRoOiBOb2RlW10gPSBbXTtcclxuICBwcml2YXRlIF9haUNhcnM6IENhcltdID0gW107XHJcblxyXG4gIHN0YXJ0ICgpIHtcclxuICAgIEN1c3RvbUV2ZW50TGlzdGVuZXIub24oQ29uc3RhbnRzLkV2ZW50TmFtZS5HTUFFX09WRVIsIHRoaXMuX2dhbWVPdmVyLCB0aGlzKTtcclxuICB9XHJcblxyXG4gIC8v5o6l5pS25omA5pyJ55qE54K5XHJcbiAgcHVibGljIHJlc2V0KHBvaW50czogTm9kZVtdKSB7XHJcbiAgICBpZiAocG9pbnRzLmxlbmd0aCA8PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUud2FybignVGhlcmUgaXMgbm8gcG9pbnQgaW4gdGhpcyBtYXAnKTtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdGhpcy5fY3VyclBhdGggPSBwb2ludHM7XHJcbiAgICB0aGlzLl9yZWN5Y2xlQWxsQUlDYXIoKTtcclxuICAgIHRoaXMuX2NyZWF0ZU1haW5DYXIocG9pbnRzWzBdKTtcclxuICAgIHRoaXMuX3N0YXJ0U2NoZWR1bGUoKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBfY3JlYXRlTWFpbkNhcihwb2ludDogTm9kZSkge1xyXG4gICAgdGhpcy5tYWluQ2FyLnNldEVudHJ5KHBvaW50LCB0cnVlKTtcclxuICAgIHRoaXMubWFpbkNhci5zZXRDYW1lcmEodGhpcy5jYW1lcmEsIHRoaXMuY2FtZXJhUG9zLCB0aGlzLmNhbWVyYVJvdGF0aW9uKTtcclxuICB9XHJcblxyXG4gIHB1YmxpYyBjb250cm9sTW92aW5nKGlzUnVubmluZyA9IHRydWUpIHtcclxuICAgIGlmIChpc1J1bm5pbmcpIHtcclxuICAgICAgdGhpcy5tYWluQ2FyLnN0YXJ0UnVubmluZygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tYWluQ2FyLnN0b3BSdW5uaW5nKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9nYW1lT3ZlciAoKSB7XHJcbiAgICB0aGlzLl9zdG9wU2NoZWR1bGUoKTtcclxuICAgIHRoaXMubWFpbkNhci5zdG9wSW1tZWRpYXRlbHkoKTtcclxuICAgIC8v5L+d55WZ5b2T5YmN5LiW55WM5Y+Y5o2iXHJcbiAgICB0aGlzLmNhbWVyYS5zZXRQYXJlbnQodGhpcy5ub2RlLnBhcmVudCwgdHJ1ZSk7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2FpQ2Fycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjYXIgPSB0aGlzLl9haUNhcnNbaV07XHJcbiAgICAgIGNhci5zdG9wSW1tZWRpYXRlbHkoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3N0YXJ0U2NoZWR1bGUoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8IHRoaXMuX2N1cnJQYXRoLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnN0IG5vZGUgPSB0aGlzLl9jdXJyUGF0aFtpXTtcclxuICAgICAgY29uc3Qgcm9hZFBvaW50ID0gbm9kZS5nZXRDb21wb25lbnQoUm9hZFBvaW50KTtcclxuICAgICAgcm9hZFBvaW50LnN0YXJ0U2NoZWR1bGUodGhpcy5fY3JlYXRlRW5lbXkuYmluZCh0aGlzKSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9zdG9wU2NoZWR1bGUgKCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCB0aGlzLl9jdXJyUGF0aC5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBub2RlID0gdGhpcy5fY3VyclBhdGhbaV07XHJcbiAgICAgIGNvbnN0IHJvYWRQb2ludCA9IG5vZGUuZ2V0Q29tcG9uZW50KFJvYWRQb2ludCk7XHJcbiAgICAgIHJvYWRQb2ludC5zdG9wU2NoZWR1bGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX2NyZWF0ZUVuZW15IChyb2FkOiBSb2FkUG9pbnQsIGNhcklEOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xyXG4gICAgbG9hZGVyLmxvYWRSZXMoYGNhci9jYXIke2NhcklEfWAsIFByZWZhYiwgKGVycjogYW55LCBwcmVmYWI6IFByZWZhYik9PntcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc3QgY2FyID0gUG9vbE1hbmFnZXIuZ2V0Tm9kZShwcmVmYWIsIHNlbGYubm9kZSk7XHJcbiAgICAgIGNvbnN0IGNhckNvbXAgPSBjYXIuZ2V0Q29tcG9uZW50KENhcik7XHJcbiAgICAgIHRoaXMuX2FpQ2Fycy5wdXNoKGNhckNvbXApO1xyXG4gICAgICBjYXJDb21wLnNldEVudHJ5KHJvYWQubm9kZSk7XHJcbiAgICAgIGNhckNvbXAubWF4U3BlZWQgPSByb2FkLnNwZWVkO1xyXG4gICAgICBjYXJDb21wLnN0YXJ0UnVubmluZygpO1xyXG4gICAgICBjYXJDb21wLm1vdmVBZnRlckZpbmlzaGVkKHRoaXMuX3JlY3ljbGVBSUNhci5iaW5kKHRoaXMpKTtcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBwcml2YXRlIF9yZWN5Y2xlQUlDYXIoY2FyOiBDYXIpIHtcclxuICAgIGNvbnN0IGluZGV4ID0gdGhpcy5fYWlDYXJzLmluZGV4T2YoY2FyKTtcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgIFBvb2xNYW5hZ2VyLnNldE5vZGUoY2FyLm5vZGUpO1xyXG4gICAgICB0aGlzLl9haUNhcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgX3JlY3ljbGVBbGxBSUNhciAoKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2FpQ2Fycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICBjb25zdCBjYXIgPSB0aGlzLl9haUNhcnNbaV07XHJcbiAgICAgIFBvb2xNYW5hZ2VyLnNldE5vZGUoY2FyLm5vZGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuX2FpQ2Fycy5sZW5ndGggPSAwO1xyXG4gIH1cclxuXHJcblxyXG59XHJcbiJdfQ==