webpackHotUpdate("static/development/pages/game.js",{

/***/ "./components/gameView.js":
/*!********************************!*\
  !*** ./components/gameView.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @emotion/styled */ "./node_modules/@emotion/styled/dist/styled.browser.esm.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _questionCard__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./questionCard */ "./components/questionCard.js");
/* harmony import */ var _gameControl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gameControl */ "./components/gameControl.js");
/* harmony import */ var _gameoverView__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gameoverView */ "./components/gameoverView.js");










var _jsxFileName = "/Users/maxeuler/Desktop/SoftwareDev/React/js-quiz-v2/client/components/gameView.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_10___default.a.createElement;

function _templateObject4() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  color: #fff;\n  font-size: 2rem;\n\n  @media (max-width: 800px) {\n    margin: 0;\n    font-size: 1.2rem;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  color: #fff;\n  width: 40%;\n  text-align: center;\n  margin: 0;\n  font-size: 2rem;\n\n  @media (max-width: 800px) {\n    font-size: 1.4rem;\n    width: 100%;\n    margin: 1rem 0;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-around;\n  align-items: center;\n  margin: 0 auto;\n  width: 100%;\n  max-width: 1200px;\n\n  .line {\n    width: 100%;\n    height: 3px;\n    background: #fff;\n\n    @media (max-width: 800px) {\n      margin: 0;\n    }\n  }\n\n  > * {\n    margin: 2rem 0;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_9__["default"])(["\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-image: linear-gradient(#0fb9b1, #2bcbba);\n  transform-origin: top left;\n  z-index: -1000;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

/* eslint-disable react/no-unused-state */






var Background = _emotion_styled__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject());
var Main = _emotion_styled__WEBPACK_IMPORTED_MODULE_11__["default"].div(_templateObject2());
var Explanation = _emotion_styled__WEBPACK_IMPORTED_MODULE_11__["default"].p(_templateObject3());
var GameStatus = _emotion_styled__WEBPACK_IMPORTED_MODULE_11__["default"].p(_templateObject4());

var GameView =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_7__["default"])(GameView, _Component);

  function GameView() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, GameView);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(GameView)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "URL", 'http://localhost:9000/getQuestions');

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "state", {
      questions: [],
      questionsCount: 0,
      currentQuestion: 0,
      quizIsRunning: true,
      showExplanation: false,
      correctAnswers: 0,
      questionAnswered: false,
      showError: false,
      success: false
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "answerSelected", function (e) {
      if (_this.state.questionAnswered) return;

      _this.setState({
        questionAnswered: true,
        showExplanation: true
      });

      if (e.target.className === 'correct') {
        _this.setState(function (prevState) {
          return {
            correctAnswers: prevState.correctAnswers + 1,
            success: true
          };
        });
      }
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_8__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_6__["default"])(_this), "nextQuestion", function () {
      // check if game is over
      if (_this.state.questionsCount - 1 == _this.state.currentQuestion) {
        _this.setState({
          quizIsRunning: false
        });

        return;
      }

      _this.setState(function (prevState) {
        return {
          currentQuestion: prevState.currentQuestion + 1,
          questionAnswered: false,
          showExplanation: false,
          success: false
        };
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(GameView, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var res, shuffledQuestions;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_12___default.a.get(this.URL);

              case 2:
                res = _context.sent;

                if (res.data) {
                  shuffledQuestions = res.data.sort(function () {
                    return Math.random() - 0.5;
                  });
                  this.setState({
                    questions: shuffledQuestions,
                    questionsCount: shuffledQuestions.length
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var currentQuestion = this.state.questions[this.state.currentQuestion] || '';
      return __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(Background, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }), this.state.quizIsRunning ? __jsx(Main, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      }, __jsx(GameStatus, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130
        },
        __self: this
      }, "Question ", this.state.currentQuestion + 1, " of", ' ', this.state.questions.length), __jsx(_questionCard__WEBPACK_IMPORTED_MODULE_13__["default"], {
        question: currentQuestion || '',
        answerSelected: this.answerSelected,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135
        },
        __self: this
      }), this.state.showExplanation && __jsx(react__WEBPACK_IMPORTED_MODULE_10___default.a.Fragment, null, __jsx(Explanation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142
        },
        __self: this
      }, this.state.success ? 'Correct 🔥' : 'Ooooohps 😮❌'), __jsx(Explanation, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, currentQuestion.explanation)), __jsx("div", {
        className: "line",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      }), __jsx(_gameControl__WEBPACK_IMPORTED_MODULE_14__["default"], {
        disabled: !this.state.questionAnswered,
        next: this.nextQuestion,
        isLastQuestion: this.state.currentQuestion + 1 == this.state.questionsCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149
        },
        __self: this
      })) : __jsx(_gameoverView__WEBPACK_IMPORTED_MODULE_15__["default"], {
        correctAnswers: this.state.correctAnswers,
        questionsCount: this.state.questionsCount,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 158
        },
        __self: this
      }));
    }
  }]);

  return GameView;
}(react__WEBPACK_IMPORTED_MODULE_10__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (GameView);

/***/ })

})
//# sourceMappingURL=game.js.ddec690106875c746afb.hot-update.js.map