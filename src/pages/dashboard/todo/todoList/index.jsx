import React from "react";

import { Box } from "../../../../components/box";
import { Input } from "../../../../components/inputStyles";
import { SmallText } from "./todoListStyles";
import { Image } from "../../../../components/image";
import deleteIcon from "../../../../assets/bin.png";
import editIcon from "../../../../assets/editing.png";

const Index = ({ todo, id, removeItem, editItem }) => {
  return (
    <Box
      display="flex"
      align="center"
      justify="space-between"
      direction="row"
      gap="20px"
      pd="20px"
      bg="#1A1A20"
      h="60px"
      radius="4px"
      bb="1px solid gray"
    >
      <Box display="flex" direction="row" align="center" gap="14px">
        <Input w="17px" type="checkbox" />
        <SmallText>{todo}</SmallText>
      </Box>

      <Box display="flex" direction="row" align="center" gap="17px">
        <Image
          alt="icon"
          src={editIcon}
          w="20px"
          onClick={() => editItem(id)}
          style={{ cursor: "pointer" }}
        />
        <Image
          alt="icon"
          src={deleteIcon}
          w="20px"
          onClick={() => removeItem(id)}
          style={{ cursor: "pointer" }}
        />
      </Box>
    </Box>
  );
};

export default Index;
