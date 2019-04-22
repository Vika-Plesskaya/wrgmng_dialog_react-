import React from 'react';
import PropTypes from 'prop-types';
import SelectedItems from '../SelectedItems';
import './styles.css';

const Modal = ({
        toggleModal, 
        updateItems,
        searchInput,
        filterIndex,
        handleChange,
        allItems,
        selectedItems,
        handleCheckboxChange,
        removeFromSelected 
    }) => {
        const renderAllItems = (items) => {
            const isSelected = item => selectedItems.includes(item);
            const maximumItemsSelected = selectedItems.length >= 3;

            return items.slice(filterIndex, items.length)
                        .filter(item => item.includes(searchInput))
                        .map((item, index) => (
                            <div key={index}>
                                <input type="checkbox"
                                       disabled={maximumItemsSelected && !isSelected(item)} 
                                       checked={isSelected(item)} 
                                       onChange={(e) => handleCheckboxChange(e, item)}/>
                                {item}
                            </div>
                        ))
        }
        
        return (
            <div className="dialog">
                <div className="dialog-header">
                    <h2 class="pull-left">Диалог выбора элементов</h2>
                    <button className="button button-gray pull-right margin-top-1-5rem" onClick={() => toggleModal()}> X </button>
                </div>
                <div className="dialog-menu">
                    <span>Поиск&nbsp;&nbsp;</span>
                    <input value={searchInput} onChange={(e) => handleChange(e)} name='searchInput'/>
                    <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Фильтр&nbsp;&nbsp;</span>
                    <select value={filterIndex} onChange={(e) => handleChange(e)} name='filterIndex'>
                        <option value="0">Без фильтра</option>
                        <option value="10">Номер >10 </option>
                        <option value="50">Номер >50</option>
                        <option value="100">Номер >100</option>
                    </select>
                </div>
                <div className="dialog-content">
                    {renderAllItems(allItems)}
                </div>
                <div className="dialog-selected-items">
                    Выбранные элементы на данный момент:
                    <SelectedItems selectedItems={selectedItems} removeFromSelected={removeFromSelected} />
                </div>            
                <div className="dialog-actions">
                    <button className="button button-green" onClick={() => updateItems()}>Сохранить</button>
                    <button className="button button-green" onClick={() => toggleModal()}>Отменить</button>
                </div>
            </div>
        )
}

Modal.propTypes = {
    removeFromSelected: PropTypes.func,
    toggleModal: PropTypes.func,
    updateItems: PropTypes.func,
    searchInput: PropTypes.string,
    filterIndex: PropTypes.number,
    allItems: PropTypes.array,
    selectedItems: PropTypes.array,
    handleChange: PropTypes.func,
    handleCheckboxChange: PropTypes.func
}

export default Modal;