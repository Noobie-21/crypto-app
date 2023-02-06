import {
  Box,
  Card,
  Stack,
  Text,
  Heading,
  CardBody,
  Button,
  CardFooter,
  Image,
  Container,
  Radio,
  RadioGroup,
  VStack,
  HStack,
} from "@chakra-ui/react";
// import { service } from "../../../main";
import React, { useState } from "react";
import useFetch from "../../../hooks/useFetch";
import { Link } from "react-router-dom";
import Loading from "../../Loading/Loading";
import { FaDollarSign, FaEuroSign, FaRupeeSign } from "react-icons/fa";

const ShowCoin = () => {
  const [currency, setCurrency] = useState("inr");
  const [page, setPage] = useState(1);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&page=${page}&per_page=60`;
  const { coinData, loading } = useFetch(url);

  const changeCurrencySign =
    currency === "inr" ? "₹" : currency === "usd" ? "$" : "€";

  const onChangePage = () => {
    loading;
    setPage(2);
  };
  return (
    <>
      <Box
        w={"100%"}
        h={"100%"}
        bg={"blackAlpha.600"}
        display={"flex"}
        flexWrap={"wrap"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          w={"100%"}
          h={"16"}
          bg={"blackAlpha.600 "}
          color={"white"}
          display={"flex"}
          alignItems={"center"}
          p={4}
        >
          <RadioGroup onChange={setCurrency} value={currency}>
            <Stack direction="row">
              <Radio value="usd" ml={4}>
                <FaDollarSign />
              </Radio>
              <Radio value="inr">
                <FaRupeeSign />
              </Radio>
              <Radio value="eur">
                <FaEuroSign />
              </Radio>
            </Stack>
          </RadioGroup>
        </Box>
        {loading ? (
          <Loading />
        ) : (
          coinData?.map((coin) => {
            return (
              <Container w={"sm"} mt={"4"} key={coin.id}>
                <Card
                  w={"30"}
                  m={2}
                  boxShadow={"dark-lg"}
                  colorScheme={"#fafafa"}
                  cursor={"pointer"}
                  transition={"all 0.5s"}
                  _hover={{
                    transform: "scale(1.06,1.06)",
                  }}
                >
                  <Box>
                    <CardBody>
                      <Image
                        src={coin.image}
                        alt="Green double couch with wooden legs"
                        w={"20"}
                        borderRadius="lg"
                        margin={"auto"}
                      />
                      <Stack mt="6" spacing="3" alignItems={"center"}>
                        <Heading
                          fontSize="xl"
                          fontFamily={"Roboto Mono"}
                          letterSpacing={"3px"}
                          textTransform={"uppercase"}
                        >
                          {coin.name}
                        </Heading>

                        <Text color="blue.600" fontSize="2xl">
                          {changeCurrencySign}
                          {loading ? "Loadin..." : coin.current_price}
                        </Text>
                      </Stack>
                    </CardBody>
                    <CardFooter justifyContent={"center"}>
                      <Button variant="solid" colorScheme="blue">
                        <Link to={`/coins/${coin.id}`}>Details</Link>
                      </Button>
                    </CardFooter>
                  </Box>
                </Card>
              </Container>
            );
          })
        )}
      </Box>
      <HStack w={"100%"} h={"20"} p={8} bg={"blackAlpha.400"}>
        <Button
          w={"16"}
          h={"12"}
          bg={"blackAlpha.400"}
          color={"white"}
          onClick={() => onChangePage()}
        >
          2
        </Button>
      </HStack>
    </>
  );
};

export default ShowCoin;
