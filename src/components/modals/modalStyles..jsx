import styled from "styled-components";

export const ModalContainer = styled.div`
 width: calc(100% - 110px);
 height: 100vh;
 background-color: rgba(0 0 0 / 0.6);
 position: absolute;
 display: flex;
 justify-content: center;
 align-items: center;
`

export const ModalBox = styled.div`
 width: 500px;
 height: 300px;
 background-color: #1A1A20;
 border-radius: 20px;
 padding: 40px;
 position: fixed;
`