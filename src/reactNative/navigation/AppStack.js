import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Post from '../screens/Post'
import Profile from '../screens/Profile';
import Help from '../screens/Help';
import Logout from '../screens/Logout';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator initialRouteName='Post'
      //drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: true,
      }}>
      <Drawer.Screen
        name="Profile"
        component={Profile}
      />
      <Drawer.Screen
        name="Post"
        component={Post}
      />
      
      <Drawer.Screen
        name="Help"
        component={Help}
      />
      <Drawer.Screen
        name="Logout"
        component={Logout}
      />
    </Drawer.Navigator>

  );
};

export default AppStack;