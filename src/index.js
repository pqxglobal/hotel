import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import App from './App';
import Places from './components/Places';
import Pricing from './components/Pricing';
import About from './components/About'

ReactDOM.render(
  <Router>
  <Routes>
    <Route path='/' element={<App/>}/>
    <Route path='/places' element={<Places/>}/>
    <Route path='/pricing' element={<Pricing/>}/>
    <Route path='/about' element={<About/>}/>
  </Routes>
</Router>,

  document.getElementById('root')
);
