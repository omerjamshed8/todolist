import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity,
    Alert,
    SafeAreaView
  } from "react-native";
  import React from "react";
  //Ionicons
  import { Ionicons } from "@expo/vector-icons";
  //import useSelector from "react-redux";lea
  import { useSelector } from "react-redux";
  import { deleteTask,showdetails,updatefavorite,searchitem } from "./taskslice";
  import { useDispatch } from "react-redux";
  import AsyncStorage from "@react-native-async-storage/async-storage";
  import { NavigationContainer } from '@react-navigation/native';
  import { createStackNavigator } from '@react-navigation/stack';
  import Details from "./details";
  import Favorites from "./favorites";
  import Search from "./searchbar";

//{flex:1,justifyContent:'center',alignItems:'center'}
// {fontStyle:'bold',fontSize:30}
  const RenderList=({items})=>{
    console.log("in render list __________________________________________________________",items);
    return(
      <View style={styles.item}>
        {items.map((item, index) => (
          <Text style={styles.title} key={index}>{item.task}</Text>
        ))}
        <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onDelete(items.id)}
            >
              <Ionicons name="trash" size={20} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => shift(items.name, items.id,items.desc)}
            >
              <Ionicons name="create" size={20} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => dispatch(updatefavorite({id:items.id,name:items.name}))}
            >
              <Ionicons name="star" size={20} color={items.isfavorite? "red" :"blue"} />
            </TouchableOpacity>
      </View>
    )
  }
  
  const TodoList = ({navigation}) => {
      const dispatch = useDispatch();
      const todos = useSelector((state) => state.tasks);
      console.log("toDos: ",todos);
      const post=todos.posts;
      const searched=todos.searchitem ?? [];
      console.log("get search:",searched);
      // console.log(todos);
      const data = [
        {
          id: 1,
          title: "Learn React Native",
        },
        {
          id: 2,
          title: "Learn Redux Toolkit",
        },
      ];
  
      const delItem=async(id)=>{
        try {
          await AsyncStorage.removeItem(id);
          Alert.alert("Item removed from todolist");
        } catch (err) {
          alert(err);
        }
      }
  
      const onDelete = (id) => {
        dispatch(
          deleteTask({
            id: id,
          })
        );
        delItem(id);
      };
  
      const shift=(name, id,desc)=>{
        // console.log("Pressed");
        // dispatch(
        //   showdetails({
        //     id: id,
        //   })
        // );
        // console.log("__________________________________________________",name);
        navigation.navigate('Details', {
          item:id,
          name: name,
          desc,desc
        });
      }

      const favorite=(id,favorite)=>{
        // dispatch(
        //   favorite({
        //     id: id,
        //     favorite:favorite,
        //   })
        // );
        navigation.navigate('Favorites', {
          item:id,
          favorite:favorite,
        });
      }

      //renderItem function with a delete button
      const renderItem = ({ item }) => {
        console.log("List rendering");
        return (
          <View style={{marginTop:30}}>
            <Search></Search>
          <View style={styles.item}>
            <Text style={styles.title}>{item.name}</Text>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => onDelete(item.id)}
            >
              <Ionicons name="trash" size={20} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => shift(item.name, item.id,item.desc)}
            >
              <Ionicons name="create" size={20} color="red" />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.deleteButton}
              onPress={() => dispatch(updatefavorite({id:item.id,name:item.name}))}
            >
              <Ionicons name="star" size={20} color={item.isfavorite? "red" :"blue"} />
            </TouchableOpacity>
          </View>
          <RenderList items={searched}/>
          </View>
        );
      };

      return (
        <SafeAreaView >
          {/* <Text>Hello World</Text> */}
          <FlatList
            data={post}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
          />
        </SafeAreaView>
      );
  };
  
  export default TodoList;
  
  const styles = StyleSheet.create({
    item: {
      backgroundColor: "#e9e9e9",
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },
    title: {
      fontSize: 20,
    },
    delete: {
      fontSize: 24,
      color: "red",
    },
  });
  