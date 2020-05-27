import React, { FC } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';

import Welcome from '../screens/Home';
import Home from '../screens/page/SecPage';
import TodoListScreen from '../screens/Todolist/todolist';

const Tab = createBottomTabNavigator();

const BottomTabs: FC = () => {
    return (
        <Tab.Navigator
            initialRouteName="Welcome"
            tabBarOptions={{
                activeTintColor: '#e91e63',
            }}
        >
            <Tab.Screen
                name="Home"
                component={Welcome}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Page"
                component={Home}
                options={{
                    tabBarLabel: 'Page',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="comment-text-multiple-outline" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Todo list"
                component={TodoListScreen}
                options={{
                    tabBarLabel: 'Todo List',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="format-list-bulleted" color={color} size={size} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}

export default BottomTabs;
