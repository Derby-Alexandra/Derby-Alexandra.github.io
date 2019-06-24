function qmousedown1() {
    document.getElementById("q1").style.backgroundColor = "#BDFFFD";
}

function submit1() {
    var answer = document.getElementById("q1").value;
    if (answer == 16) {
        document.getElementById("correct1");
        correct1.style.opacity = "1";
        correct1.style.transition = "opacity 2.5s";
    } else {
        document.getElementById("q1").style.backgroundColor = "red";
    }   
}

function qmousedown2() {
    document.getElementById("q2").style.backgroundColor = "#BDFFFD";
}

function submit2() {
    var answer = document.getElementById("q2").value;
    if (answer == 36) {
        document.getElementById("correct2");
        correct2.style.opacity = "1";
        correct2.style.transition = "opacity 2.5s";
    } else {
        document.getElementById("q2").style.backgroundColor = "red";
    }   
}

function qmousedown3() {
    document.getElementById("q3").style.backgroundColor = "#BDFFFD";
}

function submit3() {
    var answer = document.getElementById("q3").value;
    if (answer == 10) {
        document.getElementById("correct3");
        correct3.style.opacity = "1";
        correct3.style.transition = "opacity 2.5s";
    } else {
        document.getElementById("q3").style.backgroundColor = "red";
    }   
}

function qmousedown4() {
    document.getElementById("q4").style.backgroundColor = "#BDFFFD";
}

function submit4() {
    var answer = document.getElementById("q4").value;
    if (answer == 8) {
        document.getElementById("correct4");
        correct4.style.opacity = "1";
        correct4.style.transition = "opacity 2.5s";
    } else {
        document.getElementById("q4").style.backgroundColor = "red";
    }   
}