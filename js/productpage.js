/**
 * Generate a random number
 * @param {number} max Max number
 */
getRandomNumber = function(max){
    return Math.floor(Math.random() * max ) + 1;
}

selectFormat = function(){
    const options = $('.format a');
    if (options.length !== 0) {
        const randomNumber = this.getRandomNumber(options.length);
        options[randomNumber - 1].click();
    }
}

selectColor = function(){
    const options = $('.optionPlaceholderColor a');
    if (options.length !== 0) {
        const randomNumber = this.getRandomNumber(options.length);
        options[randomNumber - 1].click();
    }
}

fillLines = function(){
    const input = $('.linesContainer input.cmpt');
    if (input.length !== 0){
        for (let i = 0; i < input.length; i++) {
            if(!$(input[i]).is(':hidden')){
                $(input[i]).val('random lines');
                $(input[i]).trigger("keydown");
                $(input[i]).on("click mousedown mouseup focus blur keydown change",function(e){
                    console.log(e);
               });
               console.log(input[i]);
            }
        }
    }

    const size = $('.add-style-select select');
    if (size.length !== 0){
        for (let i = 0; i < size.length; i++) {
            if(!$(size[i]).is(':hidden')){
                const randomNumber = this.getRandomNumber(size.length);
                const value = $(size[i].children[randomNumber - 1]).val();
                $(size[i]).val(value);
            }
        }
    }
}

selectFont = function(){
    const options = $('.fontComponent .labl');
    if (options.length !== 0) {
        const randomNumber = this.getRandomNumber(options.length);
        options[randomNumber - 1].click();
    }
}

selectIcon = function(){
    const options = $('.clipartItem');
    if (options.length !== 0) {
        const randomNumber = this.getRandomNumber(options.length);
        options[randomNumber - 1].click();
    }
}

addToCart = function(){
    const options = $('.addToCart');
    if (options.length !== 0) {
        const randomNumber = this.getRandomNumber(options.length);
        options[randomNumber - 1].click();
    }
}

closeWindow = function(){
    const check = setInterval(function(){
        if($('.lightboxWrapper').hasClass('is_active')){
            clearInterval(check);
            window.close();
        }
    }, 500)
}

generateRandomString = function(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 
 setText = function(){
    let cacheStorage = JSON.parse(localStorage.getItem('mage-cache-storage'))
    for(item in cacheStorage.cart.items){
        lines = cacheStorage.cart.items[item].gen_data[0].lines
        for (line in lines){
            lines[line].text = generateRandomString(6);
            console.log(lines[line].text);
        }   
    }
    localStorage.setItem('mage-cache-storage', JSON.stringify(cacheStorage))
    console.log(JSON.parse(localStorage.getItem('mage-cache-storage')))
 }
$(document).ready(function () {
    // selectFormat();
    // selectColor();
    // fillLines();
    // selectFont();
    // selectIcon();
    // //addToCart();
    //closeWindow();
    setText();
    
});