//Global variables
var tenquestionskey = {};
var generalknowledgequiz = {};
var scienceandnaturequiz = {};
var historyquiz = {};

//ajax function calls
generalknowledge();
scienceandnature();
history();

function tenquestions() {
    document.getElementById("enterquestions").classList.toggle("show10");
}

function generateone() {
    document.getElementById("generatequizparagraph").classList.toggle("showquizcategories");
}

//10 questions object constructor function
function Quizconstructor(question1, question1a, question1b, question1c, question1d, answer1, question2, question2a, question2b, question2c, question2d, answer2, question3, question3a, question3b, question3c, question3d, answer3, question4, question4a, question4b, question4c, question4d, answer4, question5, question5a, question5b, question5c, question5d, answer5, question6, question6a, question6b, question6c, question6d, answer6, question7, question7a, question7b, question7c, question7d, answer7, question8, question8a, question8b, question8c, question8d, answer8, question9, question9a, question9b, question9c, question9d, answer9, question10, question10a, question10b, question10c, question10d, answer10) {
    this.question1 = question1;
    this.question1a = question1a;
    this.question1b = question1b;
    this.question1c = question1c;
    this.question1d = question1d;
    this.answer1 = answer1;
    
    this.question2 = question2;
    this.question2a = question2a;
    this.question2b = question2b;
    this.question2c = question2c;
    this.question2d = question2d;
    this.answer2 = answer2;
    
    this.question3 = question3;
    this.question3a = question3a;
    this.question3b = question3b;
    this.question3c = question3c;
    this.question3d = question3d;
    this.answer3 = answer3;
    
    this.question4 = question4;
    this.question4a = question4a;
    this.question4b = question4b;
    this.question4c = question4c;
    this.question4d = question4d;
    this.answer4 = answer4;
    
    this.question5 = question5;
    this.question5a = question5a;
    this.question5b = question5b;
    this.question5c = question5c;
    this.question5d = question5d;
    this.answer5 = answer5;
    
    this.question6 = question6;
    this.question6a = question6a;
    this.question6b = question6b;
    this.question6c = question6c;
    this.question6d = question6d;
    this.answer6 = answer6;
    
    this.question7 = question7;
    this.question7a = question7a;
    this.question7b = question7b;
    this.question7c = question7c;
    this.question7d = question7d;
    this.answer7 = answer7;
    
    this.question8 = question8;
    this.question8a = question8a;
    this.question8b = question8b;
    this.question8c = question8c;
    this.question8d = question8d;
    this.answer8 = answer8;
    
    this.question1 = question9;
    this.question9a = question9a;
    this.question9b = question9b;
    this.question9c = question9c;
    this.question9d = question9d;
    this.answer9 = answer9;
    
    this.question10 = question10;
    this.question10a = question10a;
    this.question10b = question10b;
    this.question10c = question10c;
    this.question10d = question10d;
    this.answer10 = answer10;
}

