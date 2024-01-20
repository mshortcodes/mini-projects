function ToDoList() {
	return (
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				To-Do List
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs'>
					<input className='w-full border border-neutral-50 bg-transparent p-1 rounded-lg text-neutral-50'></input>

					<div className='justify-between flex'>
						<button className='bg-neutral-200 p-1 mr-2 mt-2 rounded-lg flex-1 text-neutral-950'>
							Add Task
						</button>
						<button className='bg-neutral-200 p-1 ml-2 mt-2 rounded-lg flex-1 text-neutral-950'>
							Delete Task
						</button>
					</div>

					<ul
						id='taskList'
						className='list-inside list-disc mt-2 text-neutral-50 text-left text-xl'>
						<li>hi</li>
					</ul>
				</div>
			</div>
		</>
	);
}

export default ToDoList;
