import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import yelp from '../api/yelp';
import callnum from '../components/callnum';
import CustomButton from '../components/CustomButton';
import { useSelector } from 'react-redux';

const Resultscreen = ({ route: { params }, navigation }) => {
  const cartState = useSelector((state) => state.cart);
  const [result, setResult] = useState(null);
  const [review, setReview] = useState(null);

  const id = params.id;
  const getResult = async (id) => {
    const response = await yelp.get(`/${id}`);

    setResult(response.data);
  };

  const getReview = async (ia) => {
    try {
      const Respons = await yelp.get(`/${ia}/reviews`);
      setReview(Respons.data);
    } catch (err) { }
  };

  useEffect(() => {
    getResult(id);
    getReview(id);
  }, []);

  if (!result) {
    return null;
  }
  if (!review) {
    return null;
  }

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
      <Text style={style.Tittlestyle}>{result.name}</Text>
      <FlatList
        horizontal
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Imagescreen', { result: result })
                alert('hii')
              }}>
              <Image style={style.imagestyle} source={{ uri: item }} />
            </TouchableOpacity>)
        }}
        showsHorizontalScrollIndicator={false}
      />
      <ScrollView horizontal>
        <CustomButton
          title="Menu"
          onPress={() => {
            navigation.navigate('Menuscreen', { resturant: result });
          }}
        />
        <CustomButton title={'Reserve seat'} onPress={() => callnum(result)} />
        <CustomButton
          title="Line chart"
          onPress={() => {
            navigation.navigate('Chartscreen', { review: review.reviews });
          }}
        />
        <CustomButton
          title="Bar chart"
          onPress={() => {
            navigation.navigate('Barscreen', { review: review.reviews });
          }}
        />
        <CustomButton
          title="Pie chart"
          onPress={() => {
            navigation.navigate('Piescreen', { review: review.reviews });
          }}
        />
        <CustomButton
          title="Direction"
          onPress={() => {
            navigation.navigate('Mapscreen', {
              location: {
                latitude: result.coordinates.latitude,
                longitude: result.coordinates.longitude,
              },
            });
          }}
        />
      </ScrollView>
      <Text style={style.reviewTitle}>Reviews:</Text>
      <FlatList
        horizontal
        data={review.reviews}
        keyExtractor={(review) => review.id}
        renderItem={({ item }) => {
          return (
            <View>
              <Text style={style.reviewTitle}>
                Rating: <Text style={style.rev}>{item.rating}</Text>
              </Text>
              <Text style={style.imagestyle}>{item.text}</Text>
            </View>
          );
        }}
      />
    </ScrollView>
  );
};

const style = StyleSheet.create({
  main: {
    padding: 20,
    flexGrow: 1,
  },
  imagestyle: {
    width: 180,
    height: 200,
    marginRight: 20,
    borderRadius: 5,
    fontSize: 18,
  },
  Tittlestyle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  reviewTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  cartButton: {
    padding: 8,
    paddingHorizontal: 10,
  },
  rev: {
    color: '#F62E43',
  },
});

export default Resultscreen;
