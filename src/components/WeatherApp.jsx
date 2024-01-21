function WeatherApp() {
	return (
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				Weather App
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs flex flex-col justify-center'>
					<div className='relative'>
						<input
							placeholder='city, state'
							className='w-full border border-neutral-50 bg-transparent p-1 rounded-lg text-neutral-50'></input>
						<div className='absolute right-2 top-0 cursor-pointer text-2xl'>
							🔍
						</div>
					</div>
					<p className='text-neutral-50 text-center'>Hercules</p>
					<p className='text-neutral-50 text-5xl text-center'>60°</p>
					<div className='text-8xl text-center pb-2'>🌦️</div>
					<p className='text-neutral-50 text-center'>broken clouds</p>
				</div>
			</div>
		</>
	);
}

export default WeatherApp;
