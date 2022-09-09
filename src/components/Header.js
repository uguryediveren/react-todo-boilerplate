import React, { useState } from 'react';

export default function Header({ setTodos, todos }) {

    const [input, setInput] = useState({ text: "", completed: false });

    const handleChange = (e) => {
        setInput({ ...input, text: e.target.value });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, input]);
        setInput({ text: "", completed: false });
    };

    return (
        <header className="header">
            <h1>todos</h1>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    value={input.text}
                    className="new-todo"
                    placeholder="What needs to be done?"
                    autoFocus
                />
            </form>

        </header>
    );
}
