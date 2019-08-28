import validator from 'validator';

class FormValidator {

    constructor(validacoes) {
        this.validacoes = validacoes;
    }

    valida(state) {

        //itera pelo array de regras de validação e constrói
        //um objeto validacao e retorna-o

        //começa assumindo que está tudo válido, recebe o 
        //objeto do método valido.

        let validacao = this.criaPropValido();

        this.validacoes.forEach(regra => {
            
            //Se o campo não tiver sido marcado 
            //anteriormente como invalido por uma regra.
            if (!validacao[regra.campo].isInvalid) {
                //Determina o valor do campo, o método a ser invocado
                //e os argumentos opcionais pela definição da regra
                const campoValor = state[regra.campo.toString()];
                const args = regra.args || [];
                //if ternário para estar preparado caso 
                //alguém passe o método direto sem ser string
                const metodoValidacao = typeof regra.metodo === 'string' ?
                    validator[regra.metodo] : regra.metodo;

                //invoca o método específico da regra
                if (metodoValidacao(campoValor, ...args, state) !== regra.validoQuando) {

                    //modifica o objeto no campo específico
                    validacao[regra.campo] = { 
                        isInvalid: true, 
                        message: regra.mensagem 
                    };
                    validacao.isValid = false;

                }
            }


        });
        return validacao;
    }

    criaPropValido() {

        const validacao = {};

        //populando o objeto de acordo com a quantidade de campos
        //criando a chave isInvalid e atribuindo false para cada
        //**TODOS OS CAMPOS COMEÇAM VÁLIDOS!**
        this.validacoes.map(regra => (
            validacao[regra.campo] = { isInvalid: false, message: '' }
        ));

        //retorna um grande objeto com uma chave externa isValid 
        //junto com todos os outros campos.
        return { isValid: true, ...validacao };
    }
}

export default FormValidator;