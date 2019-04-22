import React from 'react';
import PropTypes from 'prop-types';
import SelectedItems from '../SelectedItems';

const HeaderComponent = ({ selectedItems, removeFromSelected, toggleDialog }) => {
    return (
        <div>
            <h2>Выбор элементов</h2>
            <h4>На данный момент у вас выбрано {selectedItems.length} элементов</h4>
            <SelectedItems selectedItems={selectedItems} removeFromSelected={removeFromSelected} />
            <div class="clearfix">
                <button className="button button-green" onClick={() => toggleDialog()}>Изменить мой выбор</button>
            </div>
        </div>
    )
}

HeaderComponent.propTypes = {
    selectedItems: PropTypes.array.isRequired,
    removeFromSelected: PropTypes.func.isRequired,
    toggleDialog: PropTypes.func.isRequired
}

export default HeaderComponent;