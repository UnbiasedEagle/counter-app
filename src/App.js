import React from 'react';
import './App.css';
import Counter from './Counter';
import CounterState from './context/count/CountState';

function App() {
	return (
		<CounterState>
			<Counter />
		</CounterState>
	);
}

export default App;
