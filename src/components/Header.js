const Header = () => {
	return (
		<section className='pt-[60px] pb-[120px]'>
			<div className='flex justify-end'>
				<nav className='flex justify-between w-[50%]'>
					<ul className='flex justify-between items-center w-[80%]'>
						<li className='font-bold text-[25px]'>
							<a href='/'>TRIPS</a>
						</li>
						<li className='font-bold text-[25px]'>
							<a href='/'>RECENTLY VIEWED</a>
						</li>
						<li className='font-bold text-[25px]'>
							<a href='/'>BOOKINGS</a>
						</li>
					</ul>
					<div className='bg-blue-400 w-[50px] h-[50px] rounded-[100%] cursor-pointer'></div>
				</nav>
			</div>
		</section>
	);
};

export default Header;
