System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, Node, Vec3, Enum, macro, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _class3, _temp, _crd, ccclass, property, ROAD_POINT_TYPE, ROAD_MOVE_TYPE, RoadPoint;

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
    _class3: void 0,
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
      macro = _cc.macro;
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
        ROAD_MOVE_TYPE[ROAD_MOVE_TYPE["BEND"] = 2] = "BEND";
      })(ROAD_MOVE_TYPE || (ROAD_MOVE_TYPE = {}));

      Enum(ROAD_MOVE_TYPE);

      _export("RoadPoint", RoadPoint = (_dec = ccclass("RoadPoint"), _dec2 = property({
        type: ROAD_POINT_TYPE,
        displayOrder: 1
      }), _dec3 = property({
        type: Node,
        displayOrder: 2 //编辑器排序
        // visible: function(this: RoadPoint) {//显示的条件
        //     return this.type !== ROAD_POINT_TYPE.END
        // }

      }), _dec4 = property({
        type: ROAD_MOVE_TYPE,
        displayOrder: 3 // visible: function(this: RoadPoint) {
        //     return this.type !== ROAD_POINT_TYPE.END
        // }

      }), _dec5 = property({
        displayOrder: 4,
        visible: function visible() {
          return this.moveType === ROAD_MOVE_TYPE.BEND;
        }
      }), _dec6 = property({
        type: Vec3,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.GREETING || this.type === ROAD_POINT_TYPE.GOODBYE;
        }
      }), _dec7 = property({
        displayOrder: 5,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec8 = property({
        displayOrder: 6,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec9 = property({
        displayOrder: 7,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec10 = property({
        displayOrder: 8,
        visible: function visible() {
          return this.type === ROAD_POINT_TYPE.AI_START;
        }
      }), _dec(_class = (_class2 = (_temp = _class3 =
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

          _initializerDefineProperty(_this, "moveType", _descriptor3, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "clockwise", _descriptor4, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "direction", _descriptor5, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "delayTime", _descriptor6, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "interval", _descriptor7, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "speed", _descriptor8, _assertThisInitialized(_this));

          _initializerDefineProperty(_this, "cars", _descriptor9, _assertThisInitialized(_this));

          _this._arrCars = [];
          _this._cd = null;
          return _this;
        }

        _createClass(RoadPoint, [{
          key: "start",
          value: function start() {
            this._arrCars = this.cars.split(',');
          }
        }, {
          key: "startSchedule",
          value: function startSchedule(cd) {
            if (this.type !== ROAD_POINT_TYPE.AI_START) {
              return;
            }

            this.stopSchedule();
            this._cd = cd;
            this.scheduleOnce(this._startDelay, this.delayTime);
          }
        }, {
          key: "stopSchedule",
          value: function stopSchedule() {
            this.unschedule(this._startDelay);
            this.unschedule(this._scheduleCD);
          }
        }, {
          key: "_startDelay",
          value: function _startDelay() {
            //保证一开始进来就会执行一次
            this._scheduleCD(); //无线循环回调


            this.schedule(this._scheduleCD, this.interval, macro.REPEAT_FOREVER);
          }
        }, {
          key: "_scheduleCD",
          value: function _scheduleCD() {
            var index = Math.floor(Math.random() * this._arrCars.length);

            if (this._cd) {
              this._cd(this, this._arrCars[index]);
            }
          }
        }]);

        return RoadPoint;
      }(Component), _class3.RoadPointType = ROAD_POINT_TYPE, _class3.RoadMoveType = ROAD_MOVE_TYPE, _temp), (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "type", [_dec2], {
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
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "moveType", [_dec4], {
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
          return false;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "direction", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return new Vec3();
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "delayTime", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 0;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "interval", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 3;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvUm9hZFBvaW50LnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJOb2RlIiwiVmVjMyIsIkVudW0iLCJtYWNybyIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIlJPQURfUE9JTlRfVFlQRSIsIlJPQURfTU9WRV9UWVBFIiwiUm9hZFBvaW50IiwidHlwZSIsImRpc3BsYXlPcmRlciIsInZpc2libGUiLCJtb3ZlVHlwZSIsIkJFTkQiLCJHUkVFVElORyIsIkdPT0RCWUUiLCJBSV9TVEFSVCIsIl9hcnJDYXJzIiwiX2NkIiwiY2FycyIsInNwbGl0IiwiY2QiLCJzdG9wU2NoZWR1bGUiLCJzY2hlZHVsZU9uY2UiLCJfc3RhcnREZWxheSIsImRlbGF5VGltZSIsInVuc2NoZWR1bGUiLCJfc2NoZWR1bGVDRCIsInNjaGVkdWxlIiwiaW50ZXJ2YWwiLCJSRVBFQVRfRk9SRVZFUiIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwiUm9hZFBvaW50VHlwZSIsIlJvYWRNb3ZlVHlwZSIsIk5PUk1BTCIsIkxJTkUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTO0FBQVdDLE1BQUFBLEksT0FBQUEsSTtBQUFNQyxNQUFBQSxJLE9BQUFBLEk7QUFBTUMsTUFBQUEsSSxPQUFBQSxJO0FBQU1DLE1BQUFBLEssT0FBQUEsSzs7Ozs7O0FBQzFDQyxNQUFBQSxPLEdBQXNCTixVLENBQXRCTSxPO0FBQVNDLE1BQUFBLFEsR0FBYVAsVSxDQUFiTyxROztpQkFFWkMsZTtBQUFBQSxRQUFBQSxlLENBQUFBLGU7QUFBQUEsUUFBQUEsZSxDQUFBQSxlO0FBQUFBLFFBQUFBLGUsQ0FBQUEsZTtBQUFB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QyxXQUFyQjtBQUNIOzs7d0NBRXNCO0FBQ25CO0FBQ0EsaUJBQUtBLFdBQUwsR0FGbUIsQ0FHbkI7OztBQUNBLGlCQUFLQyxRQUFMLENBQWMsS0FBS0QsV0FBbkIsRUFBZ0MsS0FBS0UsUUFBckMsRUFBK0MxQixLQUFLLENBQUMyQixjQUFyRDtBQUNIOzs7d0NBRXNCO0FBQ25CLGdCQUFNQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsS0FBS2pCLFFBQUwsQ0FBY2tCLE1BQXpDLENBQWQ7O0FBQ0EsZ0JBQUksS0FBS2pCLEdBQVQsRUFBYztBQUNWLG1CQUFLQSxHQUFMLENBQVMsSUFBVCxFQUFlLEtBQUtELFFBQUwsQ0FBY2MsS0FBZCxDQUFmO0FBQ0g7QUFDSjs7OztRQXZIMEJoQyxTLFdBUWJxQyxhLEdBQWdCOUIsZSxVQUNoQitCLFksR0FBZTlCLGM7Ozs7O2lCQU10QkQsZUFBZSxDQUFDZ0MsTTs7Ozs7OztpQkFTSCxJOzs7Ozs7O2lCQVNUL0IsY0FBYyxDQUFDZ0MsSTs7Ozs7OztpQkFRTCxLOzs7Ozs7O2lCQVVULElBQUl0QyxJQUFKLEU7Ozs7Ozs7aUJBUUEsQzs7Ozs7OztpQkFRRCxDOzs7Ozs7O2lCQVFILEk7Ozs7Ozs7aUJBUUQsSyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgVmVjMywgRW51bSwgbWFjcm8gfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmVudW0gUk9BRF9QT0lOVF9UWVBFIHtcclxuICAgIE5PUk1BTCA9IDEsXHJcbiAgICBTVEFSVCxcclxuICAgIEdSRUVUSU5HLFxyXG4gICAgR09PREJZRSxcclxuICAgIEVORCxcclxuICAgIEFJX1NUQVJUXHJcbn1cclxuXHJcbi8v57yW6L6R5Zmo5bqP5YiX6K+G5Yir5Li65p6a5Li+XHJcbkVudW0oUk9BRF9QT0lOVF9UWVBFKTtcclxuXHJcbi8v6Lev57q/57G75Z6LLCDmsqHmnInlrprkuYnlvIDlp4vnvJblj7fnmoTor53kuIDlvIDlp4vlsLHmmK8wXHJcbmVudW0gUk9BRF9NT1ZFX1RZUEUge1xyXG4gICAgTElORSA9IDEsLy/nm7Tnur9cclxuICAgIEJFTkQsLy/lvK/ot69cclxufVxyXG5cclxuRW51bShST0FEX01PVkVfVFlQRSk7XHJcblxyXG5AY2NjbGFzcyhcIlJvYWRQb2ludFwiKVxyXG5leHBvcnQgY2xhc3MgUm9hZFBvaW50IGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIFJvYWRQb2ludFR5cGUgPSBST0FEX1BPSU5UX1RZUEU7XHJcbiAgICBwdWJsaWMgc3RhdGljIFJvYWRNb3ZlVHlwZSA9IFJPQURfTU9WRV9UWVBFO1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogUk9BRF9QT0lOVF9UWVBFLFxyXG4gICAgICAgIGRpc3BsYXlPcmRlcjogMSxcclxuICAgIH0pXHJcbiAgICB0eXBlID0gUk9BRF9QT0lOVF9UWVBFLk5PUk1BTDsvL+m7mOiupOaYr25vcm1hbFxyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgdHlwZTogTm9kZSxcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDIsLy/nvJbovpHlmajmjpLluo9cclxuICAgICAgICAvLyB2aXNpYmxlOiBmdW5jdGlvbih0aGlzOiBSb2FkUG9pbnQpIHsvL+aYvuekuueahOadoeS7tlxyXG4gICAgICAgIC8vICAgICByZXR1cm4gdGhpcy50eXBlICE9PSBST0FEX1BPSU5UX1RZUEUuRU5EXHJcbiAgICAgICAgLy8gfVxyXG4gICAgfSlcclxuICAgIG5leHRTdGF0aW9uOiBOb2RlID0gbnVsbDtcclxuXHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IFJPQURfTU9WRV9UWVBFLFxyXG4gICAgICAgIGRpc3BsYXlPcmRlcjogMyxcclxuICAgICAgICAvLyB2aXNpYmxlOiBmdW5jdGlvbih0aGlzOiBSb2FkUG9pbnQpIHtcclxuICAgICAgICAvLyAgICAgcmV0dXJuIHRoaXMudHlwZSAhPT0gUk9BRF9QT0lOVF9UWVBFLkVORFxyXG4gICAgICAgIC8vIH1cclxuICAgIH0pXHJcbiAgICBtb3ZlVHlwZSA9IFJPQURfTU9WRV9UWVBFLkxJTkU7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDQsXHJcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24odGhpczogUm9hZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm1vdmVUeXBlID09PSBST0FEX01PVkVfVFlQRS5CRU5EO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICBjbG9ja3dpc2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAvL+aOpemAgeWuoueCueaWueWQkSwg6buY6K6k5Y+z6L65XHJcbiAgICBAcHJvcGVydHkoe1xyXG4gICAgICAgIHR5cGU6IFZlYzMsXHJcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24odGhpczogUm9hZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5HUkVFVElORyB8fCB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5HT09EQllFO1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAvLyBkaXJlY3Rpb24gPSBuZXcgVmVjMygxLCAwLCAwKTtcclxuICAgIGRpcmVjdGlvbiA9IG5ldyBWZWMzKCk7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDUsXHJcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24odGhpczogUm9hZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5BSV9TVEFSVDsgXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGRlbGF5VGltZSA9IDA7XHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDYsXHJcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24odGhpczogUm9hZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5BSV9TVEFSVDtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgaW50ZXJ2YWwgPSAzOy8vIEFJ5Lqn5Ye66Ze06ZqUXHJcblxyXG4gICAgQHByb3BlcnR5KHtcclxuICAgICAgICBkaXNwbGF5T3JkZXI6IDcsXHJcbiAgICAgICAgdmlzaWJsZTogZnVuY3Rpb24odGhpczogUm9hZFBvaW50KSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnR5cGUgPT09IFJPQURfUE9JTlRfVFlQRS5BSV9TVEFSVDtcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgc3BlZWQgPSAwLjA1O1xyXG5cclxuICAgIEBwcm9wZXJ0eSh7XHJcbiAgICAgICAgZGlzcGxheU9yZGVyOiA4LFxyXG4gICAgICAgIHZpc2libGU6IGZ1bmN0aW9uKHRoaXM6IFJvYWRQb2ludCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy50eXBlID09PSBST0FEX1BPSU5UX1RZUEUuQUlfU1RBUlQ7XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuICAgIGNhcnMgPSAnMjAxJztcclxuXHJcbiAgICBwcml2YXRlIF9hcnJDYXJzOiBzdHJpbmdbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY2Q6IEZ1bmN0aW9uID0gbnVsbDtcclxuXHJcbiAgICBzdGFydCAoKSB7XHJcbiAgICAgICAgdGhpcy5fYXJyQ2FycyA9IHRoaXMuY2Fycy5zcGxpdCgnLCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydFNjaGVkdWxlKGNkOiBGdW5jdGlvbikge1xyXG4gICAgICAgIGlmICh0aGlzLnR5cGUgIT09IFJPQURfUE9JTlRfVFlQRS5BSV9TVEFSVCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnN0b3BTY2hlZHVsZSgpO1xyXG4gICAgICAgIHRoaXMuX2NkID0gY2Q7XHJcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UodGhpcy5fc3RhcnREZWxheSwgdGhpcy5kZWxheVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdG9wU2NoZWR1bGUoKSB7XHJcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuX3N0YXJ0RGVsYXkpO1xyXG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLl9zY2hlZHVsZUNEKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIF9zdGFydERlbGF5ICgpIHtcclxuICAgICAgICAvL+S/neivgeS4gOW8gOWni+i/m+adpeWwseS8muaJp+ihjOS4gOasoVxyXG4gICAgICAgIHRoaXMuX3NjaGVkdWxlQ0QoKTtcclxuICAgICAgICAvL+aXoOe6v+W+queOr+Wbnuiwg1xyXG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5fc2NoZWR1bGVDRCwgdGhpcy5pbnRlcnZhbCwgbWFjcm8uUkVQRUFUX0ZPUkVWRVIpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgX3NjaGVkdWxlQ0QgKCkge1xyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5fYXJyQ2Fycy5sZW5ndGgpO1xyXG4gICAgICAgIGlmICh0aGlzLl9jZCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jZCh0aGlzLCB0aGlzLl9hcnJDYXJzW2luZGV4XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIFxyXG59XHJcbiJdfQ==