//Create a new 10 question quiz using user inputs
function createnewquiz() {
    let question1 = document.getElementById("question1").value;
    let question1a = document.getElementById("question1a").value;
    let question1b = document.getElementById("question1b").value;
    let question1c = document.getElementById("question1c").value;
    let question1d = document.getElementById("question1d").value;
    let answer1 = document.getElementById("answer1").value;

    let question2 = document.getElementById("question2").value;
    let question2a = document.getElementById("question2a").value;
    let question2b = document.getElementById("question2b").value;
    let question2c = document.getElementById("question2c").value;
    let question2d = document.getElementById("question2d").value;
    let answer2 = document.getElementById("answer2").value;
    
    let question3 = document.getElementById("question3").value;
    let question3a = document.getElementById("question3a").value;
    let question3b = document.getElementById("question3b").value;
    let question3c = document.getElementById("question3c").value;
    let question3d = document.getElementById("question3d").value;
    let answer3 = document.getElementById("answer3").value;
    
    let question4 = document.getElementById("question4").value;
    let question4a = document.getElementById("question4a").value;
    let question4b = document.getElementById("question4b").value;
    let question4c = document.getElementById("question4c").value;
    let question4d = document.getElementById("question4d").value;
    let answer4 = document.getElementById("answer4").value;
    
    let question5 = document.getElementById("question5").value;
    let question5a = document.getElementById("question5a").value;
    let question5b = document.getElementById("question5b").value;
    let question5c = document.getElementById("question5c").value;
    let question5d = document.getElementById("question5d").value;
    let answer5 = document.getElementById("answer5").value;
    
    let question6 = document.getElementById("question6").value;
    let question6a = document.getElementById("question6a").value;
    let question6b = document.getElementById("question6b").value;
    let question6c = document.getElementById("question6c").value;
    let question6d = document.getElementById("question6d").value;
    let answer6 = document.getElementById("answer6").value;
    
    let question7 = document.getElementById("question7").value;
    let question7a = document.getElementById("question7a").value;
    let question7b = document.getElementById("question7b").value;
    let question7c = document.getElementById("question7c").value;
    let question7d = document.getElementById("question7d").value;
    let answer7 = document.getElementById("answer7").value;
    
    let question8 = document.getElementById("question8").value;
    let question8a = document.getElementById("question8a").value;
    let question8b = document.getElementById("question8b").value;
    let question8c = document.getElementById("question8c").value;
    let question8d = document.getElementById("question8d").value;
    let answer8 = document.getElementById("answer8").value;
    
    let question9 = document.getElementById("question9").value;
    let question9a = document.getElementById("question9a").value;
    let question9b = document.getElementById("question9b").value;
    let question9c = document.getElementById("question9c").value;
    let question9d = document.getElementById("question9d").value;
    let answer9 = document.getElementById("answer9").value;
    
    let question10 = document.getElementById("question10").value;
    let question10a = document.getElementById("question10a").value;
    let question10b = document.getElementById("question10b").value;
    let question10c = document.getElementById("question10c").value;
    let question10d = document.getElementById("question10d").value;
    let answer10 = document.getElementById("answer10").value;
    
    questionskey = new Quizconstructor(question1, question1a, question1b, question1c, question1d, answer1, question2, question2a, question2b, question2c, question2d, answer2, question3, question3a, question3b, question3c, question3d, answer3, question4, question4a, question4b, question4c, question4d, answer4, question5, question5a, question5b, question5c, question5d, answer5, question6, question6a, question6b, question6c, question6d, answer6, question7, question7a, question7b, question7c, question7d, answer7, question8, question8a, question8b, question8c, question8d, answer8, question9, question9a, question9b, question9c, question9d, answer9, question10, question10a, question10b, question10c, question10d, answer10);
    console.log(questionskey);
    localStorage.setItem("newquiz", JSON.stringify(questionskey));
}

// retrieves data from the general knowledge quiz API using an AJAX request and returns it as an object
function generalknowledge() {
    var ajaxrequest = new XMLHttpRequest();
    ajaxrequest.onload = function() {
        if (this.status === 200) {
            try {
                var responseobject = JSON.parse(this.responseText);
                console.log(responseobject);
                generalknowledgequiz = responseobject;
            } catch (e) {
                console.warn('there was an error with the JSON. Could not parse');
            }
        } else {
            console.warn('Did not receive 200 OK from response');
        }
    };
    ajaxrequest.open('get', 'https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple');
    ajaxrequest.send();
}

