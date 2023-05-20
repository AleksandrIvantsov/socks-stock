import styled from '@emotion/styled';

export const Button = styled.button`
  font-size: 16px;
  text-transform: capitalize;
  padding: 5px 15px;
  margin-right: 10px;
  border: 1px solid #e5e5e5;
  background-color: transparent;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  cursor: pointer;
`;

export const Label = styled.label`
  display: block;
  width: 200px;
  margin: 0 auto;
`;

export const Input = styled.input`
  display: block;
  margin: 5px 0 15px 0;
  height: 30px;
`;

export const Form = styled.form`
  width: 400px;
  padding: 10px;
  border: 1px solid #000;
`;
