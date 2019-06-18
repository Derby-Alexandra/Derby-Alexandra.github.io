// retrieve information from a JSON file online using AJAX and return as a JavaScript object
function getquestions() {
var ajaxrequest = new XMLHttpRequest();

ajaxrequest.onload = function() {
    if (this.status === 200) {
        try {
            var responseobject = JSON.parse(this.responseText);
            //console.log(responseobject);
            //section 1, question 1
            document.getElementById("favoritemovie").innerHTML = responseobject.quiz.movies.q1.question;
            document.getElementById("movie1").innerHTML = responseobject.quiz.movies.q1.options[0];
            document.getElementById("movie2").innerHTML = responseobject.quiz.movies.q1.options[1];
            document.getElementById("movie3").innerHTML = responseobject.quiz.movies.q1.options[2];
            document.getElementById("movie4").innerHTML = responseobject.quiz.movies.q1.options[3];
            //section 1, question 2
            document.getElementById("mainstar1").innerHTML = responseobject.quiz.movies.q2.question;
            document.getElementById("actor1").innerHTML = responseobject.quiz.movies.q2.options[0];
            document.getElementById("actor2").innerHTML = responseobject.quiz.movies.q2.options[1];
            document.getElementById("actor3").innerHTML = responseobject.quiz.movies.q2.options[2];
            document.getElementById("actor4").innerHTML = responseobject.quiz.movies.q2.options[3];
            //section 2, question 1
            document.getElementById("favoritetvshow").innerHTML = responseobject.quiz.tv.q1.question;
            document.getElementById("show1").innerHTML = responseobject.quiz.tv.q1.options[0];
            document.getElementById("show2").innerHTML = responseobject.quiz.tv.q1.options[1];
            document.getElementById("show3").innerHTML = responseobject.quiz.tv.q1.options[2];
            document.getElementById("show4").innerHTML = responseobject.quiz.tv.q1.options[3];
            //section 2, question 2
            document.getElementById("mainstar2").innerHTML = responseobject.quiz.tv.q2.question;
            document.getElementById("tvactor1").innerHTML = responseobject.quiz.tv.q2.options[0];
            document.getElementById("tvactor2").innerHTML = responseobject.quiz.tv.q2.options[1];
            document.getElementById("tvactor3").innerHTML = responseobject.quiz.tv.q2.options[2];
            document.getElementById("tvactor4").innerHTML = responseobject.quiz.tv.q2.options[3];
            
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

function getanswer1() {
var ajaxrequest = new XMLHttpRequest();

ajaxrequest.onload = function() {
    if (this.status === 200) {
        try {
            var responseobject = JSON.parse(this.responseText);
//            console.log(responseobject);
//            section 1, answer 1
            document.getElementById("movieanswer1").innerHTML = responseobject.quiz.movies.q1.answer + "<br><br>";                    
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

function getanswer2() {
var ajaxrequest = new XMLHttpRequest();

ajaxrequest.onload = function() {
    if (this.status === 200) {
        try {
            var responseobject = JSON.parse(this.responseText);
//            console.log(responseobject);
//            section 1, answer 2
            document.getElementById("movieanswer2").innerHTML = responseobject.quiz.movies.q2.answer;                    
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

function getanswer3() {
var ajaxrequest = new XMLHttpRequest();

ajaxrequest.onload = function() {
    if (this.status === 200) {
        try {
            var responseobject = JSON.parse(this.responseText);
//            console.log(responseobject);
//            section 1, answer 2
            document.getElementById("tvanswer1").innerHTML = responseobject.quiz.tv.q1.answer + "<br><br>";                    
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

function getanswer4() {
var ajaxrequest = new XMLHttpRequest();

ajaxrequest.onload = function() {
    if (this.status === 200) {
        try {
            var responseobject = JSON.parse(this.responseText);
//            console.log(responseobject);
//            section 1, answer 2
            document.getElementById("tvanswer2").innerHTML = responseobject.quiz.tv.q2.answer + "<br><br>";                    
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