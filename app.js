app = angular.module('todoApp', []);

app.controller("TodosController", function($scope) { 
	$scope.todos = ['item1', 'item2']; 
	
	$scope.addTodo = function(){
		$scope.todos.push($scope.todo);
		$scope.todo = '';
	};

	$scope.removeTodo = function(index){ // BONUS :D
		$scope.todos.splice(index, 1);
	};

	$scope.removeAll = function(){
		$scope.todos = [];
	};

	$scope.seed = function() {
		$scope.todos = ['item1', 'item2', 'item3', 'item4', 'item5']; 
	};

});