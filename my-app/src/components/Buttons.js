import React from 'react';

function Buttons({ filterBy, clearCompleted }) {
    return (
        <div className="Buttons">
            <button onClick={() => filterBy('All')}>All</button>
            <button onClick={() => filterBy('Active')}>Active</button>
            <button onClick={() => filterBy('Completed')}>Completed</button>
            <button onClick={() => clearCompleted()}>Clear</button>
        </div >
    );
}
export default Buttons;