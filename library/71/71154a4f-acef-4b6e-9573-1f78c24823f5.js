System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _temp, _crd, ccclass, property, EventName, CustomerState, Constants;

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
    _class2: void 0,
    _temp: void 0,
    EventName: void 0,
    CustomerState: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "71154pPrO9LbpVzH3jCSCP1", "Constants", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      (function (EventName) {
        EventName["GREETING"] = "greeting";
        EventName["GOODBYE"] = "goodbye";
        EventName["FINISH_EDWALK"] = "finished-walk";
        EventName["START_BREAKING"] = "start-breaking";
        EventName["END_BREAKING"] = "end-breaking";
        EventName["SHOW_COIN"] = "show-coin";
      })(EventName || (EventName = {}));

      (function (CustomerState) {
        CustomerState[CustomerState["NONE"] = 0] = "NONE";
        CustomerState[CustomerState["GREETING"] = 1] = "GREETING";
        CustomerState[CustomerState["GOODBYE"] = 2] = "GOODBYE";
      })(CustomerState || (CustomerState = {}));

      _export("Constants", Constants = (_dec = ccclass("Constants"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function (_Component) {
        _inherits(Constants, _Component);

        function Constants() {
          _classCallCheck(this, Constants);

          return _possibleConstructorReturn(this, _getPrototypeOf(Constants).apply(this, arguments));
        }

        _createClass(Constants, [{
          key: "start",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return Constants;
      }(Component), _class2.EventName = EventName, _class2.CustomerState = CustomerState, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2RhdGEvQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJDb21wb25lbnQiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFdmVudE5hbWUiLCJDdXN0b21lclN0YXRlIiwiQ29uc3RhbnRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7Ozs7QUFDYkMsTUFBQUEsTyxHQUFzQkYsVSxDQUF0QkUsTztBQUFTQyxNQUFBQSxRLEdBQWFILFUsQ0FBYkcsUTs7aUJBRVpDLFM7QUFBQUEsUUFBQUEsUztBQUFBQSxRQUFBQSxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztBQUFBQSxRQUFBQSxTO0FBQUFBLFFBQUFBLFM7U0FBQUEsUyxLQUFBQSxTOztpQkFTQUMsYTtBQUFBQSxRQUFBQSxhLENBQUFBLGE7QUFBQUEsUUFBQUEsYSxDQUFBQSxhO0FBQUFBLFFBQUFBLGEsQ0FBQUEsYTtTQUFBQSxhLEtBQUFBLGE7OzJCQU9RQyxTLFdBRFpKLE9BQU8sQ0FBQyxXQUFELEM7Ozs7Ozs7Ozs7Ozs7O0FBRUo7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7a0NBS1MsQ0FFUixDLENBREc7QUFHSjtBQUNBO0FBQ0E7Ozs7O1FBakIyQkQsUyxXQVFiRyxTLEdBQVlBLFMsVUFDWkMsYSxHQUFnQkEsYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudE5hbWUge1xyXG4gICAgR1JFRVRJTkcgPSAnZ3JlZXRpbmcnLFxyXG4gICAgR09PREJZRSA9ICdnb29kYnllJyxcclxuICAgIEZJTklTSF9FRFdBTEsgPSAnZmluaXNoZWQtd2FsaycsXHJcbiAgICBTVEFSVF9CUkVBS0lORyA9ICdzdGFydC1icmVha2luZycsLy/ku4DkuYjml7blgJnlvIDlp4vliLnovaZcclxuICAgIEVORF9CUkVBS0lORyA9ICdlbmQtYnJlYWtpbmcnLC8v5LuA5LmI5pe25YCZ57uT5p2fXHJcbiAgICBTSE9XX0NPSU4gPSAnc2hvdy1jb2luJy8v5pi+56S66YeR5biBXHJcbn1cclxuXHJcbmVudW0gQ3VzdG9tZXJTdGF0ZSB7XHJcbiAgICBOT05FLFxyXG4gICAgR1JFRVRJTkcsXHJcbiAgICBHT09EQllFLFxyXG59XHJcblxyXG5AY2NjbGFzcyhcIkNvbnN0YW50c1wiKVxyXG5leHBvcnQgY2xhc3MgQ29uc3RhbnRzIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIEV2ZW50TmFtZSA9IEV2ZW50TmFtZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3VzdG9tZXJTdGF0ZSA9IEN1c3RvbWVyU3RhdGU7XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19