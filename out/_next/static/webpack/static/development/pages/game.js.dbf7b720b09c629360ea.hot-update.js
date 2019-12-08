webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/questionCard.js":
/*!************************************!*\
  !*** ./components/questionCard.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");






var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/js-quiz-v2/client/components/questionCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_5__["default"])(["\n  text-align: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n\n  > * {\n    margin: 4rem 0;\n  }\n\n  p {\n    font-size: 5rem;\n    color: #fff;\n    padding: 0;\n    margin: 0;\n\n    @media (max-width: 800px) {\n      font-size: 2.5rem;\n    }\n  }\n\n  .answers {\n    display: grid;\n    grid-template-columns: 1fr 1fr;\n    grid-gap: 4rem;\n\n    @media (max-width: 800px) {\n      grid-gap: 2rem;\n    }\n  }\n\n  button {\n    padding: 1.8rem 3.2rem;\n    background: none;\n    transform: skewY(-6deg);\n    font-size: 1.8rem;\n    border: none;\n    background: rgba(255, 255, 255, 0.9);\n    color: #0fb9b1;\n    cursor: pointer;\n    outline: none;\n    :hover {\n      background: #fff;\n    }\n\n    @media (max-width: 800px) {\n      font-size: 1.4rem;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var Card = _emotion_styled__WEBPACK_IMPORTED_MODULE_7__["default"].article(_templateObject());

var QuestionCard =
/*#__PURE__*/
function (_PureComponent) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(QuestionCard, _PureComponent);

  function QuestionCard() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, QuestionCard);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(QuestionCard).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(QuestionCard, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          question = _this$props.question,
          answerSelected = _this$props.answerSelected;
      var answers = [__jsx("button", {
        className: "correct",
        key: Math.random(),
        onClick: answerSelected,
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }, question.correct), __jsx("button", {
        className: "wrong",
        key: Math.random(),
        onClick: answerSelected,
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }, question.wrong1), __jsx("button", {
        className: "wrong",
        key: Math.random(),
        onClick: answerSelected,
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, question.wrong2), __jsx("button", {
        className: "wrong",
        key: Math.random(),
        onClick: answerSelected,
        type: "button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, question.wrong3)];
      return __jsx(Card, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, __jsx("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96
        },
        __self: this
      }, question.question), __jsx("div", {
        className: "answers",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      }, answers.sort(function () {
        return Math.random() - 0.5;
      })));
    }
  }]);

  return QuestionCard;
}(react__WEBPACK_IMPORTED_MODULE_6__["PureComponent"]);

/* harmony default export */ __webpack_exports__["default"] = (QuestionCard);

/***/ })

})
//# sourceMappingURL=game.js.dbf7b720b09c629360ea.hot-update.js.map