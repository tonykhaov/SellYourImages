import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { Button, Input } from "../styled_components";

function EnterStore(props) {
  const inputEl = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const username = inputEl.current.value;
    props.history.push(`/store/${username}`);
    props.setUsername(username);
  };

  return (
    <FormWrapper onSubmit={handleSubmit}>
      <h1>Connexion</h1>
      <p>Entre ton nom d'utilisateur</p>
      <InputForm
        ref={inputEl}
        type="text"
        placeholder="Nom d'utilisateur"
        required
      />
      <ButtonForm type="submit">Valider</ButtonForm>
    </FormWrapper>
  );
}

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 48px;
  font-size: 32px;

  p {
    font-size: 24px;
  }
`;
const InputForm = styled(Input)`
  margin: 24px;
`;

const ButtonForm = styled(Button)`
  background-color: hsl(23, 100%, 54%);
  color: white;
  font-weight: 600;
  box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    background-color: hsl(23, 87%, 53%);
  }
`;

export default EnterStore;
