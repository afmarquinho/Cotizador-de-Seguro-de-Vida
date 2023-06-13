import { useContext } from "react";
import CotizadorContext from "../context/CotizadorProvider";
import Spinner from "./Spinner";
import styled from "@emotion/styled";

const Contenedor = styled.div`
  padding: 0 0 0 3rem;
`;
const H2 = styled.h2`
  font-size: 2rem;
  margin: 0 auto;
  text-align: center;
`;
const H4 = styled.h4`
  margin: 0;
`;
const P = styled.p`
  margin: 0 0 0 0.5rem;
`;
const P1 = styled.p`
  margin: 0 0 0 0.5rem;
  font-size: 2rem;
  font-weight: 900;
`;
const Div = styled.div`
  display: flex;
  align-items: baseline;
`;
const Resultado = () => {
  const { formValues, cargando, resultado } = useContext(CotizadorContext);

  return (
    <>
      <H2>COTIZACIÓN</H2>

      {
        (resultado === 0 || NaN ? null : cargando ? (
          <Spinner />
        ) : (
          <Contenedor>
            <Div>
              <H4>Nombre del Cliente:</H4>
              <P>{formValues.nombreUsuario}</P>
            </Div>
            <Div>
              <H4>Apellido:</H4>
              <P>{formValues.apellidoUsuario}</P>
            </Div>
            <Div>
              <H4>Tipo de Preexistencia:</H4>
              <P> {formValues.preexistencia}</P>
            </Div>
            <Div>
              <H4>Nombre de la Preexistencia:</H4>
              <P> {formValues.cual}</P>
            </Div>
            <Div>
              <H4>Salario anual:</H4>
              <P> USD {formValues.salario}</P>
            </Div>
            <Div>
              <H4>Tipo de Póliza:</H4>
              <P> a termino a {formValues.tiempo} años</P>
            </Div>
            <Div>
              <H4>Monto de Cobertura:</H4>
              <P>USD {formValues.montoCobertura}</P>
            </Div>
            <Div>
              <H4>Prima Anual: </H4>
              <P1> {resultado}</P1>
            </Div>
          </Contenedor>
        ))
      }
    </>
  );
};

export default Resultado;
