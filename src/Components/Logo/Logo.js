import React from 'react';
import Tilt from 'react-parallax-tilt';
import './Logo.css';
import brain from './brain.png';

const Logo = () => {
	return (
		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max: 55 }} style={{ height: 150, width: 150 }} >
				<div className="Tilt-inner pa3">
					<img style={{ paddingTop: '5px' }} alt='brain logo' src={brain} />
				</div>
			</Tilt>
		</div>

		//or

		// <div className='ma4 mt0 '>
		// 	<Tilt className='dib br2 shadow-2'>
		// 		<div className='pa3'>
		// 			<img
		// 				src={brain}
		// 				alt='brain logo'
		// 				style={{ paddingTop: '5px', height: '100px', width: '100px' }}
		// 			/>
		// 		</div>
		// 	</Tilt>
		// </div>

	);
};

export default Logo;
