angular.module('appRoutes', []).config(['$stateProvider','$urlRouterProvider',
 function ($stateProvider,$urlRouterProvider) {
	$urlRouterProvider.otherwise('/imgUpload');
	$stateProvider
	.state('imgUpload',{
		url:'/imgUpload',
		templateUrl:'views/imgUpload.html',
		controller:'imgUploadCtrl'
	})
	.state('imgRetrive',{
		url:'/imgRetrive',
		templateUrl:'views/imgRetrive.html',
		controller:'imgRetriveCtrl'
	})
	
}])