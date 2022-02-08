import styled from "styled-components";
import { colorPallet } from "../../../config/theme";
import bg from "../../../assets/bg.jpeg";

export const Background = styled.div`
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 220px;
  position: relative;
`;

export const ContentBox = styled.div`
  position: absolute;
  box-sizing: border-box;
  padding: 0px 35px;
  height: 100%;
  width: 100%;
  background-color: rgba(114 32 153/0.8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 650px) {
    padding: 0px 20px;
  }
`;

export const SmallText = styled.p`
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  font-weight: ${(props) => (props.fw ? props.fw : "500")};
  color: ${colorPallet.textColor};
  margin: 0%;
  padding: ${(props) => (props.pd ? props.pd : "")};
  text-align: left;

  @media screen and (max-width: 650px) {
    font-size: ${(props) => (props.smfs ? props.smfs : "16px")};
  }
`;

export const GalleryBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 23px;
  padding: 35px;

  @media screen and (max-width: 650px) {
    grid-template-columns: 1fr 1fr;
    padding: 30px 20px;
    grid-gap: 16px;
  }
`;
