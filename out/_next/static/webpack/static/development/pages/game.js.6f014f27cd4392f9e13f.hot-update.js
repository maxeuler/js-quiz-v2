webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/gameoverView.js":
/*!************************************!*\
  !*** ./components/gameoverView.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");

var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/js-quiz-v2/client/components/gameoverView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n  color: #fff;\n  text-align: center;\n  font-size: 2rem;\n  margin-top: 5rem;\n  display: flex;\n  flex-direction: column;\n  p {\n    font-size: 2.5rem;\n  }\n  a {\n    margin: 1rem auto;\n    width: 10rem;\n    padding: 1.8rem 3.2rem;\n    text-decoration: none;\n    color: #0fb9b1;\n    background: #fff;\n    font-size: 1.6rem;\n    border: 1px solid #fff;\n    transform: skewY(-6deg);\n    &:hover {\n      background: rgba(255, 255, 255, 0.75);\n      border-color: rgba(255, 255, 255, 0.75);\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GameOverStyle = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());

var GameOver = function GameOver(_ref) {
  var questionsCount = _ref.questionsCount,
      correctAnswers = _ref.correctAnswers;
  var quote = correctAnswers / questionsCount;
  return __jsx(GameOverStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, "Game Over"), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, "You answered ", correctAnswers, " of ", questionsCount, " questions correct!"), quote < 0.3 && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "\uD83D\uDE30\uD83D\uDE30\uD83D\uDE30"), quote >= 0.3 && quote < 0.6 && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "\uD83D\uDC40\uD83D\uDC40\uD83D\uDC40"), quote >= 0.6 && quote < 0.9 && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "\uD83D\uDC4F\uD83C\uDFFC\uD83D\uDC4F\uD83C\uDFFC\uD83D\uDC4F\uD83C\uDFFC"), quote >= 0.9 && __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\uD83D\uDE80\uD83D\uDE80\uD83D\uDE80"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, "Home")));
};

/* harmony default export */ __webpack_exports__["default"] = (GameOver);

/***/ })

})
//# sourceMappingURL=game.js.6f014f27cd4392f9e13f.hot-update.js.map