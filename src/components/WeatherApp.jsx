import { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronLeft from '../assets/chevronLeft.svg';
import arrowUp from '../assets/arrowUp.svg';
import arrowDown from '../assets/arrowUp.svg';

const apiKey = 'bdae93b08c4f760b6b5bb77ea39da727';

const convertTemp = (kelvin) => {
	return Math.round((kelvin - 273.15) * (9 / 5) + 32);
};

const weatherEmojis = {
	thunder: '🌩️',
	thunderRain: '⛈️',
	rain: '🌧️',
	rainSun: '🌦️',
	snow: '🌨️',
	atmosphere: '🌫️',
	sun: '☀️',
	cloud: '☁️',
	cloudSun: '⛅',
	unknown: '❓',
};

const WeatherApp = () => {
	// store location input value
	const [locationInput, setLocationInput] = useState('');
	// store weather data
	const [weatherData, setWeatherData] = useState(null);

	// event handler to change location input value
	const handleLocationChange = (e) => {
		setLocationInput(e.target.value);
	};

	// event handler for clicking magnifying glass
	const handleSearch = async () => {
		// get city, state from location input
		const [city, state] = locationInput
			.split(',')
			.map((item) => item.trim());

		// make API request if city and state are provided
		if (city && state) {
			getWeather(city, state);
		}
	};

	// event handler for pressing enter
	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	// get correct weather emoji
	const getWeatherEmoji = (weatherId) => {
		if (weatherId >= 200 && weatherId <= 202) {
			return weatherEmojis.thunderRain;
		} else if (weatherId >= 210 && weatherId <= 221) {
			return weatherEmojis.thunder;
		} else if (weatherId >= 230 && weatherId <= 232) {
			return weatherEmojis.thunderRain;
		} else if (weatherId >= 300 && weatherId <= 321) {
			return weatherEmojis.rain;
		} else if (weatherId >= 500 && weatherId <= 504) {
			return weatherEmojis.rainSun;
		} else if (weatherId >= 511 && weatherId <= 531) {
			return weatherEmojis.rain;
		} else if (weatherId >= 600 && weatherId <= 622) {
			return weatherEmojis.snow;
		} else if (weatherId >= 701 && weatherId <= 781) {
			return weatherEmojis.atmosphere;
		} else if (weatherId == 800) {
			return weatherEmojis.sun;
		} else if (weatherId == 801) {
			return weatherEmojis.cloudSun;
		} else if (weatherId >= 802 && weatherId <= 804) {
			return weatherEmojis.cloud;
		} else {
			return weatherEmojis.unknown;
		}
	};

	// function to fetch weather data
	const getWeather = async (city, state, country = 'US') => {
		try {
			// API URL to get longitude and latitude
			const geocodingApiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=1&appid=${apiKey}`;
			const geocodingResponse = await fetch(geocodingApiUrl);

			if (!geocodingResponse.ok) {
				throw new Error('Failed to fetch longitude and latitude');
			}

			// convert response to JSON object
			const geocodingData = await geocodingResponse.json();
			const { lat, lon } = geocodingData[0];

			// API URL to get weather data
			const weatherApiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

			const weatherDataResponse = await fetch(weatherApiUrl);

			if (!weatherDataResponse.ok) {
				throw new Error('Failed to fetch weather data');
			}

			// convert response to JSON object and update weatherData state
			setWeatherData(await weatherDataResponse.json());
		} catch (error) {
			// Handle errors
			console.error(error.message);
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
					Weather App
				</h1>
			</div>

			<div className='flex flex-col justify-center flex-1 max-w-xs w-full'>
				<div className='relative'>
					<input
						value={locationInput}
						onChange={handleLocationChange}
						onKeyDown={handleKeyDown}
						placeholder='city, state'
						className='w-full border border-neutral-50 bg-transparent p-1 rounded-lg text-neutral-50'></input>
					<div
						onClick={handleSearch}
						className='absolute right-2 top-0 cursor-pointer text-2xl hover:opacity-75 selection:bg-transparent'>
						🔍
					</div>
				</div>
				{weatherData && (
					<>
						<p className='text-neutral-50 text-center p-1'>
							{weatherData.name}
						</p>
						<p className='text-neutral-50 text-5xl text-center'>
							{convertTemp(weatherData.main.temp)}­°F
						</p>
						<div className='text-8xl text-center pb-1'>
							{getWeatherEmoji(weatherData.weather[0].id)}
						</div>
						<p className='text-neutral-50 text-center'>
							{weatherData.weather[0].main}
						</p>
					</>
				)}
			</div>
		</div>
	);
};

export default WeatherApp;
