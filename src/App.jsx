import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home.jsx';
import CipherPuzzle from './components/CipherPuzzle.jsx';
import TicTacToe from './components/TicTacToe.jsx';
import WeatherApp from './components/WeatherApp.jsx';
import MemoryCardGame from './components/MemoryCardGame.jsx';
import Flashcards from './components/Flashcards.jsx';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />}></Route>
				<Route path='/cipher-puzzle' element={<CipherPuzzle />}></Route>
				<Route path='/tic-tac-toe' element={<TicTacToe />}></Route>
				<Route path='/weather-app' element={<WeatherApp />}></Route>
				<Route
					path='/memory-card-game'
					element={<MemoryCardGame />}></Route>
				<Route path='/flashcards' element={<Flashcards />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
