// 1.
console.log('----------1----------');

function getSquare(h, w) {
    return h * w;
}

console.log(getSquare(3, 4));

console.log('----------1----------');

// 2.
console.log('----------2----------');

function getСircumference(d) {
    const PI = 3.14;

    return d * PI;
}

console.log(getСircumference(4));

console.log('----------2----------');

// 3.
console.log('----------3----------');

function getVolume(h, d) {
    const PI = 3.14;

    return d * h * PI;
}

console.log(getVolume(4, 6));

console.log('----------3----------');

// 4.
console.log('----------4----------');

function calcCurrency(currency, sum) {
    const usdVsUah = 27.28;
    const uahVsUsd = 0.037;

    return  currency === 'usd' ? sum * usdVsUah :  sum * uahVsUsd;
    
}

console.log(calcCurrency('usd', 6));

console.log('----------4----------');

// 5.
console.log('----------5----------');

function divisibleBy5(from, to) {
    let sum = 0;
    let range = 0;
    
    for (let i = from; i <= to; i++) {
        range = range + i;
    }
    
    for (let i = 0; i < range; i++) {
        if (sum % 5 === 0) {
            sum = sum + i;
        }
    }
    return sum;
}

console.log(divisibleBy5(2, 6));

console.log('----------5----------');

// 5.
console.log('----------6----------');

function fizzBuzz() {
    let str = '';

    for (let i = 1; i <= 100; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            str = str + 'Fizz Buzz, ';
        } else if (i % 3 === 0) {
            str = str + 'Fizz, ';
        } else if (i % 5 === 0) {
            str = str + 'Buzz, ';
        } else {
            str = str + `${i}, `;
        }
    }

    return str;
}

console.log(fizzBuzz());

console.log('----------6----------');
