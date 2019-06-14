//all the data affiliated with each question tile
const questionInfo = [
    {
        category: "Serial Killers",
        points: 10,
        question: "You're home alone and hear a noise",
        answers: ['<button type="button">Investigate loudly</button>', '<button type="button">Investigate quietly</button>', '<button type="button" id="correct">Call the police</button>', '<button type="button">Ignore it</button>'],
        wrongAnswer: "If you're doing anything but calling the police, you deserve to die"
    },
    {
        category: "Serial Killers",
        points: 20,
        question: "A stranger calls and says nothing, just breathes",
        answers: [`<button type="button">Tell them you dont want any</button>`, `<button type="button">Hang up</button>`, `<button type="button">Call the police</button>`, `<button type="button" id="correct">Move out of your house</button>`],
        wrongAnswer: "The killer's calling from INSIDE the house, you better move."
    },
    {
        category: "Serial Killers",
        points: 30,
        question: "A strange local accosts you with warnings on your trip",
        answers: [`<button type="button">Roll your eyes</button>`, `<button type="button">Insult them</button>`, `<button type="button" id="correct">Call off the trip</button>`, `<button type="button">Call the police</button>`],
        wrongAnswer: "Call off your trip or get eaten by cannibals, it's your choice."
    }
   
]

//creating a for loop to create divs with a class names, and an id that will match the index of it's corresponding object in my questionInfo array
for (let i = 0; i <3; i++) {
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

//making a function to add to the score
function addToScore () {
    score += questionInfo[correspondingQuestion].points
    document.querySelector('#score').innerHTML = `Score: ${score}`
}
//making a function to deduct from the score
function deductFromScore () {
    score -= questionInfo[correspondingQuestion].points
    document.querySelector('#score').innerHTML = `Score: ${score}`
}




//making a function to tell you when you've won
function youHaveWon () {
    $('#winnerMessage').show();
}
