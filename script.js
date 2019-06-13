



let questionTile = $('.question-tile')
let question = $('.question-tile p')
let buttons = $('button')
let rightAnswer = $('#correct')

//create a function to hide the question
function hideQuestion () {
    question.hide();
}
hideQuestion();

function deleteQuestion () {
    question.remove();
}

//create a function to hide the answers
function hideAnswers () {
    let answers = $('#answer-field div')
    answers.hide();
}
hideAnswers();

//create a function to reveal the answers
function revealAnswers () {
    let answerID = event.target.parentNode.id
    let thisAnswer = $('#answer-field #' + answerID)
    console.log(thisAnswer)
    thisAnswer.show();
}

//create event listener to delete question tile and reveal the questions and answers
questionTile.on('click', function (evt) {
    $(this).children().eq(1).show();
    //reveal answer buttons
    revealAnswers();
    //removes question tile
    $(this).children().eq(0).remove();  
})


//create event listener for answer buttons and deleting question
buttons.on('click', function () {
    if (event.target.id !== "correct") {
        alert("wrong answer!")
        // console.log($(this).id)
    } else {
        alert("right answer!")
    }
    $(this).parent().remove()
    deleteQuestion();
})