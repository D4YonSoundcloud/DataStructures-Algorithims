function linearSearch(arr,v){
    for(i = 0; i < arr.length; i++) {
        if(arr[i] === v) return i
    } return -1
  }

linearSearch([1,2,3,4,5,6], 6)