console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    while(isFull() === false) {
        basket.push(item);
        return true;
    }
 }
addItem('dog');
addItem('apples');
addItem('cat');
addItem('bird');
addItem('snake');
addItem('snow');
console.log(`basket is now ${basket}`);

function listItems() {
    for(let variable of basket) {
        console.log(basket);
    }
 }
listItems();

function empty() {
    while (basket.length > 0)
        basket.pop();
}
empty();
console.log(basket);

const maxItems = 5;

function isFull() {
    if(basket.length < 5) {
        return false;
    } else if(basket.length >= 5) {
        return true;
    }
}

// function removeItem(item) {
//     basket.prototype.indexOf.call(item);
// }

// console.log(removeItem('bird'));









// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
