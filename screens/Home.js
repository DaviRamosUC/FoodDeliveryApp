import React from 'react';
import {
  View,
  Text,
} from 'react-native';
import { COLORS } from '../constants';

const Home = () => {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 32, color: COLORS.black }}>Home</Text>
    </View>
  );
};

export default Home;
