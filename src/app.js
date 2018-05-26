import React, { Component } from 'react'
import './app.css'
import ThingContainer from './components/thing/container'

class App extends Component {
  // app base
  render () {
    return (
      <div className='app'>
        <ThingContainer />
      </div>
    )
  }
}

export default App
