import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import chevronLeft from '../assets/chevronLeft.svg';

function CipherPuzzle() {
	const message = 'Happy birthday';

	function encrypt(message) {
		const alphabet = 'abcdefghijklmnopqrstuvwxyz';
		let encryptedMessage = '';

		for (let i = 0; i < message.length; i++) {
			if (message[i] === ' ') {
				encryptedMessage += ' ';
				continue;
			}

			for (let j = 0; j < alphabet.length; j++) {
				if (message[i].toLowerCase() === alphabet[j]) {
					const shiftedIndex = (j + 3) % alphabet.length;
					encryptedMessage += alphabet[shiftedIndex];
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

	const navigate = useNavigate();

	const handleClick = () => {
		if (input === message.toLowerCase()) {
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

	return (
		<div
			className={`flex h-screen flex-col items-center transition-colors duration-1000 ${solved && 'bg-black'}`}>
			<div className='flex w-full max-w-md items-center justify-center py-16'>
				<Link
					to='/'
					className='mr-auto cursor-pointer p-4 hover:opacity-75'>
					<img src={chevronLeft} className='w-8 invert filter' />
				</Link>
				<h1 className='absolute text-xl text-neutral-50'>
					Cipher Puzzle
				</h1>
			</div>

			{!solved && (
				<div className='flex w-full max-w-xs flex-1 flex-col justify-center pb-40 md:max-w-md'>
					<div className='rounded bg-neutral-950'>
						<p className='text-green p-4 text-center text-xl'>
							{encrypt(message)}
						</p>
					</div>

					<textarea
						value={input}
						onChange={handleChange}
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
							className='mx-auto w-1/2 rounded bg-yellow-400 p-2 text-xl font-semibold'>
							Decipher
						</button>
					)}
				</div>
			)}

			{solved && (
				<div className='flex flex-1 items-center pb-40'>
					<p className='text-2xl text-yellow-400'>
						🎉 Correct! Good job! 🎉
					</p>
				</div>
			)}
		</div>
	);
}

export default CipherPuzzle;