//calls the generalknowledge() function and displays the questions to the user
function displaygeneralknowledgequiz() {
    generalknowledge();
    document.getElementById("generatedquiz").classList.toggle("showgeneratedquiz");
    
    document.getElementById("q1").innerHTML = generalknowledgequiz.results[0].question;
    document.getElementById("q1a1").innerHTML = generalknowledgequiz.results[0].incorrect_answers[0];
    document.getElementById("q1a2").innerHTML = generalknowledgequiz.results[0].correct_answer;
    document.getElementById("q1a3").innerHTML = generalknowledgequiz.results[0].incorrect_answers[1];
    document.getElementById("q1a4").innerHTML = generalknowledgequiz.results[0].incorrect_answers[2];

    document.getElementById("q2").innerHTML = generalknowledgequiz.results[1].question;
    document.getElementById("q2a1").innerHTML = generalknowledgequiz.results[1].incorrect_answers[0];
    document.getElementById("q2a2").innerHTML = generalknowledgequiz.results[1].incorrect_answers[1];
    document.getElementById("q2a3").innerHTML = generalknowledgequiz.results[1].correct_answer;
    document.getElementById("q2a4").innerHTML = generalknowledgequiz.results[1].incorrect_answers[2];

    document.getElementById("q3").innerHTML = generalknowledgequiz.results[2].question;
    document.getElementById("q3a1").innerHTML = generalknowledgequiz.results[2].correct_answer;
    document.getElementById("q3a2").innerHTML = generalknowledgequiz.results[2].incorrect_answers[0];
    document.getElementById("q3a3").innerHTML = generalknowledgequiz.results[2].incorrect_answers[1];
    document.getElementById("q3a4").innerHTML = generalknowledgequiz.results[2].incorrect_answers[2];

    document.getElementById("q4").innerHTML = generalknowledgequiz.results[3].question;
    document.getElementById("q4a1").innerHTML = generalknowledgequiz.results[3].incorrect_answers[0];
    document.getElementById("q4a2").innerHTML = generalknowledgequiz.results[3].incorrect_answers[2];
    document.getElementById("q4a3").innerHTML = generalknowledgequiz.results[3].incorrect_answers[1];
    document.getElementById("q4a4").innerHTML = generalknowledgequiz.results[3].correct_answer;

    document.getElementById("q5").innerHTML = generalknowledgequiz.results[4].question;
    document.getElementById("q5a1").innerHTML = generalknowledgequiz.results[4].correct_answer;
    document.getElementById("q5a2").innerHTML = generalknowledgequiz.results[4].incorrect_answers[0];
    document.getElementById("q5a3").innerHTML = generalknowledgequiz.results[4].incorrect_answers[1];
    document.getElementById("q5a4").innerHTML = generalknowledgequiz.results[4].incorrect_answers[2];

    document.getElementById("q6").innerHTML = generalknowledgequiz.results[5].question;
    document.getElementById("q6a1").innerHTML = generalknowledgequiz.results[5].incorrect_answers[0];
    document.getElementById("q6a2").innerHTML = generalknowledgequiz.results[5].correct_answer;
    document.getElementById("q6a3").innerHTML = generalknowledgequiz.results[5].incorrect_answers[1];
    document.getElementById("q6a4").innerHTML = generalknowledgequiz.results[5].incorrect_answers[2];

    document.getElementById("q7").innerHTML = generalknowledgequiz.results[6].question;
    document.getElementById("q7a1").innerHTML = generalknowledgequiz.results[6].incorrect_answers[0];
    document.getElementById("q7a2").innerHTML = generalknowledgequiz.results[6].incorrect_answers[2];
    document.getElementById("q7a3").innerHTML = generalknowledgequiz.results[6].incorrect_answers[1];
    document.getElementById("q7a4").innerHTML = generalknowledgequiz.results[6].correct_answer;

    document.getElementById("q8").innerHTML = generalknowledgequiz.results[7].question;
    document.getElementById("q8a1").innerHTML = generalknowledgequiz.results[7].incorrect_answers[0];
    document.getElementById("q8a2").innerHTML = generalknowledgequiz.results[7].incorrect_answers[1];
    document.getElementById("q8a3").innerHTML = generalknowledgequiz.results[7].correct_answer;
    document.getElementById("q8a4").innerHTML = generalknowledgequiz.results[7].incorrect_answers[2];

    document.getElementById("q9").innerHTML = generalknowledgequiz.results[8].question;
    document.getElementById("q9a1").innerHTML = generalknowledgequiz.results[8].correct_answer;
    document.getElementById("q9a2").innerHTML = generalknowledgequiz.results[8].incorrect_answers[0];
    document.getElementById("q9a3").innerHTML = generalknowledgequiz.results[8].incorrect_answers[1];
    document.getElementById("q9a4").innerHTML = generalknowledgequiz.results[8].incorrect_answers[2];

    document.getElementById("q10").innerHTML = generalknowledgequiz.results[9].question;
    document.getElementById("q10a1").innerHTML = generalknowledgequiz.results[9].incorrect_answers[0];
    document.getElementById("q10a2").innerHTML = generalknowledgequiz.results[9].correct_answer;
    document.getElementById("q10a3").innerHTML = generalknowledgequiz.results[9].incorrect_answers[1];
document.getElementById("q10a4").innerHTML = generalknowledgequiz.results[9].incorrect_answers[2];
}

