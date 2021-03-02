import React from "react";
import { Text ,Image} from "react-native";
import { ListItem } from "native-base";
import {ShopItemStyled } from "../styles";

const ProductItem = ({ product }) => {
    return (
        <ListItem>
          <Image
            style={{ width: 100, height: 100 }}
            source={{ uri: product.image }}
          />
          <ShopItemStyled>{product.name}</ShopItemStyled>
        </ListItem>
      );
};

export default ProductItem;