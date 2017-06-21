sportsKartApp.controller("SearchController", function($scope, commonService) {

    $scope.searchParams="";
    
    $scope.search = function(searchParams){

        var params = {
            "search_txt": searchParams
        };
        var response = commonService.getSearchResult(params, success, failure);
    }

    function success(response) {
        alert(response);
    }

    function failure(error) {
        alert(error);
        var alertPopup = $ionicPopup.alert({
            title: 'No internet connection!',
            template: error
        });

        alertPopup.then(function(res) {
            //console.log('Thank you for not eating my delicious ice cream cone');
        });
        //alert(JSON.stringify(error));
    }
});
