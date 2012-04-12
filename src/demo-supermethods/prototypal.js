// define a person
var person = {
	name: 	'nobody',
	speak:	function () {
		return this.name + ' says hi';
	}
};

// define a programmer. 
// override speak()
var programmer = Object.create(person);
programmer.oldSpeak = programmer.speak;
programmer.speak = function () {
	return this.oldSpeak() + ' and writes some code.';
};

var myPerson = Object.create(person);
myPerson.name = 'Hank';

var myHacker = Object.create(programmer);
myHacker.name = 'Pete';

console.log(myPerson.speak());
console.log(myHacker.speak());

