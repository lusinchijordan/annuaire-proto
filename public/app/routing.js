'use strict';

app.config(function($routeProvider) {
	console.log("coucou")
	$routeProvider.when('/accueil',{
		templateUrl :: 'views/accueil.php',
		controller :: 'controllers/accueilController'
	})
});