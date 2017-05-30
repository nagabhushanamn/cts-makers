
$(function () {


    let todos = [
        { id: 1, title: 'eat', completed: true },
        { id: 2, title: 'work1', completed: false }
    ];

    let todoApp = {
        todos: [],
        init: function () {
            this.todos = todos
            this.bindEvents();
            this.render();
        },
        bindEvents: function () {
            $('.new-todo').on('keyup', this.create.bind(this));
        },
        render: function () {

            let $todoList = $('.todo-list'); // container

            let todosHTML = [];

            this.todos.forEach(todo => {
                let todoTemplate = `
                    <li class="" class="">
                    <div class="view">
                        <input type="checkbox" class="toggle" />
                        <label>${todo.title}</label>
                        <button class="destroy"></button>
                    </div>
                </li>
                `;
                todosHTML.push(todoTemplate);
            });

            $todoList.children().remove();
            $todoList.append(todosHTML.join(" ")); // One-Time DOM manipulation

        },
        create: function (e) {

            let $input = $(e.target);
            let val = $input.val();

            if (e.which !== 13 || !val)
                return;

            let newTodo = {
                id: Math.floor(Math.random() * 1000),
                title: val,
                completed: false
            };

            this.todos.push(newTodo);
            this.render();
            $input.val("");

        }


    };

    todoApp.init();


});