import React from 'react';

class Register extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			name: ''
		};
	}
	onNameChange = (evt) => {
		this.setState({ name: evt.target.value });
	};
	onEmailChange = (evt) => {
		this.setState({ email: evt.target.value });
	};
	onPasswordChange = (evt) => {
		this.setState({ password: evt.target.value });
	};

	onSubmitSignIn = () => {
		fetch('http://localhost:3001/register', {
			method: 'post',
			headers: { 'content-Type': 'application/json' },
			body: JSON.stringify({
				email: this.state.email,
				password: this.state.password,
				name: this.state.name
			})
		})
			.then(res => res.json())
			.then(user => {
				if (user) {
					this.props.loadUser(user);
					this.props.onRouteChange('home');

				}
			});
	};


	render() {
		const { onRouteChange } = this.props;
		return (
			<article className='br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center' >
				<main className='pa4 black-80'>
					<div className='measure'>
						<fieldset id='sign_up' className='ba b--transparent ph0 mh0'>
							<legend className='f1 fw6 ph0 mh0'>Register</legend>
							<div className='mt3'>
								<label className='db lh-copy f5' htmlFor='name'>
									Name
								</label>
								<input
									onChange={this.onNameChange}
									className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='text'
									name='name'
									id='name'
								/>
							</div>
							<div className='mt3'>
								<label className='db lh-copy f5' htmlFor='email-address'>
									Email
								</label>
								<input
									onChange={this.onEmailChange}
									className='pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='email'
									name='email-address'
									id='email-address'
								/>
							</div>
							<div className='mv3'>
								<label className='db lh-copy f5' htmlFor='password'>
									Password
								</label>
								<input
									onChange={this.onPasswordChange}
									className='b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100'
									type='password'
									name='password'
									id='password'
								/>
							</div>
						</fieldset>
						<div>
							<input
								className='b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib'
								type='submit'
								value='Sign in'
								onClick={this.onSubmitSignIn}
							/>
						</div>
					</div>
				</main>
			</article>
		);
	}
};

export default Register;
