webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/gameControl.js":
/*!***********************************!*\
  !*** ./components/gameControl.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/js-quiz-v2/client/components/gameControl.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: none;\n  background: #fff;\n  color: #0fb9b1;\n  padding: 1.8rem 3.2rem;\n  font-size: 1.8rem;\n  cursor: pointer;\n  outline: none;\n  :disabled {\n    background: rgba(255, 255, 255, 0.5);\n    cursor: default;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  border: none;\n  background: none;\n  color: #fff;\n  font-size: 1.6rem;\n  cursor: pointer;\n  outline: none;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  width: 100%;\n  max-width: 400px;\n  margin: 0 auto;\n  display: flex;\n  justify-content: space-around;\n\n  .selected {\n    background: #fff;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var Buttons = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var CancelButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject2());
var NextButton = _emotion_styled__WEBPACK_IMPORTED_MODULE_2__["default"].button(_templateObject3());

var GameControl = function GameControl(props) {
  return __jsx(Buttons, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(CancelButton, {
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Cancel"), __jsx(NextButton, {
    type: "button",
    disabled: props.disabled,
    onClick: props.next,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, props.isLastQuestion ? 'Finish Quiz' : 'Next'));
};

/* harmony default export */ __webpack_exports__["default"] = (GameControl);

/***/ })

})
//# sourceMappingURL=game.js.e11e1d09e99ebe3c016c.hot-update.js.map