var events = require('events');
var util = require('util');
var eventsConfig = require("./config");

function HotelsReview(){
	this.name = "Hilton";
	this.field = "hotel";
	this.stars = 0;
	events.EventEmitter.call(this);
}

HotelsReview.prototype.addStars = function(){
	this.stars++;
	this.writeLogs({"add-stars":{ name: this.name, fiels: this.fiels, stars: this.stars }});
	this.emit(eventsConfig.events.addStars, "Name : "+this.name + ", stars : " + this.stars + " , field : "+this.field);
};

HotelsReview.prototype.reduceStars = function(){
	if(this.stars > 0){
		this.stars--;
		this.writeLogs({"reduce-stars":{ name: this.name, fiels: this.fiels, stars: this.stars }});
		this.emit(eventsConfig.events.reduceStars, "Name : "+this.name + ", stars : " + this.stars + " , field : "+this.field);
	}
	else{
		this.writeLogs({"lower-stars":"The stars value is already 0"});
		this.emit(eventsConfig.events.lowerStar, "The stars value is already 0");
	}
};

HotelsReview.prototype.writeLogs = function(obj){
	eventsConfig.compilerLogs.push(obj);
};




util.inherits(HotelsReview, events.EventEmitter);

module.exports = HotelsReview;