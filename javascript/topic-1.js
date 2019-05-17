//create a new array
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

//loop the array and make it easier to read
function looparray(foodarray) {
    var foodarray = createarray();
    for (i = 0; i < foodarray.length; i++) { 
        document.getElementById("prettydisplay").innerHTML += foodarray[i] + "<br>";
    }
}

//add to the array and sort it alphabetically
function addtoarray() {
    var foodarray = createarray();
    var newfood1 = document.getElementById("food6").value;
    var newfood2 = document.getElementById("food7").value;
    foodarray.push(newfood1, newfood2);
    foodarray.sort();
    for (i = 0; i < foodarray.length; i++) { 
        document.getElementById("updatedarray").innerHTML += foodarray[i] + "<br>";
    }
}

