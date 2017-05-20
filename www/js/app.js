// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})
.config(function($stateProvider,$urlRouterProvider){
  $stateProvider
    .state('tabs',{
      url:'/tab',
      templateUrl:'template/tabs.html'
    })
    .state('tabs.home',{
      url:'/home',
      views:{
        'tab-home':{
          templateUrl:'template/home.html',
          controller:'ctrlh'
        }
      }
    })
    .state('tabs.prolist',{
      url:'/home/:id',
      views:{
        'tab-home':{
          templateUrl:'template/prolist.html',
          controller:'ctrlp'
        }
      }
    })
    .state('tabs.about',{
    url:'/about',
    views:{
      'tab-about':{
        templateUrl:'template/about.html',
        controller:'ctrla'
      }
    }
  })
    .state('tabs.youlist',{
      url:'/about/:id',
      views:{
        'tab-about':{
          templateUrl:'template/youlist.html',
          controller:'ctrly'
        }
      }
    })
    .state('tabs.other',{
      url:'/other',
      views:{
        'tab-other':{
          templateUrl:'template/other.html'
        }
      }
    })
    .state('tabs.setting',{
      url:'/setting',
      views:{
        'tab-other':{
          templateUrl:'template/setting.html'
        }
      }
    })
  $urlRouterProvider.otherwise('/tab/home')
})

  .controller("ctrlh",function ($scope,$http,$timeout) {
    $http({
      method:'get',
      url:'yunnan.json'
    }).success(function(data){
      $scope.arr=data
    })

    $scope.doRefresh=function(){
      $timeout(function(){
        $http({
          method:'get',
          url:'yunnan.json'
        }).success(function(data){
          $scope.arr=data
        })
        $scope.$broadcast('scroll.refreshComplete')
      },2000)
    }

    $scope.loadMore=function(){
      $timeout(function(){
        $http({
          method:'get',
          url:'more.json'
        }).success(function(data){
          $scope.arr=data
        })
        $scope.$broadcast('scroll.infiniteScrollComplete')
      },2000)
    }

  })

  .controller('ctrlp',function($scope,$http,$stateParams){
    $http({
      method:'get',
      url:'yunnan.json'
    }).success(function(data){
      $scope.str=data[$stateParams.id]
      console.log($scope.str)
    })
  })

  .controller("ctrla",function ($scope,$http) {
    $http({
      method:'get',
      url:'youji.json'
    }).success(function(data){
      $scope.arr=data
    })
  })

  .controller('ctrly',function($scope,$http,$stateParams){
    $http({
      method:'get',
      url:'youji.json'
    }).success(function(data){
      $scope.str=data[$stateParams.id]
      console.log($scope.str)
    })
  })
