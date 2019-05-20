//************************************************************
//Create globally accessible empty objects here after any new object is created:
var person1 = {};
var newpersonprofile1 = {};
//************************************************************

//Person object constructor function
function Person(firstname, lastname, age) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.fullname = function() {return this.firstname + " " + this.lastname};
}

//Create a new person using user inputs
function createnewperson() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let age = document.getElementById("age").value;
    person1 = new Person(firstname, lastname, age);
//    console.log(person1);
//    console.log(person1.fullname());
}

//Display new person object to the user
function displaynewperson() {
    createnewperson();
    document.getElementById("newpersondisplay").innerHTML = person1.fullname() + ", " + person1.age;
}

//Profile object constructor function
function Profile(firstname, lastname, age, schoolname, favouriteclass, graduationyear) {
    Person.call(this, firstname, lastname, age);
    this.schoolname = schoolname;
    this.favouriteclass = favouriteclass;
    this.graduationyear = graduationyear;
}

//Create new person using previous person1 object created and new user inputs
function newprofile() {
    let schoolname = document.getElementById("schoolname").value;
    let favouriteclass = document.getElementById("favouriteclass").value;
    let graduationyear = document.getElementById("graduationyear").value;
    let firstname = person1.firstname;
    let lastname = person1.lastname;
    let age = person1.age;
    var newprofile1 = new Profile(firstname, lastname, age, schoolname, favouriteclass, graduationyear);
    return newprofile1;
}

//Display new profile (newprofile1) created above
function displaynewprofile() {
    var newprofile1 = newprofile();
    document.getElementById("newprofiledisplay").innerHTML = newprofile1.firstname + ", " + newprofile1.lastname + ", " + newprofile1.age + ", " + newprofile1.schoolname + ", " + newprofile1.favouriteclass + ", " + newprofile1.graduationyear;
//    console.log(newprofile1);
}

//Create entirely new profile using the Person and Profile object contructors
function newpersonprofile() {
    let firstname = document.getElementById("profilefirstname").value;
    let lastname = document.getElementById("profilelastname").value;
    let age = document.getElementById("profileage").value;
    let schoolname = document.getElementById("profileschoolname").value;
    let favouriteclass = document.getElementById("profilefavouriteclass").value;
    let graduationyear = document.getElementById("profilegraduationyear").value;
    newpersonprofile1 = new Profile(firstname, lastname, age, schoolname, favouriteclass, graduationyear);
    return newpersonprofile1;
}

//Display new profile (newpersonprofile1) created above to user
function displaypersonprofile() {
    var newpersonprofile1 = newpersonprofile();
    document.getElementById("newpersonprofiledisplay").innerHTML = newpersonprofile1.firstname + ", " + newpersonprofile1.lastname + ", " + newpersonprofile1.age + ", " + newpersonprofile1.schoolname + ", " + newpersonprofile1.favouriteclass + ", " + newpersonprofile1.graduationyear;
//    console.log(newprofile1);
}

//Access the Profile.prototype to create a new method
Profile.prototype.schoolandgraduationyear = function () {
    return this.schoolname + ", " + this.graduationyear;
}

//Call on the new method created above (schoolandgraduationyear()), use it on the newpersonprofile1 object, and display it to the user
function displayprototype() {
    var displayprototype = newpersonprofile1.schoolandgraduationyear();
    document.getElementById("displayprototype").innerHTML = displayprototype;
}