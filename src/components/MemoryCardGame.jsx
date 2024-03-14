import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chevronLeft from '../assets/chevronLeft.svg';

const Card = ({ value, onClick, isFlipped, isMatched }) => {
	return (
		<div
			onClick={onClick}
			className={`flex h-20 cursor-pointer items-center justify-center rounded hover:bg-neutral-950 hover:ring hover:ring-yellow-400 md:h-24 ${
				isFlipped
					? 'bg-neutral-950'
					: isMatched
						? 'bg-neutral-950 ring ring-yellow-400'
						: 'bg-neutral-50'
			}`}>
			{(isFlipped || isMatched) && value}
		</div>
	);
};

const Trophy = () => {
	return (
		<div className='flex flex-col items-center'>
			<span className='text-trophy-xl md:text-trophy-xxl animate-bounce'>
				🏆
			</span>
			<p className='text-xl text-neutral-50'>🎉 Congratulations! 🎉</p>
		</div>
	);
};

const MemoryCardGame = () => {
	const symbols = ['⭐', '🚀', '⚡', '❄️', '🧁', '🐲', '🃏', '🍕'];
	const [cards, setCards] = useState([]);
	const [flippedCards, setFlippedCards] = useState([]);
	const [matchedPairs, setMatchedPairs] = useState([]);

	// shuffle symbols and assign them to cards only on mount
	useEffect(() => {
		const shuffledSymbols = [...symbols, ...symbols].sort(
			() => Math.random() - 0.5,
		);
		setCards(shuffledSymbols);
	}, []);

	const handleClick = (index) => {
		// set conditions: if only one or zero cards have been flipped,
		// and the clicked card is not already flipped, and the clicked card is not matched
		if (
			flippedCards.length < 2 &&
			!flippedCards.includes(index) &&
			!matchedPairs.includes(index)
		) {
			// create copy of flippedCards array and assign newFlippedCards to it plus the clicked card
			const newFlippedCards = [...flippedCards, index];
			setFlippedCards(newFlippedCards);

			// destructure indices of the clicked cards if they match
			if (newFlippedCards.length === 2) {
				const [firstCardIndex, secondCardIndex] = newFlippedCards;

				// assign the indices to the matchedPairs array if there is a match
				if (cards[firstCardIndex] === cards[secondCardIndex]) {
					setMatchedPairs((prev) => [
						...prev,
						firstCardIndex,
						secondCardIndex,
					]);
					// reset state of flippedCards
					setFlippedCards([]);
				} else {
					// time out after 1 second if no match
					setTimeout(() => {
						setFlippedCards([]);
					}, 1000);
				}
			}
		}
	};

	return (
		<div className='flex h-screen flex-col items-center'>
			<div className='flex w-full max-w-xs items-center justify-center py-16 md:max-w-md'>
				<Link
					to='/'
					className='mr-auto cursor-pointer hover:opacity-75'>
					<img src={chevronLeft} className='w-7 invert filter ' />
				</Link>
				<h1 className='absolute text-xl text-neutral-50'>
					Memory Card Game
				</h1>
			</div>

			<div className='flex w-full max-w-xs flex-1 flex-col justify-center pb-40 md:max-w-md'>
				{matchedPairs.length === cards.length ? (
					<Trophy />
				) : (
					<div className='grid grid-cols-4 grid-rows-4 gap-5 text-6xl'>
						{cards.map((card, index) => (
							<Card
								value={card}
								key={index}
								isFlipped={flippedCards.includes(index)}
								isMatched={matchedPairs.includes(index)}
								onClick={() => handleClick(index)}
							/>
						))}
					</div>
				)}
			</div>
		</div>
	);
};

export default MemoryCardGame;
