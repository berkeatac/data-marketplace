import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./index";

test("renders price on product cards", () => {
  render(
    <ProductCard
      cart={[]}
      setCart={() => {}}
      id="1"
      title="berke's item"
      price={100}
    />
  );
  const priceText = screen.getByText("100 credits");
  expect(priceText).toBeInTheDocument();
});

test("renders title on product cards", () => {
  render(
    <ProductCard
      cart={[]}
      setCart={() => {}}
      id="1"
      title="berke's item"
      price={100}
    />
  );
  const titleText = screen.getByText("berke's item");
  expect(titleText).toBeInTheDocument();
});
