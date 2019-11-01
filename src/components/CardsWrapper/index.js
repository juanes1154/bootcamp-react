import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Card from '../Card';
import Filter from '../Filter'

const PokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';
  
class CardsWrapper extends Component {
    state = {
        value: '',
        pokemonList: [],
        pokemonListFiltered: [],
        loading:true
    };

    handleChange = (e) => {
        const value = e.target.value;
        const pokemonListFiltered = this.state.pokemonList.filter(
            (chart) => chart.name.toLowerCase().includes(e.target.value.toLowerCase())
        );
        this.setState(()=>
            ({
                value,
                pokemonListFiltered
            }));
    };

    componentDidMount() {
        fetch(PokemonUrl)
          .then(res => res.json())
            .then(({ results }) => {
                console.log(results)
                const promiseArray = [];
                results.forEach(poke => {
                    console.log(poke)
                    promiseArray.push(fetch(poke.url).then(res => res.json()))
                })
                console.log(promiseArray)
                Promise.all(promiseArray).then(resAll => {
                    console.log(resAll)
                    this.setState({
                        pokemonList: resAll,
                        pokemonListFiltered: resAll,
                      loading: false
                    });
                })
           
          });
      }
    
    render() {
        if (this.state.loading) {
            return <div>Loading...</div>;
        }
        return (
            <>

                <Filter handleChange={this.handleChange} value={this.state.value}/>
                <ul className="App_card-list">
                    {
                        this.state.pokemonListFiltered.map(chart => (
                            <Link to={`/details/${chart.id}`} key={chart.id } >
                            <Card {...chart} />
                         </Link>
                        ))}
                </ul>
            </>
        )
    }
};

export default CardsWrapper;