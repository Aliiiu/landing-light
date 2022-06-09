const PaymentInfo = () => {
	return (
		<section className='px-[40px]'>
			<hr className='w-[98%]' />
			<div className='mt-[40px] mb-[30px] flex justify-between w-full'>
				<div>
					<h3 className='text-[25px] font-semibold'>Payment Information</h3>
					<p className='text-[18px] text-gray-400'>
						Choose your method of payment.
					</p>
				</div>
				<div className='flex justify-between w-[25%] mt-[-23px]'>
					<div className='flex items-center'>
						<img src='/visa2.png' alt='' className='w-[50px] h-[30px]' />
						<img
							src='/discover-network.png'
							alt=''
							className='w-[50px] h-[30px] bg-gray-200 ml-[20px]'
						/>
					</div>
					<div className='flex items-center'>
						<div className='bg-gray-300 w-[20px] h-[20px] mr-[20px] rounded-[100%]'></div>
						<img src='/paypal.png' alt='' className='h-[100px]' />
					</div>
				</div>
			</div>
			<div className='flex justify-between pb-[20px]'>
				<div className='w-[35%]'>
					<div className='bg-gradient-to-r from-red-500 to-blue-500 rounded-[5px] pl-[10px] pb-[10px] pt-[40px] pr-[40px]'>
						<div className='flex flex-col'>
							<span className='text-white tracking-[2px] text-[14px] font-semibold mb-[10px] ml-[25px] uppercase'>
								card number
							</span>
							<span className='text-white tracking-[4px] text-[19px] font-semibold ml-[25px]'>
								4334 5433 9382 1030
							</span>
							<span className='flex items-center'>
								<img
									src='/wifi.svg'
									alt=''
									className='transform rotate-90 w-[20px] h-[20px]'
								/>
								<img src='/chip.png' alt='' className='' />
							</span>
							<span className='text-white tracking-[2px] text-[14px] font-semibold mb-[10px] ml-[25px] uppercase'>
								expiration date
							</span>
							<span className='text-white tracking-[2px] text-[20px] font-semibold ml-[25px]'>
								03/24
							</span>
							<div className='text-white mt-[-15px] ml-[25px] flex items-center justify-between '>
								<p className=' text-[18px] font-semibold'>John Doe </p>{' '}
								<span>
									<img
										src='/mastercard.png'
										alt=''
										className='w-[80px] h-[80px]'
									/>
								</span>
							</div>
						</div>
					</div>
				</div>

				<div className='w-[50%]'>
					<form className='w-full'>
						<div className='grid grid-cols-2 gap-y-[15px] gap-x-[20px]'>
							<div className='w-full'>
								<label htmlFor='card_number' className='text-[18px]'>
									Credit card number
								</label>
								<input
									placeholder='4324 5433 9382 1030'
									type='text'
									className='mt-[10px] appearance-none block w-full bg-gray-100 placeholder-black border border-gray-300 rounded py-5 px-6 mb-3 leading-tight focus:outline-none focus:bg-white'
								/>
							</div>
							<div className='w-full'>
								<label htmlFor='card_number' className='text-[18px]'>
									Expiration date
								</label>
								<input
									placeholder='03/34'
									type='text'
									className='mt-[10px] appearance-none block w-full bg-gray-100 placeholder-black border border-gray-300 rounded py-5 px-6 mb-3 leading-tight focus:outline-none focus:bg-white'
								/>
							</div>
							<div className='w-full'>
								<label htmlFor='card_number' className=' text-[18px]'>
									Security Code
								</label>
								<input
									placeholder='420'
									type='text'
									className='mt-[10px] appearance-none block w-full bg-gray-100 placeholder-black border border-gray-300 rounded py-5 px-6 mb-3 leading-tight focus:outline-none focus:bg-white'
								/>
							</div>
							<div className='w-full'>
								<label htmlFor='card_number' className=' text-[18px]'>
									Postal Code
								</label>
								<input
									placeholder='10119'
									type='tell'
									className='mt-[10px] appearance-none block w-full bg-gray-100 placeholder-black border border-gray-300 rounded py-5 px-6 mb-3 leading-tight focus:outline-none focus:bg-white'
								/>
							</div>
						</div>
						<div className='w-full mt-[20px]'>
							<input
								class='appearance-none rounded-full h-4 w-4 border border-gray-300 bg-white checked:border-[6px] checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2'
								type='radio'
								name='cardRadio'
								checked
							/>
							<label
								class='form-check-label text-[18px] inline-block'
								for='flexRadioCheckedDisabled'
							>
								Use this card for next time purchase
							</label>
							<button className='bg-blue-600 mt-[10px] w-full text-white text-[20px] rounded-[3px] py-5'>
								{' '}
								Add card{' '}
							</button>
						</div>
					</form>
				</div>
			</div>
			<hr className='w-[98%]' />
		</section>
	);
};

export default PaymentInfo;
