import React, { Component } from 'react';

import FormValidator from '../../utils/FormValidator';
import PopUp from '../../utils/PopUp';

class Formulario extends Component {

    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            {
                campo:'nome',
                metodo:'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um nome'
            },
            {
                campo:'email',
                metodo:'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um email'
            },
            {
                campo:'senha',
                metodo:'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com a senha'
            },
        ])

        this.InitialState = {
            nome: '',
            email: '',
            senha: '',
            validacao: this.validator.criaPropValido()
        }

        this.state = this.InitialState;
    }

    inputListener = event => {

        const { name, value } = event.target;

        this.setState(
            {
                [name]: value
            }
        )
    }

    formSubmit = () => {

        const validacao = this.validator.valida(this.state);
        if (validacao.isValid) {

            this.props.saveAuthor(this.state);
            this.setState(this.InitialState);
            
        } else {
            const { nome, email, senha } = validacao;
            const campos = [ nome, email, senha ];

            const camposInvalidos = campos.filter(elem => elem.isInvalid);

            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message)
            });
        }
    }

    render() {

        const { nome, email, senha } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="nome">Nome</label>
                        <input
                            className="validate"
                            id="nome"
                            type="text"
                            name="nome"
                            value={nome}
                            onChange={this.inputListener}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="email">Email</label>
                        <input
                            className="validate"
                            id="email"
                            type="text"
                            name="email"
                            value={email}
                            onChange={this.inputListener}
                        />
                    </div>

                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="senha">Senha</label>
                        <input
                            className="validate"
                            id="senha"
                            type="password"
                            name="senha"
                            value={senha}
                            onChange={this.inputListener}
                        />
                    </div>
                </div>

                <button type="button" onClick={this.formSubmit} className="btn waves-effect waves-light indigo lighting 2">Salvar</button>
            </form>
        );
    }
}

export default Formulario;