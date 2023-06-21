import React, { useEffect } from "react";
import Login from "../components/Authentication/Login";
import SignUp from "../components/Authentication/SignUp";

import {
  Container,
  Box,
  Text,
  Tab,
  TabPanel,
  TabPanels,
  TabList,
  Tabs,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) {
      navigate("/chats");
    }
  }, [navigate]);
  return (
    <Container maxW="xl" centerContent>
      <Box
        display="flex"
        flexDir="column"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="20px"
        borderWidth="1.5px"
        borderColor={"black"}
        textAlign="center"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          Wannachat ?
        </Text>
      </Box>
      <Box
        bg="white"
        w="100%"
        p={4}
        borderRadius="20px"
        color="black"
        borderColor={"black"}
        borderWidth="1.5px"
      >
        <Tabs variant="soft-rounded">
          <TabList mb="1em">
            <Tab width="50%">Login</Tab>
            <Tab width="50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <SignUp />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
};

export default Homepage;
