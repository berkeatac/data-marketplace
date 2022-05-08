import { VStack, Box, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProductList, Product } from "./api";

function App() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getProductList().then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    console.log(products);
  }, [products]);

  return (
    <VStack spacing={0} h="100vh" w="100vw">
      <Box h="60px" w="100vw" bg="yellow.100"></Box>
      <HStack spacing={0} h="full" w="100vw">
        <Box h="full" w="full" bg="tomato"></Box>
        <Box h="full" w="420px" bg="pink.100"></Box>
      </HStack>
    </VStack>
  );
}

export default App;
