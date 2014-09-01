//Creating prototype
function RobotPrototype (name, year) {
	this.name = name;
	this.year = year;
}

RobotPrototype.prototype.type = "robot";

RobotPrototype.prototype.state = false;

RobotPrototype.prototype.turnOn = function () {
	this.state = true;
	alert (this.name + " is ready to serve You");
}

RobotPrototype.prototype.turnOff = function () {
	this.state = false;
	alert (this.name + " was turned off");
}

//Creating robot species (for this example robot-driver)
function RoboDriver (name, year) {
	this.name = name;	
	this.year = year;
}

RoboDriver.prototype = new RobotPrototype();

RoboDriver.prototype.hasDriveProperty = true;
RoboDriver.prototype.turnOnEngine = false;
RoboDriver.prototype.switchGear = false;

RoboDriver.prototype.drive = function () {
	this.turnOnEngine = true;
	this.switchGear = true;
	alert(this.name + " started driving your car.");
};

RoboDriver.prototype.canDrive = function() {
	if (this.hasDriveProperty) {
		alert ("Robot "+ this.name + " will drive your car");
	};
};

//creating exact robot
var driver = new RoboDriver ("N1", 1998);

driver.turnOn();
driver.canDrive();
driver.drive();
