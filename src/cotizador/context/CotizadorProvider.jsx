import { createContext, useState } from "react";
import useForm from "../hooks/useForm";
import {
  calcularEdad,
  factBase,
  factiempo,
  porcentaje,
} from "../helpers/calculosCotizacion";
let initialValue = {
  nombreUsuario: "",
  apellidoUsuario: "",
  fechaNacimiento: "",
  salario: "",
  preexistencia: "",
  cual: "",
  montoCobertura: 500000,
  tiempo: "",
};


const CotizadorContext = createContext();

const CotizadorProvider = ({ children }) => {
  
  const { formValues, error, onInputChange, onSubmit, resetForm, cargando } =
    useForm(initialValue);

  const prima = () => {
    //factoredad
    const factorEdad = calcularEdad(formValues.fechaNacimiento);

    // calc factor tiempo
    const factorTiempo = factiempo(formValues.tiempo);

    // base
    const base = factBase(formValues.montoCobertura);

    // base ajustada
    const baseAjustada = base * porcentaje(formValues.preexistencia) + base;

    return factorEdad * factorTiempo * baseAjustada;
  };

  // prima = fedad * ftiempo * base ajustada
  return (
    <CotizadorContext.Provider
      value={{
        formValues,
        error,
        onInputChange,
        onSubmit,
        resetForm,
        prima,
        cargando,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
