import React from "react";
import { Text,View,StyleSheet,Button,ImageBackground } from "react-native";
import Login from "./login";
import Register from "./register";
import {  TouchableOpacity} from "react-native";

export default function Front({navigation}){
    const pressHandler=()=>{
        navigation.navigate('Register');
    }
    
    const pressHandler2=()=>{
        navigation.navigate('Login');
    }

    const AppButton = ({ onPress, title,bgColor, textCol }) => (
        <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer, {
            backgroundColor : bgColor ? bgColor : "#D9CB50"
        }]}>
          <Text style={[styles.appButtonText, { color : textCol ? textCol : '#fff'}]}>{title}</Text>
        </TouchableOpacity>
      );

    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            {/* <ImageBackground source={require('./images/blur.jpg')} resizeMode='cover' style={styles.image}> */}
                <Text style={styles.t}>WELCOME {'\n'}TO {'\n'}ELECTION {'\n'}EXPERT</Text>
                <AppButton title={"Sign Up"} onPress={pressHandler}  bgColor="white" textCol="black"/>
                <AppButton title={"Login"} onPress={pressHandler2} />
            {/* </ImageBackground> */}
        </View>
    )
}

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#D9CB50",
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 12,
        marginTop:12,
        marginLeft:30,
        width:300,
        alignItems:'center',
        justifyContent:'center'
    
        //   elevation: 8,
    //   borderRadius: 10,
    //   paddingVertical: 20,
    //   paddingHorizontal: 110,
    //   marginTop:12,
    },
    image: {
        flex: 1,
        justifyContent: "center",
        width:'100%'
    },
    appButtonText: {
        
      fontSize: 18,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    t:{
        fontWeight:'bold',
        fontSize:30,
        color:'#fff',
        textAlign:'left',
        marginTop:-130,
        marginLeft: 30
        }
    }
  );