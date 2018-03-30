var myApp = angular.module('myApp');
myApp.directive('sidebar', function() {
	return {
		restrict: 'AEC',
		replace: true,
		transclude: true,
		templateUrl: "sidebar.html",
		link: function(scope, state, sidebar) {
			// scope.state = state;
			// scope.sidebar = sidebar;
            //
			// console.log(scope.sidebar);
			// scope.openList = function(ele) { //点击父系侧边栏时的点击事件
			// 	console.log(ele); //查看当前点击的选项
			// 	scope.sidebar1.forEach(function(item) { //遍历侧边栏
			// 		if(ele.firstList === item.firstList) { //如何当前点击的父系选项是现在
			// 			ele.isShow = !ele.isShow;
			// 		} else {
			// 			item.isShow = false;
			// 		}
			// 	})
			// };
		// 	angular.forEach(scope.sidebar, function(item) {
		// 		item.secondList.some(function(items) {
		// 			console.log(items.url);
		// 			if(state.includes(items.urls)) {
		// 				item.isShow = true;
		// 				return true;
		// 				console.log("true");
		// 			} else {
		// 				item.isShow = false;
		// 				return false;
		// 				console.log("false");
		// 			}
		// 		})
		// 	})
		}
	}
});