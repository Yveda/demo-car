System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Enum, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _temp, _crd, ccclass, property, ROAD_POINT_TYPE, ROAD_MOVE_TYPE, RoadPoint;

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

  _export({
    _dec: void 0,
    _dec2: void 0,
    _dec3: void 0,
    _dec4: void 0,
    _dec5: void 0,
    _dec6: void 0,
    _dec7: void 0,
    _dec8: void 0,
    _dec9: void 0,
    _dec10: void 0,
    _class: void 0,
    _class2: void 0,
    _descriptor: void 0,
    _descriptor2: void 0,
    _descriptor3: void 0,
    _descriptor4: void 0,
    _descriptor5: void 0,
    _descriptor6: void 0,
    _descriptor7: void 0,
    _descriptor8: void 0,
    _descriptor9: void 0,
    _temp: void 0,
    ROAD_POINT_TYPE: void 0,
    ROAD_MOVE_TYPE: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Enum = _cc.Enum;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "b0d3bEO0VlPdK2GcPETDGIA", "RoadPoint", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (ROAD_POINT_TYPE) {
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["NORMAL"] = 1] = "NORMAL";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["START"] = 2] = "START";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["GREETING"] = 3] = "GREETING";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["GOODBYE"] = 4] = "GOODBYE";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["END"] = 5] = "END";
        ROAD_POINT_TYPE[ROAD_POINT_TYPE["AI_START"] = 6] = "AI_START";
      })(ROAD_POINT_TYPE || (ROAD_POINT_TYPE = {}));

      //编辑器序列识别为枚举
      Enum(ROAD_POINT_TYPE); //路线类型, 没有定义开始编号的话一开始就是0

      (function (ROAD_MOVE_TYPE) {
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["LINE"] = 1] = "LINE";
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["CURVE"] = 2] = "CURVE";
      })(ROAD_MOVE_TYPE || (ROAD_MOVE_TYPE = {}));

      Enum(ROAD_MOVE_TYPE);

      _export("RoadPoint", RoadPoint = (_dec = ccclass("RoadPoint"), _dec2 = property({
        type: ROAD_POINT_TYPE,
        displayOrder: 1
      }), _dec3 = property({
        type: Node,
        displayOrder: 2,
        //编辑器排序
        visible: function visible() {
          //显示的条件
          return this.type !== ROAD_POINT_TYPE.END;
        }
      }), _dec4 = property({
        type: ROAD_MOVE_TYPE,
        displayOrder: 3,
        visible: function visible() {
          return this.type !== ROAD_POINT_TYPE.END;
        }
      }), _dec5 = property({
        displayOrder: 4,
        visible: function visible() {
          return this.type !== ROAD_POINT_TYPE.END && this.moveTyoe === ROAD_MOVE_TYPE.CURVE;
        }
      }), _dec6 = property({
        type: Vec3,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.GREETING || this.type === ROAD_POINT_TYPE.GOODBYE;
        }
      }), _dec7 = property({
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec8 = property({
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec9 = property({
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec10 = property({
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec(_class = (_class2 = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(RoadPoint, _Component);

        function RoadPoint() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, RoadPoint);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(RoadPoint)).call.apply(_getPrototypeOf2, [this].concat(args)));

          _initializerDefineProperty(_this, "type", _descriptor, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "nextStation", _descriptor2, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "moveTyoe", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "clockwise", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "direction", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "interval", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "delayTime", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speed", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cars", _descriptor9, _assertThisInitialized(_this));

          return _this;
        }

        _createClass(RoadPoint, [{
          key: "start",
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return RoadPoint;
      }(Component), _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ROAD_POINT_TYPE.NORMAL;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nextStation", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveTyoe", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return ROAD_MOVE_TYPE.LINE;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "clockwise", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return true;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3(1, 0, 0);
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "delayTime", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "speed", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0.05;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "cars", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '201';
        }
      })), _class2)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvUm9hZFBvaW50LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsIkVudW0iLCJjY2NsYXNzIiwicHJvcGVydHkiLCJST0FEX1BPSU5UX1RZUEUiLCJST0FEX01PVkVfVFlQRSIsIlJvYWRQb2ludCIsInR5cGUiLCJkaXNwbGF5T3JkZXIiLCJ2aXNpYmxlIiwiRU5EIiwibW92ZVR5b2UiLCJDVVJWRSIsIkdSRUVUSU5HIiwiR09PREJZRSIsIkFJX1NUQVJUIiwiTk9STUFMIiwiTElORSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBU0EsTUFBQUEsVSxPQUFBQSxVO0FBQVlDLE1BQUFBLFMsT0FBQUEsUztBQUFXQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEksT0FBQUEsSTs7Ozs7O0FBQ3BDQyxNQUFBQSxPLEdBQXNCTCxVLENBQXRCSyxPO0FBQVNDLE1BQUFBLFEsR0FBYU4sVSxDQUFiTSxROztpQkFFWkMsZTtBQUFBQSxRQUFBQSxlLENBQUFBLGU7QUFBQUEsUUFBQUEsZSxDQUFBQSxlO0FBQUFBLFFBQUFBLGUsQ0FBQUEsZTtBQUFBQSxRQUFBQSxlLENBQUFBLGU7QUFBQUEsUUFBQUEsZSxDQUFBQSxlO0FBQUFBLFFBQUFBLGUsQ0FBQUEsZTtTQUFBQSxlLEtBQUFBLGU7O0FBU0w7QUFDQUgsTUFBQUEsSUFBSSxDQUFDRyxlQUFELENBQUosQyxDQUVBOztpQkFDS0MsYztBQUFBQSxRQUFBQSxjLENBQUFBLGM7QUFBQUEsUUFBQUEsYyxDQUFBQSxjO1NBQUFBLGMsS0FBQUEsYzs7QUFLTEosTUFBQUEsSUFBSSxDQUFDSSxjQUFELENBQUo7OzJCQUdhQyxTLFdBRFpKLE9BQU8sQ0FBQyxXQUFELEMsVUFTSEMsUUFBUSxDQUFDO0FBQ05JLFFBQUFBLElBQUksRUFBRUgsZUFEQTtBQUVOSSxRQUFBQSxZQUFZLEVBQUU7QUFGUixPQUFELEMsVUFNUkwsUUFBUSxDQUFDO0FBQ05JLFFBQUFBLElBQUksRUFBRVIsSUFEQTtBQUVOUyxRQUFBQSxZQUFZLEVBQUUsQ0FGUjtBQUVVO0FBQ2hCQyxRQUFBQSxPQUFPLEVBQUUsbUJBQTBCO0FBQUM7QUFDaEMsaUJBQU8sS0FBS0YsSUFBTCxLQUFjSCxlQUFlLENBQUNNLEdBQXJDO0FBQ0g7QUFMSyxPQUFELEMsVUFTUlAsUUFBUSxDQUFDO0FBQ05JLFFBQUFBLElBQUksRUFBRUYsY0FEQTtBQUVORyxRQUFBQSxZQUFZLEVBQUUsQ0FGUjtBQUdOQyxRQUFBQSxPQUFPLEVBQUUsbUJBQTBCO0FBQy9CLGlCQUFPLEtBQUtGLElBQUwsS0FBY0gsZUFBZSxDQUFDTSxHQUFyQztBQUNIO0FBTEssT0FBRCxDLFVBU1JQLFFBQVEsQ0FBQztBQUNOSyxRQUFBQSxZQUFZLEVBQUUsQ0FEUjtBQUVOQyxRQUFBQSxPQUFPLEVBQUUsbUJBQTBCO0FBQy9CLGlCQUFPLEtBQUtGLElBQUwsS0FBY0gsZUFBZSxDQUFDTSxHQUE5QixJQUFxQyxLQUFLQyxRQUFMLEtBQWtCTixjQUFjLENBQUNPLEtBQTdFO0FBQ0g7QUFKSyxPQUFELEMsVUFTUlQsUUFBUSxDQUFDO0FBQ05JLFFBQUFBLElBQUksRUFBRVAsSUFEQTtBQUVOUyxRQUFBQSxPQUFPLEVBQUUsbUJBQTBCO0FBQy9CLGlCQUFPLEtBQUtGLElBQUwsS0FBY0gsZUFBZSxDQUFDUyxRQUE5QixJQUEwQyxLQUFLTixJQUFMLEtBQWNILGVBQWUsQ0FBQ1UsT0FBL0U7QUFDSDtBQUpLLE9BQUQsQyxVQVFSWCxRQUFRLENBQUM7QUFDTk0sUUFBQUEsT0FBTyxFQUFFLG1CQUEwQjtBQUMvQixpQkFBTyxLQUFLRixJQUFMLEtBQWNILGVBQWUsQ0FBQ1csUUFBckM7QUFDSDtBQUhLLE9BQUQsQyxVQU9SWixRQUFRLENBQUM7QUFDTk0sUUFBQUEsT0FBTyxFQUFFLG1CQUEwQjtBQUMvQixpQkFBTyxLQUFLRixJQUFMLEtBQWNILGVBQWUsQ0FBQ1csUUFBckM7QUFDSDtBQUhLLE9BQUQsQyxVQU9SWixRQUFRLENBQUM7QUFDTk0sUUFBQUEsT0FBTyxFQUFFLG1CQUEwQjtBQUMvQixpQkFBTyxLQUFLRixJQUFMLEtBQWNILGVBQWUsQ0FBQ1csUUFBckM7QUFDSDtBQUhLLE9BQUQsQyxXQU9SWixRQUFRLENBQUM7QUFDTk0sUUFBQUEsT0FBTyxFQUFFLG1CQUEwQjtBQUMvQixpQkFBTyxLQUFLRixJQUFMLEtBQWNILGVBQWUsQ0FBQ1csUUFBckM7QUFDSDtBQUhLLE9BQUQsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7a0NBU0EsQ0FFUixDLENBREc7QUFHSjtBQUNBO0FBQ0E7Ozs7O1FBckYyQmpCLFM7Ozs7O2lCQVlwQk0sZUFBZSxDQUFDWSxNOzs7Ozs7O2lCQVNILEk7Ozs7Ozs7aUJBU1RYLGNBQWMsQ0FBQ1ksSTs7Ozs7OztpQkFRZCxJOzs7Ozs7O2lCQVNBLElBQUlqQixJQUFKLENBQVMsQ0FBVCxFQUFZLENBQVosRUFBZSxDQUFmLEM7Ozs7Ozs7aUJBT0QsQzs7Ozs7OztpQkFPQyxDOzs7Ozs7O2lCQU9KLEk7Ozs7Ozs7aUJBT0QsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgRW51bSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuZW51bSBST0FEX1BPSU5UX1RZUEUge1xyXG4gICAgTk9STUFMID0gMSxcclxuICAgIFNUQVJULFxyXG4gICAgR1JFRVRJTkcsXHJcbiAgICBHT09EQllFLFxyXG4gICAgRU5ELFxyXG4gICAgQUlfU1RBUlRcclxufVxyXG5cclxuLy/nvJbovpHlmajluo/liJfor4bliKvkuLrmnprkuL5cclxuRW51bShST0FEX1BPSU5UX1RZUEUpO1xyXG5cclxuLy/ot6/nur/nsbvlnossIOayoeacieWumuS5ieW8gOWni+e8luWPt+eahOivneS4gOW8gOWni+WwseaYrzBcclxuZW51bSBST0FEX01PVkVfVFlQRSB7XHJcbiAgICBMSU5FID0gMSwvL+ebtOe6v1xyXG4gICAgQ1VSVkUsLy/ovazlvK9cclxufVxyXG5cclxuRW51bShST0FEX01PVkVfVFlQRSk7XHJcblxyXG5AY2NjbGFzcyhcIlJvYWRQb2ludFwiKVxyXG5leHBvcnQgY2xhc3MgUm9hZFBvaW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IFJPQURfUE9JTlRfVFlQRSxcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDEsXHJcbiAgICB9KVxyXG4gICAgdHlwZSA9IFJPQURfUE9JTlRfVFlQRS5OT1JNQUw7Ly/pu5jorqTmmK9ub3JtYWxcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IE5vZGUsXHJcbiAgICAgICAgZGlzcGxheU9yZGVyOiAyLC8v57yW6L6R5Zmo5o6S5bqPXHJcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24odGhpczogUm9hZFBvaW50KSB7Ly/mmL7npLrnmoTmnaHku7ZcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSAhPT0gUk9BRF9QT0lOVF9UWVBFLkVORFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBuZXh0U3RhdGlvbjogTm9kZSA9IG51bGw7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBST0FEX01PVkVfVFlQRSxcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDMsXHJcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24odGhpczogUm9hZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgIT09IFJPQURfUE9JTlRfVFlQRS5FTkRcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgbW92ZVR5b2UgPSBST0FEX01PVkVfVFlQRS5MSU5FXHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDQsXHJcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24odGhpczogUm9hZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgIT09IFJPQURfUE9JTlRfVFlQRS5FTkQgJiYgdGhpcy5tb3ZlVHlvZSA9PT0gUk9BRF9NT1ZFX1RZUEUuQ1VSVkU7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNsb2Nrd2lzZSA9IHRydWU7XHJcblxyXG4gICAgLy/mjqXpgIHlrqLngrnmlrnlkJEsIOm7mOiupOWPs+i+uVxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB0eXBlOiBWZWMzLFxyXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uKHRoaXM6IFJvYWRQb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBST0FEX1BPSU5UX1RZUEUuR1JFRVRJTkcgfHwgdGhpcy50eXBlID09PSBST0FEX1BPSU5UX1RZUEUuR09PREJZRTtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgZGlyZWN0aW9uID0gbmV3IFZlYzMoMSwgMCwgMCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbih0aGlzOiBSb2FkUG9pbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gUk9BRF9QT0lOVF9UWVBFLkFJX1NUQVJUO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBpbnRlcnZhbCA9IDM7Ly8gQUnkuqflh7rpl7TpmpRcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uKHRoaXM6IFJvYWRQb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBST0FEX1BPSU5UX1RZUEUuQUlfU1RBUlQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGRlbGF5VGltZSA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbih0aGlzOiBSb2FkUG9pbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gUk9BRF9QT0lOVF9UWVBFLkFJX1NUQVJUO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBzcGVlZCA9IDAuMDU7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICB2aXNpYmxlOiBmdW5jdGlvbih0aGlzOiBSb2FkUG9pbnQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMudHlwZSA9PT0gUk9BRF9QT0lOVF9UWVBFLkFJX1NUQVJUO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjYXJzID0gJzIwMSc7XHJcblxyXG5cclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgLy8gWW91ciBpbml0aWFsaXphdGlvbiBnb2VzIGhlcmUuXHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXBkYXRlIChkZWx0YVRpbWU6IG51bWJlcikge1xyXG4gICAgLy8gICAgIC8vIFlvdXIgdXBkYXRlIGZ1bmN0aW9uIGdvZXMgaGVyZS5cclxuICAgIC8vIH1cclxufVxyXG4iXX0=