//all the data affiliated with each question tile
const questionInfo = [
    {
        category: "Serial Killers",
        points: 10,
        question: "You're home alone and hear a noise.",
        answers: ['<button type="button">Investigate loudly</button>', '<button type="button">Investigate quietly</button>', '<button type="button" id="correct">Call the police</button>', '<button type="button">Ignore it</button>'],
        wrongAnswer: "WRONG. If you're doing anything but calling the police, you deserve to die"
    },
    {
        category: "Monsters",
        points: 10,
        question: "You're in the woods and hear howling",
        answers: [`<button type="button" id="correct">Go back the way you came</button>`, `<button type="button">Turn up your music</button>`, `<button type="button">Find a large stick</button>`, `<button type="button">Remark at the wonder of nature</button>`],
        wrongAnswer: "WRONG. You stand literally no chance against a beast. Go back."
    },
    {
        category: "Serial Killers",
        points: 20,
        question: "A stranger calls and says nothing, just breathes.",
        answers: [`<button type="button">Tell them you dont want any</button>`, `<button type="button">Hang up</button>`, `<button type="button">Call the police</button>`, `<button type="button" id="correct">Move out of your house</button>`],
        wrongAnswer: "WRONG. The killer's calling from INSIDE the house, you better move."
    },
    {
        category: "Monsters",
        points: 20,
        question: "You're lost in a cave of bat-human mutants",
        answers: [`<button type="button">Panic</button>`, `<button type="button">Find a good hiding spot</button>`, `<button type="button" id="correct">Fight your way out</button>`, `<button type="button">Become one of them</button>`],
        wrongAnswer: "WRONG. They're BAT-PEOPLE. They know this cave better than you do and the only reason they'll understand is violence."
    },
    {
        category: "Serial Killers",
        points: 30,
        question: "A strange local accosts you with warnings on your trip.",
        answers: [`<button type="button">Roll your eyes</button>`, `<button type="button">Insult them</button>`, `<button type="button" id="correct">Call off the trip</button>`, `<button type="button">Call the police</button>`],
        wrongAnswer: "WRONG. Call off your trip or get eaten by cannibals, it's your choice."
    },
    {
        category: "Monsters",
        points: 30,
        question: "A deadly monster with super-hearing is in your house",
        answers: [`<button type="button">Run</button>`, `<button type="button" id="correct">Pump up the jam</button>`, `<button type="button">Call for help</button>`, `<button type="button">Pray</button>`],
        wrongAnswer: "WRONG. That thing's gonna hear you no matter what so incapacitate it with loud sounds."
    },
    {
        category: "Serial Killers",
        points: 40,
        question: "You wake up chained to wall in an empty basement.",
        answers: [`<button type="button">Scream for help</button>`, `<button type="button" id="correct">Sever the chained limb</button>`, `<button type="button">Ask the kidnapper what they want</button>`, `<button type="button">Sob uncontrollably</button>`],
        wrongAnswer: "WRONG. No one's going to help you, make like a fox and chew off your leg"
    },
    {
        category: "Monsters",
        points: 40,
        question: "There's an alien in the air vents of your space ship.",
        answers: [`<button type="button" id="correct">KILL IT WITH FIRE</button>`, `<button type="button">Do as your local android says</button>`, `<button type="button">Trap it in the airlock</button>`, `<button type="button">Try to communicate</button>`],
        wrongAnswer: "WRONG. You're in SPACE. Always trap it in the airlock."
    },
    {
        category: "Serial Killers",
        points: 50,
        question: "A camper that drowned 20 years ago just busted in your door",
        answers: [],
        wrongAnswer: "WRONG. Honestly, you're probably not the main character. You were destined to die. "
    },
    {
        category: "Monsters",
        points: 50,
        question: "An elite alien assassin is hunting you.",
        answers: [`<button type="button">Camouflage yourself</button>`, `<button type="button">Shoot wildly</button>`, `<button type="button" id="correct">GET TO THE CHOPPA</button>`, `<button type="button">Bribe it</button>`],
        wrongAnswer: "WRONG. It's an ELITE ASSASSIN. Your only hope is escape."
    }
   
]

//creating a for loop to create divs with a class names, and an id that will match the index of it's corresponding object in my questionInfo array
for (let i = 0; i <10; i++) {
    let div = document.createElement('div')
    div.classList.add("grid-item")
    div.classList.add("question-tile")
    div.setAttribute("id", i)
    div.innerHTML = questionInfo[i].points
    document.querySelector('.game-container').appendChild(div)
}

var questionTile = $('.question-tile')
var answerField = document.querySelector('.answer-field')
//create a variable to store the id of the question tile that was clicked
var correspondingQuestion = 0
//create a variable to store the amount of question tiles they've clicked on
var numberOfQuestionsAnswered = 0

questionTile.on('click', function (evt) {
    //storing the id of the div's in a variable
    let questionTileID = evt.target.id
    //setting the clicked on div's inner html so that it equals the question property of the appropriate object in my questionInfo array
    event.target.innerHTML = questionInfo[questionTileID].question
    //looping through the answers array to reassign the value of the answer field's inner html to the answer property of the array item we're on
    for (let i = 0; i<questionInfo[0].answers.length; i++) {
        answerField.innerHTML += questionInfo[questionTileID].answers[i]
    }  
    correspondingQuestion = questionTileID
    numberOfQuestionsAnswered++
})

//create function to figure out if answers are right or wrong

answerField.addEventListener('click', function (evt) {
    //if the button clicked on doesn't have an id "correct" give them a wrong answer alert
    if (evt.target.id !== "correct") {
        alert(questionInfo[correspondingQuestion].wrongAnswer)
        deductFromScore();
    } else {
        alert("right answer!")
        addToScore();
    }
    //to remove the question after it's been asked
    document.getElementById(correspondingQuestion).innerHTML = ""
    //to remove the answer buttons after they've been clicked
    $('.answer-field').children().remove()
})

//creating a score variable
var scoreAsString = document.querySelector('#score').innerHTML
var score = parseInt(scoreAsString.substr(6))
//create a correct tally
var numberOfCorrectAnswers = 0
//create an incorrect tally
var numberOfWrongAnswers = 0

//making a function to add to the score
function addToScore () {
    score += questionInfo[correspondingQuestion].points
    document.querySelector('#score').innerHTML = `Score: ${score}`
    numberOfCorrectAnswers++
}
//making a function to deduct from the score
function deductFromScore () {
    score -= questionInfo[correspondingQuestion].points
    document.querySelector('#score').innerHTML = `Score: ${score}`
    numberOfWrongAnswers++
}


//making a function to display whether the player won or lost
function showThemWhatTheyWon () {
    if (numberOfCorrectAnswers >= 8) {
        $('#winnerMessage').show();
    } else {
        $('#loserMessage').show();
    }
}
//a function that only displays results after a certain amount of questions have been answered
function gameResults () {
    if (numberOfQuestionsAnswered === 12) {
        showThemWhatTheyWon();
    }
}
gameResults();
