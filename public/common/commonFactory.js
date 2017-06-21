sportsKartApp.service('requestFactory', ["$q","$http",function($q,$http,$timeout) {
	//var commonURL = "http://magento.userdemo.co.in/magento1/hybridapp/trunk/index.php/apiweb/";
	var commonURL = "json/test.json";
	var deferred = $q.defer();


    var getServiceCall= function(serviceName, success, failure) {
        $http.get(commonURL+serviceName)
        .success(function(data){
        	deferred.resolve(data);
        	success(data);
        }).error(function(msg,code){
        	deferred.reject(msg);
        	failure(msg);
        });
        return deferred.promise;
    };

	var postServiceCall = function(serviceName, parameter,success,failure){
		console.log("formed url -->" + commonURL + serviceName);
		console.log("formed paramters -->" + parameter);
		if(checkConnection()){
				$http({
				method : "POST",
				url : commonURL+serviceName,
				//url : "http://magento.userdemo.co.in/magento1/hybridapp/trunk/apiweb/wcustomer/login",
				headers : { 'Content-Type':'application/json'},
				data : parameter
			})
			.success(function(data){
				deferred.resolve(data);
				success(data);
			}).error(function(msg,code){
				deferred.reject(msg);
				failure(msg);
			});
			return deferred.promise;
		}else{
			//alert("No internet connection");
			failure("Please check your internet connection");
		}

    };

	var checkConnection = function(){
		return true;
		if(navigator.connection.type === "none") {
            return false;
        }else{
			return true;
		}
	};

    return{
    	getServiceCall : getServiceCall,
		postDemoServiceCall : postDemoServiceCall,
		checkConnection : checkConnection
    }

}]);
