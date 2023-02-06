import { Box, Spinner, Progress } from "@chakra-ui/react";
import React from "react";

const Loading = () => {
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pos={"fixed"}
      top={0}
    >
      <Spinner
        thickness="12px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
        w={"lg"}
        h={"lg"}
      />
      {/* <Progress size="xl" isIndeterminate /> */}
    </Box>
  );
};

export default Loading;
