import React from 'react';

const DataTable = props => {
    let linhas = props.dados.map(item =>
        <tr key={item.id}>
            {props.colunas.map(coluna =>
                <td key={`${item.id}${item[coluna]}`}> { item[coluna] } </td>    
            )}
        </tr>);

    let titles = props.titulo.map(title => 
        <th>{title.titulo}</th>
        )

    return(
        <table className="centered highlight">
            <thead>
                <tr>
                    {titles}
                </tr>
            </thead>
            <tbody>
                {linhas}
            </tbody>
        </table>
    );
}
export default DataTable;