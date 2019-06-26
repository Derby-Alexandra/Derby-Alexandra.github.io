function onloadpagefunction() {
  alert("Welcome to my math test page. Grab a pen and paper and get ready to do some math! Click ok when you're ready to proceed.");
}


//checks the id and changes background color of input and type to number (in case you have entered a wrong answer previously, in which case the type would have been changed to text to display "try again") on mouse down
function qmousedown1() {
    if (event.target.id == "q1") {
    document.getElementById("q1").style.backgroundColor = "#BDFFFD";
    q1.type = "number";
        } else if (event.target.id == "q2") {
            document.getElementById("q2").style.backgroundColor = "#BDFFFD";
            q2.type = "number";
            } else if (event.target.id == "q3") {
                document.getElementById("q3").style.backgroundColor = "#BDFFFD";
                q3.type = "number";
                } else if (event.target.id == "q4") {
                    document.getElementById("q4").style.backgroundColor = "#BDFFFD";
                    q4.type = "number";
                    }
}

//checks to see if the answer #1 is correct. if it is, it displays the div with a css transition. if it's wrong, it changes the background to red, the input type to text, and displays the word "wrong"
function submit1() {
    var answer = document.getElementById("q1").value;
    if (answer == 16) {
        document.getElementById("correct1");
        correct1.style.opacity = "1";
        correct1.style.transition = "opacity 2.5s";
    } else {
        document.getElementById("q1").style.backgroundColor = "red";
        q1.type = "text";
        q1.value = "try again";
    }   
}


//checks to see if the answer #2 is correct. if it is, it displays the div with a css transition. if it's wrong, it changes the background to red, the input type to text, and displays the word "wrong"
function submit2() {
    var answer = document.getElementById("q2").value;
    if (answer == 36) {
        document.getElementById("correct2");
        correct2.style.opacity = "1";
        correct2.style.transition = "opacity 2.5s";
    } else {
        document.getElementById("q2").style.backgroundColor = "red";
        q2.type = "text";
        q2.value = "try again";
    }   
}

//checks to see if the answer #3 is correct. if it is, it displays the div with a css transition. if it's wrong, it changes the background to red, the input type to text, and displays the word "wrong"
function submit3() {
    var answer = document.getElementById("q3").value;
    if (answer == 10) {
        document.getElementById("correct3");
        correct3.style.opacity = "1";
        correct3.style.transition = "opacity 2.5s";
    } else {
        document.getElementById("q3").style.backgroundColor = "red";
        q3.type = "text";
        q3.value = "try again";
    }   
}

//checks to see if the answer #4 is correct. if it is, it displays the div with a css transition. if it's wrong, it changes the background to red, the input type to text, and displays the word "wrong"
function submit4() {
    var answer = document.getElementById("q4").value;
    if (answer == 8) {
        document.getElementById("correct4");
        correct4.style.opacity = "1";
        correct4.style.transition = "opacity 2.5s";
    } else {
        document.getElementById("q4").style.backgroundColor = "red";
        q4.type = "text";
        q4.value = "try again";
    }   
}

//mouse over animation effect (opacity transition)
function nicetextmouseover() {
    if (event.target.id == "1correct") {
    document.getElementById("1correct").style.color= "#BDFFFD";
    } else if (event.target.id == "2correct") {
        document.getElementById("2correct").style.color= "#BDFFFD";
        } else if (event.target.id == "3correct") {
                document.getElementById("3correct").style.color= "#BDFFFD";
            } else if (event.target.id == "4correct") {
                    document.getElementById("4correct").style.color= "#BDFFFD";
                }
}

//mouse out animation effect (opacity transition)
function nicetextmouseout() {
    if (event.target.id == "1correct") {
    document.getElementById("1correct").style.color= "#5E6973";
    } else if (event.target.id == "2correct") {
        document.getElementById("2correct").style.color= "#5E6973";
        } else if (event.target.id == "3correct") {
                document.getElementById("3correct").style.color= "#5E6973";
            } else if (event.target.id == "4correct") {
                    document.getElementById("4correct").style.color= "#5E6973";
                }
}

//checks which number you've selected and plays a different animation for each one 
function answerresponse() {
    if (event.target.id == "1correct") {
    document.getElementById("addlinebreaks").innerHTML = "<br><br>";    
    document.getElementById("congratid").innerHTML = "Better luck next time! <br>";
    congratid.style.opacity = "1";
    congratid.style.transform = "rotate(-1080deg) scale(2)";
    } else if (event.target.id == "2correct") {
            document.getElementById("addlinebreaks").innerHTML = "<br><br>";    
            document.getElementById("congratid").innerHTML = "Keep practicing! <br>";
            congratid.style.opacity = "1";
            congratid.style.transform = "rotate(-360deg) scale(2)";
        } else if (event.target.id == "3correct") {
                document.getElementById("addlinebreaks").innerHTML = "<br><br>";    
                document.getElementById("congratid").innerHTML = "Good job! <br>";
                congratid.style.opacity = "1";
                congratid.style.transform = "rotate(360deg) scale(2)";
            } else if (event.target.id == "4correct") {
                    document.getElementById("addlinebreaks").innerHTML = "<br><br>";    
                    document.getElementById("congratid").innerHTML = "Congratulations! <br>";
                    congratid.style.opacity = "1";
                    congratid.style.transform = "rotate(1080deg) scale(2)";
                }
}