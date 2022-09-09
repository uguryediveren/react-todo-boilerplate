import React from 'react';

export default function Todos({ setTodos, filteredTodos, todos, setFilteredTodos }) {


    const handleCheck = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
    };

    return (
        <section className="main">
            <input className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>

            <ul className="todo-list">
                {filteredTodos && filteredTodos.map((todo, index) => (
                    <li key={index} className={todo.completed ? 'completed' : ''}>
                        <div className="view" >
                            <input className="toggle" onChange={() => handleCheck(index)} checked={todo.completed} type="checkbox" />
                            <label>{todo.text}</label>
                            <button className="destroy" onClick={() => handleDelete(index)}></button>
                        </div>
                    </li>
                ))}
            </ul>
        </section >
    );
}
