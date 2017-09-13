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

    deleteTodo: function() {
        var deleteTodoPosition = document.querySelector("#deleteTodoPosition");
        todoList.deleteTodo(deleteTodoPosition.valueAsNumber);
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

        for (var i = 0; i < todoList.todos.length; i++) {
            var todoLi = document.createElement('li');
            var todo = todoList.todos[i];
            var todoTextWithCompletion = "";

            if (todo.completed === true) {
                todoTextWithCompletion = "(x) " + todo.todoText;
            } else {
                todoTextWithCompletion = "( ) " + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todoUl.appendChild(todoLi);
        }
    }
};
