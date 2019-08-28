import React, { Component, Fragment } from 'react';

import Header from '../header/Header';
import Service from '../../service/service';
import Form from '../form/FormularioLivro';
import PopUp from '../../utils/PopUp';
import TabelaLivros from '../table/TableLivros';

class Livros extends Component {

  constructor(props) {
    super(props);

    this.state = {
      livros: [],
      autores: []
    }
  }

  componentDidMount() {

    Service.ListAll()
      .then(res => {
        this.setState({ autores: res })
      })
      .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os autores"))

    Service.ListBooks()
      .then(res => {
        PopUp.exibeMensagem('success', 'Livros listados com sucesso');
        console.log(res);
        this.setState({ livros: res })
      })
      .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os livros"))
  }

  saveBook = book => {
    console.log("Dados sendo enviados");
    Service.CreateBook(book)
      .then(res => {
        this.setState({ livros: res })
        PopUp.exibeMensagem('success', "Autor adicionado com sucesso");
      })
      .catch(err => {
        console.log(err);
        PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar salvar o autor");
      })
  }

  render() {
    return (
      <Fragment>
        <Header />
        <div className="container">
          <h1>Livros</h1>
          <Form className="mb-2" saveBook={this.saveBook} autores={this.state.autores} />
          <TabelaLivros livros={this.state.livros} />
        </div>
      </Fragment>
    );
  }
}
export default Livros;