import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './components/pages/home/Home';
import Autores from './components/pages/Autores';
import Livros from './components/pages/Livros';
import NotFound from './components/pages/NotFound';

ReactDOM.render(
    <BrowserRouter>
        <Switch>
            <Route path='/' exact={true} component={Home} />
            <Route path='/authors' component={Autores} />
            <Route path='/books' component={Livros} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
    , document.getElementById('root'));
