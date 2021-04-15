import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import NoteScreen from '../Screens/Home/NoteScreen';

const NoteStack = createStackNavigator();

const NoteStackNavigation = props => {
    console.log("notescreen navigation");
    return (
        <NoteStack.Navigator>
            <NoteStack.Screen
                name="note-screen"
                component={NoteScreen}
                options={{
                    title: 'Notlarım',
                }}
            />
        </NoteStack.Navigator>
    )
}

export default NoteStackNavigation;