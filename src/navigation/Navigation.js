import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HotNavigation from './HotNavigation';
import NewNavigation from './NewNavigation';
import TopNavigation from './TopNavigation';
import ControversialNavigation from './ControversialNavigation';

const Tab = createBottomTabNavigator();

export default function Navigation() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Hot" component={HotNavigation} />
            <Tab.Screen name="New" component={NewNavigation} />
            <Tab.Screen name="Controversial" component={ControversialNavigation} />
            <Tab.Screen name="Top" component={TopNavigation} />
        </Tab.Navigator>
    );
}
