let products = ['https://live-shop.neatlynamed.com/mini-name-labels.html#redirect', 'https://live-shop.neatlynamed.com/small-name-labels.html#redirect'];

$(document).ready(function () {
    
    $('#start').click(function(){

        for (let i = 0; i < products.length; i++) {
            console.log(products[i]);
            window.open(products[i]);
        }

    })
});