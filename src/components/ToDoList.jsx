import { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronRight from '../assets/chevronRight.svg';
import chevronLeft from '../assets/chevronLeft.svg';

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
		<div className='flex flex-col items-center h-screen'>
			<div className='max-w-xs w-full pt-16 flex justify-between absolute'>
				<Link to='/'>
					<img
						src={chevronLeft}
						className='w-8 filter invert hover:opacity-75 cursor-pointer'
					/>
				</Link>
				<h1 className='text-neutral-50 text-xl'>To-Do List</h1>
				<Link to='/tic-tac-toe'>
					<img
						src={chevronRight}
						className='w-8 filter invert hover:opacity-75 cursor-pointer'
					/>
				</Link>
			</div>

			<div className='flex flex-col justify-center flex-1 max-w-xs w-full'>
				<div className='flex flex-col'>
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

					<ul className='mt-2 list-none h-0'>
						{tasks.map((task, index) => (
							<li
								key={index}
								className='text-neutral-50 bg-neutral-700 my-2 p-1 rounded-md flex justify-between'>
								<span className='w-11/12 overflow-hidden'>
									{task}
								</span>
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
		</div>
	);
}

export default ToDoList;
