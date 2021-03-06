import styled from "styled-components";
import { double_box_shadow } from "../Utilities";

export const Button = styled.button`
  padding: 10px 16px;
  border: 0;
  font-size: 16px;
  border-radius: 4px;
  box-shadow: ${double_box_shadow[1]};
  cursor: pointer;
  &:active {
    box-shadow: ${double_box_shadow[0]};
  }
`;
