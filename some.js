	function Animal (name) {
		this.name = name;
	}

	Animal.prototype.getName = function () {
		return this.name;
	}

	function Cat (name) {
		this.name = name;
	}
	
	Cat.prototype = new Animal();
	
	Cat.prototype.meow = function() {
		return "Cat "+ this.name + " is saying meow";
	}

	var cat = new Cat ("Thomas");


	function testString (testedString, returnedString) {
		return (testedString === returnedString);
	}
	
	console.log(testString("Thomas", cat.getName())); //true
	console.log(testString("Cat Thomas is saying meow", cat.meow())); // true
