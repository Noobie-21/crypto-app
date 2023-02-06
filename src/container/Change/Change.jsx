import {
  Box,
  Card,
  Image,
  Container,
  Heading,
  HStack,
  CardHeader,
  Text,
  Stack,
  VStack,
  CardBody,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loading from "../Loading/Loading";
// import { service } from "../../main";

const Change = () => {
  const url = `https://api.coingecko.com/api/v3/exchanges?per_page=50`;
  const { coinData: data, loading } = useFetch(url);
  // console.log(data);
  return (
    <Container maxW={"container.lg"} h={"full"}>
      <HStack wrap={"wrap"} justifyContent={"center"}>
        {loading ? (
          <Loading />
        ) : (
          data?.map((exchange) => {
            return (
              <Link to={exchange.url} target={"_blank"} key={exchange.id}>
                <Card
                  w={"48"}
                  m={2}
                  boxShadow={"dark-lg"}
                  colorScheme={"#fafafa"}
                  cursor={"pointer"}
                  transition={"all 0.5s"}
                  _hover={{
                    transform: "scale(1.1,1.1)",
                  }}
                >
                  <CardBody>
                    <VStack>
                      <Image src={exchange.image} />
                      <Heading fontSize={"xl"} noOfLines={1}>
                        {exchange.name}
                      </Heading>
                      <Text fontWeight={"bold"} fontSize={16}>
                        {exchange.trust_score_rank}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              </Link>
            );
          })
        )}
      </HStack>
    </Container>
  );
};

export default Change;
