System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _temp, _crd, ccclass, property, EventName, CustomerState, AudioSource, CarGroup, Constants;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0,
    EventName: void 0,
    CustomerState: void 0,
    AudioSource: void 0,
    CarGroup: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
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
        EventName["GMAE_START"] = "game-start";
        EventName["GMAE_OVER"] = "game-over";
      })(EventName || (EventName = {}));

      (function (CustomerState) {
        CustomerState[CustomerState["NONE"] = 0] = "NONE";
        CustomerState[CustomerState["GREETING"] = 1] = "GREETING";
        CustomerState[CustomerState["GOODBYE"] = 2] = "GOODBYE";
      })(CustomerState || (CustomerState = {}));

      (function (AudioSource) {
        AudioSource["BACKGROUND"] = "background";
        AudioSource["CLICK"] = "click";
        AudioSource["CRASH"] = "crash";
        AudioSource["GETMONEY"] = "getMoney";
        AudioSource["INCAR"] = "incar";
        AudioSource["NEWORDER"] = "newOrder";
        AudioSource["START"] = "start";
        AudioSource["STOP"] = "stop";
        AudioSource["TOOTING1"] = "tooting1";
        AudioSource["TOOTING2"] = "tooting2";
        AudioSource["WIN"] = "win";
      })(AudioSource || (AudioSource = {}));

      (function (CarGroup) {
        CarGroup[CarGroup["NORMAL"] = 1] = "NORMAL";
        CarGroup[CarGroup["MAIN_CAR"] = 2] = "MAIN_CAR";
        CarGroup[CarGroup["OTHER_CAR"] = 4] = "OTHER_CAR";
      })(CarGroup || (CarGroup = {}));

      _export("Constants", Constants = (_dec = ccclass("Constants"), _dec(_class = (_temp = _class2 = function Constants() {
        _classCallCheck(this, Constants);
      }, _class2.EventName = EventName, _class2.CustomerState = CustomerState, _class2.AudioSource = AudioSource, _class2.CarGroup = CarGroup, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2RhdGEvQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFdmVudE5hbWUiLCJDdXN0b21lclN0YXRlIiwiQXVkaW9Tb3VyY2UiLCJDYXJHcm91cCIsIkNvbnN0YW50cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JELFUsQ0FBdEJDLE87QUFBU0MsTUFBQUEsUSxHQUFhRixVLENBQWJFLFE7O2lCQUVaQyxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztBQUFBQSxRQUFBQSxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztBQUFBQSxRQUFBQSxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztTQUFBQSxTLEtBQUFBLFM7O2lCQVdBQyxhO0FBQUFBLFFBQUFBLGEsQ0FBQUEsYTtBQUFBQSxRQUFBQSxhLENBQUFBLGE7QUFBQUEsUUFBQUEsYSxDQUFBQSxhO1NBQUFBLGEsS0FBQUEsYTs7aUJBTUFDLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO1NBQUFBLFcsS0FBQUEsVzs7aUJBZUNDLFE7QUFBQUEsUUFBQUEsUSxDQUFBQSxRO0FBQUFBLFFBQUFBLFEsQ0FBQUEsUTtBQUFBQSxRQUFBQSxRLENBQUFBLFE7U0FBQUEsUSxLQUFBQSxROzsyQkFPT0MsUyxXQURaTixPQUFPLENBQUMsV0FBRCxDOztpQkFFVUUsUyxHQUFZQSxTLFVBQ1pDLGEsR0FBZ0JBLGEsVUFDaEJDLFcsR0FBY0EsVyxVQUNkQyxRLEdBQVdBLFEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBfZGVjb3JhdG9yLCBDb21wb25lbnQsIE5vZGUgfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbmVudW0gRXZlbnROYW1lIHtcclxuICAgIEdSRUVUSU5HID0gJ2dyZWV0aW5nJyxcclxuICAgIEdPT0RCWUUgPSAnZ29vZGJ5ZScsXHJcbiAgICBGSU5JU0hfRURXQUxLID0gJ2ZpbmlzaGVkLXdhbGsnLFxyXG4gICAgU1RBUlRfQlJFQUtJTkcgPSAnc3RhcnQtYnJlYWtpbmcnLC8v5LuA5LmI5pe25YCZ5byA5aeL5Yi56L2mXHJcbiAgICBFTkRfQlJFQUtJTkcgPSAnZW5kLWJyZWFraW5nJywvL+S7gOS5iOaXtuWAmee7k+adn1xyXG4gICAgU0hPV19DT0lOID0gJ3Nob3ctY29pbicsLy/mmL7npLrph5HluIFcclxuICAgIEdNQUVfU1RBUlQgPSAnZ2FtZS1zdGFydCcsXHJcbiAgICBHTUFFX09WRVIgPSAnZ2FtZS1vdmVyJyxcclxufVxyXG5cclxuZW51bSBDdXN0b21lclN0YXRlIHtcclxuICAgIE5PTkUsXHJcbiAgICBHUkVFVElORyxcclxuICAgIEdPT0RCWUUsXHJcbn1cclxuXHJcbmVudW0gQXVkaW9Tb3VyY2Uge1xyXG4gICAgQkFDS0dST1VORCA9ICdiYWNrZ3JvdW5kJyxcclxuICAgIENMSUNLID0gJ2NsaWNrJyxcclxuICAgIENSQVNIID0gJ2NyYXNoJyxcclxuICAgIEdFVE1PTkVZID0gJ2dldE1vbmV5JyxcclxuICAgIElOQ0FSID0gJ2luY2FyJyxcclxuICAgIE5FV09SREVSID0gJ25ld09yZGVyJyxcclxuICAgIFNUQVJUID0gJ3N0YXJ0JyxcclxuICAgIFNUT1AgPSAnc3RvcCcsXHJcbiAgICBUT09USU5HMSA9ICd0b290aW5nMScsXHJcbiAgICBUT09USU5HMiA9ICd0b290aW5nMicsXHJcbiAgICBXSU4gPSAnd2luJyxcclxufVxyXG5cclxuLy/ph4fnlKjkuozov5vliLbmlrnlvI9cclxuZW51bSAgQ2FyR3JvdXAge1xyXG4gICAgTk9STUFMID0gMSA8PCAwLFxyXG4gICAgTUFJTl9DQVIgPSAxIDw8IDEsXHJcbiAgICBPVEhFUl9DQVIgPSAxIDw8IDJcclxufVxyXG5cclxuQGNjY2xhc3MoXCJDb25zdGFudHNcIilcclxuZXhwb3J0IGNsYXNzIENvbnN0YW50cyB7XHJcbiAgICBwdWJsaWMgc3RhdGljIEV2ZW50TmFtZSA9IEV2ZW50TmFtZTtcclxuICAgIHB1YmxpYyBzdGF0aWMgQ3VzdG9tZXJTdGF0ZSA9IEN1c3RvbWVyU3RhdGU7XHJcbiAgICBwdWJsaWMgc3RhdGljIEF1ZGlvU291cmNlID0gQXVkaW9Tb3VyY2U7XHJcbiAgICBwdWJsaWMgc3RhdGljIENhckdyb3VwID0gQ2FyR3JvdXA7XHJcbn1cclxuIl19