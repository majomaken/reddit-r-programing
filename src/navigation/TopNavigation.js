import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from "../screens/Post";
import TopScreen from "../screens/Top";

const Stack = createStackNavigator();

export default function TopNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Hot"
                component={TopScreen}
                options={{ title: "reddit/r/programing", headerTitleAlign: 'center' }}
            />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
}
