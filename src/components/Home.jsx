import { Link } from 'react-router-dom';

function Home() {
	return (
		<div className='flex h-screen flex-col items-center'>
			<div className='absolute flex w-full max-w-xs justify-center pt-16'>
				<h1 className='text-xl text-neutral-50'>Mini Projects</h1>
			</div>

			<div className='flex w-full max-w-xs flex-1 flex-col justify-center md:max-w-md'>
				<div className='flex justify-center'>
					<Link to='/to-do-list'>
						<div className='m-2 cursor-pointer rounded-lg border-2 border-neutral-50 p-4 text-4xl selection:bg-transparent hover:bg-neutral-950 hover:shadow-md hover:shadow-yellow-400 md:text-6xl'>
							📝
						</div>
					</Link>
					<Link to='/tic-tac-toe'>
						<div className='hover:shadow-yellow-400md:text-6xl m-2 cursor-pointer rounded-lg border-2 border-neutral-50 p-4 text-4xl selection:bg-transparent hover:bg-neutral-950 hover:shadow-md md:text-6xl '>
							✖️
						</div>
					</Link>
					<Link to='weather-app'>
						<div className='hover:shadow-yellow-400md:text-6xl m-2 cursor-pointer rounded-lg border-2 border-neutral-50 p-4 text-4xl selection:bg-transparent hover:bg-neutral-950 hover:shadow-md md:text-6xl '>
							🌦️
						</div>
					</Link>
				</div>
				<div className='flex justify-center'>
					<Link to='/memory-card-game'>
						<div className='hover:shadow-yellow-400md:text-6xl m-2 cursor-pointer rounded-lg border-2 border-neutral-50 p-4 text-4xl selection:bg-transparent hover:bg-neutral-950 hover:shadow-md md:text-6xl '>
							🃏
						</div>
					</Link>
					<Link to='flashcards'>
						<div className='hover:shadow-yellow-400md:text-6xl m-2 cursor-pointer rounded-lg border-2 border-neutral-50 p-4 text-4xl selection:bg-transparent hover:bg-neutral-950 hover:shadow-md md:text-6xl '>
							🦒
						</div>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default Home;
