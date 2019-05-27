const data = {
    "products" : [
        {
            "name": "Mini name labels",
            "url": "https://live-shop.neatlynamed.com/mini-name-labels.html#redirect"
        },
        {
            "name": "Small name labels",
            "url": "https://live-shop.neatlynamed.com/small-name-labels.html#redirect"
        },
        {
            "name": "Glittery name labels",
            "url": "https://live-shop.neatlynamed.com/glittery-name-labels.html#redirect"
        }
    ]
}


$(document).ready(function () {
    $('#start').click(function(){
        for (let i = 0; i < data.products.length; i++) {
            window.open(data.products[i].url, '', 'height=500, width=500');

            // Print to UI
            const $p = $('<p>').html(data.products[i].name);
            console.log($p);
            $('.products').append($p);            
        }

        
    })

    
});