import React, { Component } from 'react';

import FormValidator from '../../utils/FormValidator';
import PopUp from '../../utils/PopUp';
import M from "materialize-css";

const DynamicSelect = props => {
    const { autores, onSelectChange, autorId } = props;
    return (
        <div className="input-field col s4 center">
            <select value={autorId} id='select-autor' name="autorId" onChange={onSelectChange}>
                <option value=''>Selecione</option>
                {autores.map(autor => <option key={autor.id} value={autor.id}>{autor.nome}</option>)}
            </select>
            <label htmlFor="autorId">Autor</label>
        </div>
    );
}

class FormularioLivro extends Component {

    constructor(props) {
        super(props);

        this.validator = new FormValidator([
            {
                campo: 'titulo',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Entre com um titulo'
            },
            {
                campo: 'preco',
                metodo: 'isInt',
                args: [{ min: 0, max: 9999 }],
                validoQuando: true,
                mensagem: 'Entre com um valor numérico positivo'
            },
            {
                campo: 'autorId',
                metodo: 'isEmpty',
                validoQuando: false,
                mensagem: 'Escolha o autor'
            },
        ])

        this.InitialState = {
            titulo: '',
            preco: '',
            autorId: '',
            validacao: this.validator.criaPropValido()
        }

        this.state = this.InitialState;
    }

    componentDidMount() {

        var elems = document.querySelectorAll('select');
        var options = document.querySelectorAll('option');
        var instances = M.FormSelect.init(elems, options);
        
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

            this.props.saveBook(this.state);
            this.setState(this.InitialState);

        } else {
            const { titulo, preco, autorId } = validacao;
            const campos = [titulo, preco, autorId];

            const camposInvalidos = campos.filter(elem => elem.isInvalid);

            camposInvalidos.forEach(campo => {
                PopUp.exibeMensagem('error', campo.message)
            });
        }
    }

    render() {
        const autores = this.props.autores;

        const { titulo, preco, autorId } = this.state;

        return (
            <form>
                <div className="row">
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="titulo">Titulo</label>
                        <input
                            className="validate"
                            id="titulo"
                            type="text"
                            name="titulo"
                            value={titulo}
                            onChange={this.inputListener}
                        />
                    </div>
                    <div className="input-field col s4">
                        <label className="input-field" htmlFor="preco">Preco</label>
                        <input
                            className="validate"
                            id="preco"
                            type="text"
                            name="preco"
                            value={preco}
                            onChange={this.inputListener}
                        />
                    </div>
                    <DynamicSelect autorId={autorId} autores={ autores } onSelectChange={this.inputListener} />
                </div>

                <button type="button" onClick={this.formSubmit} className="btn waves-effect waves-light indigo lighting 2">Salvar</button>
            </form>
        );
    }
}

export default FormularioLivro;