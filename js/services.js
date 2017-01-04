vestaApp.factory("vestamobileService",['$http','$q',function($http, $q) {
	
	
	var vestaservice={
		getData:function(objectdata){
				var deferred = $q.defer();
				$http({
					method: 'POST',
					url:vestaconfig.serviceurl+"/services/getData",
					data:objectdata,
					headers: {
						   'Content-Type': 'application/json'
					},
					withCredentials: true
				}).then(function(response){
					deferred.resolve(response);
				},function(response){
					deferred.resolve(false);
				});
				return deferred.promise;
		}
	};
	return vestaservice;
}]);