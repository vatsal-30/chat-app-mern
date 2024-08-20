import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FormControl,
  VStack,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Button,
  useToast
} from "@chakra-ui/react";
import "./Login.css";

const Login = () => {
  const [show, setShow] = useState(false);
  const toast = useToast();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  const submitHandler = async () => {
    setLoading(true);
    if (!email || !password) {
      toast({
        title: "Please Fill all the Feilds",
        status: "warning",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
      return;
    }


    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "/api/user/login",
        { email, password },
        config
      );

      toast({
        title: "Login Successful",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      navigate("/chats");
      // setLoading(false);
    } catch (error) {
      toast({
        title: "Error Occured!",
        description: error.response.data.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom",
      });
      setLoading(false);
    }
  };

  return (
    <VStack spacing="5px">
      <FormControl id="email" isRequired>
        <FormLabel>Email</FormLabel>
        <Input
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
      </FormControl>

      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            type={show ? "text" : "password"}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <InputRightElement width="4.5rem">
            <Button h="1.75rem" size="sm" onClick={handleClick}>
              {show ? "Hide" : "Show"}
            </Button>
          </InputRightElement>
        </InputGroup>
      </FormControl>

      <Button
        colorScheme="blue"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={submitHandler}
        isLoading={loading}
      >
        Login
      </Button>
      <div style={{marginTop: "15px"}}>Users Credentials</div>
      <div className="button-style" >
        
        <div>
          <Button
            variant="solid"
            colorScheme="red"
            width="110%"
            style={{ marginTop: 8 }}
            onClick={() => {
              setEmail("shyam@gmail.com");
              setPassword("123456");
            }}
          >
            Shyam
          </Button>
        </div>
        <div>
          <Button
            variant="solid"
            colorScheme="red"
            width="110%"
            style={{ marginTop: 8 }}
            onClick={() => {
              setEmail("radha@gmail.com");
              setPassword("123456");
            }}
          >
            Radha
          </Button>
        </div>
        <div>
          <Button
            variant="solid"
            colorScheme="red"
            width="110%"
            style={{ marginTop: 8 }}
            onClick={() => {
              setEmail("mohan@gmail.com");
              setPassword("123456");
            }}
          >
            Mohan
          </Button>
        </div>
        <div>
          <Button
            variant="solid"
            colorScheme="red"
            width="110%"
            style={{ marginTop: 8 }}
            onClick={() => {
              setEmail("arjun@gmail.com");
              setPassword("123456");
            }}
          >
            Arjun
          </Button>
        </div>

      </div>
      {/* <Button
      variant="solid"
        colorScheme="red"
        width="100%"
        style={{ marginTop: 15 }}
        onClick={() => {
          setEmail("ram@gmail.com");
          setPassword("123456");
        }}
      >
        Get guest user credentials
      </Button> */}
    </VStack>
  );
};

export default Login;
