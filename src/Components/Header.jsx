import React, { Component } from 'react'

class Header extends Component {
	constructor(props) {
		super(props)
		const { data } = this.props
		this.state = {
			name: data.name,
			occupation: data.occupation,
			description: data.description,
			city: data.address.city,
			social: data.social,
		}
	}

	render() {
		let networks = this.state.social.map((network) => {
			return (
				<li key={network.name}>
					<a href={network.url}>
						<i className={network.className} />
					</a>
				</li>
			)
		})
		return (
			<header id="home">
				<nav id="nav-wrap">
					<a
						className="mobile-btn"
						href="#nav-wrap"
						title="Show navigation">
						Show navigation
					</a>
					<a className="mobile-btn" href="#" title="Hide navigation">
						Hide navigation
					</a>
					<ul id="nav" className="nav">
						<li>
							<a
								className="smoothscroll hvr-underline-reveal"
								href="#home">
								Home
							</a>
						</li>
						<li>
							<a
								className="smoothscroll hvr-underline-reveal"
								href="#about">
								About
							</a>
						</li>
						<li>
							<a
								className="smoothscroll hvr-underline-reveal"
								href="#resume">
								Resume
							</a>
						</li>
						<li>
							<a
								className="smoothscroll hvr-underline-reveal"
								href="#portfolio">
								Works
							</a>
						</li>
						<li>
							<a
								className="smoothscroll hvr-underline-reveal"
								href="#contact">
								Contact
							</a>
						</li>
					</ul>
				</nav>
				<div className="row banner">
					<div className="animate animationOne">
						<span>F</span>
						<span>a</span>
						<span>c</span>
						<span>u</span>
						<span>n</span>
						<span>d</span>
						<span>o</span>&nbsp;
						<span>R</span>
						<span>o</span>
						<span>s</span>
						<span>s</span>
						<span>i</span>
					</div>
					<div className="banner-text">
						<h3>
							<span>{this.state.occupation}</span>
						</h3>
						<ul className="social">{networks}</ul>
					</div>
				</div>
				<p className="scrolldown">
					<a className="smoothscroll" href="#about">
						<i className="fa fa-angle-double-down" />
					</a>
				</p>
			</header>
		)
	}
}

export default Header
