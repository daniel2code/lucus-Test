import React, { useState } from "react";

import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Box } from "../../../../components/box";
import { Image } from "../../../../components/image";
import {
  Text,
  SmallText,
  MobileMenu,
  LinkText,
  MenuIcon,
} from "./topbarStyles";

import avatar from "../../../../assets/avatar.png";
import dropdown from "../../../../assets/dropdown.png";
import closeIcon from "../../../../assets/close.png";
import menuIcon from "../../../../assets/menu.svg";

const Index = () => {
  const login = useSelector((state) => state.login);
  const [open, setOpen] = useState(false);

  const handleOpenMenu = () => {
    setOpen((props) => !props);
  };

  return (
    <Box
      display="flex"
      justify="center"
      align="center"
      position="relative"
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
          <MenuIcon onClick={handleOpenMenu}>
            <Image
              src={menuIcon}
              alt="menu icon"
              w="20px"
              style={{ marginTop: "10px" }}
            />
          </MenuIcon>
          <Text>My Logo</Text>
        </Box>

        <Box display="flex" gap="15px" direction="row">
          <Box
            display="flex"
            justify="center"
            align="center"
            direction="row"
            gap="10px"
          >
            <Image src={dropdown} alt="icon" w="10px" />
            <SmallText>{login.user.name}</SmallText>
          </Box>

          <Image src={avatar} alt="icon" w="40px" h="40px" />
        </Box>
      </Box>

      {open && (
        <MobileMenu>
          <Box pd="30px" w="100%" h="100%">
            <Box display="flex" justify="flex-end" w="100%">
              <Image
                src={closeIcon}
                alt="menu icon"
                w="20px"
                style={{ marginTop: "10px" }}
                onClick={handleOpenMenu}
              />
            </Box>

            <Box display="flex" justify="flex-start" align="flex-start">
              <LinkText>
                <Link to="/dashboard" className="link" onClick={handleOpenMenu}>
                  Home
                </Link>
              </LinkText>

              <LinkText>
                <Link
                  to="/dashboard/photo"
                  className="link"
                  onClick={handleOpenMenu}
                >
                  Photo Gallery
                </Link>
              </LinkText>

              <LinkText>
                <Link
                  to="/dashboard/todo"
                  className="link"
                  onClick={handleOpenMenu}
                >
                  Todo
                </Link>
              </LinkText>

              <LinkText>Logout</LinkText>
            </Box>
          </Box>
        </MobileMenu>
      )}
    </Box>
  );
};

export default Index;
