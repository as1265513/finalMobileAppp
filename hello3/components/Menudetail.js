import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const Menudetail = ({ result, cartItem = false, onPress }) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={style.viewstyle}>
        <Image style={style.imagestyle} source={result.uri} />
        <View style={style.content}>
          <Text style={style.tittlestyle}>{result.title}</Text>
          <Text style={style.view3style}>
            Price: <Text style={style.price}>${result.price}</Text>
          </Text>
          {cartItem ? (
            <Text style={style.delete}>Click to delete item</Text>
          ) : (
            <Text style={style.view}>Click to view more</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  imagestyle: {
    height: 100,
    width: 100,
    borderRadius: 10,
    paddingRight: 10,
    paddingLeft: 10,
  },
  tittlestyle: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  viewstyle: {
    flexDirection: 'row',
    padding: 10,
    borderWidth: 1,
    borderRadius: 15,
    marginVertical: 5,
    borderColor: '#F62E43',
  },
  view2style: {},
  view3style: {
    fontSize: 15,
  },
  buttonstyle: {
    backgroundColor: 'red',
    fontSize: 80,
    fontWeight: 'bold',
  },
  view: {
    color: 'blue',
  },
  delete: {
    color: 'red',
  },
  content: {
    marginLeft: 20,
    justifyContent: 'space-between',
  },
  price: {
    color: '#F62E43',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default Menudetail;
