//function that multiplies x by y
function multiply(x, y) {
    return x * y;
}

//function factorial
function factorial(x) {
    if (x === 0) {
        return 1;
    }
    return x * factorial(x - 1);
};

