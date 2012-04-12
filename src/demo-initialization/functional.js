// define a person
var person = function (spec) {
	var obj = {};
	
	obj.getName = function () {
		return spec.name;
	};
	
	obj.speak = function () {
		return spec.name + ' says hi.';
	};
	
	return obj;
};

// define a programmer
var programmer = function (spec) {
	var obj = person(spec);
	
	obj.speak = function () {
		return spec.name + ' writes some code.';
	};
	
	return obj;
};

// create the objects
var myPerson = person({name: 'Hank'});
var myHacker = programmer({name: 'Pete'});

console.log(myPerson.speak());
console.log(myHacker.speak());
