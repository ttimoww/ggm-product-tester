let data;
fetch(chrome.extension.getURL('/products.json'))
    .then((resp) => resp.json())
    .then((json) => data = json);


$(document).ready(function () {
    /**
     * Get all products and add them to the form in the DOM
     */
    $('#get-products').click(function (e) { 
        $('#form').empty();
        e.preventDefault();
        for (let i = 0; i < data.products.length; i++) {
            const $container = $('<div>');
            const $input = $('<input>');
            $($input).attr('type', 'checkbox');
            $($input).attr('value', data.products[i].id);
            $($input).attr('href', data.products[i].url);
            $($container).append($input);
            $($container).append(data.products[i].name);
            $('#form').append($container);
        }
    });


    $('#start').click(function(e){
        e.preventDefault();

        const products = $('#form input:checked');
        for (let i = 0; i < products.length; i++) {
            window.open($(products[i]).attr('href'), '', 'height=500, width=500');          
        }    
    });
});