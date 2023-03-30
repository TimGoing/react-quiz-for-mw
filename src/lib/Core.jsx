import React, {
  useState, useEffect, useCallback, Fragment,
} from 'react';
import QuizResultFilter from './core-components/QuizResultFilter';
import { checkAnswer, selectAnswer, rawMarkup } from './core-components/helpers';
import InstantFeedback from './core-components/InstantFeedback';
import Explanation from './core-components/Explanation';

const allAnswers = [
  [1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 1, 3], [1, 1, 2, 1],
  [1, 1, 2, 2], [1, 1, 2, 3], [1, 1, 3, 1], [1, 1, 3, 2],
  [1, 1, 3, 3], [1, 2, 1, 1], [1, 2, 1, 2], [1, 2, 1, 3],
  [1, 2, 2, 1], [1, 2, 2, 2], [1, 2, 2, 3], [1, 2, 3, 1],
  [1, 2, 3, 2], [1, 2, 3, 3], [2, 1, 1, 1], [2, 1, 1, 2],
  [2, 1, 1, 3], [2, 1, 2, 1], [2, 1, 2, 2], [2, 1, 2, 3],
  [2, 1, 3, 1], [2, 1, 3, 2], [2, 1, 3, 3], [2, 2, 1, 1],
  [2, 2, 1, 2], [2, 2, 1, 3], [2, 2, 2, 1], [2, 2, 2, 2],
  [2, 2, 2, 3], [2, 2, 3, 1], [2, 2, 3, 2], [2, 2, 3, 3]
]

const textForEachCorrectAnswer = [
  {
    id: 1,
    answer: [
      [1, 1, 1, 1], [1, 1, 1, 2], [1, 1, 1, 3], [1, 1, 2, 1],
      [1, 1, 2, 2], [1, 1, 2, 3], [1, 1, 3, 1], [1, 1, 3, 2],
    ],
    service1: "光面／啞面 PPF",
    content1: "相信您也明白路面碎石的破壞力，即使擁有室內車位也不能避免路上的意外，對於保護性的執著，我們建議您為愛車進行PPF 車漆保護膜，光面 PPF 擁有更好的光澤度，啞面 PPF 讓車輛更具氣質；或者您也有考慮過為愛車鍍膜，但鍍膜的車輛未能抵抗碎石，而且您沒有定期為愛車進行專業清潔，鍍膜塗層可能在非專業的洗車中磨損，所以Mr. Wrapper 建議您使用PPF 。",
    service2: "局部貼膜",
    content2: "讓經常出現磨損的部份加強保護性，同時為愛車進行鍍膜，但需要小心清潔防止磨損鍍膜表層"
  },
  {
    id: 2,
    answer: [
      [1, 1, 3, 3], [1, 2, 1, 1], [1, 2, 1, 2], [1, 2, 1, 3],
      [1, 2, 2, 1], [1, 2, 2, 2], [1, 2, 2, 3], [1, 2, 3, 1],
    ],
    service1: "光面／啞面 PPF",
    content1: "相信您也明白路面碎石的破壞力，即使擁有室內車位也不能避免路上的意外，平衡過光澤度和保護性後，我們建議您為愛車進行PPF的護理，光面PPF擁有更好的光澤度，啞面PPF讓車輛更具氣質；或者您也有考慮過為愛車鍍膜，但鍍膜的車輛未能抵抗碎石，雖然您會有定期為愛車進行專業清潔，但路面上的風險磨損會破壞您所花的心機護理時間，所以Mr. Wrapper建議您使用PPF",
    service2: "局部貼膜",
    content2: "讓經常出現磨損的部份加強保護性，同時為愛車進行鍍膜，但需要小心清潔防止磨損鍍膜表層"
  },
  {
    id: 3,
    answer: [
      [1, 2, 3, 2], [1, 2, 3, 3], [2, 1, 1, 1], [2, 1, 1, 2],
      [2, 1, 1, 3], [2, 1, 2, 1], [2, 1, 2, 2], [2, 1, 2, 3],
    ],
    service1: "鍍膜",
    content1: "追求光澤度的您，我們建議您使用鍍膜，鍍膜後的車身比較容易清潔，但要小心的是不專業的洗車有機會把積存的沙石破壞了表面塗層形成花痕，我們建議您加強清潔的次數，同時採用專業的泡沫洗車，Mr. Wrapper的客戶可以購買客戶尊享洗車套票，由香港唐氏綜合症協會的殘疾人士經培訓後主理，讓您的愛車光潔如新時亦可以為社會出一分力。",
    service2: "PPF貼膜",
    content2: "PPF貼膜有更好的防護性，在清洗方面也可以防止不專業的洗車形成磨損，光面PPF可以突顯車漆的亮度，也跟你的洗車習慣更配合。"
  },
  {
    id: 4,
    answer: [
      [2, 1, 3, 1], [2, 1, 3, 2], [2, 1, 3, 3], [2, 2, 1, 1],
      [2, 2, 1, 2], [2, 2, 1, 3], [2, 2, 2, 1], [2, 2, 2, 2],
    ],
    service1: "鍍膜",
    content1: "追求光澤度的您，我們建議您使用鍍膜，Mr. Wrapper 使用的是國際權威鍍膜品牌 Gyeon，通過鍍膜施工後的車身比較容易清潔，但要小心的是不專業的洗車有機會把積存的沙石破壞了表面塗層形成花痕，我們建議您採用專業的泡沫洗車 ;  你亦可以撰擇加入  Mr. Wrapper 的會籍計劃，由經培訓的社企學員定期為你提供售後保固服務，讓您的愛車保持光潔如新的同時亦可以為社會出一分力。",
    service2: "PPF貼膜",
    content2: "因為你沒有固定的室內停車位或在路上曾被碎石撞花撞凹，PPF貼膜有更好的防護性，可以防止鳥糞、碎石、雨水等侵蝕，光面PPF可以突顯車漆的亮度，讓您的愛車更光潔如新。"
  },
  {
    id: 5,
    answer: [[2, 2, 2, 3], [2, 2, 3, 1], [2, 2, 3, 2], [2, 2, 3, 3]],
    service1: "光面／啞面 PPF",
    content1: "因為你沒有固定的室內停車位，PPF貼膜有更好的防護性，可以防止鳥糞、碎石、雨水等侵蝕，幸好您沒有在行駛中被碎石撞花的經驗，但追求保護性的您應該是謹慎的人，同時您為愛車清潔的習慣比較少，使用PPF後我們建議您每月進行一至兩次的清潔，光面PPF可以突顯車漆的亮度，讓您的愛車更光潔如新。",
    service2: "局部貼膜",
    content2: "讓經常出現磨損的部份加強保護性，同時為愛車進行鍍膜，但需要小心清潔防止磨損鍍膜表層"
  }
]


const Core = function ({
  questions, appLocale, showDefaultResult, onComplete, customResultPage,
  showInstantFeedback, continueTillCorrect, revealAnswerOnSubmit, allowNavigation,
  onQuestionSubmit,
}) {
  const [incorrectAnswer, setIncorrectAnswer] = useState(false);
  const [correctAnswer, setCorrectAnswer] = useState(false);
  const [showNextQuestionButton, setShowNextQuestionButton] = useState(false);
  const [endQuiz, setEndQuiz] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [buttons, setButtons] = useState({});
  const [correct, setCorrect] = useState([]);
  const [incorrect, setIncorrect] = useState([]);
  const [userInput, setUserInput] = useState([]);
  const [filteredValue, setFilteredValue] = useState('all');
  const [userAttempt, setUserAttempt] = useState(1);
  const [showDefaultResultState, setShowDefaultResult] = useState(true);
  const [answerSelectionTypeState, setAnswerSelectionType] = useState(undefined);

  const [totalPoints, setTotalPoints] = useState(0);
  const [correctPoints, setCorrectPoints] = useState(0);
  const [question, setQuestion] = useState(questions[currentQuestionIndex]);
  const [questionSummary, setQuestionSummary] = useState(undefined);

  const [answerIsSelected, setAnswerIsSelected] = useState(new Array(questions.length).fill(false))

  useEffect(() => {
    setShowDefaultResult(showDefaultResult !== undefined ? showDefaultResult : true);
  }, [showDefaultResult]);

  useEffect(() => {
    setQuestion(questions[currentQuestionIndex]);
  }, [currentQuestionIndex]);

  useEffect(() => {
    const { answerSelectionType } = question;
    // Default single to avoid code breaking due to automatic version upgrade
    setAnswerSelectionType(answerSelectionType || 'single');
  }, [question, currentQuestionIndex]);

  useEffect(() => {
    if (endQuiz) {
      let totalPointsTemp = 0;
      let correctPointsTemp = 0;
      for (let i = 0; i < questions.length; i += 1) {
        let point = questions[i].point || 0;
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

  useEffect(() => {
    setQuestionSummary({
      numberOfQuestions: questions.length,
      numberOfCorrectAnswers: correct.length,
      numberOfIncorrectAnswers: incorrect.length,
      questions,
      userInput,
      totalPoints,
      correctPoints,
    });
  }, [totalPoints, correctPoints]);

  useEffect(() => {
    if (endQuiz && onComplete !== undefined && questionSummary !== undefined) {
      onComplete(questionSummary);
    }
  }, [endQuiz, questionSummary]);

  useEffect(() => {
    // console.log(userInput) // 111111111111111111111111111111111111111111111111111111111111111
  }, [userInput])

  useEffect(() => { }, [answerIsSelected])


  const nextQuestion = (currentQuestionIdx, prev = false, finish = false) => {

    setIncorrectAnswer(false);
    setCorrectAnswer(false);
    setShowNextQuestionButton(false);
    setButtons({});

    if (!prev) {
      if (!answerIsSelected[currentQuestionIdx]) return
    }
    console.log(currentQuestionIdx, currentQuestionIndex, userInput)
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

  const handleChange = (event) => {
    setFilteredValue(event.target.value);
  };

  const renderAnswerInResult = (question, userInputIndex) => {
    const { answers, correctAnswer, questionType } = question;
    let { answerSelectionType } = question;
    let answerBtnCorrectClassName;
    let answerBtnIncorrectClassName;

    return <div>{
      // console.log(userInput.toString(), allAnswers.filter(i => i.toString() === userInput.toString())) //1111111111111111111111111111111111111111111111111111
    }</div>

    // console.log(correctAnswer, correct)

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

  const renderQuizResultQuestions = useCallback(() => {
    let filteredQuestions;
    let filteredUserInput;

    if (filteredValue !== 'all') {
      if (filteredValue === 'correct') {
        filteredQuestions = questions.filter((question, index) => correct.indexOf(index) !== -1);
        filteredUserInput = userInput.filter((input, index) => correct.indexOf(index) !== -1);
      } else {
        filteredQuestions = questions.filter((question, index) => incorrect.indexOf(index) !== -1);
        filteredUserInput = userInput.filter((input, index) => incorrect.indexOf(index) !== -1);
      }
    }

    return <div></div> // 11111111111111111111111111111111111111111111111111111111111111111111111111111111111111

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

  const renderAnswers = (question, buttons) => {
    const {
      answers, correctAnswer, questionType, questionIndex,
    } = question;
    let { answerSelectionType } = question;
    const onClickAnswer = (index) => checkAnswer(index + 1, correctAnswer, answerSelectionType, {
      userInput,
      userAttempt,
      currentQuestionIndex,
      continueTillCorrect,
      showNextQuestionButton,
      incorrect,
      correct,
      setButtons,
      setCorrectAnswer,
      setIncorrectAnswer,
      setCorrect,
      setIncorrect,
      setShowNextQuestionButton,
      setUserInput,
      setUserAttempt,
    });

    const onSelectAnswer = (index) => {
      selectAnswer(index + 1, correctAnswer, answerSelectionType, {
        userInput,
        currentQuestionIndex,
        setButtons,
        setShowNextQuestionButton,
        incorrect,
        correct,
        setCorrect,
        setIncorrect,
        setUserInput,
      });

    }

    const checkSelectedAnswer = (index) => {
      if (userInput[questionIndex - 1] === undefined) {
        return false;
      }
      if (answerSelectionType === 'single') {
        return userInput[questionIndex - 1] === index;
      }
      return Array.isArray(userInput[questionIndex - 1]) && userInput[questionIndex - 1].includes(index);
    };

    // Default single to avoid code breaking due to automatic version upgrade
    answerSelectionType = answerSelectionType || 'single';

    return answers.map((answer, index) => (
      <Fragment key={index}>
        {(buttons[index] !== undefined)
          ? (
            <button
              type="button"
              disabled={buttons[index].disabled || false}
              className={`${buttons[index].className} answerBtn btn`}
              // onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onClickAnswer(index))}
              // onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onSelectAnswer(index))}
              onClick={revealAnswerOnSubmit ? () => { onSelectAnswer(index); nextQuestion(currentQuestionIndex) } : () => { onSelectAnswer(index); answerIsSelected[currentQuestionIndex] = true; nextQuestion(currentQuestionIndex); }}
            >
              {questionType === 'text' && <span>{answer}</span>}
              {questionType === 'photo' && <img src={answer} alt="image" />}
            </button>
          )
          : (
            <button
              type="button"
              // onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onClickAnswer(index))}
              // onClick={() => (revealAnswerOnSubmit ? onSelectAnswer(index) : onSelectAnswer(index))}
              onClick={revealAnswerOnSubmit ? () => { onSelectAnswer(index); nextQuestion(currentQuestionIndex) } : () => { onSelectAnswer(index); answerIsSelected[currentQuestionIndex] = true; nextQuestion(currentQuestionIndex); }}
              className={`answerBtn btn ${(allowNavigation && checkSelectedAnswer(index + 1)) ? 'selected' : null}`}
            >
              {questionType === 'text' && answer}
              {questionType === 'photo' && <img src={answer} alt="image" />}
            </button>
          )}
      </Fragment>
    ));
  };

  const renderTags = (answerSelectionType, numberOfSelection, segment) => {
    const {
      isRenderTags,
      singleSelectionTagText,
      multipleSelectionTagText,
      pickNumberOfSelection,
    } = appLocale;



    return isRenderTags ? (
      <div className="tag-container">
        {answerSelectionType === 'single'
          && <span className="single selection-tag">{singleSelectionTagText}</span>}
        {answerSelectionType === 'multiple'
          && <span className="multiple selection-tag">{multipleSelectionTagText}</span>}
        <span className="number-of-selection">
          {pickNumberOfSelection.replace('<numberOfSelection>', numberOfSelection)}
        </span>
        {segment && <span className="selection-tag segment">{segment}</span>}
      </div>
    ) : false



  };

  const renderResult = () => (
    <div className="card-body">
      <h2>
        {appLocale.resultPageHeaderText
          .replace('<correctIndexLength>', correct.length)
          .replace('<questionLength>', questions.length)}
      </h2>
      <h2>
        {appLocale.resultPagePoint
          .replace('<correctPoints>', correctPoints)
          .replace('<totalPoints>', totalPoints)}
      </h2>
      <h2>
        {
          textForEachCorrectAnswer.filter((i, index) => i.answer.filter(ii => ii.toString() === userInput.toString()))[0].service1
        }
      </h2>
      <br />
      {
        textForEachCorrectAnswer.filter((i, index) => i.answer.filter(ii => ii.toString() === userInput.toString()))[0].content1
      }
      <br />
      <h2>
        {appLocale.resultPageSubHeaderText
          .replace('<correctIndexLength>', correct.length)
          .replace('<questionLength>', questions.length)}
      </h2>
      <h2>
        {
          textForEachCorrectAnswer.filter((i, index) => i.answer.filter(ii => ii.toString() === userInput.toString()))[0].service2
        }
      </h2>
      <br />
      {
        textForEachCorrectAnswer.filter((i, index) => i.answer.filter(ii => ii.toString() === userInput.toString()))[0].content2
      }
      {/* <QuizResultFilter
        filteredValue={filteredValue}
        handleChange={handleChange}
        appLocale={appLocale}
      /> */}
      {renderQuizResultQuestions()}
    </div>
  );
  return (
    <div className="questionWrapper">
      {!endQuiz
        && (
          <div className="questionWrapperBody">
            <div className="questionModal">
              <InstantFeedback
                question={question}
                showInstantFeedback={showInstantFeedback}
                correctAnswer={correctAnswer}
                incorrectAnswer={incorrectAnswer}
                onQuestionSubmit={onQuestionSubmit}
                userAnswer={[...userInput].pop()}
              />
            </div>
            <div>
              {appLocale.question}
              {' '}
              {currentQuestionIndex + 1}
              :
            </div>
            <h3 dangerouslySetInnerHTML={rawMarkup(question && question.question)} />
            {question && question.questionPic && <img src={question.questionPic} alt="image" />}
            {question && renderTags(answerSelectionTypeState, question.correctAnswer.length, question.segment)}
            {question && renderAnswers(question, buttons)}
            {(showNextQuestionButton || allowNavigation)
              && (
                <div className="questionBtnContainer">
                  {(allowNavigation && currentQuestionIndex > 0) && (
                    <button
                      onClick={() => nextQuestion(currentQuestionIndex - 2, true)}
                      className="prevQuestionBtn btn"
                      type="button"
                    >
                      {appLocale.prevQuestionBtn}
                    </button>
                  )}
                  <button onClick={() => nextQuestion(currentQuestionIndex, false, true)} className={answerIsSelected[currentQuestionIndex] ? "nextQuestionBtn btn" : "nextQuestionBtn btn disable_btn"} type="button">
                    {(currentQuestionIndex === questions.length - 1) ? "遞交" : appLocale.nextQuestionBtn}
                  </button>
                </div>
              )}
          </div>
        )}
      {endQuiz && showDefaultResultState && customResultPage === undefined
        && renderResult()}
      {endQuiz && !showDefaultResultState && customResultPage !== undefined
        && customResultPage(questionSummary)}
    </div>
  );
};

export default Core;
