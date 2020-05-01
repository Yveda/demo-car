System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _decorator, Component, _dec, _class, _class2, _temp, _crd, ccclass, property, CustomEventListener;

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
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "b129bRPXbhLMIfiRzT6xXr8", "CustomEventListener", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property; //消息传递:通过ID接收回调，回调对象，然后再把事件派发出去
      //结构定制：事件名对应多个回调

      _export("CustomEventListener", CustomEventListener = (_dec = ccclass("CustomEventListener"), _dec(_class = (_temp = _class2 =
      /*#__PURE__*/
      function (_Component) {
        _inherits(CustomEventListener, _Component);

        function CustomEventListener() {
          _classCallCheck(this, CustomEventListener);

          return _possibleConstructorReturn(this, _getPrototypeOf(CustomEventListener).apply(this, arguments));
        }

        _createClass(CustomEventListener, [{
          key: "start",
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }], [{
          key: "on",

          /* class member could be defined like this */
          // dummy = '';

          /* use `property` decorator if your want the member to be serializable */
          // @property
          // serializableDummy = 0;
          //定义处理器
          //事件监听
          value: function on(eventName, cb, target) {
            //如果当前处理器没有相应事件名的话则建立这个事件名的数据
            if (!this.handle[eventName]) {
              this.handle[eventName] = [];
            }

            var data = {
              func: cb,
              target: target
            };
            this.handle[eventName].push(data);
          } //事件注销

        }, {
          key: "off",
          value: function off(eventName, cb, target) {
            var list = this.handle[eventName];

            if (!list || list.length <= 0) {
              return;
            }

            for (var i = 0; i < list.length; i++) {
              var event = list[i];

              if (event.func === cb && (!target || target === event.target)) {
                list.splice(i, 1);
                break;
              }
            }
          } //事件派发

        }, {
          key: "dispatchEvent",
          value: function dispatchEvent(eventName) {
            var list = this.handle[eventName];

            if (!list || list.length <= 0) {
              return;
            }

            for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
              args[_key - 1] = arguments[_key];
            }

            for (var i = 0; i < list.length; i++) {
              var event = list[i];
              event.func.apply(event.target, args);
            }
          }
        }]);

        return CustomEventListener;
      }(Component), _class2.handle = {}, _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2RhdGEvQ3VzdG9tRXZlbnRMaXN0ZW5lci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiY2NjbGFzcyIsInByb3BlcnR5IiwiQ3VzdG9tRXZlbnRMaXN0ZW5lciIsImV2ZW50TmFtZSIsImNiIiwidGFyZ2V0IiwiaGFuZGxlIiwiZGF0YSIsImZ1bmMiLCJwdXNoIiwibGlzdCIsImxlbmd0aCIsImkiLCJldmVudCIsInNwbGljZSIsImFyZ3MiLCJhcHBseSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQVNBLE1BQUFBLFUsT0FBQUEsVTtBQUFZQyxNQUFBQSxTLE9BQUFBLFM7Ozs7OztBQUNiQyxNQUFBQSxPLEdBQXNCRixVLENBQXRCRSxPO0FBQVNDLE1BQUFBLFEsR0FBYUgsVSxDQUFiRyxRLEVBQ2pCO0FBRUE7O3FDQVdhQyxtQixXQURaRixPQUFPLENBQUMscUJBQUQsQzs7Ozs7Ozs7Ozs7OztrQ0FxREssQ0FFUixDLENBREc7QUFHSjtBQUNBO0FBQ0E7Ozs7O0FBekRBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFHQTs2QkFDaUJHLFMsRUFBbUJDLEUsRUFBY0MsTSxFQUFhO0FBQzNEO0FBQ0EsZ0JBQUksQ0FBQyxLQUFLQyxNQUFMLENBQVlILFNBQVosQ0FBTCxFQUE2QjtBQUN6QixtQkFBS0csTUFBTCxDQUFZSCxTQUFaLElBQXlCLEVBQXpCO0FBQ0g7O0FBRUQsZ0JBQU1JLElBQWdCLEdBQUc7QUFBRUMsY0FBQUEsSUFBSSxFQUFFSixFQUFSO0FBQVlDLGNBQUFBLE1BQU0sRUFBTkE7QUFBWixhQUF6QjtBQUNBLGlCQUFLQyxNQUFMLENBQVlILFNBQVosRUFBdUJNLElBQXZCLENBQTRCRixJQUE1QjtBQUNILFcsQ0FFRDs7Ozs4QkFDa0JKLFMsRUFBbUJDLEUsRUFBY0MsTSxFQUFjO0FBQzdELGdCQUFNSyxJQUFJLEdBQUcsS0FBS0osTUFBTCxDQUFZSCxTQUFaLENBQWI7O0FBQ0EsZ0JBQUksQ0FBQ08sSUFBRCxJQUFTQSxJQUFJLENBQUNDLE1BQUwsSUFBZSxDQUE1QixFQUErQjtBQUMzQjtBQUNIOztBQUVELGlCQUFLLElBQUlDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdGLElBQUksQ0FBQ0MsTUFBekIsRUFBaUNDLENBQUMsRUFBbEMsRUFBc0M7QUFDbEMsa0JBQU1DLEtBQUssR0FBR0gsSUFBSSxDQUFDRSxDQUFELENBQWxCOztBQUNBLGtCQUFJQyxLQUFLLENBQUNMLElBQU4sS0FBZUosRUFBZixLQUFzQixDQUFDQyxNQUFELElBQVdBLE1BQU0sS0FBS1EsS0FBSyxDQUFDUixNQUFsRCxDQUFKLEVBQStEO0FBQzNESyxnQkFBQUEsSUFBSSxDQUFDSSxNQUFMLENBQVlGLENBQVosRUFBZSxDQUFmO0FBQ0E7QUFDSDtBQUVKO0FBQ0osVyxDQUVEOzs7O3dDQUM2QlQsUyxFQUFnQztBQUN6RCxnQkFBTU8sSUFBSSxHQUFHLEtBQUtKLE1BQUwsQ0FBWUgsU0FBWixDQUFiOztBQUNBLGdCQUFJLENBQUNPLElBQUQsSUFBU0EsSUFBSSxDQUFDQyxNQUFMLElBQWUsQ0FBNUIsRUFBK0I7QUFDM0I7QUFDSDs7QUFKd0QsOENBQVZJLElBQVU7QUFBVkEsY0FBQUEsSUFBVTtBQUFBOztBQU16RCxpQkFBSyxJQUFJSCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRixJQUFJLENBQUNDLE1BQXpCLEVBQWlDQyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGtCQUFNQyxLQUFLLEdBQUdILElBQUksQ0FBQ0UsQ0FBRCxDQUFsQjtBQUNEQyxjQUFBQSxLQUFLLENBQUNMLElBQU4sQ0FBV1EsS0FBWCxDQUFpQkgsS0FBSyxDQUFDUixNQUF2QixFQUErQlUsSUFBL0I7QUFDRjtBQUNKOzs7O1FBbERvQ2hCLFMsV0FTdkJPLE0sR0FBaUIsRSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG4vL+a2iOaBr+S8oOmAkjrpgJrov4dJROaOpeaUtuWbnuiwg++8jOWbnuiwg+Wvueixoe+8jOeEtuWQjuWGjeaKiuS6i+S7tua0vuWPkeWHuuWOu1xyXG5cclxuLy/nu5PmnoTlrprliLbvvJrkuovku7blkI3lr7nlupTlpJrkuKrlm57osINcclxuaW50ZXJmYWNlIElFdmVudERhdGEge1xyXG4gICAgZnVuYzogRnVuY3Rpb247XHJcbiAgICB0YXJnZXQ6IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIElFdmVudCB7XHJcbiAgICBbZXZlbnROYW1lOiBzdHJpbmddOiBJRXZlbnREYXRhW107Ly/moLnmja7lvZPliY3kuovku7blkI3lj6/ku6XmnInlpJrkuKrlm57osIPku6Xlj4rlpJrkuKrnm67moIdcclxufVxyXG5cclxuQGNjY2xhc3MoXCJDdXN0b21FdmVudExpc3RlbmVyXCIpXHJcbmV4cG9ydCBjbGFzcyBDdXN0b21FdmVudExpc3RlbmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICAgIC8qIGNsYXNzIG1lbWJlciBjb3VsZCBiZSBkZWZpbmVkIGxpa2UgdGhpcyAqL1xyXG4gICAgLy8gZHVtbXkgPSAnJztcclxuXHJcbiAgICAvKiB1c2UgYHByb3BlcnR5YCBkZWNvcmF0b3IgaWYgeW91ciB3YW50IHRoZSBtZW1iZXIgdG8gYmUgc2VyaWFsaXphYmxlICovXHJcbiAgICAvLyBAcHJvcGVydHlcclxuICAgIC8vIHNlcmlhbGl6YWJsZUR1bW15ID0gMDtcclxuXHJcbiAgICAvL+WumuS5ieWkhOeQhuWZqFxyXG4gICAgcHVibGljIHN0YXRpYyBoYW5kbGU6IElFdmVudCA9IHt9O1xyXG5cclxuICAgIC8v5LqL5Lu255uR5ZCsXHJcbiAgICBwdWJsaWMgc3RhdGljIG9uKGV2ZW50TmFtZTogc3RyaW5nLCBjYjogRnVuY3Rpb24sIHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgLy/lpoLmnpzlvZPliY3lpITnkIblmajmsqHmnInnm7jlupTkuovku7blkI3nmoTor53liJnlu7rnq4vov5nkuKrkuovku7blkI3nmoTmlbDmja5cclxuICAgICAgICBpZiAoIXRoaXMuaGFuZGxlW2V2ZW50TmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXSA9IFtdO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YTogSUV2ZW50RGF0YSA9IHsgZnVuYzogY2IsIHRhcmdldH07XHJcbiAgICAgICAgdGhpcy5oYW5kbGVbZXZlbnROYW1lXS5wdXNoKGRhdGEpO1xyXG4gICAgfVxyXG5cclxuICAgIC8v5LqL5Lu25rOo6ZSAXHJcbiAgICBwdWJsaWMgc3RhdGljIG9mZihldmVudE5hbWU6IHN0cmluZywgY2I6IEZ1bmN0aW9uLCB0YXJnZXQ/OiBhbnkpIHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVbZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuZnVuYyA9PT0gY2IgJiYgKCF0YXJnZXQgfHwgdGFyZ2V0ID09PSBldmVudC50YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LnNwbGljZShpLCAxKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvL+S6i+S7tua0vuWPkVxyXG4gICAgcHVibGljIHN0YXRpYyBkaXNwYXRjaEV2ZW50IChldmVudE5hbWU6IHN0cmluZywgLi4uYXJnczphbnkpIHtcclxuICAgICAgICBjb25zdCBsaXN0ID0gdGhpcy5oYW5kbGVbZXZlbnROYW1lXTtcclxuICAgICAgICBpZiAoIWxpc3QgfHwgbGlzdC5sZW5ndGggPD0gMCkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBsaXN0W2ldO1xyXG4gICAgICAgICAgIGV2ZW50LmZ1bmMuYXBwbHkoZXZlbnQudGFyZ2V0LCBhcmdzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19