import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, ScrollView, StyleSheet, Image, Alert } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { ActionTypes } from '../redux/ActionTypes';

const Orderscreen = ({ route }) => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { uri, description, title, price } = route.params.data;

  const movetocart = () => {
    if (
      !cartState?.resturant ||
      cartState?.resturant?.name === route?.params?.resturant?.name
    ) {
      dispatch({
        type: ActionTypes.UPDATE_CART,
        payload: {
          resturant: route.params.resturant,
          items: [...cartState.items, route.params.data],
        },
      });
      Alert.alert('Added to cart', '');
    } else {
      Alert.alert(
        'Cannot Add',
        'You already have items in cart for other resturant.',
      );
    }
  };

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
      <Text style={style.title}>{title}</Text>
      <Image style={style.imagestyle} source={uri} />
      <Text style={style.Tittlestyle}>{description}</Text>
      <Text style={style.Tittlestyle}>${price}</Text>
      <CustomButton title="Add To Cart" onPress={() => movetocart()} />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  main: {
    padding: 20,
  },
  imagestyle: {
    height: 200,
    width: 320,
    borderRadius: 10,
    alignSelf: 'center',
    marginBottom: 20,
  },
  Tittlestyle: {
    fontSize: 18,
    marginTop: 10,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartButton: {
    padding: 8,
    paddingHorizontal: 10,
  },
});

export default Orderscreen;
