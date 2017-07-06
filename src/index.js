
import React,{ Component } from 'react';
import {render} from  'react-dom';
import App from './App'

//Step 2
// Take this components generated HTML and put it on the page (in the DOM)
render(<App />, document.querySelector('.container')); //to work this statement we need import React from 'react'; and import ReactDOM from  'react-dom'; and we have to instantiate the class "App" like <App />  or <App></App>.And mention where to render document.querySelector('.container')
//always one component per file.
