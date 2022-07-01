import { useState } from "react";

function enviar(estado, valor1, valor2) {
    let resultado = 0;
    switch (estado) {
        case '+':
            resultado = parseInt(valor1) + parseInt(valor2);
            break;
        case '-':
            resultado = valor1 - valor2;
            break;
        case '*':
            resultado = valor1 * valor2;
            break;
        default:
            resultado = valor1 / valor2;
            break;
    }
    return resultado;
}

function porCento(n1, n2) {
    let result = 0;

    result = n1 / 100;
    result = result * n2;

    return result;

}

function porCento2(n1, n2) {

    let resultado3 = 0;

    resultado3 = n1 / n2;

    resultado3 *= 100;

    return resultado3;
}

function Calc() {
    const [estado, setEstado] = useState('+');
    let [resultado, setResultado] = useState(0);
    let [resultado2, setResultado2] = useState(0);
    let [resultado3, setResultado3] = useState(0);
    let [estadoControle, setEstadoControle] = useState(0);


    const handleSubmit = (e) => {
        e.preventDefault();
        let form = new FormData(e.target);

        const dados = Object.fromEntries(form);
        console.log(dados)

        if (!(dados.valor1 === '' || dados.valor2 === '')) {
            setResultado(enviar(dados.operacao, dados.valor1, dados.valor2));
        }
        if (!(dados.numero1 === '' || dados.numero2 === '')) {
            setResultado2(porCento(dados.numero1, dados.numero2));
        }
        if (!(dados.numero3 === '' || dados.numero4 === '')) {
            setResultado3(porCento2(dados.numero3, dados.numero4));
        }
    }


    return (
        <>
            <h1>Calculadora</h1>

            <div id="input">
                <form onSubmit={handleSubmit}>

                    <br></br>

                    <div className='inputNumber'>
                        <input className='number' name='valor1' id='number1' type='text'></input>
                        <select id="select" name='operacao' defaultValue={estado} onChange={e => setEstado(e.target.value)}>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                        </select>

                        <input className='number' name='valor2' id='number2' type='number'></input>
                        <br></br><br></br>
                        <button type='submit'>=</button>
                        <p>{resultado}</p>
                    </div>

                    <div className='inputPorCento'>
                        <p>Quanto é <input name='numero1' type='number'></input>% de <input name='numero2' type='number'></input>?<button type='submit'>=</button></p>
                        <p>{resultado2}</p>

                        <p>O valor <input name='numero3' type='number'></input>é qual porcentagem de <input name='numero4' type='number'></input>?<button type='submit'>=</button></p>
                        <p>{resultado3}%</p>
                    </div>
                </form>
            </div>
        </>
    );
}


export default Calc;