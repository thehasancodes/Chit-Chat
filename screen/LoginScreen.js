import React from 'react';
import GradientScreen from '../components/GradientScreen';
import {StyleSheet,Image, View,Text, TouchableOpacity} from 'react-native'
import AppButton from '../components/AppButton';
import AppForm from '../components/AppForm';
import AppFormField from '../components/AppFormField'
import * as Yup from 'yup';
import colors from '../config/colors';

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label("Email"),
    password: Yup.string().required().min(4).label("Password")
});

function LoginScreen(props) {
    return (
        <GradientScreen>
             <Image style={styles.image2} source={require("../assets/P5.png")} />
             <Image style={styles.image3} source={require("../assets/P3.png")} />
             <Image style={styles.image4} source={require("../assets/P1.png")} />
             <Image style={styles.image5} source={require("../assets/P4.png")} />

            <AppForm 
                initialValues={{email: '' , password:''}}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
                >
            <View style={styles.content}>
              <AppFormField 
                autoCapitalize="none"
                autoCorrect={false}
                icon="email"
                keyboardType="email-address"
                name="email"
                textContentType="emailAddress"
                placeholder="email"
            />
    
            <AppFormField
                autoCapitalize="none"
                autoCorrect={false}
                icon="lock"
                secureTextEntry={true}
                name="password"
                textContentType="password"
                placeholder="password"

            />
            </View>
            <View style={styles.login}>
            <AppButton 
            
            title="login" color="button"/>
            </View>
            </AppForm>

            <View style={styles.text}>
              <Text style={{fontSize:15,color:colors.white}}>Don't have an account?
                <TouchableOpacity> 
                <Text style={{fontSize:16,color:colors.pink,top:4}}> sign up</Text>
                </TouchableOpacity>
              </Text>
            </View>
        </GradientScreen>
    );
}

export default LoginScreen;
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
  content:{
    position:"absolute",
    width:"100%",
    bottom:360,
    padding:10,
  },
  login:{
    position:"absolute",
    width:"100%",
    bottom:270,
    padding:10,
  },
  text:{
    position:"absolute",
    bottom:250,
    left:70,
  }
 
    
})