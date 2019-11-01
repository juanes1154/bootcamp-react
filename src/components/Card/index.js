import React from 'react';
import PropTypes from 'prop-types';

const Card = (props) => {

    return (
        <li className="App_card">
            <img
                src={props.sprites.front_default}
                className="App_card_image"
            />
            <div className="App_card_info">
                <span className="App_card_name">{props.name}</span>           
            </div>
            <div>
                <div>{props.types.map((type) => {
                    return type.type.name
                }).join(',') }</div>
            </div>
        </li>
    )
}
        
const types ={
    name:PropTypes.string,
    image: PropTypes.string,
}

Card.propTypes = types;

Card.defaultProps = {
    name: 'pokemon',
    image: 'https://upload.wikimedia.org/wikipedia/en/3/39/Pokeball.PNG'
}

export default Card;