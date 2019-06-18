// change the color, size, and font of the first header
function changefirstheader() {
    document.getElementById("firstheader").classList.toggle("change1");
}

// change the font, size, margin, padding, and border of the first paragraph
function changefirstparagraph() {
    document.getElementById("firstparagraph").classList.toggle("change2");

}

// change the font color of all elements with class name "parachange" and "headerchange"
function changeparagraphs(){
    var parachange1 = document.getElementsByClassName('parachange');
    for(i=0; i<parachange1.length; i++) {
        parachange1[i].style.color = '#BDFFFD';
        }
    var headerchange1 = document.getElementsByClassName('headerchange');
    for(i=0; i<headerchange1.length; i++) {
        headerchange1[i].style.color = '#5E6973';
        }   
}

// toggle between 3 different images with a mouse click
var imagechanger = 'pizza';
function changeimage() {
    var image = document.getElementById('pizzaburger');
    if (imagechanger == 'pizza') {
        image.src = '../images/pizzaimage.png';
        imagechanger = 'burger';
    } else if (imagechanger == 'burger') {
        image.src = '../images/burgerimage.png';
        imagechanger = 'hotdog';
      } else if (imagechanger == 'hotdog') {
        image.src = '../images/hotdogimage.png';
        imagechanger = 'pizza';
    }
}