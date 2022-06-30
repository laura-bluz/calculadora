import { useState } from "react";

function enviar(estado, valor1, valor2) {
    let resultado = 0;
    console.log(estado, valor1, valor2)
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
        case '/':
            resultado = valor1 / valor2;
            break;
        default:
            resultado = <p>Ainda não fiz %</p>
    }
    return resultado;
}

function Calc() {
    const [estado, setEstado] = useState('+');
    let [resultado, setResultado] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault();
        let form = new FormData(e.target);

        const dados = Object.fromEntries(form);
        console.log(dados);

        setResultado(enviar(dados.operacao, dados.valor1, dados.valor2));
    }


    return (
        <>
            <h1>Calculadora</h1>

            <div id="input">
                <form onSubmit={handleSubmit}>

                    <br></br>

                    <div className='inputNumber'>
                        <input className='number' name='valor1' id='number1' type='text'></input>
                        {/* <h1>{estado}</h1> */}
                        <select id="select" name='operacao' defaultValue={estado} onChange={e => setEstado(e.target.value)}>
                            <option value="+">+</option>
                            <option value="-">-</option>
                            <option value="*">*</option>
                            <option value="/">/</option>
                            <option value="%">%</option>
                        </select>

                        <input className='number' name='valor2' id='number2' type='number'></input>
                        <br></br><br></br>
                        <button type='submit'>=</button>
                        <p>{resultado}</p>
                    </div>
                </form>
            </div>
        </>
    );
}


export default Calc;