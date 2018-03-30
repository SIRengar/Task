var app = angular.module("myApp");
    app.controller('articleDetail',function($scope,$http,$stateParams,$state,Type,Industry){      
       var id=$stateParams.id?$stateParams.id:'';
       var IDs = parseInt(id);
       var Img = document.getElementById('img');
       $scope.Industry = Industry;
       $scope.Type = Type;
       //当类型为行业大图时，显示第二下拉框
       if($scope.ArticleType != 3){
       	    $scope.detailType="";
       }
       $scope.reader = new FileReader();
       //判断当前页面为编辑时（如果url中有id）
       if(id!=''){
           $scope.title="编辑Article";
           $http.get('/carrots-admin-ajax/a/article/'+id).then(function (response) {
           	$scope.article=response.data.data.article;
           	$scope.titleName = $scope.article.title;
           	$scope.ArticleType = '' + $scope.article.type;
           	$scope.detailType = '' +$scope.article.industry;
           	$scope.content = $scope.article.content;
           	console.log($scope.content);
           	$scope.URL1 = $scope.article.url;
           	console.log($scope.article.img);
           	$scope.upImg = $scope.article.img;
           	$scope.createAt = $scope.article.createAt;
           });
       }else{
       	$scope.createAt = Date.parse(new Date());
       	$scope.title="新增Article";
       }
       //立即上线时
       $scope.pubArticle = function(){
       	var request1 = 'title=' + $scope.titleName 
       	              +'&type=' + $scope.ArticleType
       	              +'&createAt=' + $scope.createAt
       	              +'&industry=' + $scope.detailType
       	              +'&content=' + $scope.content
       	              +'&status=' + 2
       	              +'&url=' + $scope.URL1
       	              +'&img=' + $scope.upImg       	              
       	console.log(IDs);
       	if(id != '') {
       		EditRequest(IDs,request1);
       	} else {
       		addRequest(request1);
       	}
       	};
       //保存为草稿时
       	$scope.saveArticle = function(){
       		console.log($scope.content);
       		var request2 = 'title=' + $scope.titleName 
       	                  +'&type=' + $scope.ArticleType
       	                  +'&createAt=' + $scope.createAt
       	                  +'&updateAt=' + Date.parse(new Date())
       	                  +'&industry=' + $scope.detailType
       	                  +'&content=' + $scope.content
       	                  +'&status=' + 1
       	                  +'&url=' + $scope.URL1
       	                  +'&img=' + $scope.upImg;
       	    if(id != '') {
       		    EditRequest(IDs,request2);
       	    } else {
       		    addRequest(request2);
       	    }
       	};
       	//增加页面时请求
       	function addRequest (request) {
       		$http.post('/carrots-admin-ajax/a/u/article?'+request,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function (response) {
                alert(response.data.message);
                if(response.data.code==0){
                    $state.go('dashboard.articleList');
                }
            })
       	}
       	//编辑页面时请求
       	function EditRequest (id,request) {
       		$http.put('/carrots-admin-ajax/a/u/article/'+id+'?'+request,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'}
            }).then(function (response) {
                alert(response.data.message);
                if(response.data.code==0){
                    $state.go('dashboard.articleList');
                }
            })
       	}
    });

