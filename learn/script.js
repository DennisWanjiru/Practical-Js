"use strict";
//Objescts
var todoList = {
    todos: [],
    displayTodo: function() {
        console.log(this.todos);
    },

    addTodo: function(todo) {
        this.todos.push(todo);
        this.displayTodo();
    },

    changeToodo: function(position, item) {
        this.todos[position] = item;
        this.displayTodo();
    },

    deleteTodo: function(position) {
        this.todos.splice(position, 1);
        this.displayTodo();
    }
};
