import React, { useEffect } from "react";

import { Box } from "../box";
import { SmallText } from "./toastStyles";
import { Image } from "../../components/image";
import closeIcon from "../../assets/close.png";

const colorVariant = {
  success: "green",
  danger: "red",
};

const Index = ({ open, message, setOpen }) => {
  useEffect(() => {
    setTimeout(() => {
      setOpen(false);
    }, 4000);
  }, [open]);

  return (
    <>
      {open && (
        <Box
          w="100%"
          h="50px"
          display="flex"
          direction="row"
          align="center"
          justify="space-between"
          pd="10px 20px"
          bg={
            message.error === true ? colorVariant.danger : colorVariant.success
          }
          radius="10px"
          margin="0px 0px 15px 0px"
        >
          <SmallText>{message.text}</SmallText>

          <Image
            src={closeIcon}
            alt="icon"
            w="20px"
            onClick={() => setOpen(false)}
          />
        </Box>
      )}
    </>
  );
};

export default Index;
