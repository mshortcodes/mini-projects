import { useState } from 'react';

const apiKey = 'bdae93b08c4f760b6b5bb77ea39da727';
const country = 'US';

const convertTemp = (kelvin) => {
	return Math.round((kelvin - 273.15) * (9 / 5) + 32);
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

	// function to fetch weather data
	const getWeather = async (city, state) => {
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
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				Weather App
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs flex flex-col justify-center'>
					<div className='relative'>
						<input
							value={locationInput}
							onChange={handleLocationChange}
							onKeyDown={handleKeyDown}
							placeholder='city, state'
							className='w-full border border-neutral-50 bg-transparent p-1 rounded-lg text-neutral-50'></input>
						<div
							onClick={handleSearch}
							className='absolute right-2 top-0 cursor-pointer text-2xl'>
							🔍
						</div>
					</div>
					{weatherData && (
						<>
							<p>{console.log('test')}</p>
							<p className='text-neutral-50 text-center'>
								{weatherData.name}
							</p>
							<p className='text-neutral-50 text-5xl text-center'>
								{convertTemp(weatherData.main.temp)}­°F
							</p>
							<div className='text-8xl text-center pb-2'>🌦️</div>
							<p className='text-neutral-50 text-center'>
								{weatherData.weather[0].description}
							</p>
						</>
					)}
				</div>
			</div>
		</>
	);
};

export default WeatherApp;
