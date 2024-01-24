import './App.css';
import Home from './components/Home.jsx';
import TicTacToe from './components/TicTacToe.jsx';
import ToDoList from './components/ToDoList.jsx';
import WeatherApp from './components/WeatherApp.jsx';
import CurrencyConverter from './components/CurrencyConverter.jsx';
import Flashcards from './components/Flashcards.jsx';

function App() {
	return (
		<>
			<Home />
			<ToDoList />
			<TicTacToe />
			<WeatherApp />
			<CurrencyConverter />
			<Flashcards />
		</>
	);
}

export default App;
