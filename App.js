/// <reference path="c:\users\g9gang\documents\visual studio 2013\Projects\AngularJS\AngularJS\angular.js" />

//1. Register your Module
//2. Create a controller
//3. Create another controller, describe $scope
//4. Various valid expressions {{}} in angular
//5. ng-init
//6. ng-repeat


var App = angular.module('myApp',[]);
var Controller = App.controller('myController', function ($scope) {
    $scope.message = "Hi Gnana";
});

var Controller1 = App.controller('myController2', function ($scope) {
    $scope.message = "Hi Selvan";
    var india = [
        { State: 'Tamilnadu', Capital: 'Chennai' },
        { State: 'Karnataka', Capital: 'Bangalore' }
    ];

    $scope.india = india;
});

var Controller3 = App.controller('facebook', function ($scope) {
    $scope.message = "Welcome to Facebook";
    var Details = [
        { Name: 'Gnana', Likes: 0, Dislikes: 0, Salary: 50000, DOB: new Date('12/12/1990'), Fans: 2000 },
         { Name: 'Aravind', Likes: 0, Dislikes: 0, Salary: 50000, DOB: '12/12/1990', Fans: 20000 },
          { Name: 'Deepiga', Likes: 0, Dislikes: 0, Salary: 50000, DOB: '12/12/1990', Fans: 256000 },
           { Name: 'Divya', Likes: 0, Dislikes: 0, Salary: 50000, DOB: '12/12/1990', Fans: 20600 },
    ];

    $scope.Details = Details;

    $scope.AddLikes = function (profile) {
        profile.Likes++;
    }

    $scope.AddDislikes = function (profile) {
        profile.Dislikes++
    }

    $scope.reverse = true;

});

var serviceController = App.controller('serviceController', function ($scope, $http) {
    $scope.message = "HI"
    $http.get('https://newsapi.org/v1/articles?source=the-hindu&sortBy=top&apiKey=2d0cea8f0e794d85bccdf5cc9c0f95d0')
    .then(function (response) {
        $scope.greeting = response.data;
        $scope.articles = response.data.articles;
    });
});



var WebserviceController = App.controller('WebService', function ($scope, $http) {
    $scope.webmessage = "HI"
    $http.post('WebService1.asmx/GetData')
    .then(function (response) {
        $scope.employee = response.data;

    });
});

App.filter('unique', function () {

    return function (items, filterOn) {

        if (filterOn === false) {
            return items;
        }

        if ((filterOn || angular.isUndefined(filterOn)) && angular.isArray(items)) {
            var hashCheck = {}, newItems = [];

            var extractValueToCompare = function (item) {
                if (angular.isObject(item) && angular.isString(filterOn)) {
                    return item[filterOn];
                } else {
                    return item;
                }
            };

            angular.forEach(items, function (item) {
                var valueToCheck, isDuplicate = false;

                for (var i = 0; i < newItems.length; i++) {
                    if (angular.equals(extractValueToCompare(newItems[i]), extractValueToCompare(item))) {
                        isDuplicate = true;
                        break;
                    }
                }
                if (!isDuplicate) {
                    newItems.push(item);
                }

            });
            items = newItems;
        }
        return items;
    };
});


var todoCtrl = App.controller('todo', function ($scope) {

    $scope.message = "Welcome to TODO APP";
    $scope.enteredItems = [];
    $scope.AddItems = function () {
        $scope.enteredItems.push($scope.items);
        $scope.items = '';
    }
    $scope.DeleteItems = function (list) {
        var i = $scope.enteredItems.indexOf(list);
        $scope.enteredItems.splice(i,1);
    }
   
})

var Toctrl2 = App.controller('todoname', function ($scope) {
    $scope.message = "Hi!";
    $scope.items = [];
    $scope.AddItems = function ()
    {
        $scope.items.push($scope.TextLabel);
        $scope.TextLabel = '';
    }

    $scope.DeleteItems = function (test2) {
        var i = $scope.items.indexOf(test2);
        $scope.items.splice(i,1);
       
    }

    
}
)


