import { useState, useEffect } from 'react';

const Card = ({ value, isFlipped, onClick }) => {
	return (
		<div
			onClick={onClick}
			className='flex justify-center items-center rounded h-20 bg-neutral-50'>
			{isFlipped && value}
		</div>
	);
};

const MemoryCardGame = () => {
	const symbols = ['⭐', '🎂', '⚡', '❄️', '👑', '🍇', '🗝️', '🎈'];
	const [cards, setCards] = useState([]);
	const [flippedCards, setFlippedCards] = useState([]);

	const makePairs = (cards) => {
		return [...cards, ...cards];
	};

	useEffect(() => {
		setCards(makePairs(symbols));
	}, [symbols]);

	const handleClick = (index) => {
		const newFlippedCards = [...flippedCards, index];
	};

	return (
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				Memory Card Game
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs'>
					<div className='grid grid-rows-4 grid-cols-4 text-6xl gap-4'>
						{cards.map((card, index) => (
							<Card
								value={card}
								key={index}
								onClick={() => handleClick(index)}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
};

export default MemoryCardGame;
