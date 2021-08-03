import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const CustomButton = ({ title, onPress, customStyle }) => {
  return (
    <View style={styles.main}>
      <TouchableOpacity onPress={() => onPress()}>
        <View style={[styles.button, customStyle]}>
          <Text style={styles.title}>{title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#F62E43',
    borderRadius: 14,
    fontSize: 14,
    padding: 12,
    paddingHorizontal: 42,
    margin: 5,
  },
  title: {
    color: '#fff',
    fontSize: 14,
    textTransform: 'uppercase',
  },
});

export default CustomButton;
