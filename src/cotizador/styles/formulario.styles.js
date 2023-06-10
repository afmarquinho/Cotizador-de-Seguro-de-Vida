import styled from "@emotion/styled";

export const Form = styled.form`
  background-color: #ffecb3;
  width: 40rem;
  margin: 1rem auto;
  padding: 3rem;
  border-radius: 1rem;
  .input-group {
    display: flex;
    flex-direction: column;
    label{
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
  .cotizacion-titulo{margin-top: 1rem;}
`;
