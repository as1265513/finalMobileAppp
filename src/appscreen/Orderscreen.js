import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, ScrollView, StyleSheet, Image, Alert,Modal ,View,Pressable} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CustomButton from '../components/CustomButton';
import { ActionTypes } from '../redux/ActionTypes';
import CheckBox from '@react-native-community/checkbox';

const Orderscreen = ({ route }) => {
  const cartState = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [chese, setchese] = React.useState(false);
  const [Mayonees, setMayonees] = React.useState(false)
  const [modalVisible, setModalVisible] = React.useState(false)
  const { uri, description, title, price } = route.params.data;

  const movetocart = () => {
    if (
      !cartState?.resturant ||
      cartState?.resturant?.name === route?.params?.resturant?.name
    ) {

    let data={
      "description":route.params.data.description,
       "id": route.params.data.id, 
       "photo": route.params.data.photo,
        "photos": route.params.data.photos, 
        "price": route.params.data.price, 
        "title": route.params.data.title,
        "extra":[{Mayonees:Mayonees},{chesee:chese}]
    }
      dispatch({
        type: ActionTypes.UPDATE_CART,
        payload: {
          resturant: route.params.resturant,
          items: [...cartState.items,data],
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
      <CustomButton title="Add more " onPress={() => setModalVisible(true)} />


      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
        onDismiss={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Want to Add Extra Things?</Text>
           <View style={{flexDirection:'row',}}>
           <Text>Add Extra Mayonese</Text>
           <CheckBox
              disabled={false}
              value={Mayonees}
              onValueChange={(newValue) => setMayonees(newValue)}
            />
           </View>
           <View style={{flexDirection:'row',}}>
           <Text>Add Extra cheese</Text>
          <CheckBox
              disabled={false}
              value={chese}
              
              
              onValueChange={(newValue) => setchese(newValue)}
            />
            </View>
            <CustomButton
              title="Done"
              onPress={() => setModalVisible(!modalVisible)}
              />
              
          </View>
        </View>
      </Modal>
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
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default Orderscreen;
