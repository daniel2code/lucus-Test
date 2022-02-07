import styled from "styled-components";

export const Image = styled.img`
  width: ${(props) => (props.w ? props.w : "100%")};
  height: ${(props) => (props.h ? props.h : "auto")};
  border-radius: ${(props) => (props.br ? props.br : "")};

  @media screen and (max-width: 1000px) {
    width: ${(props) => (props.mdw ? props.mdw : "")};
    height: ${(props) => (props.mdh ? props.mdh : "")};
  }

  @media screen and (max-width: 650px) {
    width: ${(props) => (props.smdw ? props.smdw : "")};
    height: ${(props) => (props.smdh ? props.smdh : "")};
  }
`;
