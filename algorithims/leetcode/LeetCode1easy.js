// Given a non-negative integer num, 
// return the number of steps to reduce it to zero. 
// If the current number is even, you have to divide it by 2,
//  otherwise, you have to subtract 1 from it.


function numOfSteps(num) {
    var count = 0;
    while(num>0){
        num % 2 ? (num--, count++) : (num/=2, count++);
    }
    return count;
}

numberOfSteps (3)