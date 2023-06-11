// calc factor edad
export const calcularEdad = (fecha) => {
  const fechaNacimiento = new Date(fecha);
  const fechaActual = new Date();
  const diferencia = fechaActual - fechaNacimiento;
  const edadMilisegundos = diferencia / (1000 * 60 * 60 * 24 * 365.25);
  const edad = Math.floor(edadMilisegundos);
  return edad < 35 ? 2.5 : edad < 45 ? 2.6 : edad < 55 ? 2.7 : 3;
};

// calc factor tiempo
export const factiempo = (tiempo) => {
  return (tiempo * 12) / 100;
};

// base
export const factBase = (monto) => {
  return (monto * 150) / 1000;
};

// base ajustada
export const porcentaje = (salud) => {
  return salud === "no"
    ? 0
    : salud === "cancer"
    ? 0.2
    : salud === "cronica"
    ? 0.15
    : salud === "autoinmune"
    ? 0.25
    : salud === "mental"
    ? 0.2
    : salud === "genetica"
    ? 0.18
    : 0.23;
};

//   switch (salud) {
//     case "no":
//       return 0;
//       break;
//     case "cancer":
//       return 0;
//       break;
//     case "cronica":
//       return 0;
//       break;
//     case "autoinmune":
//       return 0;
//       break;
//     case "mental":
//       return 0;
//       break;
//     case "genetica":
//       return 0;
//       break;
//     case "infecciosa":
//       return 0;
//       break;

//     default:
//       break;
//   }
// }
