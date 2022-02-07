import React from "react";

import { Box } from "../../../../components/box";
import { Image } from "../../../../components/image";
import { Text, SmallText } from "./topbarStyles";

import avatar from "../../../../assets/avatar.png";
import dropdown from "../../../../assets/dropdown.png";

const Index = () => {
  return (
    <Box
      display="flex"
      justify="center"
      align="center"
      w="100%"
      h="80px"
      bg="#1A1A20"
    >
      <Box
        display="flex"
        justify="space-between"
        direction="row"
        align="center"
        w="95%"
        h="80px"
      >
        <Box w="120px">
          <Text>My Logo</Text>
        </Box>

        <Box display="flex" gap="15px" direction="row">
          <Box display="flex" justify="center" align="center" direction="row" gap="10px">
            <Image src={dropdown} alt="icon" w="10px" />
            <SmallText>Daniel</SmallText>
          </Box>

          <Image src={avatar} alt="icon" w="40px" h="40px" />
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
