function CurrencyConverter() {
	return (
		<>
			<h1 className='text-neutral-50 text-xl text-center pt-32 absolute w-screen'>
				Currency Converter
			</h1>

			<div className='flex justify-center items-center h-screen w-screen'>
				<div className='flex-1 max-w-xs'>
					<p className='text-neutral-50'>Amount</p>
					<input
						type='text'
						placeholder='enter amount'
						className='w-full border border-neutral-50 bg-transparent p-1 rounded-lg text-neutral-50'></input>

					<p className='text-neutral-50'>From</p>
					<select className='w-full border border-neutral-50 bg-transparent p-1 rounded-lg text-neutral-50'>
						<option className='text-neutral-950'>
							United States Dollar 💵
						</option>
						<option className='text-neutral-950'>Euro 💶</option>
						<option className='text-neutral-950'>
							Japanese Yen 💴
						</option>
						<option className='text-neutral-950'>
							Pound Sterling 💷
						</option>
					</select>

					<p className='text-neutral-50'>To</p>
					<select className='w-full border border-neutral-50 bg-transparent p-1 rounded-lg text-neutral-50'>
						<option className='text-neutral-950'>
							United States Dollar 💵
						</option>
						<option className='text-neutral-950'>Euro 💶</option>
						<option className='text-neutral-950'>
							Japanese Yen 💴
						</option>
						<option className='text-neutral-950'>
							Pound Sterling 💷
						</option>
					</select>
				</div>
			</div>
		</>
	);
}

export default CurrencyConverter;
