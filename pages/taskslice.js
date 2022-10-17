import React from "react";
import { StyleSheet,View, Text, SafeAreaView } from "react-native";
import { createSlice, nanoid } from "@reduxjs/toolkit";
import Details from "./details";

function ShowTask(state,action){
  console.log("----------------------------------------------------------------------");
  console.log(state[0].name,action.payload.id);
  return(
    <View style={{flex:1,justifyContent:'center',alignItem:'center'}}>
      <Text>{state} Hello World</Text>
    </View>
  )
}


export const taskSlice = createSlice({
  name: "tasks",
  initialState: {
    favorites:[
      // {
      // id:'',
      // names:''
    // },
    ],
    posts:[],
    searchitem:[]
  },
  reducers: {
    addTask: (state, action) => {
      console.log("Nano id: ",nanoid());
      // 'dgPXxUz_6fWIQBD8XmiSy'

      console.log("Payload: ",action.payload);
      const newTask = {
        id: nanoid(),
        name: action.payload.task,
      };
        state.posts.push(newTask);
        console.log("Post state: ",state.posts);
      },

    deleteTask: (state, action) => {
      console.log("action :",action.payload);
      console.log("actionPaylodid :",action.payload.id);
      console.log('State',state);
      const newPosts = state.posts.filter((item) => item.id !== action.payload.id);
      state.posts = newPosts;
      const newSearchitem = state.searchitem.filter((item) => item.id !== action.payload.id);
      state.searchitem = newSearchitem;
      const newFav = state.favorites.filter((item) => item.id !== action.payload.id);
      state.favorites = newFav;
    },
    showdetails:(state,action)=>{
      console.log("------------------------------------------");
      console.log("action :",action.payload);
      console.log("actionPaylodid :",action.payload.id);
      // return state.posts;
    },
    updateTask:(state,action)=>{
      const newTask = {
        id: action.payload.id,
        name: action.payload.task,
        desc:action.payload.des
      };
        console.log("newtask id: ",newTask.id);
        console.log("state=",state);
        console.log("description= ",newTask.desc);
        for (let index = 0; index < state.length; index++) {
          if(state[index].id==newTask.id){
            state[index].name=newTask.name;
            state[index].desc=newTask.desc;
          }
          
        }
        // state=newTask;
    },
    updatefavorite:(state,action)=>{

      console.log(action.payload)

      const task = action.payload

      const found = state.favorites.find(item => item.id == task.id)

      if(!found) {
        state.favorites.push(task)
      } else {
        state.favorites.splice(state.favorites.indexOf(found), 1)
      }

      // console.log("action :",action.payload);
      // console.log("actionPaylodid :",action.payload.id);
      // console.log('State',state);
      // const id=action.payload.task;
      // console.log("favorites id ",id);
      // const task=action.payload.names;
      // const selectedtask=state.posts.find(item=>item.id==task.id);
      // selectedtask.isfavorite=!selectedtask.isfavorite;
      // var found=state.favorites.find(item=>item==task)
      
      // if (!found){
      //   console.log('added')
      //   state.favorites.push(task);
      // } 
      // else {
      //   state.favorites.splice(state.favorites.indexOf(found), 1)
      // }
      // if (!found){
      //   state.favorites.push({
      //     id:id,
      //     names:task
      //   });
      // }
      console.log("All  Favorites ",state.favorites);
      // return state.filter((item) => item.id !== action.payload.id);
        // navigation.navigate('Favorites', {
        //   item:id,
        //   isfavorite:isfavorite
        // });
    },
    getsearch:(state,action)=>{
      state.searchitem.push(action.payload);
      console.log("get search" ,action.payload);
      console.log("search item: ",state.searchitem);
      // return state.searchitem;
    }
  },
});

export const { addTask, deleteTask,showdetails,updateTask,updatefavorite,getsearch } = taskSlice.actions;

export default taskSlice.reducer;
