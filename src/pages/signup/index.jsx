import React, { useReducer, useState } from "react";

// import { useSelector, useDispatch } from "react-redux";
// import { createUser } from "../../store/actions/index";
import Toaster from "../../components/toaster/index";
import { Link, useNavigate } from "react-router-dom";
import { formReducer } from "../../helpers/formReducer";
import { Box } from "../../components/box";
import { FormBox, Input, Label } from "../../components/inputStyles";
import { Button } from "../../components/buttonStyles";
import { Spacer } from "../../components/spacer";
import { colorPallet } from "../../config/theme";
import { SmallText, Text } from "./signUpStyles";

const Index = () => {
  const [message, setMessage] = useState("");
  const [openToaster, setOpenToaster] = useState(false);

  //   const signupUser = useSelector((state) => state.signup);
  //   const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let checkUser = localStorage.getItem("user");

    return new Promise((resolve, reject) => {
      if (!checkUser) {
        localStorage.setItem("user", JSON.stringify(formValues));
        resolve();
      } else {
        return reject("User already exists");
      }
    })
      .then(() => {
        console.log("user saved successfully");
        setMessage({ error: false, text: "User saved successfully" });
        setOpenToaster(true);
        navigate("/");
        window.location.reload(false);
      })
      .catch((err) => {
        setMessage({ error: true, text: "User already exists" });
        setOpenToaster(true);
      });
  };

  const [formValues, setFormValues] = useReducer(formReducer, {});

  console.log(formValues);
  return (
    <Box w="100%" h="100vh" display="flex" justify="center" align="center">
      <Box>
        <Text>Sign Up to get started</Text>
        <Spacer mb="40px" />
      </Box>

      <FormBox
        w="600px"
        smw="93%"
        bg="#1A1A20"
        smpd="30px 20px"
        pd="30px"
        onSubmit={handleSubmit}
      >
        <Toaster
          open={openToaster}
          message={message}
          setOpen={setOpenToaster}
        />
        <Box
          display="flex"
          direction="column"
          align="flex-start"
          justify="flex-start"
          w="100%"
        >
          <Label fs="14px">Name</Label>
          <Spacer mt="5px" />
          <Input
            bg="#111115"
            h="50px"
            border="1px solid gray"
            type="text"
            required
            name="name"
            onChange={handleChange}
          />
        </Box>
        <Spacer mt="25px" />

        <Box
          display="flex"
          direction="column"
          align="flex-start"
          justify="flex-start"
          w="100%"
        >
          <Label fs="14px">Email</Label>
          <Spacer mt="5px" />
          <Input
            bg="#111115"
            h="50px"
            border="1px solid gray"
            type="email"
            required
            name="email"
            onChange={handleChange}
          />
        </Box>

        <Box
          display="flex"
          direction="column"
          align="flex-start"
          justify="flex-start"
          w="100%"
          margin="30px 0px 0px 0px"
        >
          <Label fs="14px">Password</Label>
          <Spacer mt="5px" />
          <Input
            bg="#111115"
            h="50px"
            border="1px solid gray"
            type="password"
            name="password"
            required
            onChange={handleChange}
          />
        </Box>

        <Button
          w="100%"
          h="50px"
          bg={colorPallet.secondaryColor}
          margin="40px 0px 0px 0px"
          color={colorPallet.textColor}
          fs="17px"
        >
          Sign Up
        </Button>

        <SmallText>
          Already have an account?
          <span style={{ cursor: "pointer", color: "#6639E4" }}>
            <Link to="/"> Login In</Link>
          </span>
        </SmallText>
      </FormBox>
    </Box>
  );
};

export default Index;
