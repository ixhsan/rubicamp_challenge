class Model {
    constructor() {
        // The state of the model, an array of todo objects, prepopulated with some data
        this.todos = [
            { id: 1, text: 'Run a marathon', complete: false },
            { id: 2, text: 'Plant a garden', complete: false }
        ]
    }

    addTodo(todoText) {
        const todo = {
            id: this.todos.length > 0 ? this.todos[this.todos.length - 1].id + 1 : 1,
            text: todoText,
            complete: false,
        }

        this.todos.push(todo)
    }

    // Map through all todos, and replace the text of the todo with the specified id
    editTodo(id, updatedText) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { id: todo.id, text: updatedText, complete: todo.complete } : todo
        )
    }

    // Filter a todo out of the array by id
    deleteTodo(id) {
        this.todos = this.todos.filter((todo) => todo.id !== id)
    }

    // 
    toggleTodo(id) {
        this.todos = this.todos.map((todo) =>
            todo.id === id ? { id: todo.id, text: todo.text, complete: !todo.complete } : todo
        )
    }
}


class View {
    constructor() {
        // the root element
        this.app = this.getElement('#root')
        // the title of the app
        this.title = this.createElement('h1')
        this.title.textContent = 'Todos'
        // the form, with a [type="text"] input, and a submit button
        this.form = this.createElement('form')

        this.input = this.createElement('input')
        this.input.type = 'text'
        this.input.placeholder = 'Add todo'
        this.input.name = 'todo'
        
        this.submitButton = this.createElement('button')
        this.submitButton.textContent = 'Submit'
        
        // the visual representation of todo list
        this.todoList = this.createElement('ul', 'todo-list')
        // Append the input and submit button to the form
        this.form.append(this.input, this.submitButton)
        // Append the title, form, and todo list to the app
        this.app.append(this.title, this.form, this.todoList)
    }

    createElement(tag, className) {
        const element = document.createElement(tag)
        if (className) element.classList.add(className)

        return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)

        return element
    }

    get _todoText() {
        return this.input.value
    }

    _resetInput() {
        this.input.value = ''
    }

    displayTodos(todos) {
        // Delete all nodes
        while (this.todoList.firstChild) {
            this.todoList.removeChild(this.todoList.firstChild)
        }

        // Show default message
        if (todos.length === 0) {
            const p = this.createElement('p')
            p.textContent = 'Nothing to do! Add a task?'
            this.todoList.append(p)
        } else {
            // Create todo item nodes for each 
            todos.forEach(todo => {
                const li = this.createElement('li')
                li.id = todo.id
            
            // Each todo item will have a checkbox you can toggle
                const checkbox = this.createElement('input')
                checkbox.type = 'checkbox'
                checkbox.checked = todo.complete

            // The todo item text will be in a contenteditable span
            const span = this.createElement('span')
            span.contentEditable = true
            span.classList.add('editable')

            // If the todo is complete, it will have a strikethrough
            if (todo.complete) {
                const strike = this.createElement('s')
                strike.textContent = todo.text
                span.append(strike)
            } else {
                // Otherwise just display the text
                span.textContent = todo.text
            }

            // The todos will also have a delete button
            const deleteButton = this.createElement('button', 'delete')
            deleteButton.textContent = 'Delete'
            li.append(checkbox, span, deleteButton)

            // Append nodes to the todo list
            this.todoList.append(li)
            })
        }

    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view

        // Display initial todos
        this.onTodoListChanged(this.model.todos)
    }

    onTodoListChanged = (todos) => {
        this.view.displayTodos(todos)
    }
}

const app = new Controller(new Model(), new View())

// TEST Model instance phase 1
// app.model.addTodo('Makan')
// console.log(app.model);
