import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import Searchbar from '../components/Searchbar';
import Useresult from '../hooks/Useresult';
import ResultList from '../components/ResultList';
import { useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';

const Searchscreen = ({ navigation }) => {
  const cartState = useSelector((state) => state.cart);
  const [term, setTerm] = useState('rt');
  const [searchApi, errormessage, result] = Useresult();

  const Filteroutresult = (Price) => {
    return result.filter((result) => {
      return result.price === Price;
    });
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
    <View style={style.nam4}>
      <Searchbar
        term={term}
        onTermchange={setTerm}
        onTermsubmit={() => searchApi(term)}
      />
      {errormessage ? <Text>{errormessage}</Text> : null}

      <ScrollView contentContainerStyle={style.scroll}>
        <ResultList
          results={Filteroutresult('$')}
          tittle="Cost Effective"
          navigation={navigation}
        />
        <ResultList
          results={Filteroutresult('$$')}
          tittle="Bit Pricer"
          navigation={navigation}
        />
        <ResultList
          results={Filteroutresult('$$$')}
          tittle="Big Splender"
          navigation={navigation}
        />
      </ScrollView>
    </View>
  );
};

const style = StyleSheet.create({
  nam: {
    fontSize: 40,
    marginTop: 20,
    marginLeft: 20,
  },
  nam2: {
    fontSize: 40,
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 20,
    backgroundColor: 'red',
  },
  nam3: {
    backgroundColor: '#F0EEEE',
    height: 40,
    borderRadius: 5,
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  nam4: {
    borderRadius: 5,
    backgroundColor: 'white',
    flex: 1,
  },
  scroll: {
    paddingBottom: 50,
    flexGrow: 1,
  },
  cartButton: {
    padding: 8,
    paddingHorizontal: 10,
  },
});

export default Searchscreen;
