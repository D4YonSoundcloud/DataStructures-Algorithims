//Reverse Integer
//Given a 32-bit signed integer, reverse digits of an integer.
// Example 1:

// Input: 123
// Output: 321
// Example 2:

// Input: -123
// Output: -321

var reverse = function(x) {
  let numString = x.toString();

  var start = 0;
  var end = numString.length - 1;

  for (var i = 0; i < numString.length / 2; i++) {
    var temp = numString[start];
    if (numString[end] !== 0) {
      numString[start] = numString[end];
    }
    numString[end] = temp;
    start++;
    end--;
  }

  x = parseInt(numString);
  return x;
};

//solution
const reverse = x => {
  let reversed = 0,
    pop;
  while (x) {
    //123
    pop = x % 10; //3 // 2 // 1
    x = parseInt(x / 10); //12 // 1 // 1
    reversed = reversed * 10 + pop; //3 // 32 // 321
  }
  return reversed < Math.pow(-2, 31) || Math.pow(2, 31) < reversed
    ? 0
    : reversed;
};

//time complexity is O(logN)
//space complexity s O(1)
