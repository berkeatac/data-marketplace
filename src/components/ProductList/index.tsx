import { SimpleGrid } from "@chakra-ui/react";
import { Product } from "../../api";
import ProductCard from "../ProductCard";

interface IProps {
  products: Product[];
}

const ProductList: React.FC<IProps> = ({ products }) => {
  return (
    <SimpleGrid
      h="full"
      w="full"
      columns={[1, 1, 3, 4]}
      spacing={4}
      p={4}
      overflow="scroll"
    >
      {products?.map(({ title, price }) => (
        <ProductCard title={title} price={price} />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
