import { Heading, Text, Button, VStack, Spacer } from "@chakra-ui/react";
import { Product } from "../../api";

const ProductCard: React.FC<Product> = ({ title, price }) => {
  return (
    <VStack p={5} shadow="md" borderWidth="1px" h="220px" align="flex-start">
      <Text noOfLines={3} fontSize="lg" title={title}>
        {title}
      </Text>
      <Spacer />
      <Heading fontSize="md" pb={2}>{`${price} credit${
        price === 1 ? "" : "s"
      }`}</Heading>
      <Button w="full">Add to cart</Button>
    </VStack>
  );
};

export default ProductCard;
