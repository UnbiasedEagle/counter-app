import React, { useReducer } from 'react';
import countReducer from './countReducer';
import CountContext from './countContext';

const CountState = (props) => {
	const initialState = {
		count: 0
	};
	const [ state, dispatch ] = useReducer(countReducer, initialState);

	//Actions

	const incrementCount = () => {
		dispatch({
			type: 'INCREMENT'
		});
	};

	const decrementCount = () => {
		dispatch({
			type: 'DECREMENT'
		});
	};

	return (
		<CountContext.Provider
			value={{
				count: state.count,
				incrementCount,
				decrementCount
			}}
		>
			{props.children}
		</CountContext.Provider>
	);
};

export default CountState;
