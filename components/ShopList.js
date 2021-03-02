import React from "react";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
import { List,Content , Spinner,Text } from "native-base";

const ShopList = () => {
  const shops = useSelector((state) => state.shopReducer.shops);
  console.log(shops);
  console.log("Hiiiiiiiii")
  const loading = useSelector((state) => state.shopReducer.loading);
  if (!loading) return <Spinner />;
  const shopList = shops.map((shop) => <ShopItem key={shop.id} shop={shop} />);
  
  return (
        <Content>
          <List>{shopList}</List>
        </Content>
      );
};

export default ShopList;