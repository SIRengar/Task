myApp.directive('imgUpload', function($http) {
	return {
		restrict: 'AEC',
		replace: true,
		transclude: true,
		templateUrl: "imgLoad.html",
		link: function(scope, stateParams, state) {
			scope.file2 = document.getElementById('file2');
			scope.img = document.getElementById('img');
			var Img = document.getElementById('img');
			scope.progress = '';
			scope.file2.onchange = function() {
				if(scope.file2.files[0] >= 5242880) {
					alert('图片不能大于5M');
				} else {
					var reader = new FileReader();
					reader.readAsDataURL(scope.file2.files[0]);
					scope.$apply(function() {
						scope.hasImg = scope.file2.files[0];
						scope.name = scope.file2.files[0].name;
						scope.size = scope.file2.files[0].size > 1024 * 1024 ? (scope.file2.files[0].size / 1024 / 1024).toFixed(2) + 'MB' : (scope.file2.files[0].size / 1024).toFixed(2) + 'KB';
					})
				}
			};
			//上传请求
			scope.upLoad = function() {
				$http({
					method: 'post',
					url: '/carrots-admin-ajax/a/u/img/task',
					headers: {
						'Content-Type': undefined
					},
					uploadEventHandlers: {
						progress: function(eb) {
							if(eb.lengthComputable) {
								scope.progress = Math.round(eb.loaded * 100 / eb.total);
							}
						}
					},
					transformRequest: function() {
						var formData = new FormData();
						formData.append('file', scope.hasImg);
						return formData;
					}
				}).then(function successCallback(response) {
					scope.status = response.data.message;
					scope.upImg = response.data.data.url;
					Img.src = response.data.data.url;
					imgUrl = response.data.data.url;					
					scope.show = true;
					scope.hidden = false;
				})
			};
			//清除
			scope.delete = function() {
				Img.src = ""; //src删除
				scope.file2.value = "";
				scope.upImg = ""; //ng-src删除
				scope.name = "";
				scope.size = '';
				scope.file2.files[0] = '';
				scope.hasImg = ""; //文件本身
				scope.progress = 0; //进度条
				scope.show = false; //状态
				scope.hidden = false;
			};
		}
	}
})