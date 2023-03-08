"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Explanation = _interopRequireDefault(require("./Explanation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

var renderMessageForCorrectAnswer = function renderMessageForCorrectAnswer(question) {
  var defaultMessage = 'You are correct. Please click Next to continue.';
  return question.messageForCorrectAnswer || defaultMessage;
};

var renderMessageForIncorrectAnswer = function renderMessageForIncorrectAnswer(question) {
  var defaultMessage = 'Incorrect answer. Please try again.';
  return question.messageForIncorrectAnswer || defaultMessage;
};

var InstantFeedback = function InstantFeedback(_ref) {
  var showInstantFeedback = _ref.showInstantFeedback,
      incorrectAnswer = _ref.incorrectAnswer,
      correctAnswer = _ref.correctAnswer,
      question = _ref.question,
      onQuestionSubmit = _ref.onQuestionSubmit,
      userAnswer = _ref.userAnswer;
  (0, _react.useEffect)(function () {
    if (onQuestionSubmit && (correctAnswer || incorrectAnswer)) {
      onQuestionSubmit({
        question: question,
        userAnswer: userAnswer,
        isCorrect: correctAnswer
      });
    }
  }, [correctAnswer, incorrectAnswer]);
  return _react.default.createElement(_react.default.Fragment, null, incorrectAnswer && showInstantFeedback && _react.default.createElement("div", {
    className: "alert incorrect"
  }, renderMessageForIncorrectAnswer(question)), correctAnswer && showInstantFeedback && _react.default.createElement("div", {
    className: "alert correct"
  }, renderMessageForCorrectAnswer(question), _react.default.createElement(_Explanation.default, {
    question: question,
    isResultPage: false
  })));
};

var _default = InstantFeedback;
exports.default = _default;