import { useState } from "react";
import Swal from 'sweetalert2'
export const Formulario = ({addTodo}) => {
  //   const [title, settitle] = useState('');

  //   const [description, setDescription] = useState('');

  //   const [state, setState] = useState('Completado');

  //inicializacion del useState en una llamada se remplaza el set en todos los campos
  // y se envia una copia del todo ademas del campo que se quiere utilizar
  //ejempli {...todo,  title: e.target.value}

  const [todo, setTodo] = useState({
    title: "Todo # 1",
    description: "Decription Todo # 1",
    state: "Completado",
    priority: true,
  });

  const { description, priority, state, title } = todo;

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(state, title, description);
    if(title.trim() === '' || description.trim() === '') {
      return Swal.fire({
        icon: 'error',
        title: 'Opps...',
        text: 'Debes llenar todos los campos',
        footer: '<a href>Why do I have this issue?</a>'
      }) 
    }
    addTodo({
      id: Date.now(),
      ...todo,
      state: state ==='Completado'
    });

    return Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Todo agregado con exito',
      showConfirmButton: false,
      timer: 1500
    })
  };
  //video de 10 muntuos

  const handleChange = (event) => {
    const { name, type, checked, value } = event.target;

    setTodo({
      ...todo,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Ingrese Todo"
        className="form-control mb-2"
        name="title"
        value={title}
        onChange={handleChange}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Ingrese descripcion"
        name="description"
        value={description}
        onChange={handleChange}
      />

      <div className="form-check mb-3">
        <input
          type="checkbox"
          name="priority"
          id="inputCheck"
          className="form-check-input"
          checked={priority}
          onChange={handleChange}
        />
        <label className="form-check-label" htmlFor="inputCheck">
          Dar Prioridad
        </label>
      </div>

      <select className="form-select mb-2" name="state" value={state} onChange={handleChange}>
        <option value="Pendiente">Pendiente</option>
        <option value="Completado">Completado</option>
      </select>
      <button type="submit" className="btn btn-primary">
        Procesar
      </button>
    </form>
  );
};
