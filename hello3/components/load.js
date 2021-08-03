import React from 'react';
import LottieView from 'lottie-react-native';

const Load = () => {
  return (
    <LottieView
      source={require('../Assets/animation/44374-food-delivery-process.json')}
      autoPlay
      loop
    />
  );
};

export default Load;
