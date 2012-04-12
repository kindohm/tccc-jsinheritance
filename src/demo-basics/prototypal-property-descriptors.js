// define a person
var person = {
	name: 	'nobody',
	speak:	function () {
		return this.name + ' says hi.';
	}
};

// define a programmer. 
// override speak() by using a property descriptor
var programmer = Object.create(person, {
	speak: {
		value: function () {
			return this.name + ' writes some code';
		}	
	}
});

// WARNING
// Create objects using property descriptors instead of
// direct property assignment.
// THESE PROPERTIES WILL BE READ-ONLY.
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

myPerson.name = 'Martha';
myHacker.name = 'Clementine';

console.log(myPerson.speak());
console.log(myHacker.speak());

// WHAT?! Why didn't the names change?

// Re-create objects using writable property descriptors:
myPerson = Object.create(person, 
{
	name: {
		value: 'Hank',
		writable: true
	}
});

myHacker = Object.create(programmer,
{
	name: {
		value: 'Pete',
		writable: true
	}
});

console.log(myPerson.speak());
console.log(myHacker.speak());

myPerson.name = 'Martha';
myHacker.name = 'Clementine';

console.log(myPerson.speak());
console.log(myHacker.speak());

