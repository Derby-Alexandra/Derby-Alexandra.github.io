//function createarray() {
//    var foodarray = [document.getElementById("food1").value, document.getElementById("food2").value, document.getElementById("food3").value, document.getElementById("food4").value, document.getElementById("food5").value];
//    document.getElementById("displayarray").innerHTML = foodarray;
//}

function createarray() {
    let food1 = document.getElementById("food1").value;
    let food2 = document.getElementById("food2").value;
    let food3 = document.getElementById("food3").value;
    let food4 = document.getElementById("food4").value;
    let food5 = document.getElementById("food5").value;
    let foodarray = [food1, food2, food3, food4, food5];
    document.getElementById("displayarray").innerHTML = foodarray;
    return foodarray;
}

function looparray(foodarray) {
    var foodarray = createarray();
    for (i = 0; i < foodarray.length; i++) { 
      document.getElementById("prettydisplay").innerHTML += foodarray[i] + " ";
  
        
}
}

