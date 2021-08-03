import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { withNavigation } from 'react-navigation';
import Resultdetail from './Resultdetail';

const ResultList = ({ results, tittle, navigation }) => {
  if (!ResultList) {
    return null;
  }
  return (
    <View>
      <Text style={style.tittlestyle}>{tittle}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        contentContainerStyle={style.listStyle}
        ListEmptyComponent={() => <Text style={style.text}>No item.</Text>}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate(
                  'Resultscreen',
                  { id: item.id },
                  { navigation },
                )
              }>
              <Resultdetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const style = StyleSheet.create({
  tittlestyle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 15,
    color: '#F62E43',
  },
  viwstyle: {
    width: 250,
    height: 280,
    borderRadius: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  listStyle: {
    marginBottom: 30,
  },
  text: {
    marginLeft: 15,
  },
});

export default withNavigation(ResultList);
