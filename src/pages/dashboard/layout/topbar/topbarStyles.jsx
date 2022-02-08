import styled from "styled-components";

import { colorPallet } from "../../../../config/theme";

export const Text = styled.h2`
  font-size: 25px;
  color: ${colorPallet.textColor};

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SmallText = styled.p`
  font-size: 17px;
  color: ${colorPallet.textColor};
`;

export const MobileMenu = styled.div`
  width: 100%;
  padding: 0px 0px;
  position: absolute;
  background: ${colorPallet.secondaryColor};
  margin-top: 280px;
`;

export const LinkText = styled.p`
  font-size: 17px;
  margin-top: 30px;
  font-weight: 600;

  .link {
    text-decoration: none;
    color: white;
  }
`;

export const MenuIcon = styled.div`
  display: none;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;
