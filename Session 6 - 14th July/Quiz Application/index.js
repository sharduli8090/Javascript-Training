const quizData = [
    {
      question: 'What is the capital of France?',
      choices: ['Paris', 'London', 'Berlin', 'Rome'],
      correctAnswer: 0
    },
    {
      question: 'Which planet is known as the Red Planet?',
      choices: ['Mars', 'Venus', 'Mercury', 'Jupiter'],
      correctAnswer: 0
    },
    {
      question: 'Who painted the Mona Lisa?',
      choices: ['Leonardo da Vinci', 'Pablo Picasso', 'Vincent van Gogh', 'Michelangelo'],
      correctAnswer: 0
    },
    {
      question: 'What is the largest ocean in the world?',
      choices: ['Pacific Ocean', 'Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean'],
      correctAnswer: 0
    },
    {
      question: 'Which country is famous for the Taj Mahal?',
      choices: ['India', 'China', 'Egypt', 'Brazil'],
      correctAnswer: 0
    }
  ];
  

// DOM Elements
const questionText = document.getElementById("questionText");
const choicesList = document.getElementById("choicesList");
const nextQuestionBtn = document.getElementById("nextQuestionBtn");

const scoreValue = document.getElementById("scoreValue");



// Quiz Variables
let currentQuestion = 0;
let score =0;

nextQuestionBtn.addEventListener("click",()=>{
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if(selectedChoice){
        const selectedAnswer = parseInt(selectedChoice.value);
        checkAnswer(selectedAnswer);
        
        selectedChoice.checked = false;
        currentQuestion++;
        if(currentQuestion<quizData.length){
            renderQuestion();
        }else{
            showFinalScore();
        }
    }
})


function renderQuestion(){
    const question = quizData[currentQuestion];
    questionText.textContent = question.question;
    choicesList.innerHTML = "";
    question.choices.forEach((choice,index)=>{
        const li = document.createElement("li");
        const input = document.createElement("input");
        const label = document.createElement("label");

        input.type = 'radio';
        input.name = "choice";
        input.value = index;
        label.textContent = choice;

        li.appendChild(input);
        li.appendChild(label);
        choicesList.appendChild(li);
    })
}

function checkAnswer(selectedAnswer){
    const question = quizData[currentQuestion];
    if(selectedAnswer===question.correctAnswer){
        score++;
    }
}


function showFinalScore(){
    questionText.textContent = "Quiz Completed";
    choicesList.innerHTML="";
    nextQuestionBtn.disabled = true;
    scoreValue.textContent = score;
}

renderQuestion();