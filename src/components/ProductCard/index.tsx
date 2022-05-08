import { Heading, Text, Button, VStack, Spacer } from "@chakra-ui/react";
import { Product } from "../../api";

interface IProps extends Product {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductCard: React.FC<IProps> = ({ id, title, price, cart, setCart }) => {
  return (
    <VStack
      p={5}
      shadow="md"
      borderWidth="1px"
      h="220px"
      align="flex-start"
      key={id}
    >
      <Text noOfLines={3} fontSize="lg" title={title}>
        {title}
      </Text>
      <Spacer />
      <Heading fontSize="md" pb={2}>{`${price} credit${
        price === 1 ? "" : "s"
      }`}</Heading>
      <Button
        w="full"
        onClick={() =>
          !cart.some((product) => product.id === id) &&
          setCart((cart) => [...cart, { id, title, price }])
        }
        disabled={cart.some((product) => product.id === id)}
      >
        Add to cart
      </Button>
    </VStack>
  );
};

export default ProductCard;
