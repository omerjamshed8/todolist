import React, { useState } from "react";
import {Button, Text,View,TextInput,StyleSheet,TouchableOpacity,Alert} from 'react-native';
import {useSelector} from 'react-redux';
import TodoList from "./todolist";
import TodoHeader from './todoheader';
import { useDispatch } from "react-redux";
import { updateTask } from "./taskslice";
import { FlatList } from "react-native-gesture-handler";


const Favorites=({route},{navigation})=>{
    const todos = useSelector((state) => state.tasks);
      console.log("toDos: ",todos);
      const post=todos.favorites;
      console.log("POsts:",post);
      console.log(todos);

      const onSubmitTask=()=>{
        navigation.navigate('TodoHeader')
      }
    return(
        <View style={{flex:1}}>
            <FlatList style={styles.show}
                data={post}
                renderItem={({item})=>{
                  console.log('**********')
                  console.log(item)
                    return (
                      <Text style={styles.tex}>{item.name}</Text>
                    )
                }
            }
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
            ><Text style={{color:'white'}}>Go back</Text></TouchableOpacity>
        </View>
        // <View style={styles.show}>
        //     <Text style={styles.tex}>{post}</Text>
        // </View>
        // <SafeAreaView >
        //   {/* <Text>Hello World</Text> */}
        //   <FlatList
        //     data={todos}
        //     renderItem={renderItem}
        //     keyExtractor={(item) => item.id}
        //   />
        // </SafeAreaView>
    )
   
}

export default Favorites;

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
    show:{
        backgroundColor:'grey',
        margin:30,
        padding:20    
    },
    tex:{
        fontSize:20,
        fontWeight:'bold'
    }
  });