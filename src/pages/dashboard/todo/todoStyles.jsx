import styled from "styled-components";
import { colorPallet } from "../../../config/theme";

import bg from "../../../assets/bg.jpeg";
// import { colorPallet } from "../../../config/the me";

export const Background = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 210px;

  :before {
    content: "";
    display: inline-block;
    height: 100%;
    width: 100%;
    background-color: rgba(114 32 153/0.8);
  }
`;

export const ContentBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  top: -100px;
`;

export const SmallText = styled.p`
  font-size: ${props => props.fs ? props.fs : "17px"};
  font-weight: ${props => props.fw ? props.fw : "500"};
  color: ${colorPallet.textColor};
  margin-top: ${props => props.mt ? props.mt : ""};
`;