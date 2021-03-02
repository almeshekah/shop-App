import React from "react";
import { useSelector } from "react-redux";
import {
  ShopDetailTitle,
  ShopDetailImage,
  ShopDetailWrapper,
} from "../styles";
import {  Spinner , Text} from "native-base";
import ProductList from "./ProductList";




const ShopDetail = () => {
  const loading = useSelector((state) => state.shopReducer.loading);
  const shop = useSelector((state) => state.shopReducer.shops[1]);
 

  
  if (!loading) return <Spinner />;
  return (
    <>
      <ShopDetailWrapper>
        <Text>{shop.products.id}</Text>
        <ShopDetailTitle>{shop.name}</ShopDetailTitle>
        <ShopDetailImage source={{ uri: shop.image }} />
        <ProductList products={shop.products}/>
      </ShopDetailWrapper>
      
    </>
  );
};

export default ShopDetail;