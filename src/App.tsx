import { VStack, HStack, Center, Spinner } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getProductList, Product } from "./api";
import CartContainer from "./components/CartContainer";
import ProductList from "./components/ProductList";
import TopBar from "./components/TopBar";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [cart, setCart] = useState<Product[]>([]);
  const [credit, setCredit] = useState(10000);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<{ message: string } | null>(null);

  useEffect(() => {
    getProductList()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => setError(error));
  }, []);

  if (error) {
    return (
      <Center h="100vh" w="100vw">
        {error.message}
      </Center>
    );
  }

  return (
    <VStack spacing={0} h="100vh" w="100vw" overflow="hidden">
      {loading ? (
        <Center h="full">
          <Spinner data-testid="loading"></Spinner>
        </Center>
      ) : (
        <>
          <TopBar credit={credit} />
          <HStack spacing={0} h="calc(100vh - 80px)" w="100vw">
            <ProductList products={products} cart={cart} setCart={setCart} />
            <CartContainer
              cart={cart}
              setCart={setCart}
              credit={credit}
              setCredit={setCredit}
            />
          </HStack>
        </>
      )}
    </VStack>
  );
}

export default App;
