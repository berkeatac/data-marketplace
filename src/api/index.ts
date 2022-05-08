const fetchData: () => Promise<any> = () => {
  return fetch(
    "https://evening-ravine-34356.herokuapp.com/https://api.up42.com/marketplace/blocks"
  ).then((response) => response.json());
};

export { fetchData };
