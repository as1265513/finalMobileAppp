import React, { useState, useEffect } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Searchscreen from './src/appscreen/Searchscreen';
import Resultscreen from './src/appscreen/Resultscreen';
import Chartscreen from './src/appscreen/Chartscreen';
import Barscreen from './src/appscreen/Barscreen';
import Piescreen from './src/appscreen/Piescreen';
import Mapscreen from './src/appscreen/Mapscreen';
import Menuscreen from './src/appscreen/Menuscreen';
import Orderscreen from './src/appscreen/Orderscreen';
import Load from './src/components/load';
import { Provider } from 'react-redux';
import Store from './src/redux/Store';
import CartScreen from './src/appscreen/CartScreen';
import Imagescreen from './src/appscreen/Imagescreen';
import Foodscreen from './src/appscreen/Foodscreen';
import GalleryView from './src/appscreen/GalleryView';
const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Search" component={Searchscreen} />
      <Stack.Screen name="Chartscreen" component={Chartscreen} />
      <Stack.Screen name="Barscreen" component={Barscreen} />
      <Stack.Screen name="Piescreen" component={Piescreen} />
      <Stack.Screen name="Resultscreen" component={Resultscreen} />
      <Stack.Screen name="Mapscreen" component={Mapscreen} />
      <Stack.Screen name="Orderscreen" component={Orderscreen} />
      <Stack.Screen name="Menuscreen" component={Menuscreen} />
      <Stack.Screen name="CartScreen" component={CartScreen} />
      <Stack.Screen name="Imagescreen" component={Imagescreen} />
      <Stack.Screen name="Foodscreen" component={Foodscreen} />
      <Stack.Screen name="GalleryView" component={GalleryView} />


    </Stack.Navigator>
  );
};
export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);

  return loading ? (
    <Load />
  ) : (

    <Provider store={Store}>
      <NavigationContainer>
        <HomeStackNavigator />
      </NavigationContainer>
    </Provider>
  );
}
