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
                $(input[i]).val('jkwlaejfkl');
                const keyVal = 81; 
                $(input[i]).trigger({
                    type: 'keypress', keyCode: keyVal, which: keyVal, charCode: keyVal
                });
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

$(document).ready(function () {
    selectFormat();
    selectColor();
    fillLines();
    selectFont();
    selectIcon();
    addToCart();
    closeWindow();
});