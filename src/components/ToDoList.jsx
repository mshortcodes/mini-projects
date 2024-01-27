import { useState } from 'react';

function ToDoList() {
	const [taskInput, setTaskInput] = useState();
	const [tasks, setTasks] = useState([]);

	const handleInputChange = (e) => {
		setTaskInput(e.target.value);
	};

	// updates tasks state by creating new array with existing tasks and new task input
	// clears task input
	const handleAddTask = () => {
		if (taskInput.trim() !== '') {
			setTasks([...tasks, taskInput]);
			setTaskInput('');
		}
	};

	const handleEnterKey = (e) => {
		if (e.key === 'Enter') {
			handleAddTask();
		}
	};

	// accesses previous state with functional form of state setter
	// creates copy of tasks and removes most recent one
	const handleDeleteTask = () => {
		setTasks((prevTasks) => {
			const updatedTasks = [...prevTasks];
			updatedTasks.pop();
			return updatedTasks;
		});
	};

	// updates tasks array to include everything except the one clicked
	const handleDeleteEachTask = (index) => {
		setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
	};

	return (
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				To-Do List
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs'>
					<input
						value={taskInput}
						onChange={handleInputChange}
						onKeyDown={handleEnterKey}
						className='w-full border border-neutral-50 bg-transparent p-1 rounded-lg text-neutral-50'></input>

					<div className='justify-between flex'>
						<button
							onClick={handleAddTask}
							className='bg-green-500 p-1 mr-2 mt-2 rounded-lg flex-1 text-neutral-950 hover:opacity-75'>
							Add Task
						</button>
						<button
							onClick={handleDeleteTask}
							className='bg-red-500 p-1 ml-2 mt-2 rounded-lg flex-1 text-neutral-950 hover:opacity-75'>
							Delete Task
						</button>
					</div>

					<ul className='mt-2'>
						{tasks.map((task, index) => (
							<li
								key={index}
								className='text-neutral-50 bg-neutral-700 my-2 p-1 rounded-md flex justify-between'>
								<span>{task}</span>
								<span
									onClick={() => {
										handleDeleteEachTask(index);
									}}
									className='text-xl cursor-pointer hover:opacity-75 leading-none'>
									❌
								</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</>
	);
}

export default ToDoList;
