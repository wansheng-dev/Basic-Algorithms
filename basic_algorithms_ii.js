// #1 Array With Only Odd Numbers. (Loop & Recursive)

arryOddUpTo255 = () => {
  let arr = [];
  for (let i = 1; i <= 255; i += 2){
    arr.push(i);
  }
  console.log(arr);
}

rArrayOddUpTo255 = (arr = [], i = 1) => {
  if (i <= 255){
    arr.push(i);
    i+=2;
    return rArrayOddUpTo255(arr, i);
  }
  console.log(arr);
}


// #2 Greater Than Y. (Loop & Recursive)

greaterThanY = (arr, y) => {
  let num = 0;
  for (let i = 0; i < arr.length ; i++){
    if (arr[i] > y){
      num ++;
    }
  }
  return num;
}

rGreaterThanY = (arr, y, num = 0, i = 0) => {
  if (i >= arr.length){
    return num;
  }
  if (arr[i] > y){
    num ++;
  }
  i++;
  return rGreaterThanY(arr, y, num, i);
}


// #3 Square the Array Values (Loop & Recursive)

squareValues = arr => {
  for (let i = 0; i < arr.length; i++){
    arr[i] *= arr[i];
  }
  return arr;
}

rSquareValues = (arr, i = 0) => {
  if (i >= arr.length){
    return arr;
  }
  arr[i] *= arr[i];
  i++;
  return rSquareValues(arr, i);
}


// #4 Eliminate Negative Numbers (Loop & Recursive)

eliminateNegatives = arr => {
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < 0){
      arr[i] = 0;
    }
  }
  console.log(arr);
}

rEliminateNegatives = (arr, i = 0) => {
  if (i >= arr.length){
    return arr;
  }
  if (arr[i] < 0){
    arr[i] = 0;
  }
  i++;
  return rEliminateNegatives(arr, i);
}


// #5 Array Max, Min, and Average (Loop & Recursive)

maxMinAvg = arr => {
  if (arr.length != 0){
    let max = arr[0];
    let min = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
      if (arr[i] > max){
        max = arr[i];
      } else if (arr[i] < min){
        min = arr[i];
      }
      sum += arr[i];
    }
    return max, min, sum/arr.length;
  }
}

rMaxMinAvg = (arr, max = 0, min = 0, sum = 0, i = 0) => {
  if (arr.length <= 1){
    return arr[0], arr[0], arr[0];
  }
  if (i >= arr.length){
    return max, min, sum/arr.length;
  }
  if (arr[i] > max){
    max = arr[i];
  } else if (arr[i] < min){
    min = arr[i];
  }
  sum += arr[i];
  i++;
  return rMaxMinAvg(arr, max, min, sum, i);
}


// #6 Shifting the values in the array (Loop & Recursive)

shiftFront = arr => {
  for (let i = 0; i < arr.length - 1; i++){
    arr[i] = arr[i + 1]
  }
  arr[arr.length-1] = 0;
  return arr;
}

rShiftFront = (arr, i = 0) => {
  if (i > arr.length - 1){
    arr[arr.length - 1] = 0;
    return arr;
  }
  arr[i] = arr[i+1];
  i++;
  return rShiftFront(arr, i);
}