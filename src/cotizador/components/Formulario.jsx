import { useContext } from "react";
import { Form, Div } from "../styles/formulario.styles";
import Error from "./Error";
import CotizadorContext from "../context/CotizadorProvider";

const Formulario = () => {
  const { formValues, error, onInputChange, onSubmit, resetForm, prima } =
    useContext(CotizadorContext);
  const onCotizar = () => {
    prima();
  };
  return (
    <>
      <Form onSubmit={onSubmit}>
        <div className="subcontenedor subcontenedor1">
          <h2>Información Personal y Laboral</h2>
          {error && <Error error={error} />}
          <div className="input-group">
            <label className="nombres-label" htmlFor="nombreUsuario">
              Nombre Completo{" "}
            </label>
            <input
              type="text"
              name="nombreUsuario"
              className="nombreUsuario"
              value={formValues.nombreUsuario || ""}
              onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <label className="apellidos-label" htmlFor="apellidoUsuario">
              Apellidos
            </label>
            <input
              type="text"
              name="apellidoUsuario"
              className="apellidoUsuario"
              value={formValues.apellidoUsuario || ""}
              onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <label className="nacimiento-label" htmlFor="FechaNacimiento">
              Fecha de Nacimiento
            </label>
            <input
              type="date"
              name="fechaNacimiento"
              className="fechaNacimiento"
              value={formValues.fechaNacimiento || ""}
              onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <label className="salario-label" htmlFor="salario">
              Salario anual en USD
            </label>
            <input
              type="number"
              name="salario"
              className="salario"
              value={formValues.salario || ""}
              onChange={onInputChange}
            />
          </div>
          <div className="input-group">
            <label className="preexistencia" htmlFor="preexistencia">
              Preexistencia
            </label>
            <select
              name="preexistencia"
              className="preexistencia"
              value={formValues.preexistencia || ""}
              onChange={onInputChange}
            >
              <option value="">-- Seleccione --</option>
              <option value="no">Sin preexistencia</option>
              <option value="cancer">Cáncer</option>
              <option value="cronica">Enfermedades Crónias</option>
              <option value="autoinmune">Enfermedades autoinmunes</option>
              <option value="mental">
                Enfermedades Mentales /o Psicológicas
              </option>
              <option value="genetica">
                Enfermedades Mentales /o Psicológicas
              </option>
              <option value="infecciosa">
                Enfermedades Infecciosas Crónicas
              </option>
            </select>
          </div>
          <div className="input-group">
            <label className="cual-label" htmlFor="cual">
              ¿Cuál?
            </label>
            <input
              type="text"
              name="cual"
              className="cual"
              value={formValues.cual}
              onChange={onInputChange}
            />
          </div>
        </div>
        <div className="subcontenedor subcontenedor1">
          <h2 className="cotizacion-titulo">Cotización</h2>
          <div className="input-group">
            <label className="monto-label" htmlFor="monto">
              Monto de Cobertura
            </label>
            <select
              name="montoCobertura"
              className="montoCobertura"
              value={formValues.montoCobertura || ""}
              onChange={onInputChange}
            >
              <option value="500000">USD 500,000</option>
              <option value="300000">USD 300,000</option>
              <option value="100000">USD 100,000</option>
            </select>
          </div>
          <div className="input-group">
            <label className="tiempo-label" htmlFor="tiempo">
              Término de la Poliza
            </label>
            <select
              name="tiempo"
              className="tiempo"
              value={formValues.tiempo || ""}
              onChange={onInputChange}
            >
              <option value="">-- Seleccione --</option>
              <option value="5">5 años</option>
              <option value="10">10 años</option>
              <option value="15">15 años</option>
            </select>
          </div>
          <div className="input-group">
            <input
              type="submit"
              className="btn-cotizar"
              value="Cotizar"
              onClick={onCotizar}
            />
          </div>
        </div>
      </Form>
      <Div className="btn">
        <button className="btn-procesar" onClick={resetForm}>
          Procesar
        </button>
      </Div>
    </>
  );
};

export default Formulario;
