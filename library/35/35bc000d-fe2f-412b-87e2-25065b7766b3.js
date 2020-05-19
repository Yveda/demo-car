System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, instantiate, _dec, _class, _class2, _temp, _crd, ccclass, property, PoolManager;

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  _export({
    _dec: void 0,
    _class: void 0,
    _class2: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "35bc0AN/i9BK4fiJQZbd2az", "PoolManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property;

      _export("PoolManager", PoolManager = (_dec = ccclass("PoolManager"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function () {
        function PoolManager() {
          _classCallCheck(this, PoolManager);
        }

        _createClass(PoolManager, null, [{
          key: "getNode",
          value: function getNode(prefab, parent) {
            var name = prefab.name;
            var node = null;

            if (this.handle.has(name)) {
              node = this.handle.get(name).pop();
            } else {
              node = instantiate(prefab);
            }

            node.setParent(parent);
            return node;
          }
        }, {
          key: "setNode",
          value: function setNode(target) {
            var name = target.name;
            target.parent = null;

            if (this.handle.has(name)) {
              this.handle.get(name).push(target);
            } else {
              this.handle.set(name, [target]);
            }
          }
        }]);

        return PoolManager;
      }(), _class2.handle = new Map(), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2RhdGEvUG9vbE1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImluc3RhbnRpYXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUG9vbE1hbmFnZXIiLCJwcmVmYWIiLCJwYXJlbnQiLCJuYW1lIiwibm9kZSIsImhhbmRsZSIsImhhcyIsImdldCIsInBvcCIsInNldFBhcmVudCIsInRhcmdldCIsInB1c2giLCJzZXQiLCJNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLFcsT0FBQUEsVzs7Ozs7O0FBQzlCQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOzs7Ozs7Ozs7a0NBSWtCRyxNLEVBQWdCQyxNLEVBQWM7QUFDaEQsZ0JBQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRSxJQUFwQjtBQUNBLGdCQUFJQyxJQUFVLEdBQUcsSUFBakI7O0FBQ0EsZ0JBQUksS0FBS0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCSCxJQUFoQixDQUFKLEVBQTJCO0FBQ3ZCQyxjQUFBQSxJQUFJLEdBQUcsS0FBS0MsTUFBTCxDQUFZRSxHQUFaLENBQWdCSixJQUFoQixFQUFzQkssR0FBdEIsRUFBUDtBQUNILGFBRkQsTUFFTztBQUNISixjQUFBQSxJQUFJLEdBQUdQLFdBQVcsQ0FBQ0ksTUFBRCxDQUFsQjtBQUNIOztBQUVERyxZQUFBQSxJQUFJLENBQUNLLFNBQUwsQ0FBZVAsTUFBZjtBQUNBLG1CQUFPRSxJQUFQO0FBQ0g7OztrQ0FFc0JNLE0sRUFBYztBQUNqQyxnQkFBTVAsSUFBSSxHQUFHTyxNQUFNLENBQUNQLElBQXBCO0FBQ0FPLFlBQUFBLE1BQU0sQ0FBQ1IsTUFBUCxHQUFnQixJQUFoQjs7QUFDQSxnQkFBSSxLQUFLRyxNQUFMLENBQVlDLEdBQVosQ0FBZ0JILElBQWhCLENBQUosRUFBMkI7QUFDdkIsbUJBQUtFLE1BQUwsQ0FBWUUsR0FBWixDQUFnQkosSUFBaEIsRUFBc0JRLElBQXRCLENBQTJCRCxNQUEzQjtBQUNILGFBRkQsTUFFTztBQUNILG1CQUFLTCxNQUFMLENBQVlPLEdBQVosQ0FBZ0JULElBQWhCLEVBQXNCLENBQUNPLE1BQUQsQ0FBdEI7QUFDSDtBQUNKOzs7O21CQXZCYUwsTSxHQUFTLElBQUlRLEdBQUosRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSwgaW5zdGFudGlhdGUgfSBmcm9tIFwiY2NcIjtcclxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gX2RlY29yYXRvcjtcclxuXHJcbkBjY2NsYXNzKFwiUG9vbE1hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIFBvb2xNYW5hZ2VyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaGFuZGxlID0gbmV3IE1hcDxzdHJpbmcsIE5vZGVbXT4oKTtcclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5vZGUocHJlZmFiOiBQcmVmYWIsIHBhcmVudDogTm9kZSkge1xyXG4gICAgICAgIGNvbnN0IG5hbWUgPSBwcmVmYWIubmFtZTtcclxuICAgICAgICBsZXQgbm9kZTogTm9kZSA9IG51bGw7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICBub2RlID0gdGhpcy5oYW5kbGUuZ2V0KG5hbWUpLnBvcCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSBpbnN0YW50aWF0ZShwcmVmYWIpIGFzIE5vZGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBub2RlLnNldFBhcmVudChwYXJlbnQpO1xyXG4gICAgICAgIHJldHVybiBub2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgc2V0Tm9kZSAodGFyZ2V0OiBOb2RlKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHRhcmdldC5uYW1lO1xyXG4gICAgICAgIHRhcmdldC5wYXJlbnQgPSBudWxsO1xyXG4gICAgICAgIGlmICh0aGlzLmhhbmRsZS5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGUuZ2V0KG5hbWUpLnB1c2godGFyZ2V0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZS5zZXQobmFtZSwgW3RhcmdldF0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=