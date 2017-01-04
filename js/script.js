var vestaApp=angular.module('vestamobileapp',['ngSanitize','ngTouch']);
var vestaconfig={};
var objectdata={};
var requestdata=[];
vestaApp.controller('vestamobileCtrl', ['$scope','$timeout','$window','$interval','vestamobileService',function($scope,$timeout,$window,$interval,vestamobileService) {
		vestaconfig['serviceurl']='http://pimcorelatestvesta.lego.com:3447';
		objectdata['objectId']=12;
		requestdata.push(objectdata);
		vestamobileService.getData(requestdata).then(function(response){
			console.log(response);
		});
}]);