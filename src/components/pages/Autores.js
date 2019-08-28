import React, { Component, Fragment } from 'react';

import Header from '../header/Header';
import Service from '../../service/service';
import DataTable from '../table/DataTable';
import PopUp from '../../utils/PopUp';

class Autores extends Component {

  constructor(props) {
    super(props);

    this.state = {
      nomes: [],
      titulo: ['Autores']
    }
  }

  componentDidMount() {
    Service.ListAll()
      .then(res => {
          PopUp.exibeMensagem('success', 'Autores Listados com sucesso');
          this.setState({ nomes: res })
      })
      .catch(err =>PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os autores"))
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Autores</h1>
          <DataTable dados={this.state.nomes} titulo={this.state.titulo} colunas={['nome']} />
        </div>

      </Fragment>
    );
  }
}
export default Autores;