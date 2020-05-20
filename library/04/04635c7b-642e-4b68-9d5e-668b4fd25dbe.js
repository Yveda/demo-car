System.register(["cc", "code-quality:cr", "./AudioManager.js", "./CarManager.js", "./MapManager.js", "../data/Constants.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, AudioManager, CarManager, MapManager, _decorator, Component, Node, BoxColliderComponent, Constants, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _temp, _crd, ccclass, property, GameCtr;

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
    _dec4: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      BoxColliderComponent = _cc.BoxColliderComponent;
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
      }), _dec4 = property({
        type: Node
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

          _initializerDefineProperty(_this, "group", _descriptor3, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(GameCtr, [{
          key: "onLoad",
          value: function onLoad() {
            //数据初始化
            this.mapManager.resetMap();
            this.carManager.reset(this.mapManager.currPath); //设置地板静态刚体

            var collider = this.group.getComponent(BoxColliderComponent);
            collider.setGroup((_crd && Constants === void 0 ? (_reportPossibleCrUseOfConstants({
              error: Error()
            }), Constants) : Constants).CarGroup.NORMAL);
            collider.setMask(-1);
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "group", [_dec4], {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvR2FtZUN0ci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiTm9kZSIsIkJveENvbGxpZGVyQ29tcG9uZW50IiwiQXVkaW9NYW5hZ2VyIiwiQ2FyTWFuYWdlciIsIk1hcE1hbmFnZXIiLCJDb25zdGFudHMiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJHYW1lQ3RyIiwidHlwZSIsIm1hcE1hbmFnZXIiLCJyZXNldE1hcCIsImNhck1hbmFnZXIiLCJyZXNldCIsImN1cnJQYXRoIiwiY29sbGlkZXIiLCJncm91cCIsImdldENvbXBvbmVudCIsInNldEdyb3VwIiwiQ2FyR3JvdXAiLCJOT1JNQUwiLCJzZXRNYXNrIiwibm9kZSIsIm9uIiwiRXZlbnRUeXBlIiwiVE9VQ0hfU1RBUlQiLCJfdG91Y2hTdGFydCIsIlRPVUNIX0VORCIsIl90b3VjaEVuZCIsInBsYXlNdXNpYyIsIkF1ZGlvU291cmNlIiwiQkFDS0dST1VORCIsInRvdWNoIiwiZXZlbnQiLCJjb250cm9sTW92aW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR1NBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7QUFBV0MsTUFBQUEsSSxPQUFBQSxJO0FBQWtCQyxNQUFBQSxvQixPQUFBQSxvQjs7OztBQUh6Q0MsTUFBQUEsWSxtQkFBQUEsWTs7QUFDQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFDQUMsTUFBQUEsVSxpQkFBQUEsVTs7QUFFQUMsTUFBQUEsUyxvQkFBQUEsUzs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JSLFUsQ0FBdEJRLE87QUFBU0MsTUFBQUEsUSxHQUFhVCxVLENBQWJTLFEsRUFDakI7O3lCQUVhQyxPLFdBRFpGLE9BQU8sQ0FBQyxTQUFELEMsVUFVSEMsUUFBUSxDQUFDO0FBQ05FLFFBQUFBLElBQUk7QUFBQTtBQUFBO0FBREUsT0FBRCxDLFVBS1JGLFFBQVEsQ0FBQztBQUNORSxRQUFBQSxJQUFJO0FBQUE7QUFBQTtBQURFLE9BQUQsQyxVQU1SRixRQUFRLENBQUM7QUFDTkUsUUFBQUEsSUFBSSxFQUFFVDtBQURBLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7bUNBS087QUFDWjtBQUNBLGlCQUFLVSxVQUFMLENBQWdCQyxRQUFoQjtBQUNBLGlCQUFLQyxVQUFMLENBQWdCQyxLQUFoQixDQUFzQixLQUFLSCxVQUFMLENBQWdCSSxRQUF0QyxFQUhZLENBS1o7O0FBQ0EsZ0JBQU1DLFFBQVEsR0FBRyxLQUFLQyxLQUFMLENBQVdDLFlBQVgsQ0FBd0JoQixvQkFBeEIsQ0FBakI7QUFDQWMsWUFBQUEsUUFBUSxDQUFDRyxRQUFULENBQWtCO0FBQUE7QUFBQSx3Q0FBVUMsUUFBVixDQUFtQkMsTUFBckM7QUFDQUwsWUFBQUEsUUFBUSxDQUFDTSxPQUFULENBQWlCLENBQUMsQ0FBbEI7QUFDSDs7O2tDQUVlO0FBQ1osaUJBQUtDLElBQUwsQ0FBVUMsRUFBVixDQUFhdkIsSUFBSSxDQUFDd0IsU0FBTCxDQUFlQyxXQUE1QixFQUF5QyxLQUFLQyxXQUE5QyxFQUEyRCxJQUEzRDtBQUNBLGlCQUFLSixJQUFMLENBQVVDLEVBQVYsQ0FBYXZCLElBQUksQ0FBQ3dCLFNBQUwsQ0FBZUcsU0FBNUIsRUFBdUMsS0FBS0MsU0FBNUMsRUFBdUQsSUFBdkQ7QUFFQTtBQUFBO0FBQUEsOENBQWFDLFNBQWIsQ0FBdUI7QUFBQTtBQUFBLHdDQUFVQyxXQUFWLENBQXNCQyxVQUE3QztBQUNIOzs7c0NBRW1CQyxLLEVBQWNDLEssRUFBbUI7QUFDakQsaUJBQUtyQixVQUFMLENBQWdCc0IsYUFBaEI7QUFDSDs7O29DQUVpQkYsSyxFQUFjQyxLLEVBQW1CO0FBQy9DLGlCQUFLckIsVUFBTCxDQUFnQnNCLGFBQWhCLENBQThCLEtBQTlCO0FBQ0g7Ozs7UUFqRHdCbkMsUzs7Ozs7aUJBWUEsSTs7Ozs7OztpQkFLQSxJOzs7Ozs7O2lCQU1YLEkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBdWRpb01hbmFnZXIgfSBmcm9tICcuL0F1ZGlvTWFuYWdlcic7XHJcbmltcG9ydCB7IENhck1hbmFnZXIgfSBmcm9tICcuL0Nhck1hbmFnZXInO1xyXG5pbXBvcnQgeyBNYXBNYW5hZ2VyIH0gZnJvbSAnLi9NYXBNYW5hZ2VyJztcclxuaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBFdmVudFRvdWNoLCBCb3hDb2xsaWRlckNvbXBvbmVudCwgVmVjMyB9IGZyb20gXCJjY1wiO1xyXG5pbXBvcnQgeyBDb25zdGFudHMgfSBmcm9tICcuLi9kYXRhL0NvbnN0YW50cyc7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcbi8v5ri45oiP5o6n5Yi257G7XHJcbkBjY2NsYXNzKFwiR2FtZUN0clwiKVxyXG5leHBvcnQgY2xhc3MgR2FtZUN0ciBleHRlbmRzIENvbXBvbmVudCB7XHJcbiAgICAvKiBjbGFzcyBtZW1iZXIgY291bGQgYmUgZGVmaW5lZCBsaWtlIHRoaXMgKi9cclxuICAgIC8vIGR1bW15ID0gJyc7XHJcblxyXG4gICAgLyogdXNlIGBwcm9wZXJ0eWAgZGVjb3JhdG9yIGlmIHlvdXIgd2FudCB0aGUgbWVtYmVyIHRvIGJlIHNlcmlhbGl6YWJsZSAqL1xyXG4gICAgLy8gQHByb3BlcnR5XHJcbiAgICAvLyBzZXJpYWxpemFibGVEdW1teSA9IDA7XHJcblxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogTWFwTWFuYWdlclxyXG4gICAgfSlcclxuICAgIG1hcE1hbmFnZXI6IE1hcE1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogQ2FyTWFuYWdlclxyXG4gICAgfSlcclxuICAgIGNhck1hbmFnZXI6IENhck1hbmFnZXIgPSBudWxsO1xyXG5cclxuICAgIC8v5Zyw5p2/77ya6Z2Z5oCB5Yia5L2T77yM5LiN55So5re75YqgcmlnaWRCb2R5XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IE5vZGUsXHJcbiAgICB9KVxyXG4gICAgZ3JvdXA6IE5vZGUgPSBudWxsO1xyXG5cclxuICAgIHB1YmxpYyBvbkxvYWQoKSB7XHJcbiAgICAgICAgLy/mlbDmja7liJ3lp4vljJZcclxuICAgICAgICB0aGlzLm1hcE1hbmFnZXIucmVzZXRNYXAoKTtcclxuICAgICAgICB0aGlzLmNhck1hbmFnZXIucmVzZXQodGhpcy5tYXBNYW5hZ2VyLmN1cnJQYXRoKTtcclxuXHJcbiAgICAgICAgLy/orr7nva7lnLDmnb/pnZnmgIHliJrkvZNcclxuICAgICAgICBjb25zdCBjb2xsaWRlciA9IHRoaXMuZ3JvdXAuZ2V0Q29tcG9uZW50KEJveENvbGxpZGVyQ29tcG9uZW50KTtcclxuICAgICAgICBjb2xsaWRlci5zZXRHcm91cChDb25zdGFudHMuQ2FyR3JvdXAuTk9STUFMKTtcclxuICAgICAgICBjb2xsaWRlci5zZXRNYXNrKC0xKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnQgKCkge1xyXG4gICAgICAgIHRoaXMubm9kZS5vbihOb2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5fdG91Y2hTdGFydCwgdGhpcyk7XHJcbiAgICAgICAgdGhpcy5ub2RlLm9uKE5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5fdG91Y2hFbmQsIHRoaXMpO1xyXG5cclxuICAgICAgICBBdWRpb01hbmFnZXIucGxheU11c2ljKENvbnN0YW50cy5BdWRpb1NvdXJjZS5CQUNLR1JPVU5EKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF90b3VjaFN0YXJ0KHRvdWNoOiBUb3VjaCwgZXZlbnQ6IEV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLmNhck1hbmFnZXIuY29udHJvbE1vdmluZygpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3RvdWNoRW5kKHRvdWNoOiBUb3VjaCwgZXZlbnQ6IEV2ZW50VG91Y2gpIHtcclxuICAgICAgICB0aGlzLmNhck1hbmFnZXIuY29udHJvbE1vdmluZyhmYWxzZSk7XHJcbiAgICB9XHJcbn1cclxuIl19