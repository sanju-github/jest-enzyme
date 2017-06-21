import React, { Component } from 'react';
import ReacDom  from 'react-dom';

class App extends Component {
    
    render(){
        return(
        <div>Nested Components</div>
        );
        
    }
}

ReacDom.render(<App />, document.querySelector('.container'));