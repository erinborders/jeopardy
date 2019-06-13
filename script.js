
// let category1Question1 = $('#category1-question1 h1').eq(0)
let questionTile = $('.question-tile')
let question = $('.question-tile p')
// let answers = $('#answer-field')

//create a function to hide the question
function hideQuestion () {
    question.hide();
}
hideQuestion();

//create a function to delete the question tile with the point value
// function deleteQuestionTile (e) {
//     e.target.children.remove()
// }

//create a function to reveal the question
// function revealQuestion () {
//     question.show();
// }

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

//create event listener to delete question tile and reveal the question
questionTile.on('click', function (evt) {
    $(this).children().eq(1).show();
    //reveal answer buttons
    revealAnswers();
    //removes question tile
    $(this).children().eq(0).remove();  
})
