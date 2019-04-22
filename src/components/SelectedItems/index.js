import React from 'react';
import PropTypes from 'prop-types';
import Item from '../Item';
import './styles.css';

const SelectedItems = ({ selectedItems, removeFromSelected }) => {
    const renderSelectedItems = () => {
        return selectedItems.slice(0, 3)
                            .map((item, index) =>
                                <Item name={item} key={index} removeFromSelected={removeFromSelected}/>)
    }

    return <div className="selected-items clearfix">{renderSelectedItems()}</div>    
}

SelectedItems.propTypes = {
    removeFromSelected: PropTypes.func,
    selectedItems: PropTypes.array,
}

export default SelectedItems;