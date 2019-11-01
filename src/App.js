/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Title from './components/Title';
import Main from './components/Main';
import Details from './components/Details';

import './index.scss'

const App = () => { 

  return (
    <div className="App">
      <Title/>
      <section className="App_content">
        <Router>
          <Route path="/" exact component={Main} />
          <Route path="/details/:id" exact component={Details}/>
        </Router>
      
    </section>
  </div>
  )
  
}

export default App;
