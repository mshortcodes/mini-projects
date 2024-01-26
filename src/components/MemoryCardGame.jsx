import { useState, useEffect } from 'react';

const Card = ({ value, onClick, isFlipped, isMatched }) => {
	return (
		<div
			onClick={onClick}
			className={`flex justify-center items-center rounded h-20 cursor-pointer hover:bg-black hover:ring hover:ring-yellow-400 ${
				isFlipped
					? 'bg-black'
					: isMatched
					? 'bg-black ring ring-yellow-400'
					: 'bg-neutral-50'
			}`}>
			{(isFlipped || isMatched) && value}
		</div>
	);
};

const Trophy = () => {
	return <div className='flex justify-center text-trophy-xl'>🏆</div>;
};

const MemoryCardGame = () => {
	const symbols = ['⭐', '🎂', '⚡', '❄️', '👑', '🍇', '🗝️', '🎈'];
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
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				Memory Card Game
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs'>
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
		</>
	);
};

export default MemoryCardGame;
