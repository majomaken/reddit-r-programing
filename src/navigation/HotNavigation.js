import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from "../screens/Post";
import HotScreen from "../screens/Hot";

const Stack = createStackNavigator();

export default function HotNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Hot"
                component={HotScreen}
                options={{ title: "reddit/r/programing" }}
            />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
}
