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
            $($input).addClass('qty');
            $($input).attr('type', 'number');
            $($input).attr('min', '0');
            $($input).attr('max', '10');
            $($input).attr('href', data.products[i].url);
            $($container).append($input);
            $($container).append(data.products[i].name);
            $('#form').append($container);
        }
        const $container = $('<div>');
        const $input = $('<input>');
        $($input).attr('id', 'checkall');
        $($input).attr('type', 'checkbox');
        $($container).append($input);
        $container.append('Test all products');
        $('#form').append($container);
    });


    $('#start').click(function(e){
        e.preventDefault();
        
        if ($('#checkall').prop('checked')) {
            for (let i = 0; i < data.products.length; i++) {
                window.open(data.products[i].url, '', 'height=500, width=500');                                  
            }
        }else{
            // Open popup for every product with qty > 0
            const products = $('.qty'); 
            for (let i = 0; i < products.length; i++) {
                if($(products[i]).val() !== ''){
                    
                    
                    
                    console.log($(products[i]).attr('href'));
                    const val = parseInt($(products[i]).val());  
                    for (let j = 0; j < val; j++) {
                        window.open($(products[i]).attr('href'), '', 'height=500, width=500')                 
                    }
                }
            } 
        }
    });
});