//js原生
/*var sign = document.getElementById("sign");
window.onload = function(){  
  sign.onclick = function(){
  	var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var ajax = null;
    if(window.XMLHttpRequest) {
    	ajax = new XMLHttpRequest;
    	} else {
		ajax = new window.ActiveXObject("Microsoft.XMLHTTP");
	    }
    	ajax.open("POST","/carrots-admin-ajax/a/login?"+"name="+username+"&pwd="+password,true);
    	ajax.onreadystatechange = function(){
    		if(ajax.readyState==4){
    			if(ajax.status==200){
    				var data = JSON.parse(ajax.responseText);
    				if(data.message == "success"){
    					alert("登录成功");
    				} else {
    					alert(data.message);
    				}
    			}  			
    		}    		
    	}
    ajax.send(null);
  }
};*/
//JQ写法
/*
$(function(){
	$('#sign').click(function(){
		var username = $("#username").val();
    var password = $("#password").val();
    var ajax = null;
    if(window.XMLHttpRequest) {
    	ajax = new XMLHttpRequest;
    	} else {
		ajax = new window.ActiveXObject("Microsoft.XMLHTTP");
	    }
    	$.ajax({
    		type:"post",
    		url:"/carrots-admin-ajax/a/login",
    		dataType:"JSON",
    		data:{
    			"name":username,
    			"pwd":password
    		},
    		success:function(dop){    			
    			if(dop.message == "success"){
    					alert("登录成功");
    				} else {
    					$(".text-danger").text(dop.message);
    				}
    		}
    	});
	})
})*/
//判断是否登录，如果已经登录则直接跳转到后台管理
var loginState = window.localStorage.getItem('loginState');

//Angular写法
angular.module('myApp').controller('loginController',function($scope,$http,$state){
    if(loginState === "loginState"){
        $state.go('dashboard');
    };
	$scope.login=function(){
		$http({
			url:'/carrots-admin-ajax/a/login',
			method:'POST',
			params: $scope.pt,
			header:{'Content-Type':'application/x-www-form-urlencoded'}//表头
		}).then(function (response){
			console.log(response);
			if(response.data.message == "success"){
				localStorage.setItem('loginState','loginState');
				loginState = "loginState";
				$state.go('dashboard');
			} else {
				$scope.danger=response.data.message;
			}
		})
	}
});

