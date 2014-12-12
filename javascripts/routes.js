var ideApp ={
    $ng : angular.module('ideApp', [ 'ngRoute', 'ngAnimate', 'ui.ace' ])
};

ideApp.$ng.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/editor', {
            templateUrl: 'partials/editor.html'
        }).otherwise({
            redirectTo: 'editor'
        });
    }
]);
