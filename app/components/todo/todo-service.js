function TodoService() {
	// A local copy of your todos
	var todoList = []
	var baseUrl = 'https://bcw-sandbox.herokuapp.com/api/Brian/todos'

	// function TodoForm(number, completed, description, todoButton){
	// 	this.number = number 
	// 	this.completed = completed
	// 	this.description = description
	// 	this.todobutton = todoButton 
	//   }

// 	function loadTodo()
// 	$.get(baseUrl)
// 	.then(res => {
// 	  // console.log(res.data)
// 	  cb(res.data)
// 	})
//   }
//   loadTodo()


	function logError(err) {
		console.error('UMM SOMETHING BROKE: ', err)
		//CAN YOU NOTIFY THE USER IF SOMETHING BREAKS? 
		//do this without breaking the controller/service responsibilities
	}

	this.getTodos = function getTodos(draw) {
		$.get(baseUrl)
			.then(function (res) { // <-- WHY IS THIS IMPORTANT????
				console.log(res)
				todoList = res["data"]
				draw(todoList)
			})
			.fail(logError)
	}

	this.addTodo = function addTodo(todo, cb) {
		// WHAT IS THIS FOR???
		$.post(baseUrl, todo)
			.then(function(res){ // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				cb(res)
			}) 
			.fail(logError)
	}

	this.toggleTodoStatus = function toggleTodoStatus(todoId, cb) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed

		//STEP 3: Here is that weird Ajax request because $.put doesn't exist
		console.log(todoId)
		var todoCheck = {}
			for (let i = 0; i < todoList.length; i++) {
				// var todo = todoList[i]
				if (todoList[i]._id == todoId) {
				todoCheck = todoList[i]
				
			}
		}
		todoCheck.completed = !todoCheck.completed

		$.ajax({
			method: 'PUT',
			contentType: 'application/json',
			url: baseUrl + '/' + todoId,
			data: JSON.stringify(todoCheck)
		})
			.then(function (res) {
				cb()
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.fail(logError)
	}


	this.removeTodo = function (todoId, cb) {
		// Umm this one is on you to write.... It's also unique, like the ajax call above. The method is a DELETE
			$.ajax({
			  method: 'DELETE',
			  url: baseUrl + '/' + todoId
			}).then(cb)
		  }

}
