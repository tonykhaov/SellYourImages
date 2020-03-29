import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { Button, Input, Card } from "../styled_components";
import { orange, grey, double_box_shadow } from "../Utilities";
import * as imageURL from "../img/background.jpg";

function EnterStore(props) {
  const inputEl = useRef(null);

  useEffect(() => {
    props.setUsername(null);
  });

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
      <BackgroundEnterStoreImage />
      <BackgroundEnterStoreFilter />
    </CardWrapper>
  );
}

const CardWrapper = styled(Card)`
  max-width: 480px;
  margin: auto;
  margin-top: 32px;
  padding: 32px;
  background-color: ${grey.cool[200]};
  box-shadow: ${double_box_shadow[4]};
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
`;

const ButtonForm = styled(Button)`
  background-color: ${orange[500]};
  font-size: 16px;
  padding: 10px 12px;
  color: white;
  font-weight: 600;
  margin-top: 12px;
  box-shadow: none;
  width: 100%;
  border-top: 1px solid ${orange[300]};
  &:hover {
    background-color: ${orange[400]};
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
  font-family: Poppins;
  font-weight: 300;
  color: white;
  display: flex;
  letter-spacing: -0.01rem;

  &:hover {
    color: ${grey[200]};
  }
  }
`;

const BackgroundEnterStoreImage = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: url(${imageURL}) bottom no-repeat;
  z-index: -10;
  opacity: 1;
`;
const BackgroundEnterStoreFilter = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: black;
  z-index: -9;
  opacity: 0.5;
`;
export default EnterStore;
