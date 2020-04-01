import React, { useRef } from "react";
import styled from "styled-components";
import { Button, Input, Card } from "../styled_components";
import { grey, double_box_shadow, pink } from "../Utilities";

function EnterStore(props) {
  const inputEl = useRef(null);

  const handleSubmit = e => {
    e.preventDefault();
    const username = inputEl.current.value;
    props.history.push(`/store/${username}`);
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
      <Background />
    </CardWrapper>
  );
}

const CardWrapper = styled(Card)`
  max-width: 480px;
  margin: auto;
  margin-top: 32px;
  padding: 32px;
  background-color: ${grey.cool[100]};
  box-shadow: ${double_box_shadow[4]};

  @media (max-width: 768px) {
    padding: 32px 12px;
  }
`;

const FormWrapper = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TitleForm = styled.h1`
  font-size: 24px;
`;

const Hr = styled.hr`
  background-color: ${grey[300]};
  height: 1px;
  border: none;
  width: 100%;
  margin: 16px;
`;

const DescriptionForm = styled.p`
  color: ${grey[600]};
  font-weight: 100;
  font-size: 24px;
`;

const InputForm = styled(Input)`
  margin: 24px 0 12px;
  padding: 10px 16px;
  width: 100%;
  background-color: ${grey[100]};
  &:focus {
    background-color: white;
  }
`;

const ButtonForm = styled(Button)`
  background-color: ${pink.vivid[500]};
  font-size: 16px;
  padding: 10px 12px;
  color: white;
  font-weight: 600;
  margin-top: 12px;
  box-shadow: none;
  width: 100%;
  border-top: 1px solid ${pink.vivid[300]};
  &:hover {
    background-color: ${pink.vivid[400]};
  }
  &:active {
    box-shadow: none;
  }
`;

const Author = styled.a`
  position: absolute;
  left: 12px;
  bottom: 8px;
  text-align: center;
  font-size: 14px;
  font-weight: 300;
  color: white;
  display: flex;
  letter-spacing: -0.01rem;
  &:hover {
    color: ${grey[200]};
  }
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -10;
  background: black;
  opacity: 0.5;
`;
export default EnterStore;
