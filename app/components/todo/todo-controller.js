function TodoController() {
	var todoService = new TodoService()	
	// new up the TodoService that has already been configured for your use
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again
	// Use this getTodos function as your callback for all other edits
	
	function getTodos(){
		//FYI DONT EDIT ME :)
		todoService.getTodos(draw)
	}
	getTodos()


	function draw(todos) {
		var template = `You have ${todos.length} To Dos <ul>`
        for (let i = 0; i < todos.length; i++) {
		  const todo = todos[i];
		  template += `
		<li>
		<input type="checkbox" onclick="app.controllers.todoController.toggleTodoStatus(${todo._id})" ${todo.completed ? "checked" : ""}></input>
		<button onclick= "app.controllers.todoController.removeTodo('${todo._id}')">Delete</button>
		<p>"${todo.description}"</p>
	  	</li>
        ` 
		}
		template += "</ul>"
		document.getElementById('todoList').innerHTML = template
	}

	// <p>You have<span id="number">(${todo.length})</span> To Do's</p>	

	// (${todo.check ? "checked" : ""})
	// ---OR---
	// if (todo.completed == false) {
	//   template +=`
	// else{ template+=``
	// }
		
		//WHAT IS MY PURPOSE?
		//BUILD YOUR TODO TEMPLATE HERE
		//DONT FORGET TO LOOP

	this.addTodoFromForm = function addTodoFromForm (e) {
		e.preventDefault(); // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FORM THE FORM
		var form = e.target
		var todo = {
			description: form.todo.value
		// DONT FORGET TO BUILD YOUR TODO OBJECT
		}
		todoService.addTodo(todo, getTodos)
		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
	// form.reset()
	}

	this.toggleTodoStatus = function (todoId, cb) {
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, getTodos)
		// YEP THATS IT FOR ME
	}

	this.removeTodo = function (todoId) {
		// ask the service to run the remove todo with this id
		todoService.removeTodo(todoId, getTodos)
		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
	}

	// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???

}



// The todolist allows items to be added and removed from a list: add and remove function

// The todolist shows the total count of tasks currently being tracked: status function 

// The todolist takes advantage of the TodoService to provide persistent data through a Node Server