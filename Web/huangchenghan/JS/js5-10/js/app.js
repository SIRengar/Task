var myApp = angular.module("myApp",["ui.router","ui.bootstrap","oc.lazyLoad","ng.ueditor"]);
myApp.config(function ($stateProvider, $urlRouterProvider,$ocLazyLoadProvider,$locationProvider) {
//	$locationProvider.html5Mode(true); //去掉# 
	var _lazyLoad = function (loaded) {
        return function ($ocLazyLoad) {
            return $ocLazyLoad.load(loaded, {serie: true});
        }
    };
    
	$urlRouterProvider.otherwise("/login");
	$stateProvider
	    .state("login",{
	    	url:"/login",
	    	templateUrl: "login.html"
	    })
	    .state("dashboard",{
	    	url:"/dashboard",
	    	templateUrl: "dashboard.html"
	    })	    
	    .state("dashboard.articleDetail",{
	    	url:"/articleDetail?id",
	    	templateUrl: "articleDetail.html",
	    	controller: 'articleDetail',
	    	resolve: {
	    		loadMyFile:_lazyLoad(['js/articleDetail.js'])
	    	},
	    	params:{
                'id':null
            }
	    })
	    .state("dashboard.company",{
	    	url: "/company",
	    	templateUrl:"company.html"
	    })
	    .state("dashboard.job",{
	    	url: "/job",
	    	templateUrl:"job.html"
	    })
	    .state("dashboard.text",{
	    	url: "/text",
	    	template:"文章管理"
	    })
	    .state("dashboard.articleList",{
	    	url: "/articleList?startAt&endAt&type&status&size&page",
	    	templateUrl:"articleList.html",
	    	controller: 'articleListCtrl'
	    });
	    
});
