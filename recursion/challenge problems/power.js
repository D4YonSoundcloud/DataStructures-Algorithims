//  write a function called power which accepts a base and an exponent.
//  the fucntion should return the power of the base to the the
//  exponenet this function should mimic the functionaly of Math.power() 
//  do not worry about negative base and exponents

function power(n,n2){
    if(n2 === 0) return 1;
    return n * power(n,n2-1);
}

power(2,4);
