"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectAnswer = exports.checkAnswer = exports.rawMarkup = void 0;

var _snarkdown = _interopRequireDefault(require("snarkdown"));

var _dompurify = _interopRequireDefault(require("dompurify"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var rawMarkup = function rawMarkup(data) {
  var sanitizer = _dompurify.default.sanitize;
  return {
    __html: (0, _snarkdown.default)(sanitizer(data))
  };
};

exports.rawMarkup = rawMarkup;

var checkAnswer = function checkAnswer(index, correctAnswer, answerSelectionType, _ref) {
  var userInput = _ref.userInput,
      userAttempt = _ref.userAttempt,
      currentQuestionIndex = _ref.currentQuestionIndex,
      continueTillCorrect = _ref.continueTillCorrect,
      showNextQuestionButton = _ref.showNextQuestionButton,
      incorrect = _ref.incorrect,
      correct = _ref.correct,
      setButtons = _ref.setButtons,
      setCorrectAnswer = _ref.setCorrectAnswer,
      setIncorrectAnswer = _ref.setIncorrectAnswer,
      setCorrect = _ref.setCorrect,
      setIncorrect = _ref.setIncorrect,
      setShowNextQuestionButton = _ref.setShowNextQuestionButton,
      setUserInput = _ref.setUserInput,
      setUserAttempt = _ref.setUserAttempt;
  var indexStr = "".concat(index);
  var disabledAll = {
    0: {
      disabled: true
    },
    1: {
      disabled: true
    },
    2: {
      disabled: true
    },
    3: {
      disabled: true
    }
  };

  var userInputCopy = _toConsumableArray(userInput);

  if (answerSelectionType === 'single') {
    if (userInputCopy[currentQuestionIndex] === undefined) {
      userInputCopy[currentQuestionIndex] = index;
    }

    if (indexStr === correctAnswer) {
      if (incorrect.indexOf(currentQuestionIndex) < 0 && correct.indexOf(currentQuestionIndex) < 0) {
        correct.push(currentQuestionIndex);
      }

      setButtons(function (prevState) {
        return _objectSpread({}, prevState, disabledAll, _defineProperty({}, index - 1, {
          className: indexStr === correctAnswer ? 'correct' : 'incorrect'
        }));
      });
      setCorrectAnswer(true);
      setIncorrectAnswer(false);
      setCorrect(correct);
      setShowNextQuestionButton(true);
    } else {
      if (correct.indexOf(currentQuestionIndex) < 0 && incorrect.indexOf(currentQuestionIndex) < 0) {
        incorrect.push(currentQuestionIndex);
      }

      if (continueTillCorrect) {
        setButtons(function (prevState) {
          return _objectSpread({}, prevState, _defineProperty({}, index - 1, {
            disabled: !prevState[index - 1]
          }));
        });
      } else {
        setButtons(function (prevState) {
          return _objectSpread({}, prevState, disabledAll, _defineProperty({}, index - 1, {
            className: indexStr === correctAnswer ? 'correct' : 'incorrect'
          }));
        });
        setShowNextQuestionButton(true);
      }

      setIncorrectAnswer(true);
      setCorrectAnswer(false);
      setIncorrect(incorrect);
    }
  } else {
    var maxNumberOfMultipleSelection = correctAnswer.length;

    if (userInputCopy[currentQuestionIndex] === undefined) {
      userInputCopy[currentQuestionIndex] = [];
    }

    if (userInputCopy[currentQuestionIndex].length < maxNumberOfMultipleSelection) {
      userInputCopy[currentQuestionIndex].push(index);

      if (correctAnswer.includes(index)) {
        if (userInputCopy[currentQuestionIndex].length <= maxNumberOfMultipleSelection) {
          setButtons(function (prevState) {
            return _objectSpread({}, prevState, _defineProperty({}, index - 1, {
              disabled: !prevState[index - 1],
              className: correctAnswer.includes(index) ? 'correct' : 'incorrect'
            }));
          });
        }
      } else if (userInputCopy[currentQuestionIndex].length <= maxNumberOfMultipleSelection) {
        setButtons(function (prevState) {
          return _objectSpread({}, prevState, _defineProperty({}, index - 1, {
            className: correctAnswer.includes(index) ? 'correct' : 'incorrect'
          }));
        });
      }
    }

    if (maxNumberOfMultipleSelection === userAttempt) {
      var cnt = 0;

      for (var i = 0; i < correctAnswer.length; i += 1) {
        if (userInputCopy[currentQuestionIndex].includes(correctAnswer[i])) {
          cnt += 1;
        }
      }

      if (cnt === maxNumberOfMultipleSelection) {
        correct.push(currentQuestionIndex);
        setCorrectAnswer(true);
        setIncorrectAnswer(false);
        setCorrect(correct);
        setShowNextQuestionButton(true);
        setUserAttempt(1);
      } else {
        incorrect.push(currentQuestionIndex);
        setIncorrectAnswer(true);
        setCorrectAnswer(false);
        setIncorrect(incorrect);
        setShowNextQuestionButton(true);
        setUserAttempt(1);
      }
    } else if (!showNextQuestionButton) {
      setUserAttempt(userAttempt + 1);
    }
  }

  setUserInput(userInputCopy);
};

exports.checkAnswer = checkAnswer;

var selectAnswer = function selectAnswer(index, correctAnswer, answerSelectionType, _ref2) {
  var userInput = _ref2.userInput,
      currentQuestionIndex = _ref2.currentQuestionIndex,
      setButtons = _ref2.setButtons,
      setShowNextQuestionButton = _ref2.setShowNextQuestionButton,
      incorrect = _ref2.incorrect,
      correct = _ref2.correct,
      setCorrect = _ref2.setCorrect,
      setIncorrect = _ref2.setIncorrect,
      setUserInput = _ref2.setUserInput;
  var selectedButtons = {
    0: {
      selected: false
    },
    1: {
      selected: false
    },
    2: {
      selected: false
    },
    3: {
      selected: false
    }
  };

  var userInputCopy = _toConsumableArray(userInput);

  if (answerSelectionType === 'single') {
    correctAnswer = Number(correctAnswer);
    userInputCopy[currentQuestionIndex] = index;

    if (index === correctAnswer) {
      if (correct.indexOf(currentQuestionIndex) < 0) {
        correct.push(currentQuestionIndex);
      }

      if (incorrect.indexOf(currentQuestionIndex) >= 0) {
        incorrect.splice(incorrect.indexOf(currentQuestionIndex), 1);
      }
    } else {
      if (incorrect.indexOf(currentQuestionIndex) < 0) {
        incorrect.push(currentQuestionIndex);
      }

      if (correct.indexOf(currentQuestionIndex) >= 0) {
        correct.splice(correct.indexOf(currentQuestionIndex), 1);
      }
    }

    setCorrect(correct);
    setIncorrect(incorrect);
    setButtons(function (prevState) {
      return _objectSpread({}, prevState, selectedButtons, _defineProperty({}, index - 1, {
        className: 'selected'
      }));
    });
    setShowNextQuestionButton(true);
  } else {
    if (userInputCopy[currentQuestionIndex] === undefined) {
      userInputCopy[currentQuestionIndex] = [];
    }

    if (userInputCopy[currentQuestionIndex].includes(index)) {
      userInputCopy[currentQuestionIndex].splice(userInputCopy[currentQuestionIndex].indexOf(index), 1);
    } else {
      userInputCopy[currentQuestionIndex].push(index);
    }

    if (userInputCopy[currentQuestionIndex].length === correctAnswer.length) {
      var exactMatch = true;
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = userInput[currentQuestionIndex][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var input = _step.value;

          if (!correctAnswer.includes(input)) {
            exactMatch = false;

            if (incorrect.indexOf(currentQuestionIndex) < 0) {
              incorrect.push(currentQuestionIndex);
            }

            if (correct.indexOf(currentQuestionIndex) >= 0) {
              correct.splice(correct.indexOf(currentQuestionIndex), 1);
            }

            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      if (exactMatch) {
        if (correct.indexOf(currentQuestionIndex) < 0) {
          correct.push(currentQuestionIndex);
        }

        if (incorrect.indexOf(currentQuestionIndex) >= 0) {
          incorrect.splice(incorrect.indexOf(currentQuestionIndex), 1);
        }
      }
    } else {
      if (incorrect.indexOf(currentQuestionIndex) < 0) {
        incorrect.push(currentQuestionIndex);
      }

      if (correct.indexOf(currentQuestionIndex) >= 0) {
        correct.splice(correct.indexOf(currentQuestionIndex), 1);
      }
    }

    setCorrect(correct);
    setIncorrect(incorrect);
    setButtons(function (prevState) {
      return _objectSpread({}, prevState, _defineProperty({}, index - 1, {
        className: userInputCopy[currentQuestionIndex].includes(index) ? 'selected' : undefined
      }));
    });

    if (userInputCopy[currentQuestionIndex].length > 0) {
      setShowNextQuestionButton(true);
    }
  }

  setUserInput(userInputCopy);
};

exports.selectAnswer = selectAnswer;