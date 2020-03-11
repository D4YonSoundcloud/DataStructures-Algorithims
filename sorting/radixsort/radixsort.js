//special sorting algo that does not make comparisons
//only works on a list of numbers
// it exploits the fact that info about the size of a number is encoded in the number of digits
//puts numbers into buckets

//radix sort helper methods

function getDigit(num, place) {
  return (Math.floor(Math.abs(num)) / Math.pow(10, place)) % 10;
}

function digitCount(num) {
    if ( num === 0 ) return 1;
    return Math.floor(Math.log10(Math.abs(num))) + 1;
}

function mostDigits(nums) {
    let maxDigits = 0;
    for (let i = 0; i < nums.length; i++) {
        maxDigits = Math.max(maxDigits, digitCount(nums[i]));
    }
    return maxDigits;
}


// full implenmatation

function radixSort(nums){
    let maxDigitCount = mostDigits(nums);
    for(let k = 0; k < maxDigitCount; k++){
        let digitBuckets = Array.from({length: 10}, () => []);
        for(let i = 0; i < nums.length; i++){
            let digit =  getDigit(nums[i],k);
            digitBuckets[digit].push(nums[i]);
        }
        nums = [].concat(...digitBuckets);
    }
    return nums;
}

radixSort([23,345,5467,12,3245,9852])