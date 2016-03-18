import React from 'react';
import { List } from 'immutable';
import uuid from 'node-uuid';
import TodoList from './TodoList';
import AddTodoForm from './AddTodoForm';

let todos = List.of(
    {
        id: uuid.v4(),
        done: false,
        text: 'Do something'
    },
    {
        id: uuid.v4(),
        done: false,
        text: 'Do something else'
    },
);

export default class TodoApp extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            todos
        };
    }

    handleAdd(text) {

        const newTodo = {
            text,
            done: false,
            id: uuid.v4()
        };

        this.setState({
            todos: this.state.todos.push(newTodo)
        });
    }

    render() {
        return (
            <section>
                <h1>YOLO App</h1>

                <TodoList todos={this.state.todos} />
                <AddTodoForm addTodo={this.handleAdd.bind(this)} />
            </section>
        );
    }

}
