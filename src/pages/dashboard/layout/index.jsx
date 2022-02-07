import React from "react";

import { Box } from "../../../components/box";
import { BodyBox, SideBarBox, ContentBox, TopbarBox } from "./layoutStyles";
import Topbar from "./topbar/index";
import Sidebar from "./sidebar/index";

const Index = ({ children }) => {
  return (
    <Box w="100%" mh="100vh">
      <TopbarBox>
        <Topbar />
      </TopbarBox>
      <BodyBox>
        <SideBarBox>
          <Sidebar />
        </SideBarBox>
        <ContentBox>{children}</ContentBox>
      </BodyBox>
    </Box>
  );
};

export default Index;
