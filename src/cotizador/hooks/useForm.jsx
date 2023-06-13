import { useState } from "react";

const useForm = (initialValue = {}) => {
  const [formValues, setFormValues] = useState(initialValue);
  const [error, setError] = useState("");
 
  const onInputChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    // setFormValues({...formValues, [name]: value });
   
  };

  const onSubmit = (event) => {
    event.preventDefault();

    // Validar campos vacíos
    for (const key in formValues) {
      if (formValues[key] === "") {
        setError("No debe haber campos vacíos.");
        return;
      }
    }
    

    setError("");
  };

  const resetForm = () => {
    setFormValues({});
  };

  return { formValues, error, onInputChange, onSubmit, resetForm };
};

export default useForm;
