import React, { Component } from 'react';

const TableHead = () => {

    return (
        <thead className="thead-dark">
            <tr>
            <th>Titulo</th>
            <th>Autor</th>
            <th>Preco</th>
          </tr>
        </thead>
    );
}

const TableBody = props => {
    let livros = props.livros.map(livro =>
        <tr key={livro.titulo}>
                <td>{ livro.titulo }</td>    
                <td>{ livro.autor.nome }</td>    
                <td>{ livro.preco }</td>
        </tr>);

    return(
        <tbody>
            {livros}
        </tbody>
    );
 
}

class TabelaLivros extends Component {

    render() {
        const { livros } = this.props;
        return (
            <table className="responsive-table centered highlight">
                <TableHead/>
                <TableBody livros = { livros } />
            </table>
        );
    }
}

export default TabelaLivros;