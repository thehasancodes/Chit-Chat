import React from 'react';
import { TextInput, View, StyleSheet, Platform } from 'react-native';
import {MaterialCommunityIcons} from '@expo/vector-icons';
import colors from '../config/colors';

function AppTextInput({icon,style,width="100%",height=50, ...otherProps}) {
    return (
       <View style={[styles.container ,{width,height}]}>
        {icon && <MaterialCommunityIcons name={icon} size={20} color={colors.white} style={styles.icon}/>}
        <TextInput
        style={[{ color: colors.white,flex:1 ,fontSize:16,textAlignVertical:"center"}, style]}
        placeholderTextColor="grey" {...otherProps}/>
       </View>
    );
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:colors.backgroundCard,
        borderRadius:25,
        flexDirection:"row",
        padding:5,
        marginVertical:3,
        alignItems:"center",
        borderWidth:1,
        borderColor:colors.button,
        
       

    },
    icon:{
        marginRight:10,
    }
})

export default AppTextInput;