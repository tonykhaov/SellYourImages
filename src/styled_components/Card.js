import styled from "styled-components";
import { grey, black } from "../Utilities";

export const Card = styled.div`
  padding: 6px 8px;
  border-radius: 8px;
  border: 1px solid ${grey[300]};
  box-shadow: 4px 4px 6px ${black[100]};
  background-color: white;
`;
