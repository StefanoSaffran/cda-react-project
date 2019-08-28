import React, { Component, Fragment } from 'react';

import Form from '../form/Formulario';
import Tabela from '../table/Tabela';
import Service from '../../service/service';
import PopUp from '../../utils/PopUp';

class AutorBox extends Component {

    state = {
        lista: [],
    }

    componentDidMount() {
        Service.ListAll()
        .then(res => {
            this.setState({ lista: res })
        })
        .catch(err => PopUp.exibeMensagem('error', "Erro na comunicação com a API ao tentar listar os autores"))

    }

    saveAuthor = author => {
        console.log("Dados sendo enviados");
        Service.CreateAuthor(author)
            .then(res => {
                this.setState({ lista: res })
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
                <Form className="mb-2" saveAuthor={this.saveAuthor} />
                <Tabela authors={this.state.lista} />
            </Fragment>
        );
    }
}

export default AutorBox;