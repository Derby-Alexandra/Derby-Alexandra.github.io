//API link: https://opentdb.com/api_config.php

//Global variables
var tenquestionskey = {};
var thequiz = {};
var questioncounter = 1;

//ajax function calls
//quizapiconnection();

//show enter question key 
function createquestions() {
    document.getElementById("enterquestions").classList.toggle("show");
    document.getElementById("hiddenbutton1").classList.toggle("showbutton");
    document.getElementById("hiddenbutton2").classList.toggle("showbutton");
    
    if (document.getElementById("generatequizparagraph").classList.contains("showquizcategories")) {
        document.getElementById("generatequizparagraph").classList.remove("showquizcategories")
    }
    if (document.getElementById("generatedquiz").classList.contains("showgeneratedquiz")) {
        document.getElementById("generatedquiz").classList.remove("showgeneratedquiz")
    }
}

//show quiz categories
function generateone() {
    document.getElementById("generatequizparagraph").classList.toggle("showquizcategories");
    
    if (document.getElementById("enterquestions").classList.contains("show")) {
        document.getElementById("enterquestions").classList.remove("show")
    }
    if (document.getElementById("hiddenbutton1").classList.contains("showbutton")) {
        document.getElementById("hiddenbutton1").classList.remove("showbutton")
    }
    if (document.getElementById("hiddenbutton2").classList.contains("showbutton")) {
        document.getElementById("hiddenbutton2").classList.remove("showbutton")
    }
}

function addquestion() {
  let questionhtml = `<div class="questiondiv">
        Question ${++questioncounter}: <br>
        <textarea rows="3" cols="50"></textarea><br>
        a. <input type="text"><br>
        b. <input type="text"><br>
        c. <input type="text"><br>
        d. <input type="text"><br>
        answer: <select>
                    <option>a</option>
                    <option>b</option>
                    <option>c</option>
                    <option>d</option>
                </select><br>
        <br>
    </div>`
    document.getElementById('enterquestions').innerHTML += questionhtml;
}


//Create a new quiz from user inputs
function createnewquiz() {
    // get the name of the quiz
    let quizname = document.getElementById('quizname').value
    // get all the questions and their options and answers
    let questiondivs = document.getElementsByClassName('questiondiv')
    // questions array will become the JSON that gets stored in local storage
    // will eventually look like this:
    /* 
        let quiz = {
            "name": "cool quiz",
            "questions":[
                {
                    "question": "what is love?",
                    "options": {
                        "a": "blah blah",
                        "b": "blah blah",
                        "c": "blah blah",
                        "d": "blah blah"
                    },
                    "answer": "a"
                },
                {
                    "question": "what is a rabbit?",
                    "options": {
                        "a": "blah blah",
                        "b": "blah blah",
                        "c": "blah blah",
                        "d": "blah blah"
                    },
                    "answer": "c"
                }
            ]
        }
    */
    let quiz = {
        name: quizname,
        questions: []
    }
    for (let i = 0; i < questiondivs.length; i++) {
        // get the input for each option and the answer
        // first get the question
        let question = questiondivs[i].getElementsByTagName('textarea')[0].value
        // then get the options
        let options = questiondivs[i].getElementsByTagName('input')
        let optionsObject = {}
        // loop through each option element and get its value, then push that value into the options array
        for (let j = 0; j < options.length; j++) {
            let value = options[j].value
            switch (j) {
                case 0:
                    optionsObject.a = value
                    break
                case 1:
                    optionsObject.b = value
                    break
                case 2:
                    optionsObject.c = value
                    break
                case 3:
                    optionsObject.d = value
                    break
            }
        }
        // get the answer
        let answerdropdown = questiondivs[i].getElementsByTagName('select')[0]
        let answer = answerdropdown.options[answerdropdown.selectedIndex].text
        // now that we have all the question, options, and answer, we make it into an object and push it into 
        // the questions array
        let questionObject = {
            question: question,
            options: optionsObject,
            answer: answer
        }
        quiz.questions.push(questionObject)
    }
    console.log(quiz);
    // get the existing quizzes, but only parse them if the newquiz object is set in local storage
    let existingquizzes = localStorage.getItem("quizzes");
    let quizzes
    if (existingquizzes) {
        quizzes = JSON.parse(existingquizzes)
    } else {
        quizzes = []
    }
    quizzes.push(quiz)
    localStorage.setItem("quizzes", JSON.stringify(quizzes));
}

