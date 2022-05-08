import { VStack, Box, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProductList, Product } from "./api";
import CartContainer from "./components/CartContainer";
import ProductList from "./components/ProductList";
import TopBar from "./components/TopBar";

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
      <TopBar credits={10000} />
      <HStack spacing={0} h="calc(100vh - 80px)" w="100vw">
        <ProductList products={products} />
        <CartContainer />
      </HStack>
    </VStack>
  );
}

export default App;
