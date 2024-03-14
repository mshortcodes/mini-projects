import { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronLeft from '../assets/chevronLeft.svg';

// define Square component
function Square({ value, onSquareClick, isWinner }) {
	return (
		<div
			onClick={onSquareClick}
			className={`flex items-center justify-center border border-neutral-50 p-4 selection:bg-transparent ${
				isWinner
					? 'bg-yellow-400 hover:ring hover:ring-yellow-400'
					: 'hover:bg-neutral-950 hover:ring hover:ring-yellow-400'
			}`}>
			{value}
		</div>
	);
}

function TicTacToe() {
	// set first player as ✖️
	const [xIsNext, setXIsNext] = useState(true);
	// create empty array in squares state variable
	const [squares, setSquares] = useState(Array(9).fill(null));

	// define event handler where i is the index of the array
	function handleClick(i) {
		// check if square is already filled or if there's a winner
		if (squares[i] || calculateWinner(squares)) {
			return;
		}

		// copy the original array
		const nextSquares = squares.slice();

		// change copied array
		if (xIsNext) {
			nextSquares[i] = '✖️';
		} else {
			nextSquares[i] = '⭕';
		}

		// change original array
		setSquares(nextSquares);
		// toggle next player with boolean
		setXIsNext(!xIsNext);
	}

	const winner = calculateWinner(squares);
	const draw = calculateDraw(squares);
	let status;

	if (winner) {
		status = `🏆: ${squares[winner[0]]}`;
	} else if (draw) {
		status = `It's a draw!`;
	} else {
		status = xIsNext ? '✖️ is next' : '⭕ is next';
	}

	function resetGame() {
		setXIsNext(true);
		setSquares(Array(9).fill(null));
	}

	return (
		<div className='flex h-screen flex-col items-center'>
			<div className='flex w-full max-w-xs items-center justify-center py-16 md:max-w-md'>
				<Link
					to='/'
					className='mr-auto cursor-pointer hover:opacity-75'>
					<img src={chevronLeft} className='w-7 invert filter ' />
				</Link>
				<h1 className='absolute text-xl text-neutral-50'>
					Tic-Tac-Toe
				</h1>
			</div>

			<div className='flex w-full max-w-xs flex-1 flex-col justify-center pb-40 md:max-w-md'>
				<div className='mb-2 grid h-60 cursor-pointer grid-cols-3 grid-rows-3 border text-center text-4xl md:h-80 md:text-6xl'>
					<Square
						value={squares[0]}
						onSquareClick={() => handleClick(0)}
						isWinner={winner && winner.includes(0)}
					/>
					<Square
						value={squares[1]}
						onSquareClick={() => handleClick(1)}
						isWinner={winner && winner.includes(1)}
					/>
					<Square
						value={squares[2]}
						onSquareClick={() => handleClick(2)}
						isWinner={winner && winner.includes(2)}
					/>
					<Square
						value={squares[3]}
						onSquareClick={() => handleClick(3)}
						isWinner={winner && winner.includes(3)}
					/>
					<Square
						value={squares[4]}
						onSquareClick={() => handleClick(4)}
						isWinner={winner && winner.includes(4)}
					/>
					<Square
						value={squares[5]}
						onSquareClick={() => handleClick(5)}
						isWinner={winner && winner.includes(5)}
					/>
					<Square
						value={squares[6]}
						onSquareClick={() => handleClick(6)}
						isWinner={winner && winner.includes(6)}
					/>
					<Square
						value={squares[7]}
						onSquareClick={() => handleClick(7)}
						isWinner={winner && winner.includes(7)}
					/>
					<Square
						value={squares[8]}
						onSquareClick={() => handleClick(8)}
						isWinner={winner && winner.includes(8)}
					/>
				</div>

				<div className='flex items-center justify-between'>
					<div className='text-xl text-neutral-50'>{status}</div>
					<div>
						<svg
							onClick={resetGame}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='w-8 cursor-pointer text-neutral-50 hover:opacity-75'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99'
							/>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
}

// use indices to check for all possible winning combinations
// take in the squares array and return an array of the winning indices
function calculateWinner(squares) {
	const lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];
	for (let i = 0; i < lines.length; i++) {
		const [a, b, c] = lines[i];
		if (
			squares[a] &&
			squares[a] === squares[b] &&
			squares[a] === squares[c]
		) {
			return [a, b, c];
		}
	}
	return null;
}

// check if every square is filled for a draw
function calculateDraw(squares) {
	if (squares.every((square) => square !== null)) {
		return true;
	}
	return null;
}

export default TicTacToe;
