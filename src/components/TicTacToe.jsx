import resetArrows from '../assets/resetArrows.svg';

function TicTacToe() {
	return (
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				Tic-Tac-Toe
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs'>
					<div
						id='board'
						className='grid grid-rows-3 grid-cols-3 h-60 border cursor-pointer text-center text-4xl mb-2'>
						<div
							id='cell-1'
							className='border border-neutral-50 p-4 hover:ring hover:ring-yellow-400'></div>
						<div
							id='cell-2'
							className='border border-neutral-50 p-4 hover:ring hover:ring-yellow-400'></div>
						<div
							id='cell-3'
							className='border border-neutral-50 p-4 hover:ring hover:ring-yellow-400'></div>
						<div
							id='cell-4'
							className='border border-neutral-50 p-4 hover:ring hover:ring-yellow-400'></div>
						<div
							id='cell-5'
							className='border border-neutral-50 p-4 hover:ring hover:ring-yellow-400'></div>
						<div
							id='cell-6'
							className='border border-neutral-50 p-4 hover:ring hover:ring-yellow-400'></div>
						<div
							id='cell-7'
							className='border border-neutral-50 p-4 hover:ring hover:ring-yellow-400'></div>
						<div
							id='cell-8'
							className='border border-neutral-50 p-4 hover:ring hover:ring-yellow-400'></div>
						<div
							id='cell-9'
							className='border border-neutral-50 p-4 hover:ring hover:ring-yellow-400'></div>
					</div>

					<div className='flex justify-between items-center'>
						<div
							id='tic-tac-toe'
							className='text-neutral-50 text-xl'>
							✖️ has won!
						</div>
						<div>
							<img
								id='resetBtn'
								src={resetArrows}
								className='w-8 cursor-pointer filter invert'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default TicTacToe;
