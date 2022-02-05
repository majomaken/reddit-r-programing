import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from "react-native-vector-icons/FontAwesome5"
import HotNavigation from './HotNavigation';
import NewNavigation from './NewNavigation';
import TopNavigation from './TopNavigation';
import ControversialNavigation from './ControversialNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="New"
                component={NewNavigation}
                options={{
                    tabBarLabel: "New",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='newspaper' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Top" component={TopNavigation}
                options={{
                    tabBarLabel: "Top",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='sort-amount-up' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="Controversial" component={ControversialNavigation}
                options={{
                    tabBarLabel: "Controversial",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='comment-slash' color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen
                name="Hot"
                component={HotNavigation}
                options={{
                    tabBarLabel: "Hot",
                    tabBarIcon: ({ color, size }) => (
                        <Icon name='hotjar' color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    );
}
