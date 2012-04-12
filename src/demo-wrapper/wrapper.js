var MODULE = (function () {

var my = {};

// define a person
var person = {
	constructor: function (name) {
		this.name = name === undefined ? 'Nobody' : name;
		return this;
	},
	name: '',
	speak:	function () {
		return this.name + ' says hi';
	}
};

var extend = function(parent, child) {
	return pd.extend(Object.create(parent), child);
};

var create = function(type) {
	var newObj = Object.create(type);
	var args = [];
	if (newObj['constructor'] != undefined) {
		
		if (arguments.length > 1){
			for (var i = 1; i < arguments.length; i++) {
				args.push(arguments[i]);
			}
		}
					
		var returnedObj = newObj['constructor'].apply(newObj, args);
		if (returnedObj != undefined & returnedObj != null) {
			newObj = returnedObj;
		}
	}

	return newObj;
};
	

var programmer = extend(person, {
	constructor: function (name) {
		this.name = name === 'Crockford' ? 'JavaScript God' : name;
		var that = person.constructor.call(this, name);
		return that;
	},
	speak: function () {
		return person.speak.apply(this) + ' and writes some code.';
	}
});

my.person = person;
my.extend = extend;
my.create = create;
my.programmer = programmer;

return my;

})();

var myPerson = MODULE.create(MODULE.person, 'Hank');
var myHacker = MODULE.create(MODULE.programmer, 'Pete');
var myHacker2 = MODULE.create(MODULE.programmer);
var crockford = MODULE.create(MODULE.programmer, 'Crockford');

console.log(myPerson.speak());
console.log(myHacker.speak());
console.log(myHacker2.speak());
console.log(crockford.speak());
