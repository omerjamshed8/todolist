import * as React from 'react';
import { StyleSheet,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Register from './pages/register';
import Login from './pages/login';
import 'react-native-gesture-handler';
import MyStack from './pages/stack';
import Front from './pages/front';
import { Provider } from "react-redux";
import store from "./pages/store";


export default function App() {
  return (
    <Provider store={store}>
      <MyStack/>
     </Provider>
    );
}

const style=StyleSheet.create({
  
})