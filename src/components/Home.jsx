function Home() {
	return (
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				Mini Projects
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs'>
					<div className='flex justify-center'>
						<div className='cursor-pointer text-4xl border-2 border-neutral-50 rounded-lg p-4 m-2 hover:bg-black hover:shadow-md hover:shadow-yellow-400 selection:bg-transparent'>
							✖️
						</div>
						<div className='cursor-pointer text-4xl border-2 border-neutral-50 rounded-lg p-4 m-2 hover:bg-black hover:shadow-md hover:shadow-yellow-400 selection:bg-transparent'>
							🌦️
						</div>
						<div className='cursor-pointer text-4xl border-2 border-neutral-50 rounded-lg p-4 m-2 hover:bg-black hover:shadow-md hover:shadow-yellow-400 selection:bg-transparent'>
							📝
						</div>
					</div>
					<div className='flex justify-center'>
						<div className='cursor-pointer text-4xl border-2 border-neutral-50 rounded-lg p-4 m-2 hover:bg-black hover:shadow-md hover:shadow-yellow-400 selection:bg-transparent'>
							💵
						</div>
						<div className='cursor-pointer text-4xl border-2 border-neutral-50 rounded-lg p-4 m-2 hover:bg-black hover:shadow-md hover:shadow-yellow-400 selection:bg-transparent'>
							🦒
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Home;
