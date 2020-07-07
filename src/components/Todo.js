import React from 'react';

const Todo = (props) => {
    console.log(JSON.stringify(props));

    return (
        <div className=
            {`thing${props.thing.completed ? ' completed' : ''}`}
            onClick={() => props.toggleErrand(props.thing.id)}
        >
            <p>{props.thing.task}</p>
        </div>
    );
};

export default Todo;