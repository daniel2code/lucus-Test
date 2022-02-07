import styled from "styled-components";

export const Spacer = styled.div`
 margin-top: ${(props) => (props.mt ? props.mt : "10px")};
 margin-bottom: ${(props) => (props.mb ? props.mb : "10px")};
`