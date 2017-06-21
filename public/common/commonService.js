sportsKartApp.service('commonService', function($rootScope, requestFactory) {

    var getSearchResult = function(param, success, failure) {
        //showLoader();
        requestFactory.postServiceCall('', param, success, failure);
    };

    return {
        getSearchResult: getSearchResult
    };
});