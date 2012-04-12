// define a person
var person = {
	init: function (name) {
		var myName = name;
		
		this.setName = function (newName) {
			myName = newName;
		};
		
		this.getName = function () {
			return myName;
		}
		return this;
	},
	speak:	function () {
		return this.getName() + ' says hi';
	}
};

// define a programmer. 
var programmer = Object.create(person, {
	oldSpeak: { value: person.speak },
	speak: { 
		value: function () {
			return this.oldSpeak() + ' and writes some code.';
		}
	}
});

var myPerson = Object.create(person).init('Hank');
var myHacker = Object.create(programmer).init('Pete');

console.log(myPerson.speak());
console.log(myHacker.speak());

