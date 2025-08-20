import React from 'react';
import { Text, TouchableOpacity,StyleSheet } from 'react-native';
import colors from '../config/colors';

function AppButton({onPress,title,color="white"}) {
    return (
        <TouchableOpacity style={[styles.button,{backgroundColor:colors[color]} ]} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
}
const styles = StyleSheet.create({
    button:{
        width:"100%",
        height:50,
        borderRadius:25,
        backgroundColor:colors.top,
        justifyContent:"center",
        alignItems:"center",
        marginVertical:5, 
        alignSelf:"center",
    },
    text:{
        color:"black",
        fontSize:18,
        fontFamily:"Baloo 2",
        fontWeight:"bold",
    }
})

export default AppButton;