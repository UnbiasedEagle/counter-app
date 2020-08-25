import React, { useContext } from 'react';
import CountContext from './context/count/countContext';

const Counter = () => {
	const countContext = useContext(CountContext);
	const { count, incrementCount, decrementCount } = countContext;
	return (
		<div>
			<button onClick={decrementCount} className='btn'>
				-
			</button>
			<span>{count}</span>
			<button onClick={incrementCount} className='btn'>
				+
			</button>
		</div>
	);
};

export default Counter;
