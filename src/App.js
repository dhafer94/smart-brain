import React, { Component } from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-tsparticles';
import particlesOptions, {
	particlesInit,
	particlesLoaded,
} from './particlesOptions';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
	apiKey: 'YOUR_API_KEY',
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
		};
	}
	onInputChange = (evt) => {
		console.log(evt.target.value);
	};
	onButtonSubmit = () => {
		console.log('click');
		app.models
			.predict(
				Clarifai.FACE_DETECT_MODEL,
				// THE JPG
				'https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp',
			)
			.then((response) => {
				console.log(response);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	render() {
		return (
			<div className='App'>
				<Particles
					className='particles'
					id='tsparticles'
					init={particlesInit}
					loaded={particlesLoaded}
					options={particlesOptions}
				/>
				<Navigation />
				<Logo />
				<Rank />
				<ImageLinkForm
					onButtonSubmit={this.onButtonSubmit}
					onInputChange={this.onInputChange}
				/>

				{/* <FaceRecognition /> */}
			</div>
		);
	}
}

export default App;
