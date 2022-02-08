import React from "react";

import { Background, ContentBox, SmallText, GalleryBox } from "./photoStyles";
import { Box } from "../../../components/box";
import { Input } from "../../../components/inputStyles";
import { Image } from "../../../components/image";

import bg from "../../../assets/bg.jpeg";

const Index = () => {
  return (
    <Box w="100%">
      <Background>
        <ContentBox>
          <Box w="100%" display="flex" justify="flex-start" align="flex-start">
            <SmallText fs="29px" smfs="20px" fw="600" pd="0px 0px">
              Photo Gallery
            </SmallText>
            <SmallText smfs="14px" pd="15px 0px">
              Get amazing images inspired by creativity
            </SmallText>
            <Input
              w="80%"
              smh="30px"
              smw="100%"
              bg="white"
              h="50px"
              border="1px solid gray"
              type="text"
              placeholder="search for free high resolution photos"
              color="black"
            />
          </Box>
        </ContentBox>
      </Background>

      <GalleryBox>
        {[...Array(20)].map(() => {
          return <Image w="100%" h="auto" alt="creativity shoots" src={bg} />;
        })}
      </GalleryBox>
    </Box>
  );
};

export default Index;
