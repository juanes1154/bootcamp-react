import React, {Component} from 'react';
import PropTypes from 'prop-types';

const PokemonUrl = 'https://pokeapi.co/api/v2/pokemon/';

class Details extends Component {
    state = {
        character: {},
        loading: true
    }
        
    componentDidMount() {
        const { match } = this.props;
        fetch(`${PokemonUrl}${match.params.id}`)
            .then(res => res.json())
            .then(character => {
                console.log(character)
                this.setState({
                    character,
                    loading:false
            })
        })
    }

    render() {
        const {
            history: { goBack }
            }=this.props;
        
        const { loading, character } = this.state;
    
        if (loading) {
            return <span>Loading ...</span>;
          }

    return(
        <div className="App_detail">
            <div className="App_detail_image-container">
            <span
          role="img"
          aria-label="back"
          className="App_detail__back"
          onClick={() => this.props.history.goBack()}
        >
          🔙
        </span>
            <img
                className="App_detail__image"
                src={character.sprites.front_default}
                />
             <img
                className="App_detail__image"
                src={character.sprites.back_default}
            />
        </div>
        <div className="App_detail__details">
            <div className="App_detail__item">
                <strong className="App_detail__label">Name: </strong>
                <span className="App_datail_info">
                    {character.name} <span></span>
                </span>
            </div>
            <div className="App_detail__item">
                <strong className="App_detail__label">Specie: </strong>
                    <span className="App_datail_info">{character.species.name}</span>
            </div>
            <div className="App_detail__item">
                <strong className="App_detail__label">Height: </strong>
                    <span className="App_datail_info">{character.height}</span>
            </div>
            <div className="App_detail__item">
                <strong className="App_detail__label">Base experience: </strong>
                <span className="App_datail_info">{character.base_experience}</span>
            </div>
            <div className="App_detail__item">
                <strong className="App_detail__label">Weight: </strong>
                    <span className="App_datail_info"> {character.weight}</span>
            </div>
        </div>
    </div>
    )
}
};
Details.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.shape({
        id: PropTypes.string
        })
    }).isRequired,
    history: PropTypes.shape({
        goBack: PropTypes.func
    }).isRequired
};
export default Details;

