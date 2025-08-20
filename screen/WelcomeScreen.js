import React from "react";
import GradientScreen from "../components/GradientScreen";
import { Dimensions, Image, Text, View, StyleSheet } from "react-native";
import AppButton from "../components/AppButton";

const { width, height } = Dimensions.get("window");

function WelcomeScreen(props) {
  return (
    <GradientScreen>
      <Image style={styles.image1} source={require("../assets/P1.png")} />
      <Image style={styles.image2} source={require("../assets/P5.png")} />
      <Image style={styles.image3} source={require("../assets/P3.png")} />
      <Image style={styles.image4} source={require("../assets/P1.png")} />
      <Image style={styles.image5} source={require("../assets/P4.png")} />

      <View style={styles.textContainer}>
        <Text style={styles.text}>
          It's easy talking to your friends with Chit-Chat
        </Text>
        <Text style={styles.subtitle}>Chat. Laugh. Repeat.</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton
          style={{ marginTop: 20, width: "90%" }}
          title="Get Started"
          color="button"
          onPress={() => {
            console.log(width + " " + height);
          }}
        />
        <AppButton style={{ width: "90%" }} title="Sign in" color="gradient2" />
      </View>
    </GradientScreen>
  );
}

export default WelcomeScreen;
const styles = StyleSheet.create({
  image1: {
    height: "21.4%",
    width: "54.7%",
  },
  image2: {
    height: "19.2%",
    width: "30.9%",

    position: "absolute",
    top: "4.07%",
    left: "61.6%",
    transform: [{ rotate: "300deg" }],
  },
  image3: {
    height: "16.07%",
    width: "45.2%",

    left: "23.8%",
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
  textContainer: {
    padding: 20,
    position: "absolute",
    top: "41.2%",
  },
  text: {
    fontSize: 38,
    fontFamily: "Baloo 2",
    fontWeight: "bold",
    color: "#fff6cc",
    textAlign: "left",
  },
  subtitle: {
    color: "#E3C682",
    fontSize: 16,
    marginTop: 10,
    textAlign: "left",
    fontStyle: "italic",
  },
  buttonContainer: {
    position: "absolute",
    alignItems: "center",
    padding: 10,
    width: "100%",
    bottom: "16.08%",
  },
});
