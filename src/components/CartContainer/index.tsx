import {
  Flex,
  Text,
  StackDivider,
  VStack,
  HStack,
  Spacer,
  Button,
} from "@chakra-ui/react";

const CartItem: React.FC<any> = () => {
  return (
    <VStack minH="120px" w="full" align="center" justify="center" px={6}>
      <HStack spacing={0}>
        <Text fontSize="lg" alignSelf="flex-start" noOfLines={2}>
          Something Display (Streaming)
        </Text>
        <Button size="sm">-</Button>
      </HStack>
      <Text fontSize="lg" alignSelf="flex-end" fontWeight="bold">
        150 credits
      </Text>
    </VStack>
  );
};

const CartContainer: React.FC<any> = () => {
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
      <VStack
        spacing={0}
        divider={<StackDivider borderColor="gray.200" />}
        minH="calc(100vh-80px-60px-180px)"
        overflow="scroll"
        overflowX="hidden"
      >
        <CartItem />
        <CartItem />
        <CartItem />
        <CartItem />
      </VStack>
      <Spacer />
      <VStack w="full" px={6} py={6} spacing={2} minH="160px">
        <HStack w="full">
          <Text fontSize="lg">Total:</Text>
          <Spacer />
          <Text fontSize="lg" fontWeight="bold">
            total_amount
          </Text>
        </HStack>
        <Spacer />
        <Button w="full">Buy now</Button>
      </VStack>
    </VStack>
  );
};

export default CartContainer;
