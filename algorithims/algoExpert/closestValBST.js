function cvBST(tree,target){
    return helper(tree,target,Infinity);
}

function helper(tree,target,current){
    let currentNode = tree;
    while(currentNode !== null){
        if(Math.abs(target - current) > Math.abs(target - currentNode)){
            current = currentNode.value;
        } 
        if(target < currentNode.value){
            currentNode = currentNode.left;
        }
        if(target < currentNode.value){
            currentNode = currentNode.left;
        }
        else if(target > currentNode.value){
            currentNode = currentNode.right;
        } else {
            break;
        }
    }
return current
}

//recursive
function findClosestValueInBst(tr, t) {
    // Write your code here.
      return helper(tr,t,Infinity);
  }
  
  function helper(tr,t,c) {
      if(tr === null)  return c;
      if( Math.abs(t - c) > Math.abs(t - tr.value)) {
          c = tr.value
      }
      if(t < tr.value){
          return helper(tr.left,t,c)
      } else if(t > tr.value){
          return helper(tr.right,t,c)
      } else {
          return c
      }
  }
  