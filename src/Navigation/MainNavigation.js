import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

//Navigators
import TabNavigation from './TabNavigation';

const MainNavigation = props => {
    return (
        console.log("Tab navigation"),
        <NavigationContainer>
            <TabNavigation />
        </NavigationContainer>
    )
}

export default MainNavigation;