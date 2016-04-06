var HotelsReview = require("./hotels");
var eventsConfig = require("./config").events;
var hotels = new HotelsReview();

hotels.on(eventsConfig.addStars, function(stars){
	console.log("addStars: "+ stars);
})

hotels.on(eventsConfig.reduceStars, function(stars){
	console.log("reduceStars: "+ stars);
})

hotels.on(eventsConfig.lowerStar, function(stars){
	console.log("lowerStar: "+ stars);
})

hotels.addStars();
hotels.reduceStars();
hotels.reduceStars();
