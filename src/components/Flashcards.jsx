import { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronLeft from '../assets/chevronLeft.svg';

function Flashcards() {
	const flashcards = [
		{ question: 'Which animal can clone itself?', answer: '🪼' },
		{ question: 'Which animal has the strongest bite?', answer: '🐊' },
		{ question: 'What is the tallest animal in the world?', answer: '🦒' },
		{
			question: 'Which animal spends 90% of the time sleeping?',
			answer: '🐨',
		},
		{
			question: 'What is the deadliest creature in the world?',
			answer: '🦟',
		},
		{
			question: 'What is the only insect that produces food for humans?',
			answer: '🐝',
		},
		{ question: 'What is the largest animal on Earth?', answer: '🐋' },
		{
			question: 'Which animal has been said to never forget?',
			answer: '🐘',
		},
		{
			question: 'Which animal uses its eyes to help it eat?',
			answer: '🐸',
		},
		{ question: 'Which animal has 3 hearts and 9 brains?', answer: '🐙' },
	];

	const [currentFlashCard, setCurrentFlashCard] = useState(0);

	const [showAnswer, setShowAnswer] = useState(false);

	// event handlers for arrows
	// reset answer state so that only questions are shown
	const nextFlashCard = () => {
		setShowAnswer(false);
		setCurrentFlashCard((previous) => {
			return (previous + 1) % flashcards.length;
		});
	};

	const previousFlashCard = () => {
		setShowAnswer(false);
		setCurrentFlashCard((previous) => {
			return (previous - 1 + flashcards.length) % flashcards.length;
		});
	};

	// event handler for clicking card
	// toggle between showing question and answer
	const toggleShowAnswer = () => {
		setShowAnswer(!showAnswer);
	};

	return (
		<div className='flex h-screen flex-col items-center'>
			<div className='flex w-full max-w-xs justify-center py-16 md:max-w-md'>
				<Link to='/' className='mr-auto'>
					<img
						src={chevronLeft}
						className='w-8 cursor-pointer invert filter hover:opacity-75'
					/>
				</Link>
				<h1 className='absolute text-xl text-neutral-50'>Flashcards</h1>
			</div>

			<div className='flex w-full max-w-xs flex-1 flex-col items-center justify-center pb-40 md:max-w-md'>
				<div
					onClick={toggleShowAnswer}
					className='flex h-40 w-11/12 cursor-pointer items-center justify-center rounded bg-neutral-950 ring ring-yellow-400 md:h-60'>
					<p
						className={`bg-neutral-950 p-4 text-center text-neutral-50 selection:bg-transparent ${
							showAnswer ? 'text-8xl' : 'md:text-xl'
						}`}>
						{showAnswer
							? flashcards[currentFlashCard].answer
							: flashcards[currentFlashCard].question}
					</p>
				</div>
				<div className='flex p-2'>
					<p
						onClick={previousFlashCard}
						className='cursor-pointer text-4xl selection:bg-transparent hover:opacity-75 md:text-5xl'>
						⬅️
					</p>
					<p
						onClick={nextFlashCard}
						className='cursor-pointer text-4xl selection:bg-transparent hover:opacity-75 md:text-5xl'>
						➡️
					</p>
				</div>
			</div>
		</div>
	);
}

export default Flashcards;
