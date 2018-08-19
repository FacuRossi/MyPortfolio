import React, { Component } from 'react'
import Slider from 'react-animated-slider'
import 'react-animated-slider/build/horizontal.css'

class Portfolio extends Component {
	constructor(props) {
		super(props)
		this.state = {
			projects: this.props.data.projects,
		}
	}
	render() {
		return (
			<section id="portfolio">
				<Slider>
					{this.state.projects.map((item, index) => (
						<div
							key={index}
							className="slider-content"
							style={{
								background: `url(../images/portfolio/${
									item.image
								}) no-repeat center center`,
							}}>
							<div className="inner">
								<h1>{item.title}</h1>
								<p>
									{item.description}
									<a
										href={item.sourceLink}
										className={
											item.title !== 'OkTrueque' &&
											'hide-link'
										}>
										Link
									</a>
								</p>

								<a
									href={item.url}
									className="button btn-projects">
									{item.button}
								</a>
							</div>
						</div>
					))}
				</Slider>
			</section>
		)
	}
}

export default Portfolio
