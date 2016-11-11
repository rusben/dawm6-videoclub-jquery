// jQuery code
$(document).ready(function () {

});

// angularjs code
/* (function(){ // write your code here })(); */
(function(){
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

    // Methods
    this.generateForm = function () {
      $scope.action = 1;
      $scope.nFields = [this.filmsNumber];
      // http://stackoverflow.com/questions/16824853/way-to-ng-repeat-defined-number-of-times-instead-of-repeating-over-array
      
      // TODO validate this.filmsNumber
      // We are defining the arrays with a new length
      this.filmsName = [this.filmsNumber];
      this.directorsName = [this.filmsNumber];
      this.prices = [this.filmsNumber];
      this.availability = [this.filmsNumber];
    };
  });

  /*
	The restrict option is typically set to:

    'A' - only matches attribute name
    'E' - only matches element name
    'C' - only matches class name

	*/
	app.directive("filmEntryForm", function () {
		return {
		  restrict: 'E', // type of directive
		  templateUrl:"templates/film-entry-form.html",
		  controller: function() {

		  },
		  controllerAs: 'filmEntryFormCtrl' // This is the alias
		};
	});

})();
