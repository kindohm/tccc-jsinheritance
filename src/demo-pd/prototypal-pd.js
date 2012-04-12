var MY = (function () {
	var my = {};
	
	// define a secure 'privates' object with pd.
	var privates = pd.Name();

	// define a person
	my.person = {
		constructor: function (name) {
			privates(this).name = name === undefined ? 'Nobody' : name;
			return this;
		},
		speak:	function () {
			return privates(this).name + ' says hi';
		}
	};

	// define a programmer. 
	my.programmer = pd.extend(Object.create(my.person), {
		constructor: function (name) {
			name = name === 'Crockford' ? 'JavaScript God' : name;
			my.person.constructor.call(this, name);
			privates(this).oldSpeak = my.person.speak;		
			return this;
		},
		speak: function () {
			return privates(this).oldSpeak() + ' and writes some code.';
		}		
	});

	my.myPerson = Object.create(my.person).constructor('Hank');
	my.myHacker = Object.create(my.programmer).constructor('Pete');

	console.log(my.myPerson.speak());
	console.log(my.myHacker.speak());
	
	return my;
})();