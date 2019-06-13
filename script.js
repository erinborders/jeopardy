
let category1Question1 = $('#category1-question1 h1').eq(0)
let question = $('#category1-question1 p').eq(0)
let answers = $('#category1-question1-answers').eq(0)

//create a function to hide the question
function hideQuestion () {
    question.hide();
}
hideQuestion();

//create a function to delete the question tile with the point value
function deleteQuestionTile () {
    category1Question1.remove()
}

//create a function to reveal the question
function revealQuestion () {
    question.show();
}

//create a function to hide the answers
function hideAnswers () {
    answers.hide();
}
hideAnswers();

//create a function to reveal the answers

function revealAnswers () {
    answers.show();
}

//create event listener to delete question tile and reveal the question
category1Question1.on('click', function () {
    deleteQuestionTile();
    revealQuestion();
    revealAnswers();
})
