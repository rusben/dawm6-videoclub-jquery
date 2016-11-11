// jQuery code
$(document).ready(function () {

});

// angularjs code
/* (function(){ // write your code here })(); */
(function(){
  var app = angular.module("VideoClubApp", []);

  app.controller("FilmEntryController", function($scope) {
    // Controller properties
    this.filmType;
    this.filmsNumber;

    // Scope variables
    $scope.action = 0; // Shows the select and the input

    // Methods
    this.generateForm = function () {
      console.log(this.filmsNumber);
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
