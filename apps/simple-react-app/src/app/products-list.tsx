import React from 'react';
import { gql, useQuery } from '@apollo/client';

const ALL_PRODUCTS = gql`
query GetAllProducts {
  products {
    price
    title
  }
}
`;

const ProductsList = () => {
  const { loading, error, data } = useQuery(ALL_PRODUCTS);

  if(loading) {
    return (
      <div>Loading...</div>
    )
  }
  return (
    <div>
      {data && data.products.map((item: any) => (
        <div key={item.title}>
          <div>{item.title}</div>
          <div>{item.price}</div>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
