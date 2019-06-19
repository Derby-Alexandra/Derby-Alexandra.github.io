//Global variable
var grocerylist = {};

//Groceries object constructor function
function Groceries(food1, food2, food3, food4, food5) {
    this.food1 = food1;
    this.food2 = food2;
    this.food3 = food3;
    this.food4 = food4;
    this.food5 = food5;
}

//Create a new grocery list using user inputs
function createnewlist() {
    let food1 = document.getElementById("food1").value;
    let food2 = document.getElementById("food2").value;
    let food3 = document.getElementById("food3").value;
    let food4 = document.getElementById("food4").value;
    let food5 = document.getElementById("food5").value;
    grocerylist = new Groceries(food1, food2, food3, food4, food5);
//    console.log(grocerylist);
}

//Call createnewlist() function and display grocery list object to the user. Store list in local storage using JSON Stringify
function displaygrocerylist() {
    createnewlist();
    document.getElementById("grocerydisplay").innerHTML = grocerylist.food1 + ", " + grocerylist.food2 + ", " + grocerylist.food3 + ", " + grocerylist.food4 + ", " + grocerylist.food5;
    localStorage.setItem("newgrocerylist", JSON.stringify(grocerylist));
}

//Retrieve lost list from local storage using JSON.parse and display it to the user
function retrievepreviouslist() {
    var retrievedlist = localStorage.getItem("newgrocerylist");
    var list = JSON.parse(retrievedlist);
    document.getElementById("retrievedlistdisplay").innerHTML = list.food1 + "<br>" + list.food2 + "<br>" + list.food3 + "<br>" + list.food4 + "<br>" + list.food5;
}



