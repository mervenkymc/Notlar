import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


//Navigators
import NoteStackNavigator from './NoteStackNavigator';
import ProfileStackNavigator from './ProfileStackNavigator';

import TabbarOptions from './Commons/TabbarOptions';

const Tabs = createBottomTabNavigator();

const TabNavigation = props => {
    return (
        console.log("tabs.screen navigation"),
        <Tabs.Navigator 
        tabBarOptions={TabbarOptions}
        >
            <Tabs.Screen
            name="note-stack"
            component={NoteStackNavigator}
            options={{
                title: "Notlarım",
            }}
            />
            <Tabs.Screen
            name="profile-stack"
            component={ProfileStackNavigator}
            options={{
                title: "Hesabım",
            }}
            />
        </Tabs.Navigator>
    )
};

export default TabNavigation;