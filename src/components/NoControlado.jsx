import { useState } from "react";
import { useRef } from "react";

export const NoControlado = () => {
  const [error, setError] = useState("");
  const form = useRef(null);
  const handleSubmit = (event) => {
      event.preventDefault();
      setError("");
      
    //capturar los datos de un formulario no controlado por REACT
    const data = new FormData(form.current);
    // console.log(...data.entries());
    const { title, description, state } = Object.fromEntries([...data.entries()]);
    console.log(title, description, state);

    //validar los datos del formulario no controlado por REACT
    if (!title.trim() || !description.trim() || !state.trim())   
    return setError(`Llena todos los campos del formulario`);
  };

  return (
    <form onSubmit={handleSubmit} ref={form}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        defaultValue="todo1"
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        defaultValue="description todo1"
      />

      <select className="form-select mb-2" name="state" defaultValue="Completado">
        <option value="Pendiente">Pendiente</option>
        <option value="Completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>

      {error !== "" && error}
    </form>
  );
};
