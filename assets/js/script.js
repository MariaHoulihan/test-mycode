const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
    { 
      question: 'The occipital area of the skull is located in what part of the skull?',
    answers: [
      { text: 'Front', correct: false },
      { text: 'Back', correct: true },
      { text: 'Top', correct: false }
      ]
  },
  {
    question: 'The biceps femoris muscle is located in what part of the body?',
    answers: [
      { text: 'Shoulder', correct: false },
      { text: 'Arm', correct: false },
      { text: 'Leg', correct: true }
    ]
  },    
    {
      question: 'The elbow is an example of what type of joint?',
      answers: [
      { text: 'Pivot', correct: false },
      { text: 'Hinge', correct: true },
      { text: 'Saddle', correct: false }
    ]
  }, 
      {question: 'The muscles located at the front of the thigh are known as what?',
      answers: [
        { text: 'Adductors', correct: false}, 
        { text: 'Hamstrings', correct: false}, 
        { text: 'Quadriceps', correct: true}
      ]
     },
     {
      question: 'The C1 vertebra is called?',
      
        answers: [
      { text: 'Atlas', correct: true },
      { text: 'Axis', correct: false },
      { text: 'Amino', correct: false }
      ]
          }, 
     {
      question: 'The three bones that form the ankle are the fibula, tibia and which other bone?',
      answers: [
        { text: 'Talus', correct: true },
        { text: 'Calcaneous', correct: false },
        { text: 'Cuboid', correct: false }
      ]
     },
     {
       question: 'Which vessel returns unoxygenated blood to the lungs?',
       answers: [
         { text: 'Aorta', correct: false },
         { text: 'Pulmonary artery', correct: true },
         {text: 'Pulmonary vein', correct: false }
    ]
     }, 
    {
      question: 'Ligaments and Tendons are composed of what type of tissue?',
        answers: [
          { text: 'Epithelial', correct: false }, 
          { text: 'Adipose', correct: false },
          { text: 'Connective', correct: true }
      ]
      },
    {
      question: 'The anatomical term for the head is?',
      answers: [
        { text: 'Cephalic', correct: true },
        { text: 'Cervical', correct: false },
        { text: 'Thoracic', correct: false }
      ]
       }, 
    {
      question: 'Mastication is the term for what?',
      answers: [
        { text: 'Chewing', correct: true },
        { text: 'Snoring', correct: false },
        { text: 'Swallowing', correct: false }
      ]
        }  
      ];
