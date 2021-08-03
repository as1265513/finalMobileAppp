import React from 'react';
import {
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import Menudetail from '../components/Menudetail';
import { useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { useRoute } from '@react-navigation/native';

const Menuscreen = ({ navigation }) => {
  const route = useRoute();
  const cartState = useSelector((state) => state.cart);

  const data = [
    {
      id: '1',
      title: 'Pasta',
      uri: require('../Assets/images/Burger.png'),
      description: 'pasta is the best italian food to eat ',
      price: 100,
    },
    {
      id: '2',
      title: 'Burger',
      uri: require('../Assets/images/pasta.png'),
      description: 'Burger is known to most consumed fast food ',
      price: 150,
    },
    {
      id: '3',
      title: 'Noodles',
      uri: require('../Assets/images/noodles.png'),
      description: 'it has been the best noodles you woiuld have eaten',
      price: 50,
    },
    {
      id: '4',
      title: 'Noodles',
      uri: require('../Assets/images/noodles.png'),
      description: 't has been the best noodles you woiuld have eaten',
      price: 30,
    },
  ];

  navigation.setOptions({
    headerRight: () => (
      <CustomButton
        title={`Cart (${cartState.items.length})`}
        onPress={() => navigation.navigate('CartScreen')}
        customStyle={style.cartButton}
      />
    ),
  });

  return (
    <ScrollView contentContainerStyle={style.main}>
      <Image
        style={style.imagestyle}
        source={require('../Assets/images/menu.png')}
      />
      <TouchableOpacity style={style.inpuStyle}>
        <Text>Choose your order</Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          return (
            <Menudetail
              onPress={() =>
                navigation.navigate('Orderscreen', {
                  data: item,
                  resturant: route?.params?.resturant,
                })
              }
              result={item}
            />
          );
        }}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  viewstyle: {
    height: 500,
    width: 300,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },

  imagestyle: {
    backgroundColor: '#F0EEEE',
    height: 300,
    width: 320,
    borderRadius: 20,
    alignSelf: 'center',
  },
  inpuStyle: {
    backgroundColor: 'white',
    borderRadius: 4,
    borderWidth: 1,
    alignItems: 'center',
    height: 48,
    justifyContent: 'center',
    marginTop: 16,
  },
  main: {
    padding: 10,
    paddingBottom: 20,
  },
  cartButton: {
    padding: 8,
    paddingHorizontal: 10,
  },
});

export default Menuscreen;
