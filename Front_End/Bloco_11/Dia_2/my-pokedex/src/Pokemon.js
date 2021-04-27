import React from 'react'
import './App.css'

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props.pokemon 
    return (
      <div className='pokemon'>
        <img src={image} alt={`pokémon ${name}`}></img>
        <h1>{name}</h1>
        <h2>{type}</h2>
        <h2>{averageWeight.value}{averageWeight.measurementUnit}</h2>
      </div>
    )
  }
}

export default Pokemon;