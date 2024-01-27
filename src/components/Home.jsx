import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='flex flex-col items-center h-screen'>
			<div className='max-w-xs w-full pt-16 flex justify-center absolute'>
				<h1 className='text-neutral-50 text-xl'>Mini Projects</h1>
			</div>

			<div className='flex flex-col justify-center flex-1 max-w-xs w-full'>
				<div className='flex justify-center'>
					<Link to='/to-do-list'>
						<div className='cursor-pointer text-4xl border-2 border-neutral-50 rounded-lg p-4 m-2 hover:bg-neutral-950 hover:shadow-md hover:shadow-yellow-400 selection:bg-transparent'>
							📝
						</div>
					</Link>
					<Link to='/tic-tac-toe'>
						<div className='cursor-pointer text-4xl border-2 border-neutral-50 rounded-lg p-4 m-2 hover:bg-neutral-950 hover:shadow-md hover:shadow-yellow-400 selection:bg-transparent'>
							✖️
						</div>
					</Link>
					<Link to='weather-app'>
						<div className='cursor-pointer text-4xl border-2 border-neutral-50 rounded-lg p-4 m-2 hover:bg-neutral-950 hover:shadow-md hover:shadow-yellow-400 selection:bg-transparent'>
							🌦️
						</div>
					</Link>
				</div>
				<div className='flex justify-center'>
					<Link to='/memory-card-game'>
						<div className='cursor-pointer text-4xl border-2 border-neutral-50 rounded-lg p-4 m-2 hover:bg-neutral-950 hover:shadow-md hover:shadow-yellow-400 selection:bg-transparent'>
							🃏
						</div>
					</Link>
					<Link to='flashcards'>
						<div className='cursor-pointer text-4xl border-2 border-neutral-50 rounded-lg p-4 m-2 hover:bg-neutral-950 hover:shadow-md hover:shadow-yellow-400 selection:bg-transparent'>
							🦒
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
