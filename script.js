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
        category: "Ghosts and Demons",
        points: 10,
        question: "There's a ouija board in your basement",
        answers: [`<button type="button">Sweet! Let's play.</button>`, `<button type="button" id="correct">Burn it</button>`, `<button type="button">Use it for a conversation starter</button>`, `<button type="button">Summon the spirit of your dead son</button>`],
        wrongAnswer: "WRONG. Don't take any chances - just burn it."
    },
    {
        category: "Zombies",
        points: 10,
        question: "Your local news is announcing reports of a strange illness.",
        answers: [`<button type="button" id="correct">Bunker down</button>`, `<button type="button">Shrug. You got your flu shot</button>`, `<button type="button">Put on a face mask</button>`, `<button type="button">Stock up on hand sanitizer</button>`],
        wrongAnswer: "WRONG. Bunker down, dude - you can never be too careful."
    },
    {
        category: "Animals",
        points: 10,
        question: "Your dog's acting a little funny.",
        answers: [`<button type="button">Shrug it off</button>`, `<button type="button" id="correct">Call animal control</button>`, `<button type="button">Give him treats</button>`, `<button type="button">Take him to the vet</button>`],
        wrongAnswer: "WRONG. It's definitely rabies. Let animal control take care of it."
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
        category: "Ghosts and Demons",
        points: 20,
        question: "A doll keeps appearing on your doorstep.",
        answers: [`<button type="button" id="correct">Call the exorcist</button>`, `<button type="button">Give it to your daughter</button>`, `<button type="button">Keep it as decoration</button>`, `<button type="button">Look at it with nostalgia for your own childhood</button>`],
        wrongAnswer: "WRONG. Dude, even if it wasn't haunted, you don't know where that thing's been."
    },
    {
        category: "Zombies",
        points: 20,
        question: "Your neighbor offers to help you bury your dead cat in a special cemetary.",
        answers: [`<button type="button">How thoughtful</button>`, `<button type="button" id="correct">Avoid them</button>`, `<button type="button">Ask why the cemetary's special</button>`, `<button type="button">Refuse</button>`],
        wrongAnswer: "WRONG. No neighbor offers to bury your dead cat out of the goodness of their heart. Avoid them, they're probably a psychopath."
    },
    {
        category: "Animals",
        points: 20,
        question: "You get a call inviting you to work at an innovative research lab located underwater.",
        answers: [`<button type="button">Accept</button>`, `<button type="button">Tell them you'll think about it</button>`, `<button type="button">Refuse but eventually accept</button>`, `<button type="button" id="correct">Hang up</button>`],
        wrongAnswer: "WRONG. Nothing good ever happens at underwater research labs. Hang up immediately."
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
        category: "Ghosts and Demons",
        points: 30,
        question: "Your friend dares you to watch a 'scary tape' on their laptop.",
        answers: [`<button type="button">Accept. You're no punk</button>`, `<button type="button">Say no but let them watch it</button>`, `<button type="button">Destroy the computer</button>`, `<button type="button" id="correct">Unfriend them</button>`],
        wrongAnswer: "WRONG. A friend like that is just going to bring trouble into your life. Better to unfriend."
    },
    {
        category: "Zombies",
        points: 30,
        question: "Some weirdo just bit your arm???",
        answers: [`<button type="button" id="correct">CHOP IT OFF</button>`, `<button type="button">Disinfect it</button>`, `<button type="button">Go to the hospital</button>`, `<button type="button">Shrug it off</button>`],
        wrongAnswer: "WRONG. We're talking about zombies, your only hope is to chop it off."
    },
    {
        category: "Animals",
        points: 30,
        question: "THE BIRDS ARE ATTACKING.",
        answers: [`<button type="button">Attack back</button>`, `<button type="button">Call the army</button>`, `<button type="button" id="correct">Hide in your attic</button>`, `<button type="button">Pray</button>`],
        wrongAnswer: "WRONG. Ever seen The Birds? We don't know why hiding in an attic worked either, but the important thing is: it worked."
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
        answers: [`<button type="button">KILL IT WITH FIRE</button>`, `<button type="button">Do as your local android says</button>`, `<button type="button" id="correct">Trap it in the airlock</button>`, `<button type="button">Try to communicate</button>`],
        wrongAnswer: "WRONG. You're in SPACE. Always trap it in the airlock."
    },
    {
        category: "Ghosts and Demons",
        points: 40,
        question: "A demon has possessed your child.",
        answers: [`<button type="button">Call the hospital</button>`, `<button type="button">Exorcise her</button>`, `<button type="button" id="correct">Abandon her</button>`, `<button type="button">Pray</button>`],
        wrongAnswer: "WRONG. Look, you can't save everybody. Just leave her and hope she doesn't find you."
    },
    {
        category: "Zombies",
        points: 40,
        question: "You and your partner are surrounded by a horde of the walking dead.",
        answers: [`<button type="button" id="correct">Sacrifice your partner</button>`, `<button type="button">Act natural</button>`, `<button type="button">Call for help</button>`, `<button type="button">Die together</button>`],
        wrongAnswer: "WRONG. Only one of you is gonna make it out alive anyway, might as well make sure it's you."
    },
    {
        category: "Animals",
        points: 40,
        question: "A mutated spider's cornered you in an abandoned mine shaft",
        answers: [`<button type="button">Fight it</button>`, `<button type="button" id="correct">Spray it with perfume</button>`, `<button type="button">Bob and weave</button>`, `<button type="button">Accept your fate</button>`],
        wrongAnswer: "WRONG. If Eight-Legged Freaks has taught us anything, it's to always keep perfume on your person in the event of large, mutated spiders."
    },
    {
        category: "Serial Killers",
        points: 50,
        question: "A camper that drowned 20 years ago just busted in your door",
        answers: [`<button type="button">Fight him</button>`, `<button type="button">Insult his mother</button>`, `<button type="button" id="correct">Accept your (probably painful) death</button>`, `<button type="button">Run</button>`],
        wrongAnswer: "WRONG. Honestly, you're probably not the main character. You were destined to die. "
    },
    {
        category: "Monsters",
        points: 50,
        question: "An elite alien assassin is hunting you.",
        answers: [`<button type="button">Camouflage yourself</button>`, `<button type="button">Shoot wildly</button>`, `<button type="button" id="correct">GET TO THE CHOPPA</button>`, `<button type="button">Bribe it</button>`],
        wrongAnswer: "WRONG. It's an ELITE ASSASSIN. Your only hope is escape."
    },
    {
        category: "Ghosts and Demons",
        points: 50,
        question: "Children disappear from your town every 27 years.",
        answers: [`<button type="button">Leave the town</button>`, `<button type="button">Face the evil festering in the underground</button>`, `<button type="button">File missing person reports</button>`, `<button type="button" id="correct">Thank God it didn't come when you were a kid</button>`],
        wrongAnswer: "WRONG. Bad things come to people who shake up the status quo in a 'sleepy town.' Just keep your head down and you'll do fine."
    },
    {
        category: "Zombies",
        points: 50,
        question: "You can only pick one more member for your apocalypse squad.",
        answers: [`<button type="button" id="correct">Pick the nurse</button>`, `<button type="button">Pick the army vet</button>`, `<button type="button">Pick your mom</button>`, `<button type="button">Pick no one. You're a lone wolf.</button>`],
        wrongAnswer: "WRONG. Who do you think's gonna stitch up the hand you hacked off when it got bitten?"
    },
    {
        category: "Animals",
        points: 50,
        question: "Your expedition lead waits until you've arrived on the mysterious island to tell you that he plans to capture a large ape creature.",
        answers: [`<button type="button">Help him do it</button>`, `<button type="button">Try to get off the island</button>`, `<button type="button">Save him from his own stupidity</button>`, `<button type="button" id="correct">Kill him</button>`],
        wrongAnswer: "WRONG. He's betrayed you. He must die."
    }
   
]

//creating a for loop to create divs with a class names, and an id that will match the index of it's corresponding object in my questionInfo array
for (let i = 0; i <25; i++) {
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
    for (let i = 0; i<questionInfo[questionTileID].answers.length; i++) {
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
    gameResultsDemo();
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
function showThemWhatTheyWonDemo () {
    if (score >= 60) {
        $('#winnerMessage').show();
    } else {
        $('#loserMessage').show();
    }
}
//a function that only displays results after a certain amount of questions have been answered
function gameResultsDemo () {
    if (numberOfQuestionsAnswered === 6) {
        showThemWhatTheyWonDemo();
    }
}

// function showThemWhatTheyWon () {
//     if (numberOfCorrectAnswers >= 17) {
//         $('#winnerMessage').show();
//     } else {
//         $('#loserMessage').show();
//     }
// }

// function gameResults () {
//     if (numberOfQuestionsAnswered === 25) {
//         showThemWhatTheyWon();
//     }
// }