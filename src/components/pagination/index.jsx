import React from "react";

import { Box } from "../box";
import { Select, Options } from "../inputStyles";
import { Button } from "../buttonStyles";
import { Text } from "./pageStyles";
import { colorPallet } from "../../config/theme";

const Index = ({ data, tracker, updateTracker, num, setNum }) => {
  // Child component cannot update parent, however the state will be lifted

  return (
    <Box
      pd="10px 20px"
      display="flex"
      direction="row"
      justify="space-between"
      align="center"
      w="100%"
      h="60px"
      radius="6px"
      bg="#1A1A20"
    >
      <Box display="flex" direction="row">
        <Select w="60px" onChange={updateTracker} br="5px">
          <Options value="10">10</Options>
          <Options value="25">25</Options>
          <Options value="50">50</Options>
        </Select>
      </Box>

      <Box>
        <Text>{`${num} of ${tracker} Total: ${data && data.length}`}</Text>
      </Box>

      <Box display="flex" direction="row" gap="20px">
        <Button
          br="5px"
          fs
          h="30px"
          w="55px"
          bg={colorPallet.secondaryColor}
          color={colorPallet.textColor}
          onClick={() => (num < 2 ? 1 : setNum((props) => props - 1))}
        >
          Prev
        </Button>
        <Button
          br="5px"
          fs
          h="30px"
          w="55px"
          bg={colorPallet.secondaryColor}
          color={colorPallet.textColor}
          onClick={() =>
            data && data.length > data && data.length
              ? 1
              : setNum((props) => props + 1)
          }
        >
          Next
        </Button>
      </Box>
    </Box>
  );
};

export default Index;
