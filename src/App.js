import React, { Component } from 'react'
import './App.css'

import keys from './config/keys'

import NavBar from './components/NavBar'
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'
import Footer from './components/Footer'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      recipes: [],
      isLoaded: false
    }
  }

  getRecipes = event => {
    event.preventDefault()
    const ingredients = event.target.ingredients.value.split(' ')
    let recipes
    const proxyURL = 'https://cors-anywhere.herokuapp.com/'
    const URL = `http://food2fork.com/api/search?key=${keys.API}&q=${ingredients}`

    fetch(proxyURL + URL)
      .then(response => response.json())
      .then(JSONdata => {
        recipes = JSONdata.recipes
        this.setState({ 
          recipes,
          isLoaded: true
        })
      })
      .catch(error => console.log('There has been an error retrieving your reciepe: ' + error))
  } 

  render() {
    return (
      <div className="App">
        <NavBar />
        <div className="container">
          <SearchBar getRecipes={this.getRecipes} />
          <SearchResults recipes={this.state.recipes} />
        </div>
        <Footer />
      </div>
    )
  }
}

export default App