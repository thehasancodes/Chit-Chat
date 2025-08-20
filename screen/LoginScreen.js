import React from 'react';
import GradientScreen from '../components/GradientScreen';

function LoginScreen(props) {
    return (
        <GradientScreen>
             <Image style={styles.image2} source={require("../assets/P5.png")} />
             <Image style={styles.image3} source={require("../assets/P3.png")} />
             <Image style={styles.image4} source={require("../assets/P1.png")} />
             <Image style={styles.image5} source={require("../assets/P4.png")} />
        </GradientScreen>
    );
}

export default LoginScreen;
const styles = StyleSheet.create({
    image2: {
    height: "19.2%",
    width: "30.9%",
    // resizeMode:"contain",
    position: "absolute",
    top: 38,
    left: 259,
    transform: [{ rotate: "300deg" }],
  },
  image3: {
    height: "16.07%",
    width: "45.2%",
    // resizeMode:"contain",
    // backgroundColor:"green",
    left: 100,
    transform: [{ rotate: "30deg" }],
  },
  image4: {
    height: "21.4%",
    width: "45.2%",
    position: "absolute",
    resizeMode: "contain",
    // backgroundColor:"green",
    right: 0,
    bottom: 230,
    transform: [{ rotate: "60deg" }],
  },
  image5: {
    height: "16.07%",
    width: "45.2%",
    position: "absolute",
    // backgroundColor:"green",
    left: 5,
    bottom: 65,
  },
})