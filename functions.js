const isPrime = (num) => {
    if (num < 2) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(num); i += 1) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
};

const filterForPrime = (nums) => {
    return nums.filter(num => isPrime(num) === true);
}

console.log(filterForPrime([2, 3, 1, 23, 47, -3, 15, 13]));

const sumOfSquareDigits = (num) => {
    return num * num;
}

// console.log(sumOfSquareDigits(7));

const num = 2;
console.log(num.toString().split(''));

const isHappyNumber = (num) => {
    if (num === 1) {
        return true;
    }
    let sum = 0;
    let counter = 0;
    for (n of num.toString().split('')) {
        sum = sum + sumOfSquareDigits(parseInt(n))
        counter = counter + 1;

    }
    console.log(counter);
    
    if (counter < 10) {
        return isHappyNumber(sum);
    }
    
    
    
    
}

console.log(isHappyNumber(90));