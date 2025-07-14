const findSecondLargest = (a) => {
  let largest = -Infinity;
  let secondLargest = -Infinity;

  // first loop -> largest va;ue find
  for(let i=0 ; i<a.length ; i++){
    if(a[i] > largest){
      largest = a[i];
    }
  }

  // second loop -> find second largest value
  for( let i=0 ; i<a.length ; i++){
    if(a[i] > secondLargest && a[i]<largest){
      secondLargest = a[i];
    }
  }

  return secondLargest;
} 


console.log(findSecondLargest([4, 2, 7, 1, 9]))