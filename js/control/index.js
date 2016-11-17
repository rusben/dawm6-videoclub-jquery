// jQuery code
$(document).ready(function () {

});

// angularjs code
/* (function(){ // write your code here })(); */
(function(){
  // This is the instance of our angular app
  var app = angular.module("VideoClubApp", []);

  app.controller("FilmEntryController", function($scope) {
    // Controller properties
    this.filmType = "Comedy"; // The first selected value in the select
    this.filmsNumber;

    this.filmsName = [];
    this.directorsName = [];
    this.prices = [];
    this.availability = [];

    // Scope variables
    $scope.action = 0; // Shows the select and the input
    $scope.nFields = [];

    // Methods
    this.generateForm = function () {
      $scope.action = 1;

      // TODO validate this.filmsNumber

      // Initialize arrays
      $scope.nFields = [];
      this.filmsName = [];
      this.directorsName = [];
      this.prices = [];
      this.availability = [];

      // http://stackoverflow.com/questions/16824853/way-to-ng-repeat-defined-number-of-times-instead-of-repeating-over-array
      for (var i = 0; i < this.filmsNumber; i++) {
        $scope.nFields.push(i); // 0, 1, 2, 3, 4 ...
        this.filmsName.push("");
        this.directorsName.push("");
        this.prices.push("");
        this.availability.push("");
      }
    };

    this.entryFilms = function () {
      
    };
  });

  /*
	The restrict option is typically set to:

    'A' - only matches attribute name
    'E' - only matches element name
    'C' - only matches class name

	*/
  // Normally you use directives to create tags
  // Driective name must start with lowercase!
	app.directive("filmEntryForm", function () {
		return {
		  restrict: 'E', // type of directive
		  templateUrl:"templates/film-entry-form.html",
		  controller: function() {
        // When the document is ready execute this code
		  },
		  controllerAs: 'filmEntryFormCtrl' // This is the alias
		};
	});

})();
