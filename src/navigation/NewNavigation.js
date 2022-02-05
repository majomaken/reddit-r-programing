import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PostScreen from "../screens/Post";
import NewScreen from "../screens/New";

const Stack = createStackNavigator();

export default function NewNavigation() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Hot"
                component={NewScreen}
                options={{ title: "reddit/r/programing" }}
            />
            <Stack.Screen name="Post" component={PostScreen} />
        </Stack.Navigator>
    );
}
