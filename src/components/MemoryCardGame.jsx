import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import chevronLeft from '../assets/chevronLeft.svg';

const Card = ({ value, onClick, isFlipped, isMatched }) => {
	return (
		<div
			onClick={onClick}
			className={`flex justify-center items-center rounded h-20 cursor-pointer hover:bg-neutral-950 hover:ring hover:ring-yellow-400 ${
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
		<div className='flex items-center flex-col'>
			<span className='text-trophy-xl animate-bounce'>🏆</span>
			<p className='text-xl text-neutral-50'>🎉 Congratulations! 🎉</p>
		</div>
	);
};

const MemoryCardGame = () => {
	const symbols = ['⭐', '🎂', '⚡', '❄️', '👑', '🍇', '🃏', '🎈'];
	const [cards, setCards] = useState([]);
	const [flippedCards, setFlippedCards] = useState([]);
	const [matchedPairs, setMatchedPairs] = useState([]);

	// shuffles symbols and assigns them to cards only on mount
	useEffect(() => {
		const shuffledSymbols = [...symbols, ...symbols].sort(
			() => Math.random() - 0.5
		);
		setCards(shuffledSymbols);
	}, []);

	const handleClick = (index) => {
		// sets conditions: if only one or zero cards have been flipped,
		// and the clicked card is not already flipped, and the clicked card is not matched
		if (
			flippedCards.length < 2 &&
			!flippedCards.includes(index) &&
			!matchedPairs.includes(index)
		) {
			// creates copy of flippedCards array and assigns newFlippedCards to it plus the clicked card
			const newFlippedCards = [...flippedCards, index];
			setFlippedCards(newFlippedCards);

			// destructures indices of the clicked cards if they match
			if (newFlippedCards.length === 2) {
				const [firstCardIndex, secondCardIndex] = newFlippedCards;

				// assigns the indices to the matchedPairs array if there is a match
				if (cards[firstCardIndex] === cards[secondCardIndex]) {
					setMatchedPairs((prev) => [
						...prev,
						firstCardIndex,
						secondCardIndex,
					]);
					// resets state of flippedCards
					setFlippedCards([]);
				} else {
					// times out after 1 second if no match
					setTimeout(() => {
						setFlippedCards([]);
					}, 1000);
				}
			}
		}
	};

	return (
		<div className='flex flex-col items-center h-screen'>
			<div className='max-w-xs w-full pt-16 flex justify-center absolute'>
				<Link to='/' className='mr-auto'>
					<img
						src={chevronLeft}
						className='w-8 filter invert hover:opacity-75 cursor-pointer'
					/>
				</Link>
				<h1 className='text-neutral-50 text-xl absolute'>
					Memory Card Game
				</h1>
			</div>

			<div className='flex flex-col justify-center flex-1 max-w-xs w-full'>
				{matchedPairs.length === cards.length ? (
					<Trophy />
				) : (
					<div className='grid grid-rows-4 grid-cols-4 text-6xl gap-4'>
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
