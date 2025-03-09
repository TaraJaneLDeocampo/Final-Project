const questions = [
    {
        question: "What is the goal of Zero Hunger (SDG 2)?",
        options: [
            "To end world hunger by 2030",
            "To provide free food for everyone",
            "To reduce food prices globally",
            "To eliminate fast food chains"
        ],
        correct: 0
    },
    {
        question: "Which region has the highest rate of undernourishment?",
        options: [
            "North America",
            "Europe",
            "Sub-Saharan Africa",
            "Australia"
        ],
        correct: 2
    },
    {
        question: "Which of the following is NOT a cause of world hunger?",
        options: [
            "Food waste",
            "Climate change",
            "Overpopulation",
            "Too many farmers"
        ],
        correct: 3
    },
    {
        question: "How can individuals contribute to ending hunger?",
        options: [
            "Donating food to charities",
            "Reducing food waste",
            "Supporting sustainable farming",
            "All of the above"
        ],
        correct: 3
    },
    {
        question: "What percentage of food is wasted globally each year?",
        options: [
            "About 10%",
            "About 30%",
            "About 50%",
            "About 70%"
        ],
        correct: 1
    }
];

let currentQuestionIndex = 0;
let score = 0;
let firstAttempt = true; 

const quizContainer = document.getElementById("quiz");
const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options");
const prevButton = document.getElementById("prev-btn");
const nextButton = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionText.textContent = currentQuestion.question;
    optionsContainer.innerHTML = "";
    firstAttempt = true; 

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement("button");
        optionButton.classList.add("option");
        optionButton.textContent = option;
        optionButton.onclick = () => selectAnswer(index, optionButton);
        optionsContainer.appendChild(optionButton);
    });

    
    nextButton.disabled = true;
    prevButton.disabled = currentQuestionIndex === 0;

    if (currentQuestionIndex === questions.length - 1) {
        nextButton.style.display = "none";
        submitButton.style.display = "inline-block";
    } else {
        nextButton.style.display = "inline-block";
        submitButton.style.display = "none";
    }
}

function selectAnswer(selectedIndex, button) {
    const currentQuestion = questions[currentQuestionIndex];
    const optionButtons = document.querySelectorAll(".option");

    if (selectedIndex === currentQuestion.correct) {
        button.style.backgroundColor = "#4CAF50"; 
        button.style.color = "white";
        nextButton.disabled = false; 

        if (firstAttempt) {
            score++; 
        }

        
        optionButtons.forEach(btn => btn.disabled = true);
    } else {
        button.style.backgroundColor = "#FF5733"; 
        button.style.color = "white";

        setTimeout(() => {
            button.style.backgroundColor = "";
            button.style.color = "";
        }, 1000);

        firstAttempt = false; 
    }
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
}

function submitQuiz() {
    quizContainer.style.display = "none";
    resultContainer.style.display = "block";

    let feedbackMessage = "";
    
    if (score === questions.length) {
        feedbackMessage = "🌟 Excellent! You mastered the topic!";
    } else if (score >= Math.floor(questions.length * 0.7)) {
        feedbackMessage = "👍 Good job! You have a strong understanding.";
    } else {
        feedbackMessage = "📚 Keep learning! Review the topic and try again.";
    }

    resultContainer.innerHTML = `
        <h2>You scored ${score} out of ${questions.length}!</h2>
        <p>${feedbackMessage}</p>
        <button onclick="restartQuiz()">Try Again</button>
    `;
}


function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    resultContainer.style.display = "none";
    quizContainer.style.display = "block";
    loadQuestion();
}


window.onload = loadQuestion;
