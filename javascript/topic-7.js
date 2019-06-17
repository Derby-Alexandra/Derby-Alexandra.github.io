// toggle between 3 different images with a mouse click
var imagechanger = 'pizza';
function changeimage(){
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