import React, { Component } from 'react';

import Header from './view/Header';
import History from './view/History';
import Design from './view/Design';

import './css/App.css';

class App extends Component {
	render() { 
		return (
			<div className="App">
				<Header />
				<div className="container">
					<History />
					<Design />
				</div>
			</div>
		)
	}
}

export default App;
