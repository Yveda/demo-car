System.register(["cc", "code-quality:cr", "./GameMap.js"], function (_export, _context) {
  "use strict";

  var _cclegacy, _reporterNs, GameMap, _decorator, Component, _dec, _class, _temp, _crd, ccclass, property, MapManager;

  function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _reportPossibleCrUseOfGameMap(extras) {
    _reporterNs.report("GameMap", "./GameMap", _context.meta, extras);
  }

  _export({
    _dec: void 0,
    _class: void 0,
    _temp: void 0
  });

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }, function (_codeQualityCr) {
      _reporterNs = _codeQualityCr;
    }, function (_GameMapJs) {
      GameMap = _GameMapJs.GameMap;
    }],
    execute: function () {
      _cclegacy._RF.push({}, "dbd4d6M6UxCz75IGVltwHV0", "MapManager", _context.meta);

      _crd = true;
      ccclass = _decorator.ccclass;
      property = _decorator.property; //地图管理类

      _export("MapManager", MapManager = (_dec = ccclass("MapManager"), _dec(_class = (_temp =
      /*#__PURE__*/
      function (_Component) {
        _inherits(MapManager, _Component);

        function MapManager() {
          var _getPrototypeOf2;

          var _this;

          _classCallCheck(this, MapManager);

          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MapManager)).call.apply(_getPrototypeOf2, [this].concat(args)));
          _this.currPath = [];
          return _this;
        }

        _createClass(MapManager, [{
          key: "resetMap",
          value: function resetMap() {
            var curMap = this.node.children[0].getComponent(_crd && GameMap === void 0 ? (_reportPossibleCrUseOfGameMap({
              error: Error()
            }), GameMap) : GameMap);
            this.currPath = curMap.path; //获取当前路径
          }
        }, {
          key: "start",
          value: function start() {} // Your initialization goes here.
          // update (deltaTime: number) {
          //     // Your update function goes here.
          // }

        }]);

        return MapManager;
      }(Component), _temp)) || _class));

      _crd = false;

      _cclegacy._RF.pop();
    }
  };
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkU6L2NvbXBhbnlfcHJvamVjdC9kZW1vLWNhci9kZW1vLWNhci9hc3NldHMvc2NyaXB0L2dhbWUvTWFwTWFuYWdlci50cyJdLCJuYW1lcyI6WyJfZGVjb3JhdG9yIiwiQ29tcG9uZW50IiwiR2FtZU1hcCIsImNjY2xhc3MiLCJwcm9wZXJ0eSIsIk1hcE1hbmFnZXIiLCJjdXJyUGF0aCIsImN1ck1hcCIsIm5vZGUiLCJjaGlsZHJlbiIsImdldENvbXBvbmVudCIsInBhdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNTQSxNQUFBQSxVLE9BQUFBLFU7QUFBWUMsTUFBQUEsUyxPQUFBQSxTOzs7O0FBRFpDLE1BQUFBLE8sY0FBQUEsTzs7Ozs7O0FBRURDLE1BQUFBLE8sR0FBc0JILFUsQ0FBdEJHLE87QUFBU0MsTUFBQUEsUSxHQUFhSixVLENBQWJJLFEsRUFDakI7OzRCQUVhQyxVLFdBRFpGLE9BQU8sQ0FBQyxZQUFELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVNHRyxRLEdBQWtCLEU7Ozs7OztxQ0FFTjtBQUNmLGdCQUFNQyxNQUFNLEdBQUcsS0FBS0MsSUFBTCxDQUFVQyxRQUFWLENBQW1CLENBQW5CLEVBQXNCQyxZQUF0QjtBQUFBO0FBQUEsbUNBQWY7QUFDQSxpQkFBS0osUUFBTCxHQUFnQkMsTUFBTSxDQUFDSSxJQUF2QixDQUZlLENBRWE7QUFDL0I7OztrQ0FFUSxDQUVSLEMsQ0FERztBQUdKO0FBQ0E7QUFDQTs7Ozs7UUFyQjRCVixTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZU1hcCB9IGZyb20gJy4vR2FtZU1hcCc7XHJcbmltcG9ydCB7IF9kZWNvcmF0b3IsIENvbXBvbmVudCwgTm9kZSB9IGZyb20gXCJjY1wiO1xyXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBfZGVjb3JhdG9yO1xyXG4vL+WcsOWbvueuoeeQhuexu1xyXG5AY2NjbGFzcyhcIk1hcE1hbmFnZXJcIilcclxuZXhwb3J0IGNsYXNzIE1hcE1hbmFnZXIgZXh0ZW5kcyBDb21wb25lbnQge1xyXG4gICAgLyogY2xhc3MgbWVtYmVyIGNvdWxkIGJlIGRlZmluZWQgbGlrZSB0aGlzICovXHJcbiAgICAvLyBkdW1teSA9ICcnO1xyXG5cclxuICAgIC8qIHVzZSBgcHJvcGVydHlgIGRlY29yYXRvciBpZiB5b3VyIHdhbnQgdGhlIG1lbWJlciB0byBiZSBzZXJpYWxpemFibGUgKi9cclxuICAgIC8vIEBwcm9wZXJ0eVxyXG4gICAgLy8gc2VyaWFsaXphYmxlRHVtbXkgPSAwO1xyXG5cclxuICAgIHB1YmxpYyBjdXJyUGF0aDpOb2RlW10gPSBbXTtcclxuXHJcbiAgICBwdWJsaWMgcmVzZXRNYXAgKCkge1xyXG4gICAgICAgIGNvbnN0IGN1ck1hcCA9IHRoaXMubm9kZS5jaGlsZHJlblswXS5nZXRDb21wb25lbnQoR2FtZU1hcCk7XHJcbiAgICAgICAgdGhpcy5jdXJyUGF0aCA9IGN1ck1hcC5wYXRoOy8v6I635Y+W5b2T5YmN6Lev5b6EXHJcbiAgICB9XHJcblxyXG4gICAgc3RhcnQgKCkge1xyXG4gICAgICAgIC8vIFlvdXIgaW5pdGlhbGl6YXRpb24gZ29lcyBoZXJlLlxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVwZGF0ZSAoZGVsdGFUaW1lOiBudW1iZXIpIHtcclxuICAgIC8vICAgICAvLyBZb3VyIHVwZGF0ZSBmdW5jdGlvbiBnb2VzIGhlcmUuXHJcbiAgICAvLyB9XHJcbn1cclxuIl19