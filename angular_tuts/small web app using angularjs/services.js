// SERVICES
weatherApp.service('cityService', function() {
   	this.cities = [
   		"Delhi,IN",
   		"Jaipur,IN",
   		"Mumbai,IN",
   		"Bangalore,IN",
   		"Kolkata,IN",
   		"Lucknow,IN",
   		"Noida,IN"
   	];
    this.city = this.cities[0];
});
