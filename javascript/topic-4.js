var quizjson = {};
getquiz();

// 
function getquiz() {
var ajaxrequest = new XMLHttpRequest();

ajaxrequest.onload = function() {
    if (this.status === 200) {
        try {
            var responseobject = JSON.parse(this.responseText);
//            console.log(responseobject);
            quizjson = responseobject;
        } catch (e) {
            console.warn('there was an error with the JSON. Could not parse');
        }
    } else {
        console.warn('Did not receive 200 OK from response');
    }
};

ajaxrequest.open('get', 'https://my-json-server.typicode.com/Derby-Alexandra/cit261/db');
ajaxrequest.send();
    
}

// retrieve information from a JSON file online using AJAX and return as a JavaScript object to display questions
function getquestions() {
    //section 1, question 1
    document.getElementById("favoritemovie").innerHTML = quizjson.quiz.movies.q1.question;
    document.getElementById("movie1").innerHTML = quizjson.quiz.movies.q1.options[0];
    document.getElementById("movie2").innerHTML = quizjson.quiz.movies.q1.options[1];
    document.getElementById("movie3").innerHTML = quizjson.quiz.movies.q1.options[2];
    document.getElementById("movie4").innerHTML = quizjson.quiz.movies.q1.options[3];
    //section 1, question 2
    document.getElementById("mainstar1").innerHTML = quizjson.quiz.movies.q2.question;
    document.getElementById("actor1").innerHTML = quizjson.quiz.movies.q2.options[0];
    document.getElementById("actor2").innerHTML = quizjson.quiz.movies.q2.options[1];
    document.getElementById("actor3").innerHTML = quizjson.quiz.movies.q2.options[2];
    document.getElementById("actor4").innerHTML = quizjson.quiz.movies.q2.options[3];
    //section 2, question 1
    document.getElementById("favoritetvshow").innerHTML = quizjson.quiz.tv.q1.question;
    document.getElementById("show1").innerHTML = quizjson.quiz.tv.q1.options[0];
    document.getElementById("show2").innerHTML = quizjson.quiz.tv.q1.options[1];
    document.getElementById("show3").innerHTML = quizjson.quiz.tv.q1.options[2];
    document.getElementById("show4").innerHTML = quizjson.quiz.tv.q1.options[3];
    //section 2, question 2
    document.getElementById("mainstar2").innerHTML = quizjson.quiz.tv.q2.question;
    document.getElementById("tvactor1").innerHTML = quizjson.quiz.tv.q2.options[0];
    document.getElementById("tvactor2").innerHTML = quizjson.quiz.tv.q2.options[1];
    document.getElementById("tvactor3").innerHTML = quizjson.quiz.tv.q2.options[2];
    document.getElementById("tvactor4").innerHTML = quizjson.quiz.tv.q2.options[3];
}

function getanswer(elementid, questionnumber, media) {
    document.getElementById(elementid).innerHTML = quizjson.quiz[media][questionnumber].answer + "<br><br>"; 
}
