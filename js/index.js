/**
 * Start test for each product object in array
 */
const startTests = () => {
    const testProduct = (index) => {
        products[index].doTest(true, function(){
            counter += 1;
            console.log(counter);

            if(counter < products.length){
                testProduct(counter);
            }
        })
    }

    let counter = 0;
    testProduct(counter); 
}

/**
 * Put all products to test in an aray
 * @param {function} fn Callback function to run when this function is completed
 */
const initProducts = (fn) => {
    const p1 = new Product('https://live-shop.neatlynamed.com/mini-name-labels.html#redirect');
    const p2 = new Product('https://live-shop.neatlynamed.com/small-name-labels.html#redirect');
    products.push(p1);
    products.push(p2);
    fn();
}

$(document).ready(function () {
    products = [];
    initProducts(function(){
        startTests();
    }); 
});