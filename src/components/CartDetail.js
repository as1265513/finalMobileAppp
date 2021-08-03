import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CartDetail = ({ navigation, result, cartItem = false, onPress,onImagePress }) => {
  
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={style.viewstyle}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Imagescreen', {
            result: result
          })}>
          <TouchableOpacity onPress={onImagePress}>
          <Image style={style.imagestyle} source={result.photo} />
          </TouchableOpacity>
        </TouchableOpacity>
        <View style={style.content}>
          <Text style={style.tittlestyle}>{result.title}</Text>
          <Text style={style.view3style}>
            Price: <Text style={style.price}>${result.price}</Text>
            {result?.extra[0]?.Mayonees?<Text style={style.price}> + $ 1</Text>:null} 
             {result?.extra[1]?.chesee?<Text style={style.price}> + $ 2</Text>:null} 
             
          </Text>
          
            <Text style={style.delete}>Click to delete item</Text>
        
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

export default CartDetail;
