import styled from "@emotion/styled";

const P = styled.p`
  color: red;
  background-color: #ffcdd2;
  border: 1px solid red;
  text-align: center;
  width: 100%;
  padding: 0.5rem;
  border-radius:0.5rem;
  font-size: 1.3rem;
`;

const Error = ({error}) => {
  return  <P>{error}</P> ; 
};

export default Error;
