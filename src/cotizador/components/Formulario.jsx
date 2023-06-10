import { Form } from "../styles/formulario.styles";

const Formulario = () => {
  return (
    <Form>
      <h2>Información Personal y Laboral</h2>
      <div className="input-group">
        <label className="nombres-label" htmlFor="nombreUsuario">
          Nombre Completo{" "}
        </label>
        <input type="text" name="nombreUsuario" className="nombreUsuario" />
      </div>
      <div className="input-group">
        <label className="apellidos-label" htmlFor="apellidoUsuario">
          Apellidos
        </label>
        <input type="text" name="apellidoUsuario" className="apellidoUsuario" />
      </div>
      <div className="input-group">
        <label className="nacimiento-label" htmlFor="FechaNacimiento">
          Fecha de Nacimiento
        </label>
        <input type="date" name="FechaNacimiento" className="FechaNacimiento" />
      </div>
      <div className="input-group">
        <label className="salario-label" htmlFor="salario">
          Salario en USD
        </label>
        <input type="number" name="salario" className="salario" />
      </div>
      <div className="input-group">
        <label className="preexistencia" htmlFor="preexistencia">
          Preexistencia
        </label>
        <select name="preexistencia" className="preexistencia">
          <option value="">-- Sin preexistencia --</option>
          <option value="cancer">Cáncer</option>
          <option value="cronica">Enfermedades Crónias</option>
          <option value="autoinmune">Enfermedades autoinmunes</option>
          <option value="mental">Enfermedades Mentales /o Psicológicas</option>
          <option value="genetica">
            Enfermedades Mentales /o Psicológicas
          </option>
          <option value="infecciona">Enfermedades Infecciosas Crónicas</option>
        </select>
      </div>
      <div className="input-group">
        <label className="cual-label" htmlFor="cual">
          ¿Cuál?
        </label>
        <input type="text" name="cual" className="cual" />
      </div>
      <h2 className="cotizacion-titulo">Cotización</h2>
      <div className="input-group">
        <label className="monto-label" htmlFor="monto">
          Monto de Cobertura
        </label>
        <select name="monto" className="monto">
          <option value="500000">USD 500,000</option>
          <option value="300000">USD 300,000</option>
          <option value="100000">USD 100,000</option>
        </select>
      </div>
      <div className="input-group">
        <label className="tiempo-label" htmlFor="tiempo">
          Término de la Poliza
        </label>
        <input type="number" name="tiempo" className="tiempo" />
      </div>
      <div className="input-group">
        <input type="submit" className="btn-cotizar" value="Cotizar" />
      </div>
    </Form>
  );
};

export default Formulario;
