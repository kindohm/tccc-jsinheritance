function getPerson(name) {
	var myPerson = new Object();
	myPerson.name = name;
	myPerson.speak = function () {
		return this.name + ' says hi';
	};
	return myPerson;
}

function getProgrammer(name) {
	var myProgrammer = new Object();
	myProgrammer.name = name;
	myProgrammer.speak = function () {
		return this.name + ' says hi and writes some code.';
	};
	return myProgrammer;
}

var person = getPerson('Hank');
var programmer = getProgrammer('Pete');

console.log(person.speak());
console.log(programmer.speak());


