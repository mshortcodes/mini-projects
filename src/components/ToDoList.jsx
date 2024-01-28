import { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronLeft from '../assets/chevronLeft.svg';

function ToDoList() {
	const [taskInput, setTaskInput] = useState();
	const [tasks, setTasks] = useState([]);

	const handleInputChange = (e) => {
		setTaskInput(e.target.value);
	};

	// update tasks state by creating new array with existing tasks and new task input
	// clear task input
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

	// access previous state with functional form of state setter
	// create copy of tasks and remove most recent one
	const handleDeleteTask = () => {
		setTasks((prevTasks) => {
			const updatedTasks = [...prevTasks];
			updatedTasks.pop();
			return updatedTasks;
		});
	};

	// update tasks array to include everything except the one clicked
	const handleDeleteEachTask = (index) => {
		setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
	};

	return (
		<div className='flex h-screen flex-col items-center'>
			<div className='absolute flex w-full max-w-xs justify-center pt-16'>
				<Link to='/' className='mr-auto'>
					<img
						src={chevronLeft}
						className='w-8 cursor-pointer invert filter hover:opacity-75'
					/>
				</Link>
				<h1 className='absolute text-xl text-neutral-50'>To-Do List</h1>
			</div>

			<div className='flex w-full max-w-xs flex-1 flex-col justify-center'>
				<div className='flex flex-col'>
					<input
						value={taskInput}
						onChange={handleInputChange}
						onKeyDown={handleEnterKey}
						className='w-full rounded-lg border border-neutral-50 bg-transparent p-2 text-neutral-50'></input>

					<div className='flex justify-between'>
						<button
							onClick={handleAddTask}
							className='mr-1 mt-2 flex-1 rounded-lg bg-green-500 p-2 text-neutral-950 hover:opacity-75'>
							Add Task
						</button>
						<button
							onClick={handleDeleteTask}
							className='ml-1 mt-2 flex-1 rounded-lg bg-red-500 p-2 text-neutral-950 hover:opacity-75'>
							Delete Task
						</button>
					</div>

					<ul className='mt-2 h-10 list-none'>
						{tasks.map((task, index) => (
							<li
								key={index}
								className='mb-2 flex justify-between rounded-md bg-neutral-700 p-2 text-neutral-50'>
								<span className='w-11/12 overflow-hidden'>
									{task}
								</span>
								<span
									onClick={() => {
										handleDeleteEachTask(index);
									}}
									className='cursor-pointer text-xl leading-none hover:opacity-75'>
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
