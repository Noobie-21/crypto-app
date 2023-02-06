import React from "react";
import {
  Box,
  Image,
  Heading,
  Text,
  Stack,
  Card,
  CardBody,
  CardHeader,
} from "@chakra-ui/react";
import img1 from "../../assets/btc.png";
import img2 from "../../assets/3.png";
import "./Coin.css";

const Home = () => {
  return (
    <Box>
      <Box
        w={"100%"}
        h={"100vh"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={"column"}
      >
        <Image
          src={img1}
          w={["sm", "xl"]}
          transition={"all 2s"}
          _hover={{
            transform: "translateY(-20px) ",
          }}
          className={"coin"}
        />
        <Heading alignItems={"center"}>Welcome To Crypto World</Heading>
        <Text
          fontFamily={"sans-serif"}
          fontSize={["4xl", "6xl"]}
          color={"red.500"}
          textTransform={"uppercase"}
        >
          Xupee
        </Text>
      </Box>
      <Box
        w={"100%"}
        h={"100%"}
        // bg={"red.600"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
        flexDirection={["row", "column"]}
      >
        <Stack direction={["column", "row"]} p={12}>
          <Box
            w={"100%"}
            borderRadius={"30% 70% 70% 30% / 30% 30% 70% 70% "}
            bg={"blackAlpha.400"}
            cursor="pointer"
            mr={8}
            mb={4}
          >
            <Image
              src={img2}
              transition={"all 0.5s"}
              _hover={{
                transform: "translateY(-12px)",
              }}
            />
          </Box>
          <Card
            w={"100%"}
            h={["100%", "xl"]}
            boxShadow={"10px 10px 55px -12px rgba(0,0,0,0.75)"}
            borderRadius={"12px"}
            transition={"all 0.5s"}
            _hover={{
              p: "2",
            }}
          >
            <CardHeader>
              <Heading textAlign={"center"} fontSize={"4rem"}>
                About us
              </Heading>
            </CardHeader>
            <CardBody>
              <Text fontFamily={"cursive"} textAlign="center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Corrupti rerum numquam sit odit vitae vero veritatis laudantium!
                Ducimus consequatur nam quibusdam dolor. Velit iusto est quia
                sit molestiae dolore. Temporibus error nam explicabo dolorum
                eaque quaerat sed veniam qui amet Lorem ipsum dolor sit, amet
                consectetur adipisicing elit. Maxime quos fugiat illum autem
                aliquam totam quia voluptatibus impedit velit dolor nihil iusto
                commodi, libero, nulla fuga perferendis sunt ea excepturi
                corrupti, quod doloribus error possimus? Tempore aperiam
                laboriosam maxime modi!
              </Text>
            </CardBody>
          </Card>
        </Stack>
      </Box>
    </Box>
  );
};

export default Home;
