const PaymentSummary = () => {
	return (
		<section className='px-[40px] pt-[35px] pb-[60px]'>
			<div className='flex justify-between'>
				<h3 className='text-[20px] font-bold'>Subtotal</h3>
				<span className='text-[20px] font-bold'>&#8358;2,497.00</span>
			</div>
			<div className='flex justify-between mt-[20px]'>
				<h3 className='text-[20px] font-bold'>Extimated TAX</h3>
				<span className='text-[20px] font-bold'>&#8358;119.64</span>
			</div>
			<div className='flex justify-between mt-[20px]'>
				<h3 className='text-[20px] font-bold'>
					Promotional Code: <span className='text-gray-300'>Z4KXLM9A</span>
				</h3>
				<span className='text-[20px] font-bold'>&#8358;2,497.00</span>
			</div>
		</section>
	);
};

export default PaymentSummary;
