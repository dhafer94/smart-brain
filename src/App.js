import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import particlesOptions, {
	particlesInit,
	particlesLoaded,
} from './particlesOptions';
import Clarifai from 'clarifai';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';

const app = new Clarifai.App({
	apiKey: 'apiKey',
});

class App extends Component {
	constructor() {
		super();
		this.state = {
			input: '',
			imageUrl: '',
		};
	}
	onInputChange = (evt) => {
		this.setState({ input: evt.target.value });
	};
	onButtonSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		app.models
			.predict(
				Clarifai.FACE_DETECT_MODEL,
				// THE JPG
				this.state.input,
			)
			.then((response) => {
				console.log(
					response.outputs[0].data.regions[0].region_info.bounding_box,
				);
				// console.log(response);
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

				<FaceRecognition imageUrl={this.state.imageUrl} />
			</div>
		);
	}
}

export default App;
