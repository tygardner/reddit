var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService){



		$scope.getPosts = function (){
			FirebaseService.getPost().then(function(response){
			console.log(response)
			$scope.posts = response;
		})
	}

		$scope.addPost =function (){
			FirebaseService.addPost($scope.newPost).then(function(response){
				$scope.getPosts();
			})
		}

	$scope.getPosts();



}); //end control