import styled from "styled-components";
import { colorPallet } from "../config/theme";

export const FormBox = styled.form`
  width: ${(props) => (props.w ? props.w : "80%")};
  /* border: 1px solid white; */
  padding: ${(props) => (props.pd ? props.pd : "20px")};
  background: ${(props) => (props.bg ? props.bg : "")};
  border-radius: ${(props) => (props.br ? props.br : "20px")};
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    width: ${(props) => (props.mdw ? props.mdw : "")};
    padding: ${(props) => (props.mdpd ? props.mdpd : "")};
  }

  @media screen and (max-width: 650px) {
    width: ${(props) => (props.smw ? props.smw : "")};
    padding: ${(props) => (props.smpd ? props.smpd : "")};
  }
`;

export const Input = styled.input`
  border: ${(props) => (props.border ? props.border : "none")};
  border-bottom: ${(props) => (props.bb ? props.bb : "")};
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "40px")};
  border-radius: ${(props) => (props.br ? props.br : "10px")};
  padding: ${(props) => (props.pd ? props.pd : "20px")};
  background: ${(props) => (props.bg ? props.bg : "")};
  color: ${(props) => (props.color ? props.color : colorPallet.textColor)};
  box-sizing: border-box;

  @media screen and (max-width: 1000px) {
    width: ${(props) => (props.mdw ? props.mdw : "")};
    height: ${(props) => (props.mdh ? props.mdh : "")};
    padding: ${(props) => (props.mdpd ? props.mdpd : "")};
  }

  @media screen and (max-width: 650px) {
    width: ${(props) => (props.smw ? props.smw : "")};
    height: ${(props) => (props.smh ? props.smh : "")};
    padding: ${(props) => (props.smpd ? props.smpd : "")};
  }
`;

export const Label = styled.label`
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  color: ${(props) => (props.color ? props.color : "")};
  font-weight: ${(props) => (props.fw ? props.fw : "600")};
`;

export const Select = styled.select`
  width: ${(props) => (props.smw ? props.smw : "80px")};
  height: ${(props) => (props.smh ? props.smh : "30px")};
  border: ${(props) => (props.border ? props.border : "none")};
  border-radius: ${(props) => (props.br ? props.br : "none")};

  @media screen and (max-width: 650px) {
    width: ${(props) => (props.smw ? props.smw : "")};
    padding: ${(props) => (props.smpd ? props.smpd : "")};
  }
`;

export const Options = styled.option`
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  color: ${(props) => (props.color ? props.color : "")};
  font-weight: ${(props) => (props.fw ? props.fw : "500")};
`;
