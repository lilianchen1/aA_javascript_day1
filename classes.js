function Cat(name, owner) {
  this.name = name;
  this.owner = owner;
}

Cat.prototype.cuteStatement = function() {
  return this.owner + " loves " + this.name;
};

var gizmo = new Cat("gizmo", "not ned");

var markov = new Cat("markov", "ned");

console.log(gizmo.cuteStatement());


Cat.prototype.cuteStatement = function() {
  return "everyone loves " + this.name;
};

Cat.prototype.meow = function() {
  return "meow";
};

console.log(gizmo.cuteStatement());
console.log(markov.meow());
console.log(gizmo.meow());
