import React from "react";
import { useSelector } from "react-redux";
import ProductItem from "./ProductItem";
import { List,Content , Spinner } from "native-base";

const ProductList = ({products}) => {
  const loading = useSelector((state) => state.productReducer.loading);
  if (loading) return <Spinner />;
  const productList = products
    .map((product) => <ProductItem key={product.id} product={product} />);
  
    return (
        <Content>
          <List>{productList}</List>
        </Content>
      );
};

export default ProductList;