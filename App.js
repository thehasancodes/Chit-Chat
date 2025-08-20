import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import GradientScreen from './components/GradientScreen';
import WelcomeScreen from './screen/WelcomeScreen';
import LoginScreen from './screen/LoginScreen';
import SignupScreen from './screen/SignupScreen';

export default function App() {
  return (
    <SignupScreen/>
  );
}

const styles = StyleSheet.create({
  image2: {
    height: "19.2%",
    width: "30.9%",

    position: "absolute",
    top: "7.07%",
    left: "61.6%",
    transform: [{ rotate: "300deg" }],
  },
  image3: {
    height: "16.07%",
    width: "45.2%",
    top:"15.5%",
    left: "2.8%",
    transform: [{ rotate: "30deg" }],
  },
  image4: {
    height: "21.4%",
    width: "45.2%",
    position: "absolute",
    resizeMode: "contain",

    right: 0,
    bottom: "24.65%",
    transform: [{ rotate: "60deg" }],
  },
  image5: {
    height: "16.07%",
    width: "45.2%",
    position: "absolute",

    left: "1.19%",
    bottom: "6.97%",
  },
});
