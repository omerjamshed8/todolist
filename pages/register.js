import React,{useRef, useState} from "react";
import { Text,View, TextInput,StyleSheet, Button,ScrollView,ImageBackground,Dimensions} from "react-native";
import {  TouchableOpacity} from "react-native";

function Register({navigation}){

    const AppButton = ({ onPress, title,bgColor,textCol}) => (
        <TouchableOpacity onPress={onPress} style={[styles.appButtonContainer,{
            // backgroundColor:bgColor?bgColor: "#D9CB50"
            backgroundColor: '#0f9b0f',
        }]}>

          <Text style={[styles.appButtonText,{
          color:textCol?textCol : '#fff'}]}>{title}</Text>
        </TouchableOpacity>
      );

    const pressHandler=(event)=>{
        console.log(contactInfo)
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
        setContactInfo({ ...contactInfo, [event.target.email]: event.target.value });
        setContactInfo({ ...contactInfo, [event.target.password]: event.target.value });
        setContactInfo({ ...contactInfo, [event.target.phone]: event.target.value });
        setContactInfo({ ...contactInfo, [event.target.city]: event.target.value });
        navigation.navigate('Login')
    }
    const [contactInfo,setContactInfo]=useState({
        name:"",
        email:"",
        password:"",
        phone:"",
        city:"",
        party:"",
    });
    
    //   const nameRef = useRef();

    return(
        <View style={styles.container}>
            {/* <ImageBackground style={{width: Dimensions.get('window').width,height: Dimensions.get('window').height,width:'100%',flex:1,alignItems:'center'}} source={require('./images/fullbackground.jpg')}> */}
            <Text style={{fontWeight:'bold', fontSize:30,marginTop:210}}>Register</Text>
            <Text>Create Your Account</Text>
            {/* <Text>{'\n'}</Text> */}
            <ScrollView contentContainerStyle={styles.contentContainer} showsVerticalScrollIndicator={false}>
            {/* <Text>Enter Your name: </Text> */}
            <TextInput 
                // ref={nameRef}
                style={styles.input} 
                placeholder='Name' 
                // onChange={(e) => console.log(e)}
                onChangeText={e => setContactInfo({...contactInfo, name: e})}
                keyboardType='default'
            />

            {/* <Text style={styles.top}>Enter Your email: </Text> */}
            <TextInput 
                style={styles.input} 
                placeholder='E-mail' 
                onChangeText={e => setContactInfo({...contactInfo, email: e})}
                keyboardType='email-address'
            />

            {/* <Text style={styles.top}>Enter Your Password: </Text> */}
            <TextInput 
                secureTextEntry={true}
                style={styles.input} 
                placeholder='Password' 
                onChangeText={e => setContactInfo({...contactInfo, password: e})}
                keyboardType='default'
            />

            {/* <Text style={styles.top}>Enter Your phone: </Text> */}
            <TextInput 
                style={styles.input} 
                placeholder='Phone' 
                onChangeText={e => setContactInfo({...contactInfo, phone: e})}
                keyboardType='numeric'
            />

            {/* <Text style={styles.top}>Enter Your city: </Text> */}
            <TextInput 
                style={styles.input} 
                placeholder='City'
                onChangeText={e => setContactInfo({...contactInfo, city: e})}
                keyboardType='default'
            />

            <TextInput 
                style={styles.input} 
                placeholder='Party'
                onChangeText={e => setContactInfo({...contactInfo, city: e})}
                keyboardType='default'
            />
            <AppButton title={"Register"} onPress={pressHandler} bgColor='#D9CB50' textCol="white"/>

            <Text>{contactInfo.name} {contactInfo.email} {contactInfo.password} {contactInfo.phone} {contactInfo.city} {contactInfo.party}</Text>
            </ScrollView>
        {/* </ImageBackground> */}
        </View>
    );
}

export default Register;

const styles=StyleSheet.create({
    container:{
        flex:1,
        // backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
    },
    input:{
        marginTop:15,
        borderRadius:15,
        // borderWidth:1,
        // borderTopWidth:0.3,
        // borderLeftWidth:0.5,
        // borderRightWidth:0.5,
        borderColor:'black',
        // backgroundColor:'default',
        padding:8,
        marginTop:15,
        backgroundColor:'#E5E4E2',
        width:300,
    },
    sub:{
        backgroundColor:'#ffffff',
        marginTop:20
    },
    top:{
        marginTop:10,

    },
    appButtonContainer: {
        color:'green',
      elevation: 10,
      backgroundColor: "#D9CB50",
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      marginLeft:45,
      marginTop:15,
      width:200,
      borderWidth:0
    },
    appButtonText: {
      fontSize: 18,
      color: "white",
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    contentContainer: {
        paddingVertical: 10
      }
})