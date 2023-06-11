import styled from "@emotion/styled";

export const Form = styled.form`
  background-color: #80deea;
  margin: 1rem auto;
  width: 60rem;
  padding: 2rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    width: 80%;
  }
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 2rem;
    .subcontenedor{
    width: 50%;
  }
  }
  

  .input-group {
    display: flex;
    flex-direction: column;
    label {
      font-size: 1.2rem;
      margin-top: 0.5rem;
    }
    input {
      height: 3.5rem;
      border-radius: 0.5rem;
      border: none;
      background-color: #fafafa;
    }
    .btn-cotizar {
      background-color: #0277bd;
      margin-top: 2rem;
      color: white;
      font-weight: bold;
      transition: all 0.5s ease;
      :hover {
        cursor: pointer;
        background-color: #01579b;
      }
    }
  }

  h2 {
    font-size: 1.5rem;
    margin: 0;
    text-align: center;
  }
  .cotizacion-titulo{
    @media (max-width: 768px) {
      margin-top: 1rem;
    }
  }
`;
export const Div = styled.div`
  margin: 0;
  .btn-procesar {
    padding: 1rem 1.5rem;
    margin-left: 1rem;
    border: none;
    background-color: #7e57c2;
    color: white;
    font-weight: bold;
    transition: all 0.5s ease;
    :hover {
      cursor: pointer;
      background-color: #5e35b1;
    }
  }
`;
