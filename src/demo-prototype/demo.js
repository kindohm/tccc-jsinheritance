var Person = Class.create( {
	initialize: function (name) {
		this.name = name;
	},
	speak: function () {
		return this.name + ' says hi';
	}
});

var Programmer = Class.create(Person, {
	speak: function ($super) {
		return $super() + ' and writes some code';
	}
});

var myPerson = new Person('Hank');
var myProgrammer = new Programmer('Pete');

console.log(myPerson.speak());
console.log(myProgrammer.speak());

Person.addMethods({
	sleep: function() {
		return this.speak() + '... but then falls asleep';
	}
});	

console.log(myPerson.sleep());
console.log(myProgrammer.sleep());
