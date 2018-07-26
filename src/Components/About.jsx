import React, { Component } from 'react'
import ProfilePic from '../assets/images/profilepic.jpg'

class About extends Component {
	constructor(props) {
		super(props)
		const { data } = this.props
		this.state = {
			name: data.name,
			bio: data.bio,
			street: data.address.street,
			city: data.address.city,
			state: data.address.state,
			zip: data.address.zip,
			phone: data.phone,
			email: data.email,
			resumeDownload: data.resumeDownload,
		}
	}

	render() {
		return (
			<section id="about">
				<div className="row">
					<div className="eight columns main-col">
						<h2 className="hover-titles">About Me</h2>
						<p className="about-p">{this.state.bio.parr1}</p>
						<p className="about-p">{this.state.bio.parr2}</p>
						<p className="about-p">{this.state.bio.parr3}</p>
						<div className="row">
							<div className="columns download">
								<p>
									<a
										href={this.state.resumeDownload}
										className="button">
										<i className="fa fa-download" />
										Download Resume
									</a>
								</p>
							</div>
						</div>
					</div>
					<div className="four columns about-mobile">
						<div>
							<img
								className="profile-pic about-image"
								src={ProfilePic}
								alt=""
							/>
						</div>
						<div className="contact-details">
							<h2 className="hover-titles">Contact Details</h2>
							<div className="address">
								<div>
									<i className="contact-icons fa fa-user" />
									<span>{this.state.name}</span>
								</div>
								<div>
									<i className="contact-icons fa fa-phone" />
									<span>{this.state.phone}</span>
								</div>
								<div>
									<i className="contact-icons fa fa-envelope" />
									<span>{this.state.email}</span>
								</div>
								<div>
									<i className="contact-icons fa fa-map-marker" />
									<span>
										{`${this.state.city}, 
											${this.state.state}`}
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default About
