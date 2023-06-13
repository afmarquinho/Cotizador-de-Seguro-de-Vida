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
  
  const { formValues, error, onInputChange, onSubmit, resetForm } =
    useForm(initialValue);
    const [cargando, setCargando] = useState(false);
    const [resultado, setResultado] = useState(0);


  const prima = () => {
    //factoredad
    const factorEdad = calcularEdad(formValues.fechaNacimiento);

    // calc factor tiempo
    const factorTiempo = factiempo(formValues.tiempo);

    // base
    const base = factBase(formValues.montoCobertura);

    // base ajustada
    const baseAjustada = base * porcentaje(formValues.preexistencia) + base;
    setCargando(true)
    setTimeout(() => {
      setCargando(false)
      setResultado((factorEdad * factorTiempo * baseAjustada).toFixed(2));
    }, 3000);
    
    return 
    setTimeout
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
        cargando,
        prima,
        resultado,
      }}
    >
      {children}
    </CotizadorContext.Provider>
  );
};

export { CotizadorProvider };

export default CotizadorContext;
