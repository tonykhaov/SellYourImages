import React, { useRef } from "react";
import styled from "styled-components";
import { Button, Input, Card } from "../styled_components";
import { black, grey, pink, double_box_shadow } from "../Utilities";

function EnterStore(props) {
  const inputEl = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const username = inputEl.current.value;
    props.history.push(`/store/${username}`);
    props.setUsername(username);
  };

  return (
    <CardWrapper>
      <FormWrapper onSubmit={handleSubmit}>
        <TitleForm>Connexion</TitleForm>
        <Hr />
        <DescriptionForm>Entre ton nom d'utilisateur</DescriptionForm>
        <InputForm
          ref={inputEl}
          type="text"
          placeholder="Nom d'utilisateur"
          required
        />
        <ButtonForm type="submit">Valider</ButtonForm>
        <Author href="http://github.com/tonykhaov">par Tony KHAOV</Author>
      </FormWrapper>
    </CardWrapper>
  );
}

const CardWrapper = styled(Card)`
  max-width: 480px;
  margin: auto;
  margin-top: 32px;
  padding: 32px;
  box-shadow: ${double_box_shadow[4]};
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleForm = styled.h1``;

const Hr = styled.hr`
  background-color: ${pink[600]};
  height: 2px;
  border-radius: 2px;
  border: none;
  width: 100%;
  margin: 8px;
`;

const DescriptionForm = styled.p`
  color: ${grey[600]};
  font-weight: 100;
`;

const InputForm = styled(Input)`
  margin: 8px;
  padding: 10px 16px;
  border: 1px solid ${black[400]};
  width: 100%;
`;

const ButtonForm = styled(Button)`
  background-color: ${pink[600]};
  font-size: 16px;
  padding: 10px 12px;
  color: white;
  font-weight: 600;
  box-shadow: none;
  margin-top: 12px;
  width: 100%;
  &:hover {
    background-color: ${pink[500]};
  }
`;

const Author = styled.a`
  position: absolute;
  left: 12px;
  bottom: 8px;
  text-align: center;
  font-size: 14px;
  font-family: Poppins;
  font-weight: 300;
  color: white;
  display: flex;
  letter-spacing: -0.01rem;
  }
`;

export default EnterStore;
