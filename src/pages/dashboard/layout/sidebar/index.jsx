import React from "react";

import { Box } from "../../../../components/box";
import { Image } from "../../../../components/image";
import { SmallText } from "./sidebarStyles";
import { Link, useNavigate } from "react-router-dom";

import homeIcon from "../../../../assets/home.png";
import todoIcon from "../../../../assets/to-do-list.png";
import galleryIcon from "../../../../assets/gallery.png";
import logoutIcon from "../../../../assets/logout.png";

const Index = () => {
  const navigate = useNavigate();

  const logout = () => {
    // localStorage.clear();
    navigate("/")
    window.location.reload(false)
  };

  return (
    <Box
      display="flex"
      // justify="center"
      w="100%"
      h="100vh"
      bg="#1A1A20"
    >
      <Box
        display="flex"
        // justify="flex-start"
        w="100%"
        margin="60px 0px 0px 0px"
        pd="0px 0px 0px 40px"
      >
        <Box display="flex" direction="row" align="center" gap="17px">
          <Image w="20px" src={homeIcon} alt="icon" />
          <SmallText>
            <Link to="/dashboard" className="link">
              Home
            </Link>
          </SmallText>
        </Box>

        <Box
          display="flex"
          direction="row"
          align="center"
          gap="17px"
          margin="10px 0px"
        >
          <Image w="20px" src={galleryIcon} alt="icon" />
          <SmallText>
            <Link to="/dashboard/photo" className="link">
              Photo Gallery
            </Link>
          </SmallText>
        </Box>

        <Box
          display="flex"
          direction="row"
          align="center"
          gap="17px"
          margin="10px 0px"
        >
          <Image w="20px" src={todoIcon} alt="icon" />
          <SmallText>
            <Link to="/dashboard/todo" className="link">
              Todo List{" "}
            </Link>
          </SmallText>
        </Box>

        <Box
          display="flex"
          direction="row"
          align="center"
          gap="17px"
          margin="10px 0px"
          onClick={logout}
        >
          <Image w="20px" src={logoutIcon} alt="icon" />
          <SmallText style={{cursor: "pointer"}}>Logout</SmallText>
        </Box>
      </Box>
    </Box>
  );
};

export default Index;