// retrieves data from the general knowledge quiz API using an AJAX request and returns it as an object
function quizapiconnection(categoryname) {
    var url = ""
    switch (categoryname) {
        case "General Knowledge":
            url = "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple"
            break
        case "Science and Nature":
            url = "https://opentdb.com/api.php?amount=10&category=17&difficulty=easy&type=multiple"
            break
        case "History":
            url = "https://opentdb.com/api.php?amount=10&category=23&difficulty=easy&type=multiple"
            break
        case "Books":
            url = "https://opentdb.com/api.php?amount=10&category=10&difficulty=easy&type=multiple"
            break
        case "Geography":
            url = "https://opentdb.com/api.php?amount=10&category=22&difficulty=easy&type=multiple"
            break
        case "Celebrities":
            url = "https://opentdb.com/api.php?amount=10&category=26&difficulty=easy&type=multiple"
            break
        case "Mythology":
            url = "https://opentdb.com/api.php?amount=10&category=20&difficulty=easy&type=multiple"
            break
        case "Sports":
            url = "https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple"
            break
        case "Music":
            url = "https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple"
            break
        case "Film":
            url = "https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple"
            break
        case "Video Games":
            url = "https://opentdb.com/api.php?amount=10&category=15&difficulty=easy&type=multiple"
            break
        case "Television":
            url = "https://opentdb.com/api.php?amount=10&category=14&difficulty=easy&type=multiple"
            break
    }
    var ajaxrequest = new XMLHttpRequest();
    ajaxrequest.onload = function() {
        if (this.status === 200) {
            try {
                var responseobject = JSON.parse(this.responseText);
                console.log(responseobject);
                thequiz = responseobject;
            } catch (e) {
                console.warn('there was an error with the JSON. Could not parse');
            }
        } else {
            console.warn('Did not receive 200 OK from response');
        }
    };
    ajaxrequest.open('get', url, false);
    ajaxrequest.send();
}

// shuffle array code from stack overflow (https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array)
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
    while (0 !== currentIndex) {

            // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }
    return array;
}

//calls the quizapiconnection() function and displays the questions to the user
function displaythequiz(categoryname) {
    quizapiconnection(categoryname)
    if (!document.getElementById("generatedquiz").classList.contains("showgeneratedquiz")) {
        document.getElementById("generatedquiz").classList.add("showgeneratedquiz")
    }
    document.getElementById("quiztitle").innerHTML = `${categoryname} Quiz`
    
    var generatedquizcounter = 1
    var quizhtml = document.getElementById('displayquiz')
    quizhtml.innerHTML = ""
    let questionhtml = ""
            
    for (let i = 0; i < thequiz.results.length; i++) {
        questionhtml += `<div class="questiondiv">
                            <p class="centeralign">Question ${generatedquizcounter++}: <br><span>${thequiz.results[i].question}</span></p>
                            <ol>`
        let allanswers = thequiz.results[i].incorrect_answers
        allanswers.push(thequiz.results[i].correct_answer)
        let shuffledanswers = shuffle(allanswers)
        
        for (let i = 0; i < shuffledanswers.length; i++) {
            questionhtml += `<li class="leftalign">${shuffledanswers[i]}</li>`
        }
        questionhtml += `</ol>
                        <br>
                        </div>`
    }
    quizhtml.innerHTML += questionhtml
}
