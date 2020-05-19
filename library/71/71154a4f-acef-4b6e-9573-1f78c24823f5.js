System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, _dec, _class, _class2, _temp, _crd, ccclass, property, EventName, CustomerState, AudioSource, Constants;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0,
    EventName: void 0,
    CustomerState: void 0,
    AudioSource: void 0
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

      _export("Constants", Constants = (_dec = ccclass("Constants"), _dec(_class = (_temp = _class2 = function Constants() {
        _classCallCheck(this, Constants);
      }, _class2.EventName = EventName, _class2.CustomerState = CustomerState, _class2.AudioSource = AudioSource, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2RhdGEvQ29uc3RhbnRzLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJFdmVudE5hbWUiLCJDdXN0b21lclN0YXRlIiwiQXVkaW9Tb3VyY2UiLCJDb25zdGFudHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTs7Ozs7O0FBQ0RDLE1BQUFBLE8sR0FBc0JELFUsQ0FBdEJDLE87QUFBU0MsTUFBQUEsUSxHQUFhRixVLENBQWJFLFE7O2lCQUVaQyxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztBQUFBQSxRQUFBQSxTO0FBQUFBLFFBQUFBLFM7QUFBQUEsUUFBQUEsUztBQUFBQSxRQUFBQSxTO1NBQUFBLFMsS0FBQUEsUzs7aUJBU0FDLGE7QUFBQUEsUUFBQUEsYSxDQUFBQSxhO0FBQUFBLFFBQUFBLGEsQ0FBQUEsYTtBQUFBQSxRQUFBQSxhLENBQUFBLGE7U0FBQUEsYSxLQUFBQSxhOztpQkFNQUMsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7QUFBQUEsUUFBQUEsVztBQUFBQSxRQUFBQSxXO0FBQUFBLFFBQUFBLFc7U0FBQUEsVyxLQUFBQSxXOzsyQkFlUUMsUyxXQURaTCxPQUFPLENBQUMsV0FBRCxDOztpQkFFVUUsUyxHQUFZQSxTLFVBQ1pDLGEsR0FBZ0JBLGEsVUFDaEJDLFcsR0FBY0EsVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuZW51bSBFdmVudE5hbWUge1xyXG4gICAgR1JFRVRJTkcgPSAnZ3JlZXRpbmcnLFxyXG4gICAgR09PREJZRSA9ICdnb29kYnllJyxcclxuICAgIEZJTklTSF9FRFdBTEsgPSAnZmluaXNoZWQtd2FsaycsXHJcbiAgICBTVEFSVF9CUkVBS0lORyA9ICdzdGFydC1icmVha2luZycsLy/ku4DkuYjml7blgJnlvIDlp4vliLnovaZcclxuICAgIEVORF9CUkVBS0lORyA9ICdlbmQtYnJlYWtpbmcnLC8v5LuA5LmI5pe25YCZ57uT5p2fXHJcbiAgICBTSE9XX0NPSU4gPSAnc2hvdy1jb2luJy8v5pi+56S66YeR5biBXHJcbn1cclxuXHJcbmVudW0gQ3VzdG9tZXJTdGF0ZSB7XHJcbiAgICBOT05FLFxyXG4gICAgR1JFRVRJTkcsXHJcbiAgICBHT09EQllFLFxyXG59XHJcblxyXG5lbnVtIEF1ZGlvU291cmNlIHtcclxuICAgIEJBQ0tHUk9VTkQgPSAnYmFja2dyb3VuZCcsXHJcbiAgICBDTElDSyA9ICdjbGljaycsXHJcbiAgICBDUkFTSCA9ICdjcmFzaCcsXHJcbiAgICBHRVRNT05FWSA9ICdnZXRNb25leScsXHJcbiAgICBJTkNBUiA9ICdpbmNhcicsXHJcbiAgICBORVdPUkRFUiA9ICduZXdPcmRlcicsXHJcbiAgICBTVEFSVCA9ICdzdGFydCcsXHJcbiAgICBTVE9QID0gJ3N0b3AnLFxyXG4gICAgVE9PVElORzEgPSAndG9vdGluZzEnLFxyXG4gICAgVE9PVElORzIgPSAndG9vdGluZzInLFxyXG4gICAgV0lOID0gJ3dpbicsXHJcbn1cclxuXHJcbkBjY2NsYXNzKFwiQ29uc3RhbnRzXCIpXHJcbmV4cG9ydCBjbGFzcyBDb25zdGFudHMge1xyXG4gICAgcHVibGljIHN0YXRpYyBFdmVudE5hbWUgPSBFdmVudE5hbWU7XHJcbiAgICBwdWJsaWMgc3RhdGljIEN1c3RvbWVyU3RhdGUgPSBDdXN0b21lclN0YXRlO1xyXG4gICAgcHVibGljIHN0YXRpYyBBdWRpb1NvdXJjZSA9IEF1ZGlvU291cmNlO1xyXG59XHJcbiJdfQ==