// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js

import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    console.log('props: ' + JSON.stringify(props))

    return (
        <div className='list'>
            {props.errands.map(x => 
                <Todo key={x.id} thing={x} toggleErrand={props.toggleErrand} />
            )}
            {/* <button className="clear-btn" onClick={props.clearCompleted}>
                Completed
          </button> */}
        </div>
    )
}

export default TodoList;