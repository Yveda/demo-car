System.register(["cc", "code-quality:cr", "./CarManager.js", "./MapManager.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, CarManager, MapManager, _decorator, Component, Node, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GameCtr;

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

  function _reportPossibleCrUseOfCarManager(extras) {
    _reporterNs.report("CarManager", "./CarManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./MapManager", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_CarManagerJs) {
      CarManager = _CarManagerJs.CarManager;
    }, function (_MapManagerJs) {
      MapManager = _MapManagerJs.MapManager;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "04635x7ZC5LaJ1eZotP0l2+", "GameCtr", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property; //游戏控制类

      _export("GameCtr", GameCtr = (_dec = ccclass("GameCtr"), _dec2 = property({
        type: _crd && MapManager === void 0 ? (_reportPossibleCrUseOfMapManager({
          error: Error()
        }), MapManager) : MapManager
      }), _dec3 = property({
        type: _crd && CarManager === void 0 ? (_reportPossibleCrUseOfCarManager({
          error: Error()
        }), CarManager) : CarManager
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(GameCtr, _Component);

        function GameCtr() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, GameCtr);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(GameCtr)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "mapManager", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "carManager", _descriptor2, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(GameCtr, [{
          key: "onLoad",
          value: function onLoad() {
            //数据初始化
            this.mapManager.resetMap();
            this.carManager.resetCars(this.mapManager.currPath);
          }
        }, {
          key: "start",
          value: function start() {
            this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
            this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);
          }
        }, {
          key: "_touchStart",
          value: function _touchStart(touch, event) {
            this.carManager.controlMoving();
          }
        }, {
          key: "_touchEnd",
          value: function _touchEnd(touch, event) {
            this.carManager.controlMoving(false);
          }
        }]);

        return GameCtr;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "mapManager", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "carManager", [_dec3], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvR2FtZUN0ci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkNhck1hbmFnZXIiLCJNYXBNYW5hZ2VyIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZUN0ciIsInR5cGUiLCJtYXBNYW5hZ2VyIiwicmVzZXRNYXAiLCJjYXJNYW5hZ2VyIiwicmVzZXRDYXJzIiwiY3VyclBhdGgiLCJub2RlIiwib24iLCJFdmVudFR5cGUiLCJUT1VDSF9TVEFSVCIsIl90b3VjaFN0YXJ0IiwiVE9VQ0hfRU5EIiwiX3RvdWNoRW5kIiwidG91Y2giLCJldmVudCIsImNvbnRyb2xNb3ZpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTs7OztBQUZ2QkMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsVSxpQkFBQUEsVTs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JMLFUsQ0FBdEJLLE87QUFBU0MsTUFBQUEsUSxHQUFhTixVLENBQWJNLFEsRUFDakI7O3lCQUVhQyxPLFdBRFpGLE9BQU8sQ0FBQyxTQUFELEMsVUFVSEMsUUFBUSxDQUFDO0FBQ05FLFFBQUFBLElBQUk7QUFBQTtBQUFBO0FBREUsT0FBRCxDLFVBS1JGLFFBQVEsQ0FBQztBQUNORSxRQUFBQSxJQUFJO0FBQUE7QUFBQTtBQURFLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O21DQUtPO0FBQ1o7QUFDQSxpQkFBS0MsVUFBTCxDQUFnQkMsUUFBaEI7QUFDQSxpQkFBS0MsVUFBTCxDQUFnQkMsU0FBaEIsQ0FBMEIsS0FBS0gsVUFBTCxDQUFnQkksUUFBMUM7QUFDSDs7O2tDQUVlO0FBQ1osaUJBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhYixJQUFJLENBQUNjLFNBQUwsQ0FBZUMsV0FBNUIsRUFBeUMsS0FBS0MsV0FBOUMsRUFBMkQsSUFBM0Q7QUFDQSxpQkFBS0osSUFBTCxDQUFVQyxFQUFWLENBQWFiLElBQUksQ0FBQ2MsU0FBTCxDQUFlRyxTQUE1QixFQUF1QyxLQUFLQyxTQUE1QyxFQUF1RCxJQUF2RDtBQUNIOzs7c0NBRW1CQyxLLEVBQWNDLEssRUFBbUI7QUFDakQsaUJBQUtYLFVBQUwsQ0FBZ0JZLGFBQWhCO0FBQ0g7OztvQ0FFaUJGLEssRUFBY0MsSyxFQUFtQjtBQUMvQyxpQkFBS1gsVUFBTCxDQUFnQlksYUFBaEIsQ0FBOEIsS0FBOUI7QUFDSDs7OztRQXBDd0J0QixTOzs7OztpQkFZQSxJOzs7Ozs7O2lCQUtBLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYXJNYW5hZ2VyIH0gZnJvbSAnLi9DYXJNYW5hZ2VyJztcclxuaW1wb3J0IHsgTWFwTWFuYWdlciB9IGZyb20gJy4vTWFwTWFuYWdlcic7XHJcbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG4vL+a4uOaIj+aOp+WItuexu1xyXG5AY2NjbGFzcyhcIkdhbWVDdHJcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVDdHIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IE1hcE1hbmFnZXJcclxuICAgIH0pXHJcbiAgICBtYXBNYW5hZ2VyOiBNYXBNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IENhck1hbmFnZXJcclxuICAgIH0pXHJcbiAgICBjYXJNYW5hZ2VyOiBDYXJNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgb25Mb2FkKCkge1xyXG4gICAgICAgIC8v5pWw5o2u5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5tYXBNYW5hZ2VyLnJlc2V0TWFwKCk7XHJcbiAgICAgICAgdGhpcy5jYXJNYW5hZ2VyLnJlc2V0Q2Fycyh0aGlzLm1hcE1hbmFnZXIuY3VyclBhdGgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLl90b3VjaFN0YXJ0LCB0aGlzKTtcclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLl90b3VjaEVuZCwgdGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdG91Y2hTdGFydCh0b3VjaDogVG91Y2gsIGV2ZW50OiBFdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJNYW5hZ2VyLmNvbnRyb2xNb3ZpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90b3VjaEVuZCh0b3VjaDogVG91Y2gsIGV2ZW50OiBFdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJNYW5hZ2VyLmNvbnRyb2xNb3ZpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==