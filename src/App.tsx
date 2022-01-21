import React, { FormEvent, useRef } from "react";

function App() {
  const formRef = useRef(null);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const data = Object.fromEntries(formData);
      console.log(data);
    }
  };
  return (
    <div className="App">
      <form ref={formRef} onSubmit={handleSubmit}>
        <div>
          <label>Nome</label>
          <input type="text" name="nome" />
        </div>
        <div>
          <label>Data</label>
          <input type="date" name="data" />
        </div>
        <div>
          <label>Sexo</label>
          <input type="radio" name="sexo" value="masculino" />
          <input type="radio" name="sexo" value="feminino" />
        </div>
        <div>
          <label>Perfil foto</label>
          <input type="file" name="perfil" />
        </div>
        <div>
          <label>Idade</label>
          <input type="number" name="idade" />
        </div>
        <div>
          <label>Idade</label>
          <input type="range" name="idade2" />
        </div>
        <div>
          <label>Cor favorita</label>
          <select name="cor" defaultValue="">
            <option selected disabled value="">
              Selecione
            </option>
            <option value="vermelho">Vermelho</option>
            <option value="azul">Azul</option>
          </select>
        </div>
        <div>
          <label>Checkbox</label>
          <input type="checkbox" name="check" value="check 1" />
          <input type="checkbox" name="check" value="check 2" />
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
