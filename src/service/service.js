const API = 'http://cdc-react.herokuapp.com/api/';


const handleStatus = res =>
    res.ok ? res.json() : Promise.reject(res.statusText);

const Service = {

    ListAll: () =>
        fetch(`${API}autores`)
            .then(res => handleStatus(res)),

    CreateAuthor: author => {
        return fetch(`${API}autores`, {
            credentials: 'include',
            method: 'post',
            body: JSON.stringify(author),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => this.handleStatus(res))

    },

    ListBooks: () =>
        fetch(`${API}livros`)
            .then(res => handleStatus(res)),

    CreateBook: book => {
        return fetch(`${API}livros`, {
            credentials: 'include',
            method: 'post',
            body: JSON.stringify(book),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
            .then(res => this.handleStatus(res))

    }
}
export default Service;