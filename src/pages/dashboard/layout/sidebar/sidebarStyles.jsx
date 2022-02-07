import styled from "styled-components";
import { colorPallet } from "../../../../config/theme";

export const SmallText = styled.p`
  font-size: 17px;
  font-weight: 600;
  color: ${colorPallet.textColor};

  .link {
    color: ${colorPallet.textColor};
    font-weight: 600;
    text-decoration: none;
  }
`;
