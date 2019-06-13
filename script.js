const questionInfo = [
    {
        points: 10,
        question: "You're home alone and hear a noise",
        answers: ['<button type="button">Investigate loudly</button>', '<button type="button">Investigate quietly</button>', '<button type="button" id="correct">Call the police</button>', '<button type="button">Ignore it</button>']
    },
    {
        points: 10,
        question: "A stranger calls and says nothing, just breathes",
        answers: ['<button type="button">Ignore it</button>', '<button type="button">Start chatting</button>', '<button type="button">Call the police</button>', '<button type="button">Move out of your house</button>']
    }
   
]

for (let i = 0; i <2; i++) {
    let div = document.createElement('div')
    div.classList.add("grid-item")
    div.classList.add("question-tile")
    div.setAttribute("id", i)
    div.innerHTML = questionInfo[i].points
    document.querySelector('.game-container').appendChild(div)
}

var questionTile = $('.question-tile')
var answerField = document.querySelector('.answer-field')

function test (e) {
    
}

questionTile.on('click', function (evt) {
    //storing the id of the div's in a variable
    let questionTileID = evt.target.id
    //setting the clicked on div's inner html so that it equals the question property of the appropriate object in my questionInfo array
    event.target.innerHTML = questionInfo[questionTileID].question
    //looping through the answers array to reassign the value of the answer field's inner html to the answer property of the array item we're on
    for (let i = 0; i<questionInfo[0].answers.length; i++) {
        answerField.innerHTML += questionInfo[questionTileID].answers[i]
    }  
})





// // let question = $('.question-tile p')
// let buttons = $('button')
// let rightAnswer = $('#correct')

// //create a function to hide the question
// // function hideQuestion () {
// //     question.hide();
// // }
// // hideQuestion();

// function deleteQuestion () {
//     question.remove();
// }

// //create a function to hide the answers
// function hideAnswers () {
//     let answers = $('#answer-field div')
//     answers.hide();
// }
// hideAnswers();

// //create a function to reveal the answers
// function revealAnswers () {
//     let answerID = event.target.parentNode.id
//     let thisAnswer = $('#answer-field #' + answerID)
//     console.log(thisAnswer)
//     thisAnswer.show();
// }

// //create event listener to delete question tile and reveal the questions and answers



// //create event listener for answer buttons and deleting question
// buttons.on('click', function () {
//     if (event.target.id !== "correct") {
//         alert("wrong answer!")
//         // console.log($(this).id)
//     } else {
//         alert("right answer!")
//     }
//     $(this).parent().remove()
//     deleteQuestion();
// })