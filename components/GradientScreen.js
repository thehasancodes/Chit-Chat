import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView, StyleSheet, View } from "react-native";
import Constants from 'expo-constants';

function GradientScreen({ children, style }) {
  return (

    <LinearGradient
      colors={["#0b090a", "#444554"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[styles.container, style]}
    >
    {children}
    </LinearGradient>
  );
}

export default GradientScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, // full screen
    paddingTop:Constants.statusBarHeight,
  },

});
