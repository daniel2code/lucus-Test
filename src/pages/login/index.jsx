import React, { useReducer, useState } from "react";

import Toaster from "../../components/toaster/index";
import { useSelector, useDispatch } from "react-redux";
import { logUser } from "../../store/actions";
import { Link, useNavigate } from "react-router-dom";
import { formReducer } from "../../helpers/formReducer";
import { Box } from "../../components/box";
import { FormBox, Input, Label } from "../../components/inputStyles";
import { Button } from "../../components/buttonStyles";
import { Spacer } from "../../components/spacer";
import { colorPallet } from "../../config/theme";
import { SmallText, Text } from "./loginStyles";

const Index = () => {
  const [message, setMessage] = useState("");
  const [openToaster, setOpenToaster] = useState(false);

  const login = useSelector((state) => state.login);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormValues({
      name: e.target.name,
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(JSON.parse(localStorage.getItem("user")));

    return new Promise((resolve, reject) => {
      if (
        login?.user?.email === formValues?.email ||
        login?.user?.password === formValues?.password
      ) {
        resolve();
      } else {
        reject("Incorrect credentials");
      }
    })
      .then(() => {
        // dispatch(logUser());
        navigate("/dashboard");
        setMessage({ error: false, text: "Successfully logged in" });
        setOpenToaster(true);
        // console.log("Successfully logged in");
      })
      .catch((err) => {
        setMessage({ error: true, text: "Incorrect credentials" });
        setOpenToaster(true);
        console.log(err);
      });
  };

  const [formValues, setFormValues] = useReducer(formReducer, {});

  return (
    <Box w="100%" h="100vh" display="flex" justify="center" align="center">
      <Box>
        <Text>Login To Your Account</Text>
        <Spacer mb="40px" />
      </Box>

      <FormBox
        w="600px"
        smw="93%"
        bg="#1A1A20"
        pd="30px"
        smpd="30px 20px"
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
          <Label fs="14px">Email</Label>
          <Spacer mt="5px" />
          <Input
            bg="#111115"
            h="50px"
            border="1px solid gray"
            type="email"
            onChange={handleChange}
            required
            name="email"
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
            onChange={handleChange}
            required
            name="password"
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
          Login
        </Button>

        <SmallText>
          Dont have an account?
          <span style={{ cursor: "pointer", color: "#6639E4" }}>
            <Link to="/signup"> Sign Up</Link>
          </span>
        </SmallText>
      </FormBox>
    </Box>
  );
};

export default Index;
