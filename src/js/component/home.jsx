import React, { useState } from "react";

//create your first component
const Home = () => {
	const [task, setTask] = useState("")
	const [todos, setTodos] = useState(["Tarea 1", "Tarea 2"])

	function addTask(e) {
		if (e.code === "Enter") {
			// Aqui se agrega la tarea
			setTodos([...todos, task])
			setTask("")
		}

	}
	function delTask(index) {
		// Aqui se elimina la tarea
		setTodos([
			...todos.slice(0, index),
			...todos.slice(index+1)
		])
		// Aqui se elimina la tarea
		/* let nuevoTodos = [...todos]
		nuevoTodos.splice(index, 1)
		setTodos(nuevoTodos) */

	}
	return (
		< div className="card" >
			<input type="email" className="form-control" id="exampleFormControlInput1" placeholder={todos.length == 0 ? "No tasks, add tasks" : "What needs to be done?"} value={task} onChange={(e) => setTask(e.target.value)} onKeyDown={addTask
			}></input>
			<ul className="list-group list-group-flush">
				{
					todos.map((todo, index) => (
						<li key={index} className="list-group-item d-flex justify-content-between align-items-center">
							{todo}
							<button onClick={() => delTask(index)} className="btn btn-outline-danger btn-sm rounded-pill">X</button>
						</li>
					))
				}

			</ul>
			<div className="card-footer">
				{todos.length} items
			</div>
		</div >
	);
};

export default Home;
