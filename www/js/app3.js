/**
 * Created by Administrator on 2017/5/16 0016.
 */
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
  .controller('ctrl',function($scope,$timeout,$ionicActionSheet){
    $scope.items=['列表1','列表2','列表3','列表4','列表5',]

    $scope.doRefresh=function(){
      $timeout(function(){
        $scope.items=['列表-1','列表-2','列表-3','列表-4','列表-5',]
        $scope.$broadcast('scroll.refreshComplete')
      },2000)
    }
    $scope.loadMore=function(){
      $timeout(function(){
        $scope.items=['列表6','列表7','列表8','列表9','列表0',]
        $scope.$broadcast('scroll.infiniteScrollComplete')
      },2000)
    }
    $scope.tap=function(){

      // 显示上拉菜单
      var hideSheet = $ionicActionSheet.show({
        buttons: [
          { text: '<b>Share</b> This' },
          { text: 'Move' }
        ],
        destructiveText: 'Delete',
        titleText: 'Modify your album',
        cancelText: 'Cancel',
        cancel: function() {
          // 这里添加取消代码
        },
        buttonClicked: function(index) {
          return true;
        }
      });

      // 2秒后再次调用隐藏菜单
      $timeout(function() {
        hideSheet();
      }, 2000);

    }








  })

