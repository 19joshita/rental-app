import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Home from './Home';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeWrapper = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Home />
    </SafeAreaView>
  );
};

export default HomeWrapper;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
});
