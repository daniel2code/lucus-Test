import styled from "styled-components";

export const Table = styled.table`
  width: ${(props) => (props.w ? props.w : "100%")};
  box-sizing: border-box;
  border-collapse: collapse;
`;
export const TableHead = styled.th`
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  color: ${(props) => (props.color ? props.color : "")};
  font-weight: ${(props) => (props.fw ? props.fw : "600")};
  text-align: left;
`;

export const TableRow = styled.tr`
  width: ${(props) => (props.w ? props.w : "")};
  height: ${(props) => (props.smh ? props.smh : "40px")};
  border-radius: ${(props) => (props.br ? props.br : "10px")};
  background-color: ${(props) => (props.bg ? props.bg : "")};
  box-sizing: border-box;
  margin-top: 10px;
`;

export const TableData = styled.td`
  font-size: ${(props) => (props.fs ? props.fs : "16px")};
  color: ${(props) => (props.color ? props.color : "")};
  font-weight: ${(props) => (props.fw ? props.fw : "600")};
  width: ${(props) => (props.w ? props.w : "")};
  text-align: left;
  border-bottom: 1px solid #ddd;
`;
