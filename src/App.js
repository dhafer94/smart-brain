import React from 'react';
import './App.css';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm';

function App() {
	return (
		<>
			<Navigation />
			<Logo />
			<ImageLinkForm />
			{/* <FaceRecognition /> */}
		</>
	);
}

export default App;
