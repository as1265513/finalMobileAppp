import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import Barchart from '../components/Barchart';
import { useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import CustomButton from '../components/CustomButton';

const Barscreen = ({ route }) => {
  const [review, setReview] = useState([]);
  const cartState = useSelector((state) => state.cart);
  const navigation = useNavigation();

  useEffect(() => {
    if (route?.params?.review) {
      setReview(route.params.review);
    }
  }, [route]);

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
    <View style={style.main}>
      <Barchart reviews={review} />
    </View>
  );
};
const style = StyleSheet.create({
  main: {
    padding: 20,
  },
});

export default Barscreen;
