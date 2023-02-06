import React from "react";
import { useColorMode, useColorModeValue, IconButton } from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

const ColorModeSwitcher = (props) => {
  const { toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      pos={"fixed"}
      top={"4"}
      left={["2", "4"]}
      zIndex={1000}
      transition={"all 2 linear"}
      color="current"
      onClick={toggleColorMode}
      icon={<SwitchIcon p={3} />}
      {...props}
    />
  );
};

export default ColorModeSwitcher;
