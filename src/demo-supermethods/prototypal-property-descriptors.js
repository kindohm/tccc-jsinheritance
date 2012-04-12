// define a person
var person = {
	name: 	'nobody',
	speak:	function () {
		return this.name + ' says hi';
	}
};

// define a programmer. 
// override speak() by using a property descriptor
var programmer = Object.create(person, {
	oldSpeak: {
		value: person.speak
	}, 
	speak: {
		value: function () {
			return this.oldSpeak() + ' and writes some code';
		}	
	}
});

// create the objects
var myPerson = Object.create(person, 
{
	name: {
		value: 'Hank'
	}
});

var myHacker = Object.create(programmer,
{
	name: {
		value: 'Pete'
	}
});

console.log(myPerson.speak());
console.log(myHacker.speak());

