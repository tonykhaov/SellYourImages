import styled from "styled-components";
import { grey } from "../Utilities";

export const Input = styled.input`
  padding: 6px 8px;
  border: 1px solid ${grey[400]};
  font-size: 16px;
  border-radius: 6px;
  &::placeholder {
    color: ${grey[700]};
  }
`;
