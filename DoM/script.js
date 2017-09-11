"use strict";
//Objescts
var todoList = {
    todos: [],
    displayTodo: function() {
        if (this.todos.length === 0) {
            console.log("Please add Items to your todo List");
        } else {
            console.log("My Todos: ");
            for (var i = 0; i < this.todos.length; i++) {
                if (this.todos[i].completed === true) {
                    console.log("(x)", this.todos[i].todoText);
                } else {
                    console.log("( )", this.todos[i].todoText);                    
                }
            }
        }        
    },

    addTodo: function(todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
        this.displayTodo();
    },

    changeTodo: function(position, todoText) {
        this.todos[position].todoText = todoText;
        this.displayTodo();
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodo();
    },

    toggleTodo: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
        this.displayTodo();
    }, 

    toggleAll: function() {
        var totalTodos = this.todos.length;
        var completedTodos = 0;
        var incompleteTodos = 0;

        for (var i = 0; i < totalTodos; i++) {
            if (this.todos[i].completed === true) {
                completedTodos++;
            }
        }

        if (completedTodos === totalTodos) {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = false;
            }
        } else {
            for (var i = 0; i < totalTodos; i++) {
                this.todos[i].completed = true;
            }
        }

        this.displayTodo();
    }
};


var displayTodosBtn = document.getElementById("displayTodosBtn");
var toggleTodosBtn = document.getElementById("toggleTodosBtn");

displayTodosBtn.addEventListener('click', function() {
    todoList.displayTodo();
});

toggleTodosBtn.addEventListener('click', function() {
    todoList.toggleAll();
});