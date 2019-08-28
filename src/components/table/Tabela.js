import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead className="thead-dark">
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">email</th>
            </tr>
        </thead>
    );
}

const TableBody = props => {

    const linhas = props.listaAutores.map(autor => {
        return (
            <tr key={autor.id}>
                <td>{autor.nome}</td>
                <td>{autor.email}</td>
            </tr>
        );
    })
    return(
        <tbody>
            {linhas}
        </tbody>
    );
 
}

class Tabela extends Component {

    render() {
        const { authors } = this.props;
        return (
            <table className="responsive-table centered highlight">
                <TableHead />
                <TableBody listaAutores = { authors }/>
            </table>
        );
    }
}

export default Tabela;