import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from '../Screens/Home/ProfileScreen';

const ProfileStack = createStackNavigator();

const ProfileStackNavigation = () => {
    return (
        <ProfileStack.Navigator>
            <ProfileStack.Screen 
            name="profile-screen"
            component={ProfileScreen}
            options={{
                title: 'Hesabım',
            }}
            />
        </ProfileStack.Navigator>
    )
}

export default ProfileStackNavigation;