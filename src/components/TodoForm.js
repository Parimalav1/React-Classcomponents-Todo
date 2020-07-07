import React from 'react';
// import { render } from '@testing-library/react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            errand: ''
        }
    }


    handleChanges = evt => {
        this.setState({ [evt.target.name]: evt.target.value })
    };

    submitErrand = evt => {
        evt.preventDefault();
        this.setState({ errand: '' });
        this.props.addErrand(evt, this.state.errand)
    };


    render() {
        return (
            <form onSubmit={this.submitErrand}>
                <input
                    type="text"
                    value={this.state.errand}
                    name="errand"
                    onChange={this.handleChanges}
                />
                <button>Add</button>
                <button className="clear-btn" onClick={this.props.clearCompleted}>
                Completed
                </button>
            </form>
        )
    }
}

export default TodoForm;