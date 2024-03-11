import { useState } from 'react';
import { Link } from 'react-router-dom';
import chevronLeft from '../assets/chevronLeft.svg';
import umbrella from '../assets/umbrella.svg';

const apiKey = import.meta.env.VITE_WEATHER_API;

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
			console.error(error.message);
		}
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
				<h1 className='absolute text-xl text-neutral-50'>
					Weather App
				</h1>
			</div>

			<div className='relative flex w-full max-w-xs flex-1 flex-col justify-center pb-40 md:max-w-md'>
				{!weatherData && (
					<img
						src={umbrella}
						alt='umbrella'
						className='absolute w-full opacity-25'
					/>
				)}
				<div className='relative'>
					<input
						value={locationInput}
						onChange={handleLocationChange}
						onKeyDown={handleKeyDown}
						placeholder='city, state'
						className='w-full rounded-lg border border-neutral-50 bg-transparent p-2 text-neutral-50 outline-none focus:border-yellow-400'></input>
					<div
						onClick={handleSearch}
						className='absolute right-2 top-1 cursor-pointer text-2xl selection:bg-transparent hover:opacity-75'>
						🔍
					</div>
				</div>
				{weatherData && (
					<>
						<p className='p-2 text-center text-neutral-50'>
							{weatherData.name}
						</p>
						<p className='text-center text-5xl text-neutral-50'>
							{convertTemp(weatherData.main.temp)}­°F
						</p>
						<div className='p-2 text-center text-8xl'>
							{getWeatherEmoji(weatherData.weather[0].id)}
						</div>
						<p className='p-2 text-center text-neutral-50'>
							{weatherData.weather[0].main}
						</p>
						<div className='flex justify-center'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='h-6 w-6 fill-green-500'>
								<path
									fillRule='evenodd'
									d='M11.47 2.47a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06l-6.22-6.22V21a.75.75 0 0 1-1.5 0V4.81l-6.22 6.22a.75.75 0 1 1-1.06-1.06l7.5-7.5Z'
									clipRule='evenodd'
								/>
							</svg>
							<p className='mr-2 text-xl text-neutral-50'>
								{convertTemp(weatherData.main.temp_max)}­°
							</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='currentColor'
								className='ml-2 h-6 w-6 text-red-500'>
								<path
									fillRule='evenodd'
									d='M12 2.25a.75.75 0 0 1 .75.75v16.19l6.22-6.22a.75.75 0 1 1 1.06 1.06l-7.5 7.5a.75.75 0 0 1-1.06 0l-7.5-7.5a.75.75 0 1 1 1.06-1.06l6.22 6.22V3a.75.75 0 0 1 .75-.75Z'
									clipRule='evenodd'
								/>
							</svg>
							<p className='text-xl text-neutral-50'>
								{convertTemp(weatherData.main.temp_min)}­°
							</p>
						</div>
					</>
				)}
			</div>
		</div>
	);
};

export default WeatherApp;
