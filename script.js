

let questions = [
    {
        question: 'quelle est lq capitale de la france?',
        answers: [
            {
                text: "kishasa",
                correct: 'false'
            },
            {
                text: "berlin",
                correct: 'false'
            },
            {
                text: "bujumbura",
                correct: 'false'
            },
            {
                text: "paris",
                correct: 'true'
            },
            {
                text: "kiev",
                correct: 'false'
            }
        ]
    },




    {
        question: 'quelle est la langue la plus parlee en afrique',
        answers: [
            {
                text: "mandarin",
                correct: 'false'
            },
            {
                text: "swahahili",
                correct: 'true'
            },
            {
                text: "anglais",
                correct: 'false'
            },
            {
                text: "espagnole",
                correct: 'true'
            },
            {
                text: "francais",
                correct: 'false'
            }
        ]
    },


    {
        question: 'qui est le fondateur de facebook ?',
        answers: [
            {
                text: "Marc zuckenberg",
                correct: 'true'
            },
            {
                text: "elon mask",
                correct: 'false'
            },
            {
                text: "jeff bezos",
                correct: 'false'
            },
            {
                text: "barack obama",
                correct: 'true'
            },
            {
                text: "bill gate",
                correct: 'false'
            }
        ]
    }





]
let questionElement = document.getElementById('question')
let answersButtons = document.getElementById('Answer-buttons')
nextButton = document.getElementById('next-btn')

let indexDuQuestionActuelle = 0
let score = 0

function startQuiz() {
    indexDuQuestionActuelle = 0
    score = 0
    nextButton.innerHtml = "Next"
    AfficherQuestion()
}

function AfficherQuestion() {
    reinitialisation()
    let questionActuelle = questions[indexDuQuestionActuelle]
    let questionNumero = questionActuelle + 1
    questionElement.innerHTML = questionNumero + "." + questionActuelle.question

    questionActuelle.answers.forEach(answer => {
        let button = document.createElement('button')
        button.innerHTML = answer.text
        button.classList.add('btn')
        answersButtons.appendChild(button);

        if (answer.correct) {
            button.dataset.correct = answer.correct
        }

        button.addEventListener('click', selectAnswer)
    })
}

function reinitialisation() {
    nextButton.style.display = 'none'
    while (answersButtons.firstChild) {
        answersButtons.removeChild(answersButtons.firstChild)
    }
}


function selectAnswer(e) {
    let selectBtn = e.target
    let iscorrect = selectBtn.dataset.correct === "true"
    if (iscorrect) {
        selectBtn.classList.add("correct")
        score++
    } else {
        selectBtn.classList.add("incorrect")
    }


    nextButton.style.display = 'block'
}

function AfficherScore() {
    reinitialisation()
    questionElement.innerHTML = `score: ${score}/${questions.length}`

    nextButton.innerHTML = 'Rejouer'
    nextButton.style.display = 'block'
}



function buttonNextEffet() {
    indexDuQuestionActuelle++
    if (indexDuQuestionActuelle < questions.length) {
        AfficherQuestion()
    } else {
        AfficherScore()
    }
}


nextButton.addEventListener('click', function () {
    if (indexDuQuestionActuelle < questions.length) {
        buttonNextEffet()
    } else {
        startQuiz()
    }
})


startQuiz()