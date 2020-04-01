import React, { useRef } from "react";
import { double_box_shadow, blue, grey } from "../Utilities";
import styled from "styled-components";
import { Card, Button, Input } from "../styled_components";

function AddImage({ addImage, match }) {
  const nameRef = useRef(null);
  const urlRef = useRef(null);
  const priceRef = useRef(null);

  const createImage = e => {
    e.preventDefault();
    const image = {
      name: nameRef.current.value,
      author: match.params.username,
      url: urlRef.current.value,
      price: priceRef.current.value
    };
    addImage(image);
    e.currentTarget.reset();
  };

  return (
    <AddImageWrapper>
      <ImageCard>
        <AddImageForm onSubmit={createImage}>
          <h1>
            Ajouter une <br /> nouvelle image
          </h1>
          <label htmlFor="">Nom de l'image</label>
          <Input
            type="text"
            placeholder="Nom de l'image"
            required
            ref={nameRef}
          />
          <label htmlFor="">Prix de l'image (100 pour 1€)</label>
          <Input
            type="number"
            defaultValue="0"
            min="0"
            placeholder="Prix de l'image"
            required
            ref={priceRef}
          />
          <label htmlFor="">URL de l'image</label>
          <Input type="text" placeholder="http://" required ref={urlRef} />
          <ButtonAdd type="submit">Ajouter</ButtonAdd>
        </AddImageForm>
      </ImageCard>
    </AddImageWrapper>
  );
}

const AddImageWrapper = styled.div`
  overflow: hidden;
  position: relative;
  border-radius: 0 0 8px 8px;
  &:hover {
    box-shadow: ${double_box_shadow[3]};
    transform: translate(-2px, -2px);
    transition: all 0.1s ease-in;
  }
`;

const ImageCard = styled(Card)`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0;
  min-height: 400px;
  border-radius: 8px;
  background-color: ${grey.cool[100]};
  &:hover {
    background-color: white;
  }
`;

const AddImageForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 24px 24px 0;
  height: 100%;
  width: 100%;

  h1 {
    text-align: center;
    margin-bottom: 24px;
    font-weight: 600;
  }

  label {
    font-weight: 500;
  }
  input {
    margin: 4px 0 12px;
  }
`;

const ButtonAdd = styled(Button)`
  margin-top: 4px;
  color: ${blue[800]};
  border: 1px solid ${blue[800]};
  box-shadow: none;
  font-weight: 500;
  border-radius: 4px;
  &:hover {
    background-color: ${blue[800]};
    box-shadow: none;
    font-weight: 700;
    color: white;
  }
`;
export default AddImage;
