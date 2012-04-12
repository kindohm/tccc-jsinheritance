// define a Person
function Person (name) {
	this.name = name;
}

Person.prototype = {
	name:	'',
	speak:	function () {
		return this.name + ' says hi';
	}
};

// define a Programmer
function Programmer (name) {
	this.name = name;
}

Programmer.prototype = new Person();
Programmer.prototype.superSpeak = Programmer.prototype.speak;
Programmer.prototype.speak = function () {
	return this.superSpeak() + ' and writes some code.';
};

// create some objects
var myPerson = new Person('Hank');
console.log(myPerson.speak());

var myHacker = new Programmer('Pete');
console.log(myHacker.speak());
