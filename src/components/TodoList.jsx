import React from 'react';
import TodoItem from './TodoItem';

export default function TodoList(props) {

    const { todos } = props;

    return (
        <ul>
            {todos.map(todo => {
                return (
                    <TodoItem key={todo.id} todo={todo} />
                );
            })}
        </ul>
    );
};

export default TodoList;
