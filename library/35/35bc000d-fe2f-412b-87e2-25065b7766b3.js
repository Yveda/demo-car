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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2RhdGEvUG9vbE1hbmFnZXIudHMiXSwibmFtZXMiOlsiX2RlY29yYXRvciIsImluc3RhbnRpYXRlIiwiY2NjbGFzcyIsInByb3BlcnR5IiwiUG9vbE1hbmFnZXIiLCJwcmVmYWIiLCJwYXJlbnQiLCJuYW1lIiwibm9kZSIsImhhbmRsZSIsImhhcyIsImdldCIsInBvcCIsInNldFBhcmVudCIsInRhcmdldCIsInB1c2giLCJzZXQiLCJNYXAiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFTQSxNQUFBQSxVLE9BQUFBLFU7QUFBNkJDLE1BQUFBLFcsT0FBQUEsVzs7Ozs7O0FBQzlCQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxROzs2QkFHSkMsVyxXQURaRixPQUFPLENBQUMsYUFBRCxDOzs7Ozs7Ozs7a0NBSWtCRyxNLEVBQWdCQyxNLEVBQWM7QUFDaEQsZ0JBQU1DLElBQUksR0FBR0YsTUFBTSxDQUFDRSxJQUFwQjtBQUNBLGdCQUFJQyxJQUFVLEdBQUcsSUFBakI7O0FBQ0EsZ0JBQUksS0FBS0MsTUFBTCxDQUFZQyxHQUFaLENBQWdCSCxJQUFoQixDQUFKLEVBQTJCO0FBQ3ZCQyxjQUFBQSxJQUFJLEdBQUcsS0FBS0MsTUFBTCxDQUFZRSxHQUFaLENBQWdCSixJQUFoQixFQUFzQkssR0FBdEIsRUFBUDtBQUNILGFBRkQsTUFFTztBQUNISixjQUFBQSxJQUFJLEdBQUdQLFdBQVcsQ0FBQ0ksTUFBRCxDQUFsQjtBQUNIOztBQUVERyxZQUFBQSxJQUFJLENBQUNLLFNBQUwsQ0FBZVAsTUFBZjtBQUNBLG1CQUFPRSxJQUFQO0FBQ0g7OztrQ0FFc0JNLE0sRUFBYztBQUNqQyxnQkFBTVAsSUFBSSxHQUFHTyxNQUFNLENBQUNQLElBQXBCOztBQUNBLGdCQUFJLEtBQUtFLE1BQUwsQ0FBWUMsR0FBWixDQUFnQkgsSUFBaEIsQ0FBSixFQUEyQjtBQUN2QixtQkFBS0UsTUFBTCxDQUFZRSxHQUFaLENBQWdCSixJQUFoQixFQUFzQlEsSUFBdEIsQ0FBMkJELE1BQTNCO0FBQ0gsYUFGRCxNQUVPO0FBQ0gsbUJBQUtMLE1BQUwsQ0FBWU8sR0FBWixDQUFnQlQsSUFBaEIsRUFBc0IsQ0FBQ08sTUFBRCxDQUF0QjtBQUNIO0FBQ0o7Ozs7bUJBdEJhTCxNLEdBQVMsSUFBSVEsR0FBSixFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgX2RlY29yYXRvciwgQ29tcG9uZW50LCBOb2RlLCBpbnN0YW50aWF0ZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG5cclxuQGNjY2xhc3MoXCJQb29sTWFuYWdlclwiKVxyXG5leHBvcnQgY2xhc3MgUG9vbE1hbmFnZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBoYW5kbGUgPSBuZXcgTWFwPHN0cmluZywgTm9kZVtdPigpO1xyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0Tm9kZShwcmVmYWI6IFByZWZhYiwgcGFyZW50OiBOb2RlKSB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IHByZWZhYi5uYW1lO1xyXG4gICAgICAgIGxldCBub2RlOiBOb2RlID0gbnVsbDtcclxuICAgICAgICBpZiAodGhpcy5oYW5kbGUuaGFzKG5hbWUpKSB7XHJcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmhhbmRsZS5nZXQobmFtZSkucG9wKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbm9kZSA9IGluc3RhbnRpYXRlKHByZWZhYikgYXMgTm9kZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG5vZGUuc2V0UGFyZW50KHBhcmVudCk7XHJcbiAgICAgICAgcmV0dXJuIG5vZGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBzZXROb2RlICh0YXJnZXQ6IE5vZGUpIHtcclxuICAgICAgICBjb25zdCBuYW1lID0gdGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgaWYgKHRoaXMuaGFuZGxlLmhhcyhuYW1lKSkge1xyXG4gICAgICAgICAgICB0aGlzLmhhbmRsZS5nZXQobmFtZSkucHVzaCh0YXJnZXQpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlLnNldChuYW1lLCBbdGFyZ2V0XSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ==