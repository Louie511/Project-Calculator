let operator = "";

function add(...args){
    return args.reduce((sum, num) => sum + num, 0);
}

function multiply (...args){
    return args.reduce((product, num) => product * num, 1);
}

function subtract (...args){
    return args.reduce((difference, num) => difference - num);
}

function divide (...args){
    return args.reduce ((quotient, num) => num !== 0 ? quotient / num : 0);
}

function operate (operator, ...numbers){
    return operator(...numbers)
}