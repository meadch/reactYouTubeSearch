import React, { Component, PropTypes } from 'react';
import { InputGroup, FormGroup, Button, FormControl } from 'react-bootstrap';

class SearchBar extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ''
        }
    }
    updateSearchTerm = (e) => {
        // TODO: Add throttling to search on input change
        // this.props.search(e.target.value);
        this.setState({ searchTerm: e.target.value });
    }
    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.search(this.state.searchTerm);
    }
    render(){
        return (
            <form onSubmit={ this.handleFormSubmit }>
                <FormGroup
                    bsSize="large"
                    className="search"
                    >
                    <InputGroup>
                        <FormControl 
                            type="text"
                            value={ this.state.searchTerm }
                            placeholder="Search..."
                            onChange={ this.updateSearchTerm }
                        />
                        <InputGroup.Button>
                            <Button 
                                type="submit" 
                                bsSize="large"
                                onClick={ this.handleFormSubmit }
                            >
                                Search
                            </Button>
                        </InputGroup.Button>
                    </InputGroup>
                </FormGroup>
            </form>
        )
    }
}

SearchBar.propTypes = {
    search: PropTypes.func.isRequired
}

export default SearchBar;