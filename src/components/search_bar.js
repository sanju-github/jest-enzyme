import React, { Component } from 'react';

//to have funcitonalities of React.component class
class SearchBar extends Component{ // instead of React.Component we use just Component and update the import statement as import React, { Component } from 'react';
    constructor(props){//this constructor is called whenever SearchBar object is created.We are creatting searchBar object in the div tags of index.js.
        super(props); // calling Component class constructor with props as parameter.
        this.state = { term: ''}; //setting the initial state. 
    }
    render(){
        
        return(
            <div className="search-bar">
           
            <input 
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
            
            </div>
        );
    }
    
    onInputChange(term) {
       this.setState({term});
       this.props.onSearchTermChange(term);
    }
}
export default SearchBar; 