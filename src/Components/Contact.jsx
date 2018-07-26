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
				<div className="row section-head">
					<div className="two columns header-col">
						<h1>
							<span>Get In Touch.</span>
						</h1>
					</div>
					<div className="ten columns">
						<p className="lead">
							Please feel free to contact me and I will return
							your email so we can keep in touch. Please fill out
							the form and note * items are required before
							submission.
						</p>
					</div>
				</div>
				<div className="row">
					<div className="eight columns">
						<form
							onSubmit={this._onSubmit}
							id="contactForm"
							name="contactForm">
							<fieldset>
								<div>
									<label htmlFor="contactName">
										Name <span className="required">*</span>
									</label>
									<input
										type="text"
										size="35"
										id="contactName"
										placeholder="Name Required"
										name="inputName"
										value={this.state.inputName}
										onChange={this._onChange}
									/>
								</div>
								<div>
									<label htmlFor="contactEmail">
										Email{' '}
										<span className="required">*</span>
									</label>
									<input
										type="text"
										size="35"
										id="contactEmail"
										placeholder="Email Required"
										name="inputEmail"
										value={this.state.inputEmail}
										onChange={this._onChange}
									/>
								</div>
								<div>
									<label htmlFor="contactSubject">
										Subject
									</label>
									<input
										type="text"
										size="35"
										name="inputSubject"
										placeholder="Subject Title"
										id="contactSubject"
										value={this.state.inputSubject}
										onChange={this._onChange}
									/>
								</div>
								<div>
									<label htmlFor="contactMessage">
										Message{' '}
										<span className="required">*</span>
									</label>
									<textarea
										cols="50"
										rows="15"
										id="contactMessage"
										placeholder="Main Message"
										name="inputMessage"
										value={this.state.inputMessage}
										onChange={this._onChange}
									/>
								</div>
								<div>
									<button type="submit" className="submit">
										Submit
									</button>
									<span id="image-loader">
										<img alt="" src="images/loader.gif" />
									</span>
								</div>
							</fieldset>
						</form>
						<div id="message-warning"> Error boy</div>
						<div id="message-success">
							<i className="fa fa-check" />Your message was sent,
							thank you!<br />
						</div>
					</div>
					<aside className="four columns footer-widgets">
						<div className="widget widget_contact">
							<h4>Address and Phone</h4>
							<p className="address">
								{this.state.name}
								<br />
								{this.state.street} <br />
								{this.state.city}, {this.state.state}{' '}
								{this.state.zip}
								<br />
								<span>{this.state.phone}</span>
							</p>
						</div>
					</aside>
				</div>
			</section>
		)
	}
}

export default Contact
