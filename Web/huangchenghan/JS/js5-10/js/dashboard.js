var app = angular.module("myApp");
    app.controller('dashboard',function ($scope,$state,sidebar) {
    	$scope.signOut = function () {
			localStorage.setItem("loginState","");
			loginState = window.localStorage.getItem("loginState");
        };
    	//判断当前页面是否已登录，如果没登陆则跳回登录页面
        if (loginState == ""){
            $state.go('login');
        }
         $scope.state = $state; //因为原本没有state，所以在控制器中定义state
         $scope.sidebar = sidebar; //从全局变量constant注入到controller中
        //侧边栏的手风琴效果
        $scope.openList = function(ele){ //点击父系侧边栏时的点击事件
        	console.log(ele); //查看当前点击的选项
        	$scope.sidebar.forEach(function (item){ //遍历侧边栏
        		if (ele.firstList === item.firstList){ //如何当前点击的父系选项是现在
        			ele.isShow = !ele.isShow;
        		} else {
        			item.isShow = false;
        		}
        	})
        };
        //侧边栏刷新后保留当前页子系选项高亮
        console.log($scope.sidebar);
        angular.forEach($scope.sidebar,function(item){
        	item.secondList.some(function(items){
        		console.log(items.url);
        		if($state.includes(items.urls)){
        			item.isShow = true;
        			return true;
        			console.log("true");
        		} else {
        			item.isShow = false;
        			return false;
        			console.log("false");
        		}
        	})
        })
    });
