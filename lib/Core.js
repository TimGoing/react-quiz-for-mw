"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _QuizResultFilter = _interopRequireDefault(require("./core-components/QuizResultFilter"));

var _helpers = require("./core-components/helpers");

var _InstantFeedback = _interopRequireDefault(require("./core-components/InstantFeedback"));

var _Explanation = _interopRequireDefault(require("./core-components/Explanation"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var allAnswers = [[1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 1, 3], [1, 1, 2, 1], [1, 1, 2, 2], [1, 1, 2, 3], [1, 1, 3, 1], [1, 1, 3, 2], [1, 1, 3, 3], [1, 2, 1, 1], [1, 2, 1, 2], [1, 2, 1, 3], [1, 2, 2, 1], [1, 2, 2, 2], [1, 2, 2, 3], [1, 2, 3, 1], [1, 2, 3, 2], [1, 2, 3, 3], [2, 1, 1, 1], [2, 1, 1, 2], [2, 1, 1, 3], [2, 1, 2, 1], [2, 1, 2, 2], [2, 1, 2, 3], [2, 1, 3, 1], [2, 1, 3, 2], [2, 1, 3, 3], [2, 2, 1, 1], [2, 2, 1, 2], [2, 2, 1, 3], [2, 2, 2, 1], [2, 2, 2, 2], [2, 2, 2, 3], [2, 2, 3, 1], [2, 2, 3, 2], [2, 2, 3, 3]];
var textForEachCorrectAnswer = [{
  id: 1,
  answer: [[1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 1, 3], [1, 1, 2, 1], [1, 1, 2, 2], [1, 1, 2, 3], [1, 1, 3, 1], [1, 1, 3, 2]],
  service1: "光面／啞面 PPF",
  content1: "相信您也明白路面碎石的破壞力，即使擁有室內車位也不能避免路上的意外，對於保護性的執著，我們建議您為愛車進行PPF 車漆保護膜，光面 PPF 擁有更好的光澤度，啞面 PPF 讓車輛更具氣質；或者您也有考慮過為愛車鍍膜，但鍍膜的車輛未能抵抗碎石，而且您沒有定期為愛車進行專業清潔，鍍膜塗層可能在非專業的洗車中磨損，所以Mr. Wrapper 建議您使用PPF 。",
  service2: "局部貼膜",
  content2: "讓經常出現磨損的部份加強保護性，同時為愛車進行鍍膜，但需要小心清潔防止磨損鍍膜表層"
}, {
  id: 2,
  answer: [[1, 1, 3, 3], [1, 2, 1, 1], [1, 2, 1, 2], [1, 2, 1, 3], [1, 2, 2, 1], [1, 2, 2, 2], [1, 2, 2, 3], [1, 2, 3, 1]],
  service1: "光面／啞面 PPF",
  content1: "相信您也明白路面碎石的破壞力，即使擁有室內車位也不能避免路上的意外，平衡過光澤度和保護性後，我們建議您為愛車進行PPF的護理，光面PPF擁有更好的光澤度，啞面PPF讓車輛更具氣質；或者您也有考慮過為愛車鍍膜，但鍍膜的車輛未能抵抗碎石，雖然您會有定期為愛車進行專業清潔，但路面上的風險磨損會破壞您所花的心機護理時間，所以Mr. Wrapper建議您使用PPF",
  service2: "局部貼膜",
  content2: "讓經常出現磨損的部份加強保護性，同時為愛車進行鍍膜，但需要小心清潔防止磨損鍍膜表層"
}, {
  id: 3,
  answer: [[1, 2, 3, 2], [1, 2, 3, 3], [2, 1, 1, 1], [2, 1, 1, 2], [2, 1, 1, 3], [2, 1, 2, 1], [2, 1, 2, 2], [2, 1, 2, 3]],
  service1: "鍍膜",
  content1: "追求光澤度的您，我們建議您使用鍍膜，鍍膜後的車身比較容易清潔，但要小心的是不專業的洗車有機會把積存的沙石破壞了表面塗層形成花痕，我們建議您加強清潔的次數，同時採用專業的泡沫洗車，Mr. Wrapper的客戶可以購買客戶尊享洗車套票，由香港唐氏綜合症協會的殘疾人士經培訓後主理，讓您的愛車光潔如新時亦可以為社會出一分力。",
  service2: "PPF貼膜",
  content2: "PPF貼膜有更好的防護性，在清洗方面也可以防止不專業的洗車形成磨損，光面PPF可以突顯車漆的亮度，也跟你的洗車習慣更配合。"
}, {
  id: 4,
  answer: [[2, 1, 3, 1], [2, 1, 3, 2], [2, 1, 3, 3], [2, 2, 1, 1], [2, 2, 1, 2], [2, 2, 1, 3], [2, 2, 2, 1], [2, 2, 2, 2]],
  service1: "鍍膜",
  content1: "追求光澤度的您，我們建議您使用鍍膜，Mr. Wrapper 使用的是國際權威鍍膜品牌 Gyeon，通過鍍膜施工後的車身比較容易清潔，但要小心的是不專業的洗車有機會把積存的沙石破壞了表面塗層形成花痕，我們建議您採用專業的泡沫洗車 ;  你亦可以撰擇加入  Mr. Wrapper 的會籍計劃，由經培訓的社企學員定期為你提供售後保固服務，讓您的愛車保持光潔如新的同時亦可以為社會出一分力。",
  service2: "PPF貼膜",
  content2: "因為你沒有固定的室內停車位或在路上曾被碎石撞花撞凹，PPF貼膜有更好的防護性，可以防止鳥糞、碎石、雨水等侵蝕，光面PPF可以突顯車漆的亮度，讓您的愛車更光潔如新。"
}, {
  id: 5,
  answer: [[2, 2, 2, 3], [2, 2, 3, 1], [2, 2, 3, 2], [2, 2, 3, 3]],
  service1: "光面／啞面 PPF",
  content1: "因為你沒有固定的室內停車位，PPF貼膜有更好的防護性，可以防止鳥糞、碎石、雨水等侵蝕，幸好您沒有在行駛中被碎石撞花的經驗，但追求保護性的您應該是謹慎的人，同時您為愛車清潔的習慣比較少，使用PPF後我們建議您每月進行一至兩次的清潔，光面PPF可以突顯車漆的亮度，讓您的愛車更光潔如新。",
  service2: "局部貼膜",
  content2: "讓經常出現磨損的部份加強保護性，同時為愛車進行鍍膜，但需要小心清潔防止磨損鍍膜表層"
}];

var Core = function Core(_ref) {
  var questions = _ref.questions,
      appLocale = _ref.appLocale,
      showDefaultResult = _ref.showDefaultResult,
      onComplete = _ref.onComplete,
      customResultPage = _ref.customResultPage,
      showInstantFeedback = _ref.showInstantFeedback,
      continueTillCorrect = _ref.continueTillCorrect,
      revealAnswerOnSubmit = _ref.revealAnswerOnSubmit,
      allowNavigation = _ref.allowNavigation,
      onQuestionSubmit = _ref.onQuestionSubmit;

  var _useState = (0, _react.useState)(false),
      _useState2 = _slicedToArray(_useState, 2),
      incorrectAnswer = _useState2[0],
      setIncorrectAnswer = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = _slicedToArray(_useState3, 2),
      correctAnswer = _useState4[0],
      setCorrectAnswer = _useState4[1];

  var _useState5 = (0, _react.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      showNextQuestionButton = _useState6[0],
      setShowNextQuestionButton = _useState6[1];

  var _useState7 = (0, _react.useState)(false),
      _useState8 = _slicedToArray(_useState7, 2),
      endQuiz = _useState8[0],
      setEndQuiz = _useState8[1];

  var _useState9 = (0, _react.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      currentQuestionIndex = _useState10[0],
      setCurrentQuestionIndex = _useState10[1];

  var _useState11 = (0, _react.useState)({}),
      _useState12 = _slicedToArray(_useState11, 2),
      buttons = _useState12[0],
      setButtons = _useState12[1];

  var _useState13 = (0, _react.useState)([]),
      _useState14 = _slicedToArray(_useState13, 2),
      correct = _useState14[0],
      setCorrect = _useState14[1];

  var _useState15 = (0, _react.useState)([]),
      _useState16 = _slicedToArray(_useState15, 2),
      incorrect = _useState16[0],
      setIncorrect = _useState16[1];

  var _useState17 = (0, _react.useState)([]),
      _useState18 = _slicedToArray(_useState17, 2),
      userInput = _useState18[0],
      setUserInput = _useState18[1];

  var _useState19 = (0, _react.useState)('all'),
      _useState20 = _slicedToArray(_useState19, 2),
      filteredValue = _useState20[0],
      setFilteredValue = _useState20[1];

  var _useState21 = (0, _react.useState)(1),
      _useState22 = _slicedToArray(_useState21, 2),
      userAttempt = _useState22[0],
      setUserAttempt = _useState22[1];

  var _useState23 = (0, _react.useState)(true),
      _useState24 = _slicedToArray(_useState23, 2),
      showDefaultResultState = _useState24[0],
      setShowDefaultResult = _useState24[1];

  var _useState25 = (0, _react.useState)(undefined),
      _useState26 = _slicedToArray(_useState25, 2),
      answerSelectionTypeState = _useState26[0],
      setAnswerSelectionType = _useState26[1];

  var _useState27 = (0, _react.useState)(0),
      _useState28 = _slicedToArray(_useState27, 2),
      totalPoints = _useState28[0],
      setTotalPoints = _useState28[1];

  var _useState29 = (0, _react.useState)(0),
      _useState30 = _slicedToArray(_useState29, 2),
      correctPoints = _useState30[0],
      setCorrectPoints = _useState30[1];

  var _useState31 = (0, _react.useState)(questions[currentQuestionIndex]),
      _useState32 = _slicedToArray(_useState31, 2),
      question = _useState32[0],
      setQuestion = _useState32[1];

  var _useState33 = (0, _react.useState)(undefined),
      _useState34 = _slicedToArray(_useState33, 2),
      questionSummary = _useState34[0],
      setQuestionSummary = _useState34[1];

  var _useState35 = (0, _react.useState)(new Array(questions.length).fill(false)),
      _useState36 = _slicedToArray(_useState35, 2),
      answerIsSelected = _useState36[0],
      setAnswerIsSelected = _useState36[1];

  (0, _react.useEffect)(function () {
    setShowDefaultResult(showDefaultResult !== undefined ? showDefaultResult : true);
  }, [showDefaultResult]);
  (0, _react.useEffect)(function () {
    setQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);
  (0, _react.useEffect)(function () {
    var answerSelectionType = question.answerSelectionType; // Default single to avoid code breaking due to automatic version upgrade

    setAnswerSelectionType(answerSelectionType || 'single');
  }, [question, currentQuestionIndex]);
  (0, _react.useEffect)(function () {
    if (endQuiz) {
      var totalPointsTemp = 0;
      var correctPointsTemp = 0;

      for (var i = 0; i < questions.length; i += 1) {
        var point = questions[i].point || 0;

        if (typeof point === 'string' || point instanceof String) {
          point = parseInt(point);
        }

        totalPointsTemp += point;

        if (correct.includes(i)) {
          correctPointsTemp += point;
        }
      }

      setTotalPoints(totalPointsTemp);
      setCorrectPoints(correctPointsTemp);
    }
  }, [endQuiz]);
  (0, _react.useEffect)(function () {
    setQuestionSummary({
      numberOfQuestions: questions.length,
      numberOfCorrectAnswers: correct.length,
      numberOfIncorrectAnswers: incorrect.length,
      questions: questions,
      userInput: userInput,
      totalPoints: totalPoints,
      correctPoints: correctPoints
    });
  }, [totalPoints, correctPoints]);
  (0, _react.useEffect)(function () {
    if (endQuiz && onComplete !== undefined && questionSummary !== undefined) {
      onComplete(questionSummary);
    }
  }, [endQuiz, questionSummary]);
  (0, _react.useEffect)(function () {// console.log(userInput) // 111111111111111111111111111111111111111111111111111111111111111
  }, [userInput]);
  (0, _react.useEffect)(function () {}, [answerIsSelected]);

  var nextQuestion = function nextQuestion(currentQuestionIdx) {
    var prev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var finish = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    setIncorrectAnswer(false);
    setCorrectAnswer(false);
    setShowNextQuestionButton(false);
    setButtons({});

    if (!prev) {
      if (!answerIsSelected[currentQuestionIdx]) return;
    }

    console.log(currentQuestionIdx, currentQuestionIndex, userInput);

    if (currentQuestionIdx + 1 === questions.length) {
      // if (userInput.length !== questions.length) { // 1111111111111111111111111111111111111111
      //   // alert('Quiz is incomplete');
      //   return
      // }
      // if (!finish) return // only click the next button can show the result page 1111111111111111111111111111111111111111111
      // else if (allowNavigation) {
      //   const submitQuiz = confirm('You have finished all the questions. Submit Quiz now?');
      //   if (submitQuiz) {
      //     setEndQuiz(true);
      //   }
      // } else {
      //   setEndQuiz(true);
      // }
      setEndQuiz(true);
    } else {
      setCurrentQuestionIndex(currentQuestionIdx + 1);
    }

    window.scrollTo(0, 0);
  };

  var handleChange = function handleChange(event) {
    setFilteredValue(event.target.value);
  };

  var renderAnswerInResult = function renderAnswerInResult(question, userInputIndex) {
    var answers = question.answers,
        correctAnswer = question.correctAnswer,
        questionType = question.questionType;
    var answerSelectionType = question.answerSelectionType;
    var answerBtnCorrectClassName;
    var answerBtnIncorrectClassName;
    return _react.default.createElement("div", null); // console.log(correctAnswer, correct)
    // Default single to avoid code breaking due to automatic version upgrade
    // answerSelectionType = answerSelectionType || 'single';
    // return answers.map((answer, index) => {
    //   if (answerSelectionType === 'single') {
    //     // correctAnswer - is string
    //     answerBtnCorrectClassName = (`${index + 1}` === correctAnswer ? 'correct' : '');
    //     answerBtnIncorrectClassName = (`${userInputIndex}` !== correctAnswer && `${index + 1}` === `${userInputIndex}` ? 'incorrect' : '');
    //   } else {
    //     // correctAnswer - is array of numbers
    //     answerBtnCorrectClassName = (correctAnswer.includes(index + 1) ? 'correct' : '');
    //     answerBtnIncorrectClassName = (!correctAnswer.includes(index + 1) && userInputIndex.includes(index + 1) ? 'incorrect' : '');
    //   }
    //   return (
    //     <div key={index}>
    //       <button
    //         disabled
    //         className={`answerBtn btn ${answerBtnCorrectClassName}${answerBtnIncorrectClassName}`}
    //       >
    //         {questionType === 'text' && <span>{answer}</span>}
    //         {questionType === 'photo' && <img src={answer} alt="image" />}
    //       </button>
    //     </div>
    //   );
    // });
  };

  var renderQuizResultQuestions = (0, _react.useCallback)(function () {
    var filteredQuestions;
    var filteredUserInput;

    if (filteredValue !== 'all') {
      if (filteredValue === 'correct') {
        filteredQuestions = questions.filter(function (question, index) {
          return correct.indexOf(index) !== -1;
        });
        filteredUserInput = userInput.filter(function (input, index) {
          return correct.indexOf(index) !== -1;
        });
      } else {
        filteredQuestions = questions.filter(function (question, index) {
          return incorrect.indexOf(index) !== -1;
        });
        filteredUserInput = userInput.filter(function (input, index) {
          return incorrect.indexOf(index) !== -1;
        });
      }
    }

    return _react.default.createElement("div", null); // 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    // return (filteredQuestions || questions).map((question, index) => {
    //   const userInputIndex = filteredUserInput ? filteredUserInput[index] : userInput[index];
    //   // Default single to avoid code breaking due to automatic version upgrade
    //   const answerSelectionType = question.answerSelectionType || 'single';
    //   return (
    //     <div className="result-answer-wrapper" key={index + 1}>
    //       <h3 dangerouslySetInnerHTML={rawMarkup(`Q${question.questionIndex}: ${question.question}`)} />
    //       {question.questionPic && <img src={question.questionPic} alt="image" />}
    //       {renderTags(answerSelectionType, question.correctAnswer.length, question.segment)}
    //       <div className="result-answer">
    //         {renderAnswerInResult(question, userInputIndex)}
    //       </div>
    //       <Explanation question={question} isResultPage />
    //     </div>
    //   );
    // });
  }, [endQuiz, filteredValue]);

  var renderAnswers = function renderAnswers(question, buttons) {
    var answers = question.answers,
        correctAnswer = question.correctAnswer,
        questionType = question.questionType,
        questionIndex = question.questionIndex;
    var answerSelectionType = question.answerSelectionType;

    var onClickAnswer = function onClickAnswer(index) {
      return (0, _helpers.checkAnswer)(index + 1, correctAnswer, answerSelectionType, {
        userInput: userInput,
        userAttempt: userAttempt,
        currentQuestionIndex: currentQuestionIndex,
        continueTillCorrect: continueTillCorrect,
        showNextQuestionButton: showNextQuestionButton,
        incorrect: incorrect,
        correct: correct,
        setButtons: setButtons,
        setCorrectAnswer: setCorrectAnswer,
        setIncorrectAnswer: setIncorrectAnswer,
        setCorrect: setCorrect,
        setIncorrect: setIncorrect,
        setShowNextQuestionButton: setShowNextQuestionButton,
        setUserInput: setUserInput,
        setUserAttempt: setUserAttempt
      });
    };

    var onSelectAnswer = function onSelectAnswer(index) {
      (0, _helpers.selectAnswer)(index + 1, correctAnswer, answerSelectionType, {
        userInput: userInput,
        currentQuestionIndex: currentQuestionIndex,
        setButtons: setButtons,
        setShowNextQuestionButton: setShowNextQuestionButton,
        incorrect: incorrect,
        correct: correct,
        setCorrect: setCorrect,
        setIncorrect: setIncorrect,
        setUserInput: setUserInput
      });
    };

    var checkSelectedAnswer = function checkSelectedAnswer(index) {
      if (userInput[questionIndex - 1] === undefined) {
        return false;
      }

      if (answerSelectionType === 'single') {
        return userInput[questionIndex - 1] === index;
      }

      return Array.isArray(userInput[questionIndex - 1]) && userInput[questionIndex - 1].includes(index);
    }; // Default single to avoid code breaking due to automatic version upgrade


    answerSelectionType = answerSelectionType || 'single';
    return answers.map(function (answer, index) {
      return _react.default.createElement(_react.Fragment, {
        key: index
      }, buttons[index] !== undefined ? _react.default.createElement("button", {
        type: "button",
        disabled: buttons[index].disabled || false,
        className: "".concat(buttons[index].className, " answerBtn btn") // onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onClickAnswer(index))}
        // onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onSelectAnswer(index))}
        ,
        onClick: revealAnswerOnSubmit ? function () {
          onSelectAnswer(index);
          nextQuestion(currentQuestionIndex);
        } : function () {
          onSelectAnswer(index);
          answerIsSelected[currentQuestionIndex] = true;
          nextQuestion(currentQuestionIndex);
        }
      }, questionType === 'text' && _react.default.createElement("span", null, answer), questionType === 'photo' && _react.default.createElement("img", {
        src: answer,
        alt: "image"
      })) : _react.default.createElement("button", {
        type: "button" // onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onClickAnswer(index))}
        // onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onSelectAnswer(index))}
        ,
        onClick: revealAnswerOnSubmit ? function () {
          onSelectAnswer(index);
          nextQuestion(currentQuestionIndex);
        } : function () {
          onSelectAnswer(index);
          answerIsSelected[currentQuestionIndex] = true;
          nextQuestion(currentQuestionIndex);
        },
        className: "answerBtn btn ".concat(allowNavigation && checkSelectedAnswer(index + 1) ? 'selected' : null)
      }, questionType === 'text' && answer, questionType === 'photo' && _react.default.createElement("img", {
        src: answer,
        alt: "image"
      })));
    });
  };

  var renderTags = function renderTags(answerSelectionType, numberOfSelection, segment) {
    var isRenderTags = appLocale.isRenderTags,
        singleSelectionTagText = appLocale.singleSelectionTagText,
        multipleSelectionTagText = appLocale.multipleSelectionTagText,
        pickNumberOfSelection = appLocale.pickNumberOfSelection;
    return isRenderTags ? _react.default.createElement("div", {
      className: "tag-container"
    }, answerSelectionType === 'single' && _react.default.createElement("span", {
      className: "single selection-tag"
    }, singleSelectionTagText), answerSelectionType === 'multiple' && _react.default.createElement("span", {
      className: "multiple selection-tag"
    }, multipleSelectionTagText), _react.default.createElement("span", {
      className: "number-of-selection"
    }, pickNumberOfSelection.replace('<numberOfSelection>', numberOfSelection)), segment && _react.default.createElement("span", {
      className: "selection-tag segment"
    }, segment)) : false;
  };

  var renderResult = function renderResult() {
    return _react.default.createElement("div", {
      className: "card-body"
    }, _react.default.createElement("h2", null, appLocale.resultPageHeaderText.replace('<correctIndexLength>', correct.length).replace('<questionLength>', questions.length)), _react.default.createElement("h2", null, appLocale.resultPagePoint.replace('<correctPoints>', correctPoints).replace('<totalPoints>', totalPoints)), _react.default.createElement("h2", null, textForEachCorrectAnswer.filter(function (i, index) {
      return i.answer.filter(function (ii) {
        return ii.toString() === userInput.toString();
      });
    })[0].service1), _react.default.createElement("br", null), textForEachCorrectAnswer.filter(function (i, index) {
      return i.answer.filter(function (ii) {
        return ii.toString() === userInput.toString();
      });
    })[0].content1, _react.default.createElement("br", null), _react.default.createElement("h2", null, appLocale.resultPageSubHeaderText.replace('<correctIndexLength>', correct.length).replace('<questionLength>', questions.length)), _react.default.createElement("h2", null, textForEachCorrectAnswer.filter(function (i, index) {
      return i.answer.filter(function (ii) {
        return ii.toString() === userInput.toString();
      });
    })[0].service2), _react.default.createElement("br", null), textForEachCorrectAnswer.filter(function (i, index) {
      return i.answer.filter(function (ii) {
        return ii.toString() === userInput.toString();
      });
    })[0].content2, renderQuizResultQuestions());
  };

  return _react.default.createElement("div", {
    className: "questionWrapper"
  }, !endQuiz && _react.default.createElement("div", {
    className: "questionWrapperBody"
  }, _react.default.createElement("div", {
    className: "questionModal"
  }, _react.default.createElement(_InstantFeedback.default, {
    question: question,
    showInstantFeedback: showInstantFeedback,
    correctAnswer: correctAnswer,
    incorrectAnswer: incorrectAnswer,
    onQuestionSubmit: onQuestionSubmit,
    userAnswer: _toConsumableArray(userInput).pop()
  })), _react.default.createElement("div", null, appLocale.question, ' ', currentQuestionIndex + 1, ":"), _react.default.createElement("h3", {
    dangerouslySetInnerHTML: (0, _helpers.rawMarkup)(question && question.question)
  }), question && question.questionPic && _react.default.createElement("img", {
    src: question.questionPic,
    alt: "image"
  }), question && renderTags(answerSelectionTypeState, question.correctAnswer.length, question.segment), question && renderAnswers(question, buttons), (showNextQuestionButton || allowNavigation) && _react.default.createElement("div", {
    className: "questionBtnContainer"
  }, allowNavigation && currentQuestionIndex > 0 && _react.default.createElement("button", {
    onClick: function onClick() {
      return nextQuestion(currentQuestionIndex - 2, true);
    },
    className: "prevQuestionBtn btn",
    type: "button"
  }, appLocale.prevQuestionBtn), _react.default.createElement("button", {
    onClick: function onClick() {
      return nextQuestion(currentQuestionIndex, false, true);
    },
    className: answerIsSelected[currentQuestionIndex] ? "nextQuestionBtn btn" : "nextQuestionBtn btn disable_btn",
    type: "button"
  }, currentQuestionIndex === questions.length - 1 ? "遞交" : appLocale.nextQuestionBtn))), endQuiz && showDefaultResultState && customResultPage === undefined && renderResult(), endQuiz && !showDefaultResultState && customResultPage !== undefined && customResultPage(questionSummary));
};

var _default = Core;
exports.default = _default;