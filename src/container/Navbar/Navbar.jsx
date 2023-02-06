import { Box, Button, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FaHome, FaExchangeAlt, FaCoins } from "react-icons/fa";
import { SiBitcoin, SiBitcoinsv } from "react-icons/si";
import { Link } from "react-router-dom";
import ColorModeSwitcher from "../../ColorModeSwitcher";

const Navbar = () => {
  return (
    <Box
      w={"100%"}
      h={"4.6rem"}
      bg={"blackAlpha.800"}
      pos={"sticky"}
      top={0}
      zIndex={"300"}
    >
      <ColorModeSwitcher />
      <Box
        display={"flex"}
        justifyContent={"space-evenly"}
        pt={2}
        alignContent={"center"}
      >
        <Button variant={"link"} color={"white"} w={"28"}>
          <Link to={"/"}>
            <FaHome size={"32"} />
            <Text mt={2}>Home</Text>
          </Link>
        </Button>
        <Button variant={"link"} color={"white"}>
          <Link to={"/change"}>
            <FaExchangeAlt size={32} />
            <Text textAlign={"center"}>Exchange</Text>
          </Link>
        </Button>
        <Button variant={"link"} color={"white"}>
          <Link to={"/coins"}>
            <SiBitcoin size={32} />
            <Text>Coins</Text>
          </Link>
        </Button>
      </Box>
    </Box>
  );
};

export default Navbar;
