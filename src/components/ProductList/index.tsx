import { SimpleGrid } from "@chakra-ui/react";
import { Product } from "../../api";
import ProductCard from "../ProductCard";

interface IProps {
  products: Product[];
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

const ProductList: React.FC<IProps> = ({ products, cart, setCart }) => {
  return (
    <SimpleGrid
      h="full"
      w="full"
      columns={[1, 1, 3, 4]}
      spacing={4}
      p={4}
      overflow="scroll"
      overflowX="hidden"
    >
      {products?.map(({ title, price, id }) => (
        <ProductCard
          id={id}
          title={title}
          price={price}
          key={id}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </SimpleGrid>
  );
};

export default ProductList;
