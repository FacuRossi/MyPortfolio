import React, { Component } from 'react'

class Resume extends Component {
	constructor(props) {
		super(props)
		this.state = {
			education: this.props.data.education,
			work: this.props.data.work,
			skills: this.props.data.skills,
		}
	}
	render() {
		const education = this.state.education.map((edu) => {
			return (
				<div key={edu.school} className="row item">
					<div className="twelve columns">
						<h3 className="hover-titles">{edu.school}</h3>
						<p className="info">
							{edu.degree} <span>&bull;</span>
							<em className="date">{edu.graduated}</em>
						</p>
						<p className="resume-desc">{edu.description}</p>
					</div>
				</div>
			)
		})

		const work = this.state.work.map((job) => {
			return (
				<div key={job.company} className="row item">
					<div className="twelve columns">
						<h3 className="hover-titles">{job.company}</h3>
						<p className="info">
							{job.title}
							<span>&bull;</span>
							<em className="date">{job.years}</em>
						</p>
						<p className="resume-desc">{job.description}</p>
					</div>
				</div>
			)
		})

		const skills = this.state.skills.map((skill) => {
			return (
				<div
					key={skill.name}
					className="skillbar clearfix"
					data-percent={skill.level}>
					<div className="skillbar-title">
						<span>{skill.name}</span>
					</div>
					<div className="skillbar-bar" />
				</div>
			)
		})

		return (
			<section id="resume">
				<div className="row education">
					<div className="three columns header-col">
						<h1>
							<span className="hover-titles">Education</span>
						</h1>
					</div>
					<div className="nine columns main-col">{education}</div>
				</div>
				<div className="row work">
					<div className="three columns header-col">
						<h1>
							<span className="hover-titles">Work</span>
						</h1>
					</div>
					<div className="nine columns main-col">{work}</div>
				</div>
				<div className="row skill">
					<div className="three columns header-col">
						<h1>
							<span className="hover-titles">Skills</span>
						</h1>
					</div>
					<div className="nine columns main-col">
						<div className="bars">
							<ul className="skills">{skills}</ul>
						</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Resume
