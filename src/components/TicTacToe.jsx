import { useState } from 'react';
import resetArrows from '../assets/resetArrows.svg';

// define Square component
function Square({ value, onSquareClick, isWinner }) {
	return (
		<div
			onClick={onSquareClick}
			className={`border border-neutral-50 p-4 hover:bg-black hover:ring hover:ring-yellow-400 selection:bg-transparent ${
				isWinner ? 'bg-black ring ring-yellow-400' : ''
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
		status = `👑: ${squares[winner[0]]}`;
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
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				Tic-Tac-Toe
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs'>
					<div className='grid grid-rows-3 grid-cols-3 h-60 border cursor-pointer text-center text-4xl mb-2'>
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

					<div className='flex justify-between items-center'>
						<div className='text-neutral-50 text-xl'>{status}</div>
						<div>
							<img
								onClick={resetGame}
								src={resetArrows}
								className='w-8 cursor-pointer filter invert hover:opacity-75'
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// use indices to check for all possible winning combinations
// takes in the squares array and returns an array of the winning indices
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
