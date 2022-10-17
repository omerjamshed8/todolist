import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
  } from "react-native";
  import React, { useState } from "react";
  import { useDispatch } from "react-redux";
  import { addTask } from "./taskslice";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import TodoList from './todolist';
  
  
  const TodoHeader = ({navigation}) => {
    const [todo, setTodo] = useState("");
    const [desc, setdesc] = useState("");
  
    const dispatch = useDispatch();
  
    const setItem=async()=>{
      try {
        await AsyncStorage.setItem("item",todo);
        Alert.alert("Item added to todolist");
      } catch (err) {
        alert(err);
      }
    }
  
    const onSubmitTask = () => {
      if (todo.trim().length === 0) {
        console.log("todotrim");
        Alert.alert("You need to enter a task");
        setTodo("");
        return;
      }
  
      dispatch(
        addTask({
          task: todo,
          desc:desc
        })
      );
      setItem();
      setTodo("");
      navigation.navigate('TodoList')
    };
  
    return (
      <View>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginTop: 50,
          }}
        >
          Todo List
        </Text>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* TextInput */}
          <TextInput
            style={{
              borderColor: "gray",
              borderWidth: 1,
              padding: 10,
              margin: 10,
              width: "90%",
              borderRadius: 5,
            }}
            placeholder="Add todo"
            onChangeText={setTodo}
            value={todo}
          />
          {/* Button */}
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
          >
            <Text style={{ color: "white" }}>Add</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  
  export default TodoHeader;
  
  const styles = StyleSheet.create({});
  