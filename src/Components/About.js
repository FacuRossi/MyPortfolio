import React, { Component } from 'react'
import ProfilePic from '../assets/images/profilepic.jpg'

class About extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name : this.props.data.name,
            bio : this.props.data.bio,
            street : this.props.data.address.street,
            city : this.props.data.address.city,
            state : this.props.data.address.state,
            zip : this.props.data.address.zip,
            phone : this.props.data.phone,
            email : this.props.data.email,
            resumeDownload: this.props.data.resumeDownload,
        }
    }

    render() {
        return (
            <section id="about">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic"  src={ProfilePic} alt="" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>
                        <p>
                            {this.state.bio}
                        </p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
    						        <span>{this.state.name}</span><br />
    						        <span>{this.state.street}<br />
    						            {this.state.city}, {this.state.state} {this.state.zip}
                                    </span><br />
    						        <span>{this.state.phone}</span><br />
                                    <span>{this.state.email}</span>
    					        </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={this.state.resumeDownload} className="button">
                                        <i className="fa fa-download"></i>
                                        Download Resume
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default About;
