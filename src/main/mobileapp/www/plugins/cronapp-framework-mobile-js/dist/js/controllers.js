(function(){angular.module("custom.controllers",[]),app.controller("HomeController",["$scope","$http","$rootScope","$state","$translate","Notification","$ionicModal",function(a,b,c,d,e,f,g){for(var h in c.http=b,app.registerEventsCronapi(a,e,g),a.Notification=f,app.userEvents)a[h]=app.userEvents[h].bind(a);a.message={};try{var i=$controller("AfterHomeController",{$scope:a});app.copyContext(i,this,"AfterHomeController")}catch(a){}try{a.blockly.events.afterHomeRender&&a.blockly.events.afterHomeRender()}catch(a){}}]),app.controller("chatController",["$scope","$state","$ionicPopup","$ionicScrollDelegate","$timeout","$interval","$ionicModal","$translate","$rootScope","$http","Notification",function(a,b,c,d,f,g,h,i,j,k,l){for(var m in app.registerEventsCronapi(a,i),j.http=k,a.Notification=l,app.userEvents)a[m]=app.userEvents[m].bind(a);var e,n,o,p=JSON.parse(sessionStorage._u).user.username,q=d.$getByHandle("userMessageScroll");a.enter=function(){f(function(){e=document.body.querySelector(".homeView .bar-footer"),n=document.body.querySelector(".homeView .scroll-content"),o=angular.element(e.querySelector("textarea"))},0)},a.isEnter=function(a){13==a.keyCode?f(function(){a.stopPropagation(),$("#sendButton").trigger("click")},0):null},a.refreshScroll=function(b,c){f(function(){b=b||a.scrollDown,q.resize(),b&&q.scrollBottom(!0),a.checkScroll()},c||1e3)},a.scrollDown=!0,a.checkScroll=function(){return f(function(){var b=q.getScrollPosition().top,c=q.getScrollView().__maxScrollTop;a.scrollDown=b>=c,a.$apply()},0),!0}}])})(app);