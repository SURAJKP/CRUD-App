
angular.module('ImgUploadCtrl', []).controller('imgUploadCtrl', ['$scope','$state','$http', function ($scope,$state,$http) {
	$scope.subFun=function(){
		// $http({
		// method:'POST',
		// url:'/api/images'
		// //data:form-data
		// }).then(function success(res){
		// 	console.log(res);
		// })
	}
	$scope.next=function(){
		$state.go('imgRetrive');
	}
}])