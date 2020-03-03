function sumRange(num) {
    if(num === 1) return 1;
    return num + sumRange(num - 1);
}

sumRange(6)

//base case 1 // recursive call is num + sumRange(num - 1);