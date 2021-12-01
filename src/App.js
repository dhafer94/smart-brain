import React from 'react';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';
import Rank from './Components/Rank/Rank';
import Particles from 'react-tsparticles';
import particlesOptions, {
	particlesInit,
	particlesLoaded,
} from './particlesOptions';
import './App.css';

function App() {
	return (
		<>
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
			<ImageLinkForm />

			{/* <FaceRecognition /> */}
		</>
	);
}

export default App;
