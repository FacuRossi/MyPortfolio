import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
import App from './App'

/* eslint-disable import/first */
import './assets/css/default.css'
import './assets/css/fonts.css'
import './assets/css/layout.css'
import './assets/css/magnific-popup.css'
import './assets/css/media-queries.css'
import './assets/sass/app.css'

ReactGA.initialize('UA-124268203-1')
ReactGA.pageview('/')
ReactDOM.render(<App />, document.getElementById('root'))
