import React, { useState } from "react";
import {Button, Text,View,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import {useSelector} from 'react-redux';
import TodoList from "./todolist";
import TodoHeader from './todoheader';
import { useDispatch } from "react-redux";
import { updateTask } from "./taskslice";


const Details=({route},{navigation})=>{
    const dispatch = useDispatch();
    const[changeNumber,onChangeNumber]=useState(route.params.name);
    const[desc,onChangedesc]=useState(route.params.desc);
    id=route.params.item;

    const onSubmitTask = () => {
        if (changeNumber.trim().length === 0) {
            console.log("details trim");
          Alert.alert("You need to enter a task");
          onChangeNumber("");
          return;
        }
    
        dispatch(
          updateTask({
            task: changeNumber,
            id:id,
            des:desc
          })
        );
        // setItem();
        onChangeNumber(onChangeNumber);
        onChangedesc(onChangedesc);
        // navigation.navigate('TodoHeader');
      };

    // console.log(props);
    // const pressHandler=()=>{
    //     navigation.navigate('TodoList');
    // }
    // const {carts} = useSelector((item)=>item.tasks)
    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            {/* <Text style={{fontSize:30,fontWeight:'bold'}}>{route.params.name}</Text>
            {props.name} */}
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={changeNumber}
                // placeholder={route.params.name}
                keyboardType="default"
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangedesc}
                value={desc}
                placeholder="Add Description"
                keyboardType="default"
            />
            <TouchableOpacity
            style={{
              backgroundColor: "black",
              padding: 10,
              margin: 10,
              width: "90%",
              borderRadius: 5,
              alignItems: "center",
            }}
            onPress={onSubmitTask}
            ><Text style={{color:'white'}}>Update</Text></TouchableOpacity>
        </View>
    )
}

export default Details;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });