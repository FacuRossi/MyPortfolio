import React, { Component } from 'react'

class Contact extends Component {
	constructor(props) {
		super(props)
		this.state = {
			inputName: '',
			inputEmail: '',
			inputSubject: '',
			inputMessage: '',
			name: this.props.data.name,
			street: this.props.data.address.street,
			city: this.props.data.address.city,
			state: this.props.data.address.state,
			zip: this.props.data.address.zip,
			phone: this.props.data.phone,
		}
	}

	_onChange = (event) => {
		let value = event.target.value
		let name = event.target.name
		this.setState({
			[name]: value,
		})
	}

	_onSubmit = (event) => {
		event.preventDefault()
	}

	render() {
		return (
			<section id="contact">
				<div className="row">
					<div className="twelve columns">
						<p className="lead">
							If you'd like me to get involved with helping your
							business grow, I'm all ears!
						</p>
					</div>
				</div>
				<div className="row">
					<div className="twelve columns">
						<form
							action="mailto:rossifacundo94@gmail.com"
							method="GET"
							id="contactForm"
							name="contactForm">
							<fieldset>
								<div>
									<button type="submit" class="submit">
										Send Email
									</button>
								</div>
							</fieldset>
						</form>
					</div>
				</div>
			</section>
		)
	}
}

export default Contact
