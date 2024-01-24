import { useState } from 'react';

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

	const nextFlashCard = () => {
		setCurrentFlashCard((previous) => {
			return (previous + 1) % flashcards.length;
		});
	};

	const previousFlashCard = () => {
		setCurrentFlashCard((previous) => {
			return (previous - 1 + flashcards.length) % flashcards.length;
		});
	};

	const toggleShowAnswer = () => {
		setShowAnswer(!showAnswer);
	};

	return (
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				Flashcards
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs flex flex-col justify-center items-center'>
					<div
						onClick={toggleShowAnswer}
						className='flex items-center justify-center bg-black h-40 ring ring-yellow-400 rounded w-11/12 cursor-pointer'>
						<p
							className={`text-neutral-50 text-center p-4 bg-black ${
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
							className='text-3xl cursor-pointer hover:opacity-75'>
							⬅️
						</p>
						<p
							onClick={nextFlashCard}
							className='text-3xl cursor-pointer hover:opacity-75'>
							➡️
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default Flashcards;
