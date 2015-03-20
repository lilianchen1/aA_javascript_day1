var lib = require("./array");

function Student(first, last) {
  this.first = first;
  this.last = last;
  this.courses = [];
}

function Course(name, dept, credits, timeBlock, days) {
  this.name = name;
  this.dept = dept;
  this.credits = credits;
  this.timeBlock = timeBlock;
  this.days = days;
  this.students = [];
}

Student.prototype.enroll = function(course) {
  if (this.courses.includes(course)) {
    return;
  }
  if (this.hasConflict(course)) {
    return "course conflicts with existing courses";
  } else {
    this.courses.push(course);
    course.addStudent(this);
  }
};

Student.prototype.name = function() {
  return this.first + this.last;
};

Student.prototype.courseLoad = function() {
  var creds = {};
  this.courses.myEach(function (el) {
    if (isNaN(creds[el.dept])) {
      creds[el.dept] = el.credits;
    } else {
      creds[el.dept] += el.credits;
    }
  });
  return creds;
};

Student.prototype.hasConflict = function(course) {
  for (var i = 0; i < this.courses.length; i++) {
    if (this.courses[i].conflictsWith(course)) {
      return true;
    }
  }
  return false;
};

Course.prototype.addStudent = function(student) {
  this.students.push(student);
};

Course.prototype.conflictsWith = function(course) {
  for (var i = 0; i < this.days.length; i++) {
    if (course.days.includes(this.days[i])) {
      if (this.timeBlock === course.timeBlock) {
        return true;
      }
    }
  }
  return false;
};

var a = new Student('first', 'last');
var c1 = new Course('his101', 'history', 1, 8, ['Mon', 'Wed']);
var c2 = new Course('his201', 'history', 4, 8, ['Tue', 'Wed']);
var c3 = new Course('phy101', 'science', 1, 6, ['Mon', 'Tue']);
a.enroll(c1);
a.enroll(c2);
a.enroll(c3);

console.log(a.courses);

// console.log(c1.days);
// console.log(c1.conflictsWith(c3));


// console.log(a.courseLoad());

// module.exports.some_name = Student;
module.exports = {
  Student: Student,
  Course: Course
};
