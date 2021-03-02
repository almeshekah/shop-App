import React from "react";
import { Text ,Image} from "react-native";
import { ListItem } from "native-base";
import {ShopItemStyled } from "../styles";

const ShopItem = ({ shop }) => {
  console.log(shop);
    return (
        <ListItem>
          <Image
            style={{ width: 100 , height: 100 }}
            source={{ uri: shop.image }}
          />
          <ShopItemStyled>{shop.name}</ShopItemStyled>
        </ListItem>
      );
};

export default ShopItem;