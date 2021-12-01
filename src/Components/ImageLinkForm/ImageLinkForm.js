import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = () => {
	return (
		<div className='b'>
			<p className='f3  center'>
				{`This Magic Brain will detect faces in your pictures. Give it a try`}
			</p>
			<div className='center'>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70 center' type='text' />
					<button className='b w-30 grow f4 link ph3 pv2 dib white bg-orange'>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
