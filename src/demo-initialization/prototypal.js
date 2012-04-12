// define a person
var person = {
	name: 	'nobody',
	speak:	function () {
		return this.name + ' says hi.';
	},
	constructor: function (name) {
		this.name = name === undefined ? 'Nobody' : name;
		return this;
	}	
};

// define a programmer. 
var programmer = Object.create(person, {
	speak: {
		value: function () {
			return this.name + ' writes some code';
		}	
	},
	constructor: {
		value: function (name) {
			name = name === 'Crockford' ? 'JavaScript God' : name;
			person.constructor.call(this, name);
			return this;
		}	
	}
});

var myPerson = Object.create(person).constructor();
var myHacker = Object.create(programmer).constructor();
var crockford = Object.create(programmer).constructor('Crockford');
console.log(myPerson.speak());
console.log(myHacker.speak());
console.log(crockford.speak());
