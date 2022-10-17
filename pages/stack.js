import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Login from './login';
// import Register from './register';
// import Front from './front';
import TodoList from './todolist';
import TodoHeader from './todoheader';
import Taskslice from './taskslice';
import Details from './details';
import Favorites from './favorites';
import Search from './searchbar';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTabs(){
  return (
    <Tab.Navigator initialRouteName='TodoHeader'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'TodoHeader') {
              return (
                <Ionicons
                  name={
                    focused
                      ? 'create'
                      : 'create'
                  }
                  size={size}
                  color={color}
                />
              );
            } else if (route.name === 'TodoList') { //settings ko menu krna hai
              return (
                <Ionicons
                  name={focused ? 'list' : 'list'}
                  size={size}
                  color={color}
                />
              );
            }else if (route.name === 'Favorites') { //settings ko menu krna hai
              return (
                <Ionicons
                  name={focused ? 'star' : 'star'}
                  size={size}
                  color={color}
                />
              );
            }
          },
          tabBarInactiveTintColor: 'grey',
          tabBarActiveTintColor: 'white',
          tabBarInactiveBackgroundColor:'#fff',
          tabBarHideOnKeyboard:'true',
          tabBarActiveBackgroundColor:'green'
          // tabBarActiveBackgroundColor:'#ff8989'
        })}
      >
        <Tab.Screen name="TodoHeader" component={TodoHeader}  options={{header : () => null}}/>
        <Tab.Screen
          name="TodoList"
          component={TodoList}
          options={{ header : () => null }} //tabBarBadge: 3,
        />
        <Tab.Screen name="Favorites" component={Favorites}  options={{header : () => null}}/>
      </Tab.Navigator>
  );
}
function MyStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeTabs} options={{headerShown:false}}/>
      <Stack.Screen name="Details" component={Details} options={{headerShown:false}}/>
        {/* <Stack.Screen name="TodoHeader" component={TodoHeader} options={{headerShown:false}}/>
        <Stack.Screen name="TodoList" component={TodoList} options={{headerShown:false}}/> */}
        {/* <Stack.Screen name="Taskslice" component={Taskslice} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="Register" component={Register} options={{headerShown:false}} /> */}
        {/* <Stack.Screen name="Settings" component={HomeScreen} /> */}
       </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MyStack;