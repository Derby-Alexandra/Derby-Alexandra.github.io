var image_tracker = 'f';
function change(){
    var image = document.getElementById('pizzaburger');
    if (image_tracker == 'f') {
        image.src = '../images/pizzaimage.png';
        image_tracker = 't';
    } else {
        image.src = '../images/burgerimage.png';
        image_tracker = 'f';
    }
}