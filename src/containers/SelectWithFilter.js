import React from 'react';
import PropTypes from 'prop-types';

import Header from '../components/Header';
import Dialog from '../components/Dialog';
import './styles.css';

class SelectWithFilter extends React.Component {
    state= {
        selectedItems: [],
        dialog: {
            selectedItems: [],
            isOpened: false,
            filterIndex: 0,
            searchInput: ''
        }
    }

    render () {
        return (
            <div>
                <Header toggleDialog={this.toggleDialog}
                    selectedItems={this.state.selectedItems} 
                    removeFromSelected={this.removeFromSelected}/>
                {this.state.dialog.isOpened && 
                    <Dialog toggleDialog={this.toggleDialog}
                        removeFromSelected={this.removeFromDialogSelected}
                        updateItems={this.updateItems}
                        searchInput={this.state.dialog.searchInput}
                        filterIndex={this.state.dialog.filterIndex}
                        handleChange={this.handleChange}
                        handleCheckboxChange={this.handleCheckboxChange}
                        selectedItems={this.state.dialog.selectedItems}
                        allItems={this.props.items}/> 
                }
            </div>
        )
    }   

    componentDidMount() {
        this.setState((prevState) => (
            {...prevState, selectedItems: this.props.items.slice(1, 4)}
        ))
    }

    removeFromSelected = (itemName) => {
        this.setState((prevState) => (
            {...prevState, selectedItems: prevState.selectedItems.filter(item => item !== itemName)}
        ));
    }

    removeFromDialogSelected = (itemName) => {
        this.setState((state) => (
            {
                ...state,
                dialog: {
                    ...state.dialog,
                    selectedItems: state.dialog.selectedItems.filter(item => item !== itemName)
                }
            }
        ));
    }
    
    toggleDialog = () => {
        this.setState((state) => (
            {
                ...state, 
                dialog: {
                    isOpened: !state.dialog.isOpened, 
                    selectedItems: state.selectedItems,
                    searchInput: '',
                    filterIndex: 0
                }
            }
        ))
    }

    updateItems = () => {
        this.setState((state) => (
            {...state, selectedItems: state.dialog.selectedItems, dialog: {...state.dialog, isOpened: false}}
        ))
    }

    handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState((state) => (
            {
                ...state,
                dialog: {
                    ...state.dialog,
                    [name]: value
                }
            }
        ))
    }

    handleCheckboxChange = (event, item) => {
        const checked = event.target.checked;

        this.setState((state) => {
            let newState;
            if (checked) {
                newState = {
                    ...state,
                    dialog: {
                        ...state.dialog,
                        selectedItems: [...state.dialog.selectedItems, item]
                    }
                }
            } else {
                newState = {
                    ...state,
                    dialog: {
                        ...state.dialog,
                        selectedItems: state.dialog.selectedItems.filter(selectedItem => selectedItem !== item)
                    }
                }
            }
            return newState;
        })
    }
};

SelectWithFilter.propTypes = {
    items: PropTypes.array
}

export default  SelectWithFilter