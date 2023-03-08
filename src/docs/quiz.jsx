const segment = {
  basic: 'basic',
  medium: 'medium',
  advanced: 'advanced',
};

const quiz = {
  quizTitle: 'React Quiz Component Demo',
  quizSynopsis: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim',
  nrOfQuestions: '4',
  questions: [
    {
      question: '您經常停泊的位置是？',
      // questionPic: 'https://dummyimage.com/600x400/000/fff&text=X',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        '有蓋室內',
        '露天室外'
      ],
      correctAnswer: '2' ,
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      point: '20',
      segment: segment.advanced,
    },
    {
      question: '您有於高速公路或碎石路面被碎石撞花撞凹的經驗嗎？',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        '有',
        '沒有',
      ],
      correctAnswer: '1',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      point: '20',
      segment: segment.basic,
    },
    {
      question: '您追求的是保護性還是光澤性？',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        '保護性',
        '光澤性',
        '我全都要！'
      ],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      point: '10',
    },
    {
      question: '您會多久為愛車進行專業清洗？',
      questionType: 'text',
      answerSelectionType: 'single',
      answers: [
        '一星期一次或以上',
        '一個月一次或以上',
        '多於一個月一次',
      ],
      correctAnswer: '2',
      messageForCorrectAnswer: 'Correct answer. Good job.',
      messageForIncorrectAnswer: 'Incorrect answer. Please try again.',
      explanation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      point: '30',
      segment: segment.medium,
    }
  ],
};

export default quiz;
