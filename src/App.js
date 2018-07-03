import React, { Component } from 'react'
import './App.css'

import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Footer from './components/Footer'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <SearchBar />
          <SearchResults />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App