System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, AudioClip, loader, _dec, _class, _crd, ccclass, property, AudioManager;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  _export({
    _dec: void 0,
    _class: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      loader = _cc.loader;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "6d4a2VIMjVFj76+0L4/SoJs", "AudioManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("AudioManager", AudioManager = (_dec = ccclass("AudioManager"), _dec(_class =
      /*#__PURE__*/
      function () {
        function AudioManager() {
          _classCallCheck(this, AudioManager);
        }

        _createClass(AudioManager, null, [{
          key: "playMusic",
          value: function playMusic(name) {
            var path = "audio/music/".concat(name);
            loader.loadRes(path, AudioClip, function (err, clip) {
              if (err) {
                console.warn(err);
                return;
              }

              clip.setLoop(true);
              clip.play();
            });
          }
        }, {
          key: "playSound",
          value: function playSound(name) {
            var path = "audio/sound/".concat(name);
            loader.loadRes(path, AudioClip, function (err, clip) {
              if (err) {
                console.warn(err);
                return;
              }

              clip.setLoop(false);
              clip.playOneShot(1);
            });
          }
        }]);

        return AudioManager;
      }()) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvQXVkaW9NYW5hZ2VyLnRzIl0sIm5hbWVzIjpbIl9kZWNvcmF0b3IiLCJBdWRpb0NsaXAiLCJsb2FkZXIiLCJjY2NsYXNzIiwicHJvcGVydHkiLCJBdWRpb01hbmFnZXIiLCJuYW1lIiwicGF0aCIsImxvYWRSZXMiLCJlcnIiLCJjbGlwIiwiY29uc29sZSIsIndhcm4iLCJzZXRMb29wIiwicGxheSIsInBsYXlPbmVTaG90Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUE2QkMsTUFBQUEsUyxPQUFBQSxTO0FBQW1CQyxNQUFBQSxNLE9BQUFBLE07Ozs7OztBQUNqREMsTUFBQUEsTyxHQUFzQkgsVSxDQUF0QkcsTztBQUFTQyxNQUFBQSxRLEdBQWFKLFUsQ0FBYkksUTs7OEJBR0pDLFksV0FEWkYsT0FBTyxDQUFDLGNBQUQsQzs7Ozs7Ozs7O29DQUVtQkcsSSxFQUFjO0FBQ2xDLGdCQUFNQyxJQUFJLHlCQUFrQkQsSUFBbEIsQ0FBVjtBQUNBSixZQUFBQSxNQUFNLENBQUNNLE9BQVAsQ0FBZUQsSUFBZixFQUFxQk4sU0FBckIsRUFBZ0MsVUFBQ1EsR0FBRCxFQUFXQyxJQUFYLEVBQTZCO0FBQ3hELGtCQUFJRCxHQUFKLEVBQVM7QUFDTEUsZ0JBQUFBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhSCxHQUFiO0FBQ0E7QUFDSDs7QUFFREMsY0FBQUEsSUFBSSxDQUFDRyxPQUFMLENBQWEsSUFBYjtBQUNBSCxjQUFBQSxJQUFJLENBQUNJLElBQUw7QUFDSixhQVJEO0FBU0g7OztvQ0FFdUJSLEksRUFBYztBQUNsQyxnQkFBTUMsSUFBSSx5QkFBa0JELElBQWxCLENBQVY7QUFDQUosWUFBQUEsTUFBTSxDQUFDTSxPQUFQLENBQWVELElBQWYsRUFBcUJOLFNBQXJCLEVBQWdDLFVBQUNRLEdBQUQsRUFBV0MsSUFBWCxFQUE2QjtBQUN6RCxrQkFBSUQsR0FBSixFQUFTO0FBQ0xFLGdCQUFBQSxPQUFPLENBQUNDLElBQVIsQ0FBYUgsR0FBYjtBQUNBO0FBQ0g7O0FBRURDLGNBQUFBLElBQUksQ0FBQ0csT0FBTCxDQUFhLEtBQWI7QUFDQUgsY0FBQUEsSUFBSSxDQUFDSyxXQUFMLENBQWlCLENBQWpCO0FBQ0gsYUFSRDtBQVNIIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBBdWRpb0NsaXAsIExvYWRlciwgbG9hZGVyIH0gZnJvbSBcImNjXCI7XHJcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IF9kZWNvcmF0b3I7XHJcblxyXG5AY2NjbGFzcyhcIkF1ZGlvTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgQXVkaW9NYW5hZ2VyIHtcclxuICAgcHVibGljIHN0YXRpYyBwbGF5TXVzaWMobmFtZTogc3RyaW5nKSB7XHJcbiAgICAgICBjb25zdCBwYXRoID0gYGF1ZGlvL211c2ljLyR7bmFtZX1gO1xyXG4gICAgICAgbG9hZGVyLmxvYWRSZXMocGF0aCwgQXVkaW9DbGlwLCAoZXJyOiBhbnksIGNsaXA6IEF1ZGlvQ2xpcCk9PntcclxuICAgICAgICAgICAgaWYgKGVycikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNsaXAuc2V0TG9vcCh0cnVlKTtcclxuICAgICAgICAgICAgY2xpcC5wbGF5KCk7XHJcbiAgICAgICB9KVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHBsYXlTb3VuZChuYW1lOiBzdHJpbmcpIHtcclxuICAgICAgIGNvbnN0IHBhdGggPSBgYXVkaW8vc291bmQvJHtuYW1lfWA7XHJcbiAgICAgICBsb2FkZXIubG9hZFJlcyhwYXRoLCBBdWRpb0NsaXAsIChlcnI6IGFueSwgY2xpcDogQXVkaW9DbGlwKT0+e1xyXG4gICAgICAgICAgIGlmIChlcnIpIHtcclxuICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGVycik7XHJcbiAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgIGNsaXAuc2V0TG9vcChmYWxzZSk7XHJcbiAgICAgICAgICAgY2xpcC5wbGF5T25lU2hvdCgxKTtcclxuICAgICAgIH0pXHJcbiAgIH1cclxufVxyXG4iXX0=