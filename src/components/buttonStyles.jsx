import styled from "styled-components";

export const Button = styled.button`
  border: none;
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "40px")};
  border-radius: ${(props) => (props.br ? props.br : "10px")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  background: ${(props) => (props.bg ? props.bg : "")};
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  color: ${(props) => (props.color ? props.color : "")};
  font-weight: ${(props) => (props.fw ? props.fw : "600")};
  cursor: pointer;  

  @media screen and (max-width: 1000px) {
    width: ${(props) => (props.mdw ? props.mdw : "80%")};
    height: ${(props) => (props.mdh ? props.mdh : "40px")};
    padding: ${(props) => (props.mdpd ? props.mdpd : "20px")};
  }

  @media screen and (max-width: 650px) {
    width: ${(props) => (props.smw ? props.smw : "80%")};
    height: ${(props) => (props.smh ? props.smh : "40px")};
    padding: ${(props) => (props.smpd ? props.smpd : "20px")};
  }
`;
