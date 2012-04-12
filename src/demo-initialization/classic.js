// define a Person
function Person (name) {
	this.name = name === undefined ? 'Nobody' : name;
}

Person.prototype = {
	name:	'',
	speak:	function () {
		return this.name + ' says hi.';
	}
};

// define a Programmer
function Programmer (name) {
	this.name = name === undefined ? 'Hacker' : name === 'Crockford' ? 'JavaScript God' : name;
}

Programmer.prototype = new Person();
Programmer.prototype.speak = function () {
	return this.name + ' writes some code.';
};

// create some objects
var myPerson = new Person();
console.log(myPerson.speak());

var myHacker = new Programmer();
console.log(myHacker.speak());

var crockford = new Programmer('Crockford');
console.log(crockford.speak());
