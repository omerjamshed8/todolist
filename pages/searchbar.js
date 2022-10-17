import * as React from 'react';
import { SafeAreaView,View,StyleSheet,Text,TouchableOpacity } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { Searchbar } from 'react-native-paper';
import { useSelector,useDispatch } from "react-redux";
import TodoList from './todolist';
import {getsearch} from "./taskslice";

const Search = () => {
  const dispatch = useDispatch();
  const [searchQuery, setSearchQuery] = React.useState('');
  const todos = useSelector((state) => state.tasks);
  // console.log("items in searchbar: ",todos);
  const fav=todos.favorites;
  // const s_items=todos.searchitem;
  // console.log("items in Favorites:",fav);

  const onChangeSearch = (query) => {

    setSearchQuery(query);
    console.log("searched query=",searchQuery);
    var __FOUND = -1;
    for(var i=0; i<fav.length; i++) {
      if(fav[i].name == searchQuery) {
        // __FOUND is set to the index of the element\
        dispatch(
          getsearch({
            task: fav[i].name,
            id:fav[i].id,
          })
          );
          break;
        // __FOUND = i;
        // s_items.push(fav[i]);
        // console.log("fav[i]",fav[i]);
        // console.log("Search item= ",s_items);
        break;
      }
    }
    // var __FOUND = fav.find(function(post, index) {
    //   console.log("Post=    ",post);
    //   if(post.name == searchQuery)
    //       console.log("found");
    //       renderItem(post);
    // });
  }

  return (
    <SafeAreaView style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={{width:'90%'}}
        
      />
    </SafeAreaView>
  );
};

export default Search;

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
