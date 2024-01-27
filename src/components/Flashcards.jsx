import { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronRight from '../assets/chevronRight.svg';
import chevronLeft from '../assets/chevronLeft.svg';
import resetArrows from '../assets/resetArrows.svg';

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
	// resets answer state so that only questions are shown
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
	// toggles between showing question and answer
	const toggleShowAnswer = () => {
		setShowAnswer(!showAnswer);
	};

	return (
		<div className='flex flex-col items-center h-screen'>
			<div className='max-w-xs w-full pt-16 flex justify-between absolute'>
				<Link to='/'>
					<img
						src={chevronLeft}
						className='w-8 filter invert hover:opacity-75 cursor-pointer'
					/>
				</Link>
				<h1 className='text-neutral-50 text-xl'>Flashcards</h1>
				<Link to='/'>
					<img
						src={chevronRight}
						className='w-8 filter invert hover:opacity-75 cursor-pointer'
					/>
				</Link>
			</div>

			<div className='flex flex-col justify-center items-center flex-1 max-w-xs w-full'>
				<div
					onClick={toggleShowAnswer}
					className='flex items-center justify-center bg-black h-40 ring ring-yellow-400 rounded w-11/12 cursor-pointer'>
					<p
						className={`text-neutral-50 text-center p-4 bg-black selection:bg-transparent ${
							showAnswer ? 'text-8xl' : ''
						}`}>
						{showAnswer
							? flashcards[currentFlashCard].answer
							: flashcards[currentFlashCard].question}
					</p>
				</div>
				<div className='flex p-2'>
					<p
						onClick={previousFlashCard}
						className='text-3xl cursor-pointer hover:opacity-75 selection:bg-transparent'>
						⬅️
					</p>
					<p
						onClick={nextFlashCard}
						className='text-3xl cursor-pointer hover:opacity-75 selection:bg-transparent'>
						➡️
					</p>
				</div>
			</div>
		</div>
	);
}

export default Flashcards;
