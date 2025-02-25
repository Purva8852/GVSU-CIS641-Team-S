import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView,TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Input, NativeBaseProvider, Button, Icon, Box, Image, AspectRatio } from 'native-base';
import { borderLeft, height, style, textStyle } from 'styled-system';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';

function Help() {
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
          <Text style={styles.signupText}>Helping questions</Text>
        </View>
    );
};

export default () => {
    return (
      <NativeBaseProvider>
       
          <Help />
        
      </NativeBaseProvider>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: 'white',
        padding: 10,
    },
    emailField:{
        marginTop:30,
        marginLeft:15
    },
      emailInput:{
        marginTop:10,
        marginRight:5,
        padding:20
    },
    ListItem:{
        width: '100%',
        height: 50,
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    buttonDesign:{
        backgroundColor:'#026efd'
    },
    buttonStyle:{
        marginTop:15,
        marginLeft:15,
        marginRight:15
    },
    signupText:{
        fontWeight:'bold'
    },
});

