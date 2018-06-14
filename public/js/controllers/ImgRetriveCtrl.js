angular.module('ImgRetriveCtrl', []).controller('imgRetriveCtrl', ['$scope','$http', function ($scope,$http) {
	$http({
    	method:'GET',
    	url:'/pic'
    }).then (function success(res){
    	console.log(res.data);
    	$scope.images=res.data;
    })
}])