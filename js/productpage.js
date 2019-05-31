/**
 * Generate a random number
 * @param {number} max Max number
 */
getRandomNumber = function (max) {
    return Math.floor(Math.random() * max) + 1;
}

selectFormat = function (fn) {
    const options = $('.format a');
    if (options.length !== 0) {
        //const randomNumber = this.getRandomNumber(options.length);
        const randomNumber = 3;
        console.log(options[randomNumber - 1])
        options[randomNumber - 1].click();
    }
}

selectColor = function () {
    const options = $('.optionPlaceholderColor a');
    if (options.length !== 0) {
        const randomNumber = this.getRandomNumber(options.length);
        options[randomNumber - 1].click();
        console.log(options[randomNumber - 1]);
    }
}

fillLines = function () {
    const input = $('.linesContainer input.cmpt');
    if (input.length !== 0) {
        for (let i = 0; i < input.length; i++) {
            if (!$(input[i]).is(':hidden')) {
                $(input[i]).val(generateRandomString(8));
                $(input[i])[0].dispatchEvent(new Event("input"));
            }
        }
    }

    const size = $('.add-style-select select');
        if (size.length !== 0) {
            for (let i = 0; i < size.length; i++) {
                if (!$(size[i]).is(':hidden')) {
                    const randomNumber = this.getRandomNumber(size.length);
                    size[i].value = size[i].children[randomNumber - 1].value
                    $(size[i])[0].dispatchEvent(new Event("change"));
                    console.log(`Selected ${size[i].children[randomNumber - 1].value}`);
                }
            }
        }

}

selectFont = function () {
    const options = $('.fontComponent .labl');
    if (options.length !== 0) {
        const randomNumber = this.getRandomNumber(options.length);
        options[randomNumber - 1].click();
    }
}

selectIcon = function () {
    const options = $('.clipartItem');
    if (options.length !== 0) {
        const randomNumber = this.getRandomNumber(options.length);
        options[randomNumber - 1].click();
    }
}

addToCart = function () {
    const options = $('.addToCart');
    if (options.length !== 0) {
        const randomNumber = this.getRandomNumber(options.length);
        options[randomNumber - 1].click();
    }
}

closeWindow = function () {
    const check = setInterval(function () {
        if ($('.lightboxWrapper').hasClass('is_active')) {
            clearInterval(check);
            window.close();
        }
    }, 500)
}

generateRandomString = function (length) {
    var result = '';
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for (var i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}


$(document).ready(function () {
    x = setInterval(() => {
        if($('body').attr('aria-busy') === 'false'){
            //selectFormat();
            selectColor();
            fillLines();
            selectFont();
            selectIcon();
            //addToCart();
            //closeWindow();

            clearInterval(x);
        }
    }, 200);
});