import React, { useState } from 'react';

export default function Footer({ todos, setFilteredTodos, filteredTodos, complete }) {

    const [classes, setClasses] = useState({
        all: 'selected',
        active: '',
        completed: ''
    });


    const handleGetAll = () => {
        setClasses({
            all: 'selected',
            active: '',
            completed: ''
        });

        setFilteredTodos(todos);
    };

    const handleGetAllActive = () => {

        setClasses({
            all: '',
            active: 'selected',
            completed: ''
        });

        setFilteredTodos(filteredTodos.filter(todo => !todo.completed));
    };

    const handleGetAllCompleted = () => {

        setClasses({
            all: '',
            active: '',
            completed: 'selected'
        });

        setFilteredTodos(todos.filter(todo => todo.completed));
    };

    const handleClearCompleted = () => {
        setFilteredTodos(filteredTodos.filter(todo => !todo.completed));
    };



    return (
        <footer className="footer">
            <span className="todo-count">
                <strong>{todos.length - complete} </strong>
                items left
            </span>

            <ul className="filters">
                <li>
                    <a href="#/" onClick={() => handleGetAll()} className={classes.all}>
                        All
                    </a>
                </li>
                <li>
                    <a href="#/" onClick={() => handleGetAllActive()} className={classes.active}>Active</a>
                </li>
                <li>
                    <a href="#/" onClick={() => handleGetAllCompleted()} className={classes.completed}>Completed</a>
                </li>
            </ul>

            <button className="clear-completed" onClick={() => handleClearCompleted()} >Clear completed</button>
        </footer >
    );
}
