import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (
		<div className='b'>
			<p className='f3'>
				{`This Magic Brain will detect faces in your pictures. Give it a try`}
			</p>
			<div>
				<div className='form center pa4 br3 shadow-5'>
					<input className='f4 pa2 w-70' type='text' onChange={onInputChange} />
					<button className='b w-30 grow f4 link ph3 pv2 dib white bg-orange' onClick={onButtonSubmit}>
						Detect
					</button>
				</div>
			</div>
		</div>
	);
};

export default ImageLinkForm;
