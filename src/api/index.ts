export interface Product {
  id: string;
  title: string;
  price: number;
}

interface Response {
  data: ResponseItem[];
  error: string | null;
}

interface ResponseItem {
  displayName: string;
  metadata: {
    blockPricingStrategy: {
      name: string;
      credits: number;
    };
  };
  id: string;
}

const fetchData: () => Promise<any> = () => {
  return fetch(
    "https://evening-ravine-34356.herokuapp.com/https://api.up42.com/marketplace/blocks"
  ).then((response) => response.json());
};

const filterAndFormatData = ({ data }: Response) => {
  const filteredData = data.filter(
    ({
      metadata: {
        blockPricingStrategy: { name },
      },
    }) => name === "simple"
  );
  const formattedData: Product[] = filteredData.map((filteredData) => {
    return {
      title: filteredData.displayName,
      price: filteredData.metadata.blockPricingStrategy.credits,
      id: filteredData.id,
    };
  });

  return formattedData;
};

const getProductList = () => {
  return fetchData().then((response) => filterAndFormatData(response));
};

export { getProductList };
