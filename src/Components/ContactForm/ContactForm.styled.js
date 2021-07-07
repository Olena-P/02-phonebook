import styled from "@emotion/styled";

export const Form = styled.form`
  flex-direction: column;
  border-radius: 15px;
  background-color: purple;
  padding: 25px;
`;

export const Input = styled.input`
  width: 200px;
  border-radius: 3px;
  border: none;
  outline: none;
  font-size: 14px;
`;

export const Label = styled.label`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 20px;
  font-size: 18px;
  font-weight: 400;
`;

export const Button = styled.button`
  width: max-content;
  margin-right: auto;
  margin-left: auto;
  cursor: pointer;
  padding: 5px 10px;
  border: none;
  outline: none;
  border-radius: 3px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.3);
  transition: transform 0.25s cubic-bezier(0.77, 0, 0.175, 1);
  color: black;
  background-color: rgb(192, 138, 243);

  &:hover {
    background-color: rgb(177 117 250);
    transform: scale(1.05);
    border: none;
    outline: none;
  }
`;

export const Error = styled.span`
  font-size: 11px;
  left: 400px;
  bottom: 0px;
  color: coral;
  margin: 10px;
`;
