import styled from "styled-components";
import { colorPallet } from "../../config/theme"

export const SmallText = styled.p`
  font-size: ${props => props.fs ? props.fs : "17px"};
  font-weight: ${props => props.fw ? props.fw : "500"};
  color: ${colorPallet.textColor};
  margin-top: ${props => props.mt ? props.mt : ""};
`;