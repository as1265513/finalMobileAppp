import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Menudetail from '../components/Menudetail';
import CustomButton from '../components/CustomButton';
import { useNavigation } from '@react-navigation/native';
import { ActionTypes } from '../redux/ActionTypes';

const CartScreen = ({ route }) => {
  const navigation = useNavigation();
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotal = () => {
    const prices = cartState.items.map((x) => x.price);
    return prices.reduce((a, b) => a + b, 0);
  };

  const onItemPress = (item) => {
    const filterArr = cartState.items.filter((x) => x.id !== item.id);
    dispatch({
      type: ActionTypes.UPDATE_CART,
      payload: {
        resturant: cartState.items.length > 0 ? cartState.resturant : null,
        items: filterArr,
      },
    });
  };

  return (
    <View style={style.main}>
      <Text style={style.title}>Your items</Text>
      <FlatList
        data={cartState.items}
        renderItem={({ item }) => {
          return (
            <Menudetail
              result={item}
              cartItem
              onPress={() => onItemPress(item)}
            />
          );
        }}
        ListEmptyComponent={() => <Text>No item.</Text>}
      />
      <Text style={style.total}>{`Total: $${getTotal() || '0'}`}</Text>
      {cartState.items.length > 0 && (
        <CustomButton
          title={'Place order'}
          onPress={() => {
            navigation.navigate('Mapscreen', {
              location: {
                latitude: cartState.resturant.coordinates.latitude,
                longitude: cartState.resturant.coordinates.longitude,
              },
            });
          }}
          customStyle={style.cartButton}
        />
      )}
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10,
  },
  total: {
    fontSize: 24,
    fontWeight: 'bold',
    alignSelf: 'center',
    padding: 10,
  },
  main: {
    padding: 15,
  },
});

export default CartScreen;
