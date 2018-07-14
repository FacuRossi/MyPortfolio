import React, { Component } from 'react'

class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name : this.props.data.name,
            occupation : this.props.data.occupation,
            description : this.props.data.description,
            city : this.props.data.address.city
        }
    }

    render() {
        let networks = this.props.data.social.map(network => {
            return (
                <li key={network.name}>
                    <a href={network.url}>
                        <i className={network.className}></i>
                    </a>
                </li>
            )
        })
        return (
            <header id="home">
                <nav id="nav-wrap">
                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                    <ul id="nav" className="nav">
                        <li><a className="smoothscroll hvr-underline-reveal" href="#home">Home</a></li>
                        <li><a className="smoothscroll hvr-underline-reveal" href="#about">About</a></li>
                        <li><a className="smoothscroll hvr-underline-reveal" href="#resume">Resume</a></li>
                        <li><a className="smoothscroll hvr-underline-reveal" href="#portfolio">Works</a></li>
                        <li><a className="smoothscroll hvr-underline-reveal" href="#contact">Contact</a></li>
                    </ul>
                </nav>
                <div className="row banner">
                    <div className="banner-text">
                        <h1 className="responsive-headline">{this.state.name}</h1>
                        <h3><span>{this.state.occupation}</span></h3>
                        <hr/>
                        <ul className="social">
                      {networks}
                    </ul>
                    </div>
                </div>
                <p className="scrolldown">
                    <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
                </p>
            </header>
        )
    }
}

export default Header;
