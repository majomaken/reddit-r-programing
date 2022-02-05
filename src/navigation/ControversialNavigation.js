import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from "../screens/Post";
import ControversialScreen from "../screens/Controversial";

const Stack = createStackNavigator();

export default function ControversialNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Hot"
                component={ControversialScreen}
                options={{ title: "reddit/r/programing" }}
            />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
}
