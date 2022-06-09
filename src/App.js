import Header from './components/Header';
import PaymentInfo from './components/PaymentInfo';
import PaymentSummary from './components/PaymentSummary';

function App() {
	return (
		<div className='px-[40px]'>
			<Header />
			<PaymentInfo />
			<PaymentSummary />
			<section className='px-[40px]'>
				<hr className='w-[98%]' />
				<div className=' pt-[35px] pb-[80px] flex justify-between'>
					<button className='bg-blue-600 text-[20px] rounded-[5px] text-white py-[15px] px-[10px] w-[20%]'>
						Complete payment
					</button>
					<h3 className='font-bold text-[30px]'>TOTAL:&#8358;2556.64</h3>
				</div>
			</section>
		</div>
	);
}

export default App;
