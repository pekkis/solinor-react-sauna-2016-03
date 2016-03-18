import React from 'react';

export default class AddTodoForm extends React.Component {

    handleSubmit(e) {
        e.preventDefault();
        const { addTodo } = this.props;
        addTodo(this.refs.text.value);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit.bind(this)}>
                <input ref="text" />
                <button type="submit">Submitore</button>
            </form>
        );
    }
}
