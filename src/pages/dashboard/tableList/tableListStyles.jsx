import styled from "styled-components";
import { colorPallet } from "../../../config/theme";


export const Text = styled.p`
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  font-weight: ${(props) => (props.fw ? props.fw : "500")};
  color: ${colorPallet.textColor};
  margin: 0%;
  padding: ${(props) => (props.pd ? props.pd : "")};
`;