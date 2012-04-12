var foo = pd( {
	name: 'Mike'
});

// ... is the same as:

foo = {
	name: {
		value: 'Mike',
		writable: true,
		enumerable: true,
		configurable: true
	}
};

// create a car
var car = {
	name: '',
	doors: 0,
	color: '',
	drive: function () {
		return 'the car drives around.';
	}
};

// inherit from car
var corvette = pd.extend(Object.create(car), {
	name: 'corvette',
	doors: 2,
	color: 'Red',
	drive: function () {
		return 'The ' + 
			this.color + ' ' + 
			this.name + ' with ' + 
			this.doors.toString() + ' doors whizzes by.';
	}
});

var theCar = Object.create(car);
var theCorvette = Object.create(corvette);

console.log(theCar.drive());
console.log(theCorvette.drive());

// changing a property works!
theCorvette.color = 'Blue';
console.log(theCorvette.drive());

