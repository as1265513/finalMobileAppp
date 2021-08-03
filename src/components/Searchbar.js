import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const Searchbar = ({ term, onTermchange, onTermsubmit }) => {
  return (
    <View style={style.backgroundstyle}>
      <TextInput
        placeholder="Search"
        style={style.inputstyle}
        value={term}
        onChangeText={onTermchange}
        onEndEditing={onTermsubmit}
      />
    </View>
  );
};

const style = StyleSheet.create({
  backgroundstyle: {
    backgroundColor: '#F0EEEE',
    height: 50,
    borderRadius: 5,
    marginTop: 30,
    marginLeft: 10,
    marginRight: 10,
    flexDirection: 'row',
  },
  inputstyle: {
    fontSize: 18,
    flex: 1,
    padding: 10,
  },
  iconstyle: {
    fontSize: 35,
    alignSelf: 'center',
  },
});

export default Searchbar;
