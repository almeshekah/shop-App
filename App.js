import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from './components/Home';
import { Provider } from "react-redux"; // STEP 2
import store from "./store"; //STEP 3
import ShopList from "./components/ShopList";
import ShopDetail from './components/ShopDetail';
export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Home/>
        <ShopList/>
        <ShopDetail/>
        <StatusBar style="auto" />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
