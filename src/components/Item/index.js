import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

const Item = ({ name, removeFromSelected }) => {
    return (
        <div className="item">
           <span>{name}</span>
           <button className="button button-black" onClick={() => removeFromSelected(name)}> | x</button>
        </div>
    )
}

Item.propTypes = {
    name: PropTypes.string.isRequired,
    removeFromSelected: PropTypes.func.isRequired
}

export default Item;