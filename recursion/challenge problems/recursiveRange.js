function recursiveRange(num) {
    if (num <= 0) return 0
    return num + recursiveRange(num-1);
}

recursiveRange(5);

function addNum(num) {
    return num * (num - 1)
}

addNum(5);