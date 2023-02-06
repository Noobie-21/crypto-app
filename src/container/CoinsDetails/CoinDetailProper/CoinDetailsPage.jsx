import React, { useState } from "react";
// import Chart from "chart.js";
import useFetch from "../../../hooks/useFetch";
import { Line } from "react-chartjs-2";
import {
  Box,
  Container,
  Heading,
  Stack,
  HStack,
  Image,
  Button,
} from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const CoinDetailsPage = () => {
  const id = useParams();
  const url2 = `https://api.coingecko.com/api/v3/coins/${id.id}?localization=false&tickers=false&market_data=false&community_data=false&developer_data=false&sparkline=false&market_data`;
  const { coinData: data, loading } = useFetch(url2);

  const altName = "Sorry...";
  const heyThere = loading ? altName : data.image.large;
  // Image
  // console.log(data);
  return (
    <Box
      w={"100%"}
      h={"100vh"}
      bg={"green.100"}
      display={"flex"}
      alignItems={"center"}
    >
      <Container
        w={"container.xl"}
        h={"70vh"}
        bg={"grey"}
        borderRadius={"12px"}
      >
        <Stack direction={["row", "column"]}>
          <HStack>
            <Box></Box>
          </HStack>
        </Stack>
      </Container>
    </Box>
  );
};

export default CoinDetailsPage;
