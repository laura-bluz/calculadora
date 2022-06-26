
function Calc() {
    return (<>
        <h1>Selecione a operação desejada:</h1>
        <select id="select" defaultValue={"1"}>
            <option value="1">+</option>
            <option value="2">-</option>
            <option value="3">*</option>
            <option value="4">/</option>
            <option value="5">%</option>
        </select>

        <br></br><br></br>
        <div id="input"><input type='number'></input>
            <h1>+</h1><input type='number'></input>
            <h2>=</h2>
            <p>Resultado</p>
        </div>
    </>
    );
}


export default Calc;