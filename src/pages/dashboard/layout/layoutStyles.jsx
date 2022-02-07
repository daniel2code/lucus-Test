import styled from "styled-components";

export const BodyBox = styled.div`
  width: 100%;
  display: flex;
`;

export const TopbarBox = styled.div`
  width: 100%;
  position: fixed;
  z-index: 1;
`;
export const SideBarBox = styled.div`
  width: 250px;
  position: fixed;
  top: 80px;
`;

export const ContentBox = styled.div`
  width: calc(100% - 250px);
  margin-top: 80px;
  margin-left: 250px;
`;
