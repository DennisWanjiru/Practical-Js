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
                console.log(this.todos[i].todoText);
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
    }
};
