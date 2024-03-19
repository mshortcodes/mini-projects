import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import chevronLeft from '../assets/chevronLeft.svg';

function CipherPuzzle() {
	const message = 'This is a Caesar cipher';
	const clue = 'a = d';

	function encrypt(message) {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		let encryptedMessage = '';

		for (let i = 0; i < message.length; i++) {
			for (let j = 0; j < alphabet.length; j++) {
				if (message[i].toLowerCase() === alphabet[j]) {
					const isUpperCase =
						message[i] === alphabet[j].toUpperCase();
					const shiftedIndex = (j + 3) % alphabet.length;
					const encryptedChar = isUpperCase
						? alphabet[shiftedIndex].toUpperCase()
						: alphabet[shiftedIndex];
					encryptedMessage += encryptedChar;
					break;
				} else if (!alphabet.includes(message[i].toLowerCase())) {
					encryptedMessage += message[i];
					break;
				}
			}
		}

		return encryptedMessage;
	}

	const [input, setInput] = useState('');

	const handleChange = (event) => {
		setInput(event.target.value);
	};

	const [solved, setSolved] = useState(false);
	const [showError, setShowError] = useState(false);
	const [showClue, setShowClue] = useState(false);

	const navigate = useNavigate();

	const handleClick = () => {
		if (input.toLowerCase().trim() === message.toLowerCase().trim()) {
			setSolved(true);
			setTimeout(() => {
				navigate('/');
			}, 2000);
		} else {
			setShowError(true);
			setTimeout(() => {
				setShowError(false);
			}, 2000);
		}
	};

	const handleEnter = (event) => {
		if (event.key === 'Enter') {
			event.preventDefault();
			handleClick();
		}
	};

	const handleShowClue = () => {
		setShowClue(true);
	};

	return (
		<div
			className={`flex h-screen flex-col items-center transition-colors duration-1000 ${solved && 'bg-black'}`}>
			<div className='relative flex w-full max-w-xs items-center justify-center py-20 md:max-w-md'>
				<Link
					to='/'
					className='absolute -left-4 mr-auto cursor-pointer p-4 hover:opacity-75'>
					<img src={chevronLeft} className='w-7 invert filter' />
				</Link>
				<h1 className='absolute text-xl text-neutral-50'>
					Cipher Puzzle
				</h1>
			</div>

			{!solved && (
				<div className='flex w-full max-w-xs flex-1 flex-col justify-center pb-40 md:max-w-md'>
					<div className='relative flex flex-col items-center space-y-2 rounded bg-neutral-950 p-4'>
						<p className='text-green justify-center px-4 text-center text-xl md:px-0'>
							{encrypt(message)}
						</p>
						{showClue ? (
							<p className='justify-center italic text-yellow-400'>
								{clue}
							</p>
						) : (
							<button
								onClick={handleShowClue}
								className='absolute bottom-0 right-0 p-4 text-xl hover:opacity-75'>
								🗝️
							</button>
						)}
					</div>

					<textarea
						value={input}
						onChange={handleChange}
						onKeyDown={handleEnter}
						rows='1'
						className='my-10 h-40 w-full resize-none overflow-hidden rounded border border-neutral-50 bg-neutral-700 p-4 text-xl text-neutral-50 outline-none placeholder:text-neutral-400 focus:border-yellow-400'
						placeholder='Decipher the message here'></textarea>
					{showError ? (
						<p className='p-2 text-center text-xl font-semibold text-red-500'>
							Wrong answer. Try again!
						</p>
					) : (
						<button
							onClick={handleClick}
							className='mx-auto w-1/2 rounded bg-yellow-400 p-2 text-xl font-semibold hover:opacity-75'>
							Decipher
						</button>
					)}
				</div>
			)}

			{solved && (
				<div className='flex flex-1 items-center pb-40'>
					<p className='text-xl text-yellow-400 md:text-2xl'>
						🎉 Correct! Good job! 🎉
					</p>
				</div>
			)}
		</div>
	);
}

export default CipherPuzzle;
