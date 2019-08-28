import React, { Component, Fragment } from 'react';
import 'materialize-css/dist/css/materialize.min.css'
import './Home.css';

import Header from '../../header/Header';
import AutorBox from '../AutorBox';

class Home extends Component {

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1 className="text-center title">Cadastro de Autores</h1>
        </div>
        <AutorBox />
      </Fragment>
    );
  }
}

export default Home;
