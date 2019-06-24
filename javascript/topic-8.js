function qmousedown1() {
    document.getElementById("q1").style.backgroundColor = "#BDFFFD";
}

function submit1() {
    var correct = "";
    var answer = document.getElementById("q1").value;
    if (answer == 8) {
        document.getElementById("q1").style.backgroundColor = "green";
        document.getElementById("correct1");
        correct1.style.opacity = "1";
    } else {
        document.getElementById("q1").style.backgroundColor = "red";
        var correct = "no";
    }   
}
//
//function submit1animation() {
//    submit1();
//    if (background = "yes") {
//        document.getElementById("correct1").
//    
//}

function qmousedown2() {
    document.getElementById("q2").style.backgroundColor = "#BDFFFD";
}

function submit2() {
    var answer = document.getElementById("q2").value;
    if (answer == 36) {
        document.getElementById("q2").style.backgroundColor = "green";
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
        document.getElementById("q3").style.backgroundColor = "green";
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
        document.getElementById("q4").style.backgroundColor = "green";
    } else {
        document.getElementById("q4").style.backgroundColor = "red";
    }   
}