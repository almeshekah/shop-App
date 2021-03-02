import React from "react";

// Styling
import { ImageBackground } from "react-native";
import { HomeBackground,TopStyling,Title,BottomStyling,ButtonStyled } from "../styles";

const Home = () => {
  return <HomeBackground
  
  source={{
    uri:
      "https://media.swncdn.com/cms/CROSSCARDS/71378-hello-fall.800w.tn.png",
  }}
>
   <TopStyling>
      <Title>welcome</Title>
    </TopStyling>
    <BottomStyling>
        <ButtonStyled onPress={() => alert("Take me to the list ")}>
         Click here to skip
        </ButtonStyled>
    </BottomStyling>

</HomeBackground>
};

export default Home;