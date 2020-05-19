System.register(["cc", "code-quality:cr", "./AudioManager.js", "./CarManager.js", "./MapManager.js", "../data/Constants.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, AudioManager, CarManager, MapManager, _decorator, Component, Node, Constants, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _temp, _crd, ccclass, property, GameCtr;

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

  function _reportPossibleCrUseOfCarManager(extras) {
    _reporterNs.report("CarManager", "./CarManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMapManager(extras) {
    _reporterNs.report("MapManager", "./MapManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConstants(extras) {
    _reporterNs.report("Constants", "../data/Constants", _context.meta, extras);
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
    }, function (_AudioManagerJs) {
      AudioManager = _AudioManagerJs.AudioManager;
    }, function (_CarManagerJs) {
      CarManager = _CarManagerJs.CarManager;
    }, function (_MapManagerJs) {
      MapManager = _MapManagerJs.MapManager;
    }, function (_dataConstantsJs) {
      Constants = _dataConstantsJs.Constants;
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
            this.carManager.reset(this.mapManager.currPath);
          }
        }, {
          key: "start",
          value: function start() {
            this.node.on(Node.EventType.TOUCH_START, this._touchStart, this);
            this.node.on(Node.EventType.TOUCH_END, this._touchEnd, this);
            (_crd && AudioManager === void 0 ? (_reportPossibleCrUseOfAudioManager({
              error: Error()
            }), AudioManager) : AudioManager).playMusic((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).AudioSource.BACKGROUND);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvR2FtZUN0ci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkF1ZGlvTWFuYWdlciIsIkNhck1hbmFnZXIiLCJNYXBNYW5hZ2VyIiwiQ29uc3RhbnRzIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiR2FtZUN0ciIsInR5cGUiLCJtYXBNYW5hZ2VyIiwicmVzZXRNYXAiLCJjYXJNYW5hZ2VyIiwicmVzZXQiLCJjdXJyUGF0aCIsIm5vZGUiLCJvbiIsIkV2ZW50VHlwZSIsIlRPVUNIX1NUQVJUIiwiX3RvdWNoU3RhcnQiLCJUT1VDSF9FTkQiLCJfdG91Y2hFbmQiLCJwbGF5TXVzaWMiLCJBdWRpb1NvdXJjZSIsIkJBQ0tHUk9VTkQiLCJ0b3VjaCIsImV2ZW50IiwiY29udHJvbE1vdmluZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7Ozs7QUFIdkJDLE1BQUFBLFksbUJBQUFBLFk7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7O0FBQ0FDLE1BQUFBLFUsaUJBQUFBLFU7O0FBRUFDLE1BQUFBLFMsb0JBQUFBLFM7Ozs7OztBQUNEQyxNQUFBQSxPLEdBQXNCUCxVLENBQXRCTyxPO0FBQVNDLE1BQUFBLFEsR0FBYVIsVSxDQUFiUSxRLEVBQ2pCOzt5QkFFYUMsTyxXQURaRixPQUFPLENBQUMsU0FBRCxDLFVBVUhDLFFBQVEsQ0FBQztBQUNORSxRQUFBQSxJQUFJO0FBQUE7QUFBQTtBQURFLE9BQUQsQyxVQUtSRixRQUFRLENBQUM7QUFDTkUsUUFBQUEsSUFBSTtBQUFBO0FBQUE7QUFERSxPQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQ0FLTztBQUNaO0FBQ0EsaUJBQUtDLFVBQUwsQ0FBZ0JDLFFBQWhCO0FBQ0EsaUJBQUtDLFVBQUwsQ0FBZ0JDLEtBQWhCLENBQXNCLEtBQUtILFVBQUwsQ0FBZ0JJLFFBQXRDO0FBQ0g7OztrQ0FFZTtBQUNaLGlCQUFLQyxJQUFMLENBQVVDLEVBQVYsQ0FBYWYsSUFBSSxDQUFDZ0IsU0FBTCxDQUFlQyxXQUE1QixFQUF5QyxLQUFLQyxXQUE5QyxFQUEyRCxJQUEzRDtBQUNBLGlCQUFLSixJQUFMLENBQVVDLEVBQVYsQ0FBYWYsSUFBSSxDQUFDZ0IsU0FBTCxDQUFlRyxTQUE1QixFQUF1QyxLQUFLQyxTQUE1QyxFQUF1RCxJQUF2RDtBQUVBO0FBQUE7QUFBQSw4Q0FBYUMsU0FBYixDQUF1QjtBQUFBO0FBQUEsd0NBQVVDLFdBQVYsQ0FBc0JDLFVBQTdDO0FBQ0g7OztzQ0FFbUJDLEssRUFBY0MsSyxFQUFtQjtBQUNqRCxpQkFBS2QsVUFBTCxDQUFnQmUsYUFBaEI7QUFDSDs7O29DQUVpQkYsSyxFQUFjQyxLLEVBQW1CO0FBQy9DLGlCQUFLZCxVQUFMLENBQWdCZSxhQUFoQixDQUE4QixLQUE5QjtBQUNIOzs7O1FBdEN3QjNCLFM7Ozs7O2lCQVlBLEk7Ozs7Ozs7aUJBS0EsSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEF1ZGlvTWFuYWdlciB9IGZyb20gJy4vQXVkaW9NYW5hZ2VyJztcclxuaW1wb3J0IHsgQ2FyTWFuYWdlciB9IGZyb20gJy4vQ2FyTWFuYWdlcic7XHJcbmltcG9ydCB7IE1hcE1hbmFnZXIgfSBmcm9tICcuL01hcE1hbmFnZXInO1xyXG5pbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUsIEV2ZW50VG91Y2ggfSBmcm9tIFwiY2NcIjtcclxuaW1wb3J0IHsgQ29uc3RhbnRzIH0gZnJvbSAnLi4vZGF0YS9Db25zdGFudHMnO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG4vL+a4uOaIj+aOp+WItuexu1xyXG5AY2NjbGFzcyhcIkdhbWVDdHJcIilcclxuZXhwb3J0IGNsYXNzIEdhbWVDdHIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IE1hcE1hbmFnZXJcclxuICAgIH0pXHJcbiAgICBtYXBNYW5hZ2VyOiBNYXBNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IENhck1hbmFnZXJcclxuICAgIH0pXHJcbiAgICBjYXJNYW5hZ2VyOiBDYXJNYW5hZ2VyID0gbnVsbDtcclxuXHJcbiAgICBwdWJsaWMgb25Mb2FkKCkge1xyXG4gICAgICAgIC8v5pWw5o2u5Yid5aeL5YyWXHJcbiAgICAgICAgdGhpcy5tYXBNYW5hZ2VyLnJlc2V0TWFwKCk7XHJcbiAgICAgICAgdGhpcy5jYXJNYW5hZ2VyLnJlc2V0KHRoaXMubWFwTWFuYWdlci5jdXJyUGF0aCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0ICgpIHtcclxuICAgICAgICB0aGlzLm5vZGUub24oTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMuX3RvdWNoU3RhcnQsIHRoaXMpO1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuX3RvdWNoRW5kLCB0aGlzKTtcclxuXHJcbiAgICAgICAgQXVkaW9NYW5hZ2VyLnBsYXlNdXNpYyhDb25zdGFudHMuQXVkaW9Tb3VyY2UuQkFDS0dST1VORCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBfdG91Y2hTdGFydCh0b3VjaDogVG91Y2gsIGV2ZW50OiBFdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJNYW5hZ2VyLmNvbnRyb2xNb3ZpbmcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90b3VjaEVuZCh0b3VjaDogVG91Y2gsIGV2ZW50OiBFdmVudFRvdWNoKSB7XHJcbiAgICAgICAgdGhpcy5jYXJNYW5hZ2VyLmNvbnRyb2xNb3ZpbmcoZmFsc2UpO1xyXG4gICAgfVxyXG59XHJcbiJdfQ==