import React, { Component } from 'react';
import Particles from 'react-tsparticles';
import particlesOptions, {
	particlesInit,
	particlesLoaded,
} from './particlesOptions';
import FaceRecognition from './Components/FaceRecognition/FaceRecognition';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Signin from './Components/Signin/Signin';
import Register from './Components/Register/Register';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import './App.css';


const initialState = {
	input: '',
	imageUrl: '',
	box: {},
	route: 'signin',
	isSignedIn: false,
	user: {
		id: '',
		name: '',
		email: '',
		entries: 0,
		joined: '',
	}
};

class App extends Component {
	constructor() {
		super();
		this.state = initialState;
	}

	loadUser = (data) => {
		this.setState({
			user: {
				id: data.id,
				name: data.name,
				email: data.email,
				entries: data.entries,
				joined: data.joined,
			}
		});
	};

	calculateFaceLocation = (data) => {
		const clarifaiFace =
			data.outputs[0].data.regions[0].region_info.bounding_box;
		const image = document.getElementById('input-image');
		const width = Number(image.width);
		const height = Number(image.height);
		// console.log(width, height);

		return {
			leftCol: clarifaiFace.left_col * width,
			topRow: clarifaiFace.top_row * height,
			rightCol: width - clarifaiFace.right_col * width,
			bottomRow: height - clarifaiFace.bottom_row * height,
		};
	};

	displayFaceBox = (box) => {
		console.log(box);
		this.setState({ box: box });
	};

	onInputChange = (evt) => {
		this.setState({ input: evt.target.value });
	};
	onPictureSubmit = () => {
		this.setState({ imageUrl: this.state.input });
		fetch('https://smart-brain-grpc.herokuapp.com/imageUrl', {
			method: 'post',
			headers: { 'content-Type': 'application/json' },
			body: JSON.stringify({
				input: this.state.input,
			})
		})
			.then(response => response.json())
			.then((response) => {
				if (response) {
					fetch('https://smart-brain-grpc.herokuapp.com/image', {
						method: 'put',
						headers: { 'content-Type': 'application/json' },
						body: JSON.stringify({
							id: this.state.user.id,
						})
					})
						.then(response => response.json())
						.then(count => {
							this.setState(Object.assign(this.state.user, {
								entries: count
							}));
						})
						.catch(console.log);

				}
				this.displayFaceBox(this.calculateFaceLocation(response));
			})
			// console.log(response);
			.catch((err) => console.log(err));
	};

	onRouteChange = (route) => {
		if (route === 'signout') {
			this.setState(initialState);
		} else if (route === 'home') {
			this.setState({ isSignedIn: true });
		}
		this.setState({ route: route });
	};

	render() {
		const { isSignedIn, imageUrl, route, box } = this.state;
		return (
			<div className='App'>
				<Particles
					className='particles'
					id='tsparticles'
					init={particlesInit}
					loaded={particlesLoaded}
					options={particlesOptions}
				/>
				<Navigation
					isSignedIn={isSignedIn}
					onRouteChange={this.onRouteChange}
				/>
				{this.state.route === 'home' ? (
					<div>
						<Logo />
						<Rank entries={this.state.user.entries} name={this.state.user.name} />
						<ImageLinkForm
							onPictureSubmit={this.onPictureSubmit}
							onInputChange={this.onInputChange}
						/>

						<FaceRecognition box={box} imageUrl={imageUrl} />
					</div>
				) : route === 'signin' ? (
					<Signin loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
				) : (
					<Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
				)}
			</div>
		);
	}
}

export default App;
