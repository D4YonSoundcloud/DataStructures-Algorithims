//two essentail parts of a recursive function, base case && different input

function countDown(num) {
  if (num <= 0) {
    console.log("done!");
    return;
  }
  console.log(num);
  num--;
  countDown(num);
}

countDown(5);

// iterative example
// function countdown(num) {
//     for(var i = num;  i > 0; i--) {
//         console.log(i);
//     }
//    console.log("done!");
// }