// retrieves data from the science and nature quiz API using an AJAX request and returns it as an object
function scienceandnature() {
    var ajaxrequest = new XMLHttpRequest();
    ajaxrequest.onload = function() {
        if (this.status === 200) {
            try {
                var responseobject = JSON.parse(this.responseText);
                console.log(responseobject);
                scienceandnaturequiz = responseobject;
            } catch (e) {
                console.warn('there was an error with the JSON. Could not parse');
            }
        } else {
            console.warn('Did not receive 200 OK from response');
        }
    };
    ajaxrequest.open('get', 'https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple');
    ajaxrequest.send();
}

//calls the scienceandnature() function and displays the questions to the user
function displayscienceandnaturequiz() {
    scienceandnature();
    document.getElementById("generatedquiz").classList.toggle("showgeneratedquiz");
    
    document.getElementById("q1").innerHTML = scienceandnaturequiz.results[0].question;
    document.getElementById("q1a1").innerHTML = scienceandnaturequiz.results[0].incorrect_answers[0];
    document.getElementById("q1a2").innerHTML = scienceandnaturequiz.results[0].incorrect_answers[2];
    document.getElementById("q1a3").innerHTML = scienceandnaturequiz.results[0].incorrect_answers[1];
    document.getElementById("q1a4").innerHTML = scienceandnaturequiz.results[0].correct_answer;

    document.getElementById("q2").innerHTML = scienceandnaturequiz.results[1].question;
    document.getElementById("q2a1").innerHTML = scienceandnaturequiz.results[1].incorrect_answers[0];
    document.getElementById("q2a2").innerHTML = scienceandnaturequiz.results[1].incorrect_answers[1];
    document.getElementById("q2a3").innerHTML = scienceandnaturequiz.results[1].correct_answer;
    document.getElementById("q2a4").innerHTML = scienceandnaturequiz.results[1].incorrect_answers[2];

    document.getElementById("q3").innerHTML = scienceandnaturequiz.results[2].question;
    document.getElementById("q3a1").innerHTML = scienceandnaturequiz.results[2].correct_answer;
    document.getElementById("q3a2").innerHTML = scienceandnaturequiz.results[2].incorrect_answers[0];
    document.getElementById("q3a3").innerHTML = scienceandnaturequiz.results[2].incorrect_answers[1];
    document.getElementById("q3a4").innerHTML = scienceandnaturequiz.results[2].incorrect_answers[2];

    document.getElementById("q4").innerHTML = scienceandnaturequiz.results[3].question;
    document.getElementById("q4a1").innerHTML = scienceandnaturequiz.results[3].incorrect_answers[0];
    document.getElementById("q4a2").innerHTML = scienceandnaturequiz.results[3].correct_answer;
    document.getElementById("q4a3").innerHTML = scienceandnaturequiz.results[3].incorrect_answers[1];
    document.getElementById("q4a4").innerHTML = scienceandnaturequiz.results[3].incorrect_answers[2];

    document.getElementById("q5").innerHTML = scienceandnaturequiz.results[4].question;
    document.getElementById("q5a1").innerHTML = scienceandnaturequiz.results[4].correct_answer;
    document.getElementById("q5a2").innerHTML = scienceandnaturequiz.results[4].incorrect_answers[0];
    document.getElementById("q5a3").innerHTML = scienceandnaturequiz.results[4].incorrect_answers[1];
    document.getElementById("q5a4").innerHTML = scienceandnaturequiz.results[4].incorrect_answers[2];

    document.getElementById("q6").innerHTML = scienceandnaturequiz.results[5].question;
    document.getElementById("q6a1").innerHTML = scienceandnaturequiz.results[5].incorrect_answers[0];
    document.getElementById("q6a2").innerHTML = scienceandnaturequiz.results[5].correct_answer;
    document.getElementById("q6a3").innerHTML = scienceandnaturequiz.results[5].incorrect_answers[1];
    document.getElementById("q6a4").innerHTML = scienceandnaturequiz.results[5].incorrect_answers[2];

    document.getElementById("q7").innerHTML = scienceandnaturequiz.results[6].question;
    document.getElementById("q7a1").innerHTML = scienceandnaturequiz.results[6].incorrect_answers[0];
    document.getElementById("q7a2").innerHTML = scienceandnaturequiz.results[6].incorrect_answers[2];
    document.getElementById("q7a3").innerHTML = scienceandnaturequiz.results[6].incorrect_answers[1];
    document.getElementById("q7a4").innerHTML = scienceandnaturequiz.results[6].correct_answer;

    document.getElementById("q8").innerHTML = scienceandnaturequiz.results[7].question;
    document.getElementById("q8a1").innerHTML = scienceandnaturequiz.results[7].incorrect_answers[0];
    document.getElementById("q8a2").innerHTML = scienceandnaturequiz.results[7].incorrect_answers[1];
    document.getElementById("q8a3").innerHTML = scienceandnaturequiz.results[7].correct_answer;
    document.getElementById("q8a4").innerHTML = scienceandnaturequiz.results[7].incorrect_answers[2];

    document.getElementById("q9").innerHTML = scienceandnaturequiz.results[8].question;
    document.getElementById("q9a1").innerHTML = scienceandnaturequiz.results[8].correct_answer;
    document.getElementById("q9a2").innerHTML = scienceandnaturequiz.results[8].incorrect_answers[0];
    document.getElementById("q9a3").innerHTML = scienceandnaturequiz.results[8].incorrect_answers[1];
    document.getElementById("q9a4").innerHTML = scienceandnaturequiz.results[8].incorrect_answers[2];

    document.getElementById("q10").innerHTML = scienceandnaturequiz.results[9].question;
    document.getElementById("q10a1").innerHTML = scienceandnaturequiz.results[9].incorrect_answers[0];
    document.getElementById("q10a2").innerHTML = scienceandnaturequiz.results[9].correct_answer;
    document.getElementById("q10a3").innerHTML = scienceandnaturequiz.results[9].incorrect_answers[1];
    document.getElementById("q10a4").innerHTML = scienceandnaturequiz.results[9].incorrect_answers[2];
}

// retrieves data from the history quiz API using an AJAX request and returns it as an object
function history() {
    var ajaxrequest = new XMLHttpRequest();
    ajaxrequest.onload = function() {
        if (this.status === 200) {
            try {
                var responseobject = JSON.parse(this.responseText);
                console.log(responseobject);
                historyquiz = responseobject;
            } catch (e) {
                console.warn('there was an error with the JSON. Could not parse');
            }
        } else {
            console.warn('Did not receive 200 OK from response');
        }
    };
    ajaxrequest.open('get', 'https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple');
    ajaxrequest.send();
}

//calls the history() function and displays the questions to the user
function displayhistoryquiz() {
    history();
    document.getElementById("generatedquiz").classList.toggle("showgeneratedquiz");
    
    document.getElementById("q1").innerHTML = historyquiz.results[0].question;
    document.getElementById("q1a1").innerHTML = historyquiz.results[0].incorrect_answers[0];
    document.getElementById("q1a2").innerHTML = historyquiz.results[0].incorrect_answers[2];
    document.getElementById("q1a3").innerHTML = historyquiz.results[0].incorrect_answers[1];
    document.getElementById("q1a4").innerHTML = historyquiz.results[0].correct_answer;

    document.getElementById("q2").innerHTML = historyquiz.results[1].question;
    document.getElementById("q2a1").innerHTML = historyquiz.results[1].incorrect_answers[0];
    document.getElementById("q2a2").innerHTML = historyquiz.results[1].incorrect_answers[1];
    document.getElementById("q2a3").innerHTML = historyquiz.results[1].correct_answer;
    document.getElementById("q2a4").innerHTML = historyquiz.results[1].incorrect_answers[2];

    document.getElementById("q3").innerHTML = historyquiz.results[2].question;
    document.getElementById("q3a1").innerHTML = historyquiz.results[2].correct_answer;
    document.getElementById("q3a2").innerHTML = historyquiz.results[2].incorrect_answers[0];
    document.getElementById("q3a3").innerHTML = historyquiz.results[2].incorrect_answers[1];
    document.getElementById("q3a4").innerHTML = historyquiz.results[2].incorrect_answers[2];

    document.getElementById("q4").innerHTML = historyquiz.results[3].question;
    document.getElementById("q4a1").innerHTML = historyquiz.results[3].incorrect_answers[0];
    document.getElementById("q4a2").innerHTML = historyquiz.results[3].correct_answer;
    document.getElementById("q4a3").innerHTML = historyquiz.results[3].incorrect_answers[1];
    document.getElementById("q4a4").innerHTML = historyquiz.results[3].incorrect_answers[2];

    document.getElementById("q5").innerHTML = historyquiz.results[4].question;
    document.getElementById("q5a1").innerHTML = historyquiz.results[4].correct_answer;
    document.getElementById("q5a2").innerHTML = historyquiz.results[4].incorrect_answers[0];
    document.getElementById("q5a3").innerHTML = historyquiz.results[4].incorrect_answers[1];
    document.getElementById("q5a4").innerHTML = historyquiz.results[4].incorrect_answers[2];

    document.getElementById("q6").innerHTML = historyquiz.results[5].question;
    document.getElementById("q6a1").innerHTML = historyquiz.results[5].incorrect_answers[0];
    document.getElementById("q6a2").innerHTML = historyquiz.results[5].correct_answer;
    document.getElementById("q6a3").innerHTML = historyquiz.results[5].incorrect_answers[1];
    document.getElementById("q6a4").innerHTML = historyquiz.results[5].incorrect_answers[2];

    document.getElementById("q7").innerHTML = historyquiz.results[6].question;
    document.getElementById("q7a1").innerHTML = historyquiz.results[6].incorrect_answers[0];
    document.getElementById("q7a2").innerHTML = historyquiz.results[6].incorrect_answers[2];
    document.getElementById("q7a3").innerHTML = historyquiz.results[6].incorrect_answers[1];
    document.getElementById("q7a4").innerHTML = historyquiz.results[6].correct_answer;

    document.getElementById("q8").innerHTML = historyquiz.results[7].question;
    document.getElementById("q8a1").innerHTML = historyquiz.results[7].incorrect_answers[0];
    document.getElementById("q8a2").innerHTML = historyquiz.results[7].incorrect_answers[1];
    document.getElementById("q8a3").innerHTML = historyquiz.results[7].correct_answer;
    document.getElementById("q8a4").innerHTML = historyquiz.results[7].incorrect_answers[2];

    document.getElementById("q9").innerHTML = historyquiz.results[8].question;
    document.getElementById("q9a1").innerHTML = historyquiz.results[8].correct_answer;
    document.getElementById("q9a2").innerHTML = historyquiz.results[8].incorrect_answers[0];
    document.getElementById("q9a3").innerHTML = historyquiz.results[8].incorrect_answers[1];
    document.getElementById("q9a4").innerHTML = historyquiz.results[8].incorrect_answers[2];

    document.getElementById("q10").innerHTML = historyquiz.results[9].question;
    document.getElementById("q10a1").innerHTML = historyquiz.results[9].incorrect_answers[0];
    document.getElementById("q10a2").innerHTML = historyquiz.results[9].correct_answer;
    document.getElementById("q10a3").innerHTML = historyquiz.results[9].incorrect_answers[1];
    document.getElementById("q10a4").innerHTML = historyquiz.results[9].incorrect_answers[2];
}