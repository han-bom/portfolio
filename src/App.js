import React, { Component } from 'react';

import Header from './view/Header';
import History from './view/History';
import Design from './view/Design';
import Popup from './view/Popup';
import Develop from './view/Develop'

import './css/App.css';

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			popup: {
				show: false,
				contents: null,
			}
		}

		this.popupSetContents = this.popupSetContents.bind(this);
		this.popupClose = this.popupClose.bind(this);
	}

	popupSetContents(domElement) {
		console.log(domElement.children[0].src)
		this.setState({
			popup: {
				show: true,
				contents: domElement.children[0].src
			}
		});
	}

	popupClose() {
		this.setState({
			popup: {
				show: false,
				contents: null
			}
		})
	}

	render() { 
		return (
			<div className="App">
				<Header />
				<div className="container">
					<History />
					<Design popupSetContents={this.popupSetContents} />
					<Develop />
				</div>
				<Popup show={this.state.popup.show} contents={this.state.popup.contents} close={this.popupClose} />
			</div>
		)
	}
}

export default App;
