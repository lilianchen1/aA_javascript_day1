Array.prototype.myUniq = function() {
  var uniq = [];
  for (var i = 0; i < this.length; i++) {
    if (!uniq.includes(this[i])) {
      uniq.push(this[i]);
    }
  }
  return uniq;
};

Array.prototype.includes = function(el) {
  for (var i = 0; i < this.length; i++) {
    if (this[i] === el) {
      return true;
    }
  }
  return false;
};
//
// console.log([1, 2, 3, 3, 4, 2].myUniq())

Array.prototype.twoSum = function() {
  var indices = [];
  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        indices.push([i, j]);
      }
    }
  }
  return indices;
};

// console.log([-1, 0, 2, -2, 1].twoSum());

Array.prototype.myTranspose = function() {
  var numRows = this.length;
  var numCols = this[0].length;
  var matrix = [];

  for (var i = 0; i < numCols; i++) {
    matrix.push([]);
  }

  for (i = 0; i < this.length; i++) {
    for (var j = 0; j < this[i].length; j++) {
      matrix[j].push(this[i][j]);
    }
  }
  return matrix;
};

// console.log([
//     [1, 2, 3],
//     [4, 5, 6]
//   ].myTranspose());


Array.prototype.myEach = function(cb) {
  for (var i = 0; i < this.length; i++) {
    cb(this[i]);
  }
  return this;
};

// [1,2,3,4].myEach(console.log);

Array.prototype.myMap = function(cb) {
  var map = [];
  this.myEach(function(el) {
    map.push(cb(el));
  });

  // for (var i = 0; i < this.length; i++) {
  //   map.push(cb(this[i]));
  // }
  return map;
};

function timesTwo(el) {
  return el * 2;
}

// console.log([1,2,3,4].myMap(timesTwo));

Array.prototype.myInject = function(cb) {
  var firstId = true;
  var accumulator = this[0];

  this.myEach(function (el) {
    if (firstId) {
      firstId = false;
    } else {
      accumulator = cb(accumulator, el);
    }
  });
  return accumulator;
};


var a = [1,2,3,4].myInject(function (accum, el) {
    return accum + el;
});

// console.log(a);


Array.prototype.bubbleSort = function() {
  var sorted = false;

  while (!sorted) {
    sorted = true;
    for (var i = 0; i < this.length - 1; i++) {
      var j = i + 1;
      if (this[i] > this[j]) {
        sorted = false;
        var temp = this[j];
        this[j] = this[i];
        this[i] = temp;
      }
    }
  }
  return this;
};


// var a = [1,5,3,4,2,2,5,-1].bubbleSort();
// console.log(a);


function substrings(str) {
  var subs = [];
  for (var i = 0; i < str.length; i++) {
    for (var j = i + 1; j <= str.length; j++) {
      if (!subs.includes(str.substring(i, j))) {
        subs.push(str.substring(i, j));
      }
    }
  }
  return subs;
}

// console.log(substrings("hello"));

module.exports.includes = Array.prototype.includes;
module.exports.myEach = Array.prototype.myEach;
