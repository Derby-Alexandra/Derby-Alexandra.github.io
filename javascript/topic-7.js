var imagechanger = 'p';
function changeimage() {
    var image = document.getElementbyId('pizzaburger');
    if (imagechanger == 'p') {
        image.src = '../images/pizzaimage.png';
        imagechanger = 'b';
    } else {
        image.src = '../images/burgerimage.png';
        imagechanger = 'p';
    }
}