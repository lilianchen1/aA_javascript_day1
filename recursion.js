var range = function(start, end) {
  var ranges = [start];
  if (end < start) {
    return [];
  }
  ranges = ranges.concat(range(start + 1, end));
  return ranges;
};

// console.log(range(1,7));

var sumArray = function(arr) {
  var result = arr[0];
  if (arr.length === 0) {
    return 0;
  }
  result += sumArray(arr.slice(1, arr.length));
  return result;
};

// console.log(sumArray([1,2,3,4]));


var exponentiate = function(base, exp) {
  var result = 0;
  if (exp === 0) {
    return 1;
  }
  if (exp === 1) {
    return base;
  }

  if (exp % 2 === 0) {
    result = exponentiate(base, exp / 2) * exponentiate(base, exp / 2);
  } else {
    result = base * exponentiate(base, (exp - 1) / 2) * exponentiate(base, (exp - 1) / 2);
  }
  return result;
};


// console.log(exponentiate(3, 3));

var fibonacci = function(n) {
  if (n === 1) {
    return [1];
  }
  if (n === 2) {
    return [1,1];
  }

  var fibArray = fibonacci(n - 1);
  var newNum = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2];
  fibArray.push(newNum);
  return fibArray;

};

// console.log(fibonacci(7));

var binarySearch = function(arr, el) {
  if (arr.length === 0) {
    return undefined;
  }
  var middle = Math.floor(arr.length/2);
  if (arr[middle] === el) {
    return middle;
  }
  if (arr[middle] > el) {
    return binarySearch(arr.slice(0, middle), el);
  } else {
    var result = binarySearch(arr.slice(middle + 1, arr.length), el);
    if (!isNaN(result)) {
      result = result + middle + 1;
    }
    return result;
  }
};

// console.log(binarySearch([1, 2, 3, 5, 12], 5));
