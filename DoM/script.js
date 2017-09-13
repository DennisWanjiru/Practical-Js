"use strict";

/*================================
    --------THE MODEL--------
================================*/

var todoList = {
    todos: [],

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
    },

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
    },

    toggleTodo: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
    },

    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        var incompleteTodos = 0;

        /*
            for (var i = 0; i < totalTodos; i++) {
                if (this.todos[i].completed === true) {
                    completedTodos++;
                }
            }
        */

        this.todos.forEach(function(todo) {
            if (todo.completed === true) {
                completedTodos++;
            }
        });

        /*
            //If everything is completed make them incomplete(false)
            if (completedTodos === totalTodos) {
                this.todos.forEach(function(todo) {
                    todo.completed = false;
                });

            //If everything is completed make them incomplete(false)
            } else {
                this.todos.forEach(function(todo) {
                    todo.completed = true;
                });
            }
        */

        this.todos.forEach(function(todo) {
            if (completedTodos === totalTodos) {
                todo.completed = false;
            } else {
                todo.completed = true;
            }
        });

    }
};

/*================================
    --------THE CONTROLLER---------
================================*/

var handlers = {
    addTodo: function() {
        var addTodoTextInput = document.querySelector("#addTodoTextInput");
        todoList.addTodo(addTodoTextInput.value);
        addTodoTextInput.value = "";
        view.displayTodos();
    },

    changeTodo: function() {
        var changeTodoPosition = document.querySelector("#changeTodoPosition");
        var changeTodoTextInput = document.querySelector("#changeTodoTextInput");
        todoList.changeTodo(changeTodoPosition.valueAsNumber, changeTodoTextInput.value);
        changeTodoPosition.value = "";
        changeTodoTextInput.value = "";
        view.displayTodos();
    },

    deleteTodo: function(position) {
        todoList.deleteTodo(position);
        deleteTodoPosition.value = "";
        view.displayTodos();
    },

    toggleTodo: function() {
        var toggleTodoPosition = document.querySelector("#toggleTodoPosition");
        todoList.toggleTodo(toggleTodoPosition.valueAsNumber);
        toggleTodoPosition.value = "";
        view.displayTodos();
    },

    toggleAll: function() {
        todoList.toggleAll();
        view.displayTodos();
    }
};

/*================================
    --------THE VIEW---------
================================*/

var view = {
    displayTodos: function () {
       var todoUl = document.querySelector('ul');
       todoUl.innerHTML = "";

        todoList.todos.forEach(function(todo, position) {
            var todoLi = document.createElement('li');
            var br = document.createElement("br");
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoUl.appendChild(todoLi);
            todoUl.appendChild(br);
            todoLi.appendChild(this.createDeleteButton());
        }, this)
    },

    createDeleteButton: function () {
        var deleteButton = document.createElement("button");
        deleteButton.className = "deleteButton";
        deleteButton.textContent = "Delete";
        return deleteButton;
    },

    setUpEventListeners: function() {
        var todosUl = document.querySelector('ul');

        todosUl.addEventListener('click', function(event) {
            //get the element clicked
            var clickedElement = event.target;

            //check if it is the button
            if (clickedElement.className === "deleteButton") {
                handlers.deleteTodo(parseInt(clickedElement.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();
