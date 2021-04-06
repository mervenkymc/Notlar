import React from 'react';
import {View, FlatList, Text} from 'react-native';

import styles from '../Styles/NoteSelectionModalStyles';

const dummyCityList = [
    {
        cityId: 1,
        cityName: 'İstanbul',
    },
    {
        cityId: 2,
        cityName: 'İzmir',
    },
    {
        cityId: 3,
        cityName: 'Ankara',
    },
]

const NoteSelectionModal = props => {

    const _renderNoteItem = ({item}) => {
        return (
            <Text style={styles.cityNameText}>{item.cityName}</Text>
        )
    }

    const NoteListSeparator = props => {
        return (
            <View style={styles.separator} />
        )
    }

    return (
        <View style={styles.container}>
            <FlatList 
                data={dummyCityList}
                renderItem={_renderNoteItem}
                keyExtractor={(item,index) => item.cityId}
                ItemSeparatorComponent={NoteListSeparator}
            />
        </View>
    );
}

export default NoteSelectionModal;