/**
 * Created by uid on 2017/5/22.
 */

//创建模块
var app=angular.module('myapp',['ionic']);
//配置路由
app.config(function($stateProvider,$urlRouterProvider){
$stateProvider
    .state('main',{
        url:'/mymain',
        templateUrl:'tp1/main.html'
    })
    .state('start',{
        url:'/mystart',
        templateUrl:'tp1/start.html'
    })
    .state('detail',{
        url:'/mydetail',
        templateUrl:'tp1/detail.html'
    })
    .state('order',{
        url:'/myorder',
        templateUrl:'tp1/order.html'
    })
    .state('myorder',{
        url:'/mymyorder',
        templateUrl:'tp1/myorder.html'
    })
    $urlRouterProvider.otherwise('/mystart');
});
//创建父控制器,负责跳转
app.controller('parentctrl',['$scope','$state',function($scope,$state){
    $scope.jump=function(desstate,param){
        $state.go(desstate,param);
    }
}]);