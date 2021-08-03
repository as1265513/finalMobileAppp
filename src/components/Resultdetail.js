import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const Resultdetail = ({ result }) => {
  return (
    <View>
      <Image style={style.namm} source={{ uri: result.image_url }} />
      <Text style={style.taxstyle}>{result.name}</Text>
      <Text style={style.ratingstyle}>
        Rating: <Text style={style.bold}>{result.rating}</Text>
      </Text>
    </View>
  );
};

const style = StyleSheet.create({
  namm: {
    width: 200,
    height: 230,
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  taxstyle: {
    marginLeft: 15,
    fontWeight: 'bold',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 18,
    width: 200,
  },
  ratingstyle: {
    marginLeft: 15,
  },
  bold: {
    fontWeight: 'bold',
    color: '#F62E43',
  },
});

export default Resultdetail;
