//almost like bubble sort, instead of first placing large values into sorted position
// it places small values in sorted position 
// find min then place at end


//my attempt
function selectionSort(arr){
    for(i = 0; i < arr.length; i++){
    var min = 0
        for(j = min; j < arr.length; j++) {
        if(arr[min] > arr[j + 1] ) {
            var temp = arr[min];
            arr[min] = arr[j + 1];
            arr[j + 1] = temp
        }
    }
    }
}

selectionSort([34,22,10,19,17])

//answer 
function selectionSortAnswer(arr){
    for(var i = 0; i < arr.length; i++){
        var min = i;
        for(j = min + 1; j < arr.length; j++){
            if(arr[min] > arr[j]){
                min = j;
            }   
        }
        console.log(arr);
        console.log("swap")
        var temp = arr[i];
        arr[i] = arr[min];
        arr[min] = temp;
        console.log(arr);
        console.log("*****")
    }
    return arr;
}

selectionSortAnswer([34,22,10,19,17])