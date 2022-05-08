import {
  Flex,
  Text,
  StackDivider,
  VStack,
  HStack,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { Product } from "../../api";

interface IProps {
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

interface CartItemProps extends Product {
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const CartItem: React.FC<CartItemProps> = ({ id, title, price, setCart }) => {
  return (
    <VStack minH="120px" w="full" align="center" justify="center" px={6}>
      <HStack spacing={0} w="full">
        <Text fontSize="lg" alignSelf="flex-start" noOfLines={2}>
          {title}
        </Text>
        <Spacer />
        <Button
          size="sm"
          onClick={() =>
            setCart((cart) => cart.filter((product) => product.id !== id))
          }
        >
          -
        </Button>
      </HStack>
      <Text fontSize="lg" alignSelf="flex-end" fontWeight="bold">
        {price} credits
      </Text>
    </VStack>
  );
};

const CartContainer: React.FC<IProps> = ({ cart, setCart }) => {
  return (
    <VStack
      h="full"
      w="420px"
      align="top"
      spacing={0}
      divider={<StackDivider borderColor="gray.200" />}
    >
      <Flex minH="60px" w="full" align="center" px={6}>
        <Text fontSize="lg">Cart</Text>
      </Flex>
      {cart.length > 0 && (
        <VStack
          spacing={0}
          divider={<StackDivider borderColor="gray.200" />}
          minH="calc(100vh-80px-60px-180px)"
          overflow="scroll"
          overflowX="hidden"
        >
          {cart.map(({ id, title, price }) => (
            <CartItem
              key={id}
              id={id}
              title={title}
              price={price}
              setCart={setCart}
            />
          ))}
        </VStack>
      )}
      <Spacer />
      <VStack w="full" px={6} py={6} spacing={2} minH="160px">
        <HStack w="full">
          <Text fontSize="lg">Total:</Text>
          <Spacer />
          <Text fontSize="lg" fontWeight="bold">
            {cart.reduce((prev, cur) => prev + cur.price, 0)}
          </Text>
        </HStack>
        <Spacer />
        <Button w="full">Buy now</Button>
      </VStack>
    </VStack>
  );
};

export default CartContainer;
