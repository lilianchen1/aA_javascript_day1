var makeChange = function(value, changeArray) {
  var best = [];
  var result = [];
  if (value === 0) {
    return result;
  }

  if (value >= changeArray[0]) {
    result.push(changeArray[0]);
    result = result.concat(makeChange(value - changeArray[0], changeArray));
  } else {
    result = result.concat(makeChange(value, changeArray.slice(1, changeArray.length)));
  }

  return best;
};


var dup = function(arr) {
  var result = [];
  for (var i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }
  return result;
};

// count = 0
var makeChange2 = function(value, changeArray) {
  var best = [];
  var result = [];
  if (value === 0) {
    return result;
  }

  for (var i = 0; i < changeArray.length; i++) {
    // console.log(value, changeArray[i], best, result);
    if (value >= changeArray[i]) {
      result.push(changeArray[i]);
      result = result.concat(makeChange2(value - changeArray[i], changeArray));
    }
    if (best.length === 0 || best.length > result.length) {
      best = dup(result);
      // best = result;
    }
    result = [];
  }
  return best;
};


// console.log(makeChange2(38, [24, 10, 7, 1]));

var mergeSort = function(arr) {
  if (arr.length === 0) {
    return [];
  }
  if (arr.length === 1) {
    return arr;
  }
  var middle = Math.floor(arr.length/2);
  return mergeHelper(mergeSort(arr.slice(0, middle)), mergeSort(arr.slice(middle, arr.length)));
};

var mergeHelper = function(arr1, arr2) {
  var result = [];
  while (arr1.length > 0 && arr2.length > 0) {
    if (arr1[0] > arr2[0]) {
      result.push(arr2.shift());
    }
    else {
      result.push(arr1.shift());
    }
  }
  result = result.concat(arr1.concat(arr2));
  return result;
};
// console.log(mergeSort([1, 3, 5, 2, 0]));

var subsets = function(arr) {
  if (arr.length === 0) {
    return [[]];
  }

  var el = arr[0];

  var temp = subsets(arr.slice(1, arr.length));
  var temp2 = subsets(arr.slice(1, arr.length));

  for (var i = 0 ; i < temp2.length; i++) {
    temp2[i].push(el);
  }

  return temp.concat(temp2);
};

console.log(subsets([1,2,3]));
