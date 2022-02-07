import styled from "styled-components";

export const Box = styled.div`
  width: ${(props) => (props.w ? props.w : "")};
  height: ${(props) => (props.h ? props.h : "")};
  display: ${(props) => (props.display ? props.display : "")};
  justify-content: ${(props) => (props.justify ? props.justify : "")};
  align-items: ${(props) => (props.align ? props.align : "")};
  flex-direction: ${(props) => (props.direction ? props.direction : "column")};
  background: ${(props) => (props.bg ? props.bg : "")};
  margin: ${(props) => (props.margin ? props.margin : "")};
  padding: ${(props) => (props.pd ? props.pd : "")};
  grid-gap: ${(props) => (props.gap ? props.gap : "")};
  box-sizing: border-box;
  max-height: ${(props) => (props.mh ? props.mh : "")};
  border-radius: ${(props) => (props.radius ? props.radius : "")};
  border-bottom: ${(props) => (props.bb ? props.bb : "none")};


  @media screen and (max-width: 1000px) {
    width: ${(props) => (props.mdw ? props.mdw : "")};
    height: ${(props) => (props.mdh ? props.mdh : "")};
    display: ${(props) => (props.mddisplay ? props.mddisplay : "")};
    justify-content: ${(props) =>
      props.mdjustify ? props.mdjustify : "flex-start"};
    align-items: ${(props) => (props.mdalign ? props.mdalign : "")};
    flex-direction: ${(props) =>
      props.mddirection ? props.mddirection : "column"};
  }

  @media screen and (max-width: 650px) {
    width: ${(props) => (props.smw ? props.smw : "")};
    height: ${(props) => (props.smh ? props.smh : "")};
    display: ${(props) => (props.smdisplay ? props.smdisplay : "")};
    justify-content: ${(props) =>
      props.smjustify ? props.smjustify : "flex-start"};
    align-items: ${(props) => (props.smalign ? props.smalign : "")};
    flex-direction: ${(props) =>
      props.smdirection ? props.smdirection : "column"};
  }
`;
