import React, { useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Modal from 'react-native-modal';


import styles from './Styles/NoteScreenStyles';
import NoteSelectionModal from './Components/NoteSelectionModal';


const notes = [
    {
        id: 1,
        title: "Dolore adipisicing dolor",
        content: "Sunt tempor eu tempor pariatur enim. Irure pariatur dolore magna voluptate id nisi nostrud consequat. Elit consequat anim aliquip in Lorem do officia magna veniam non aliquip laborum voluptate. Occaecat amet in exercitation amet tempor duis magna enim ipsum irure cillum. Dolore deserunt quis aliquip labore excepteur velit dolor ipsum non. Et cupidatat est excepteur duis excepteur nisi excepteur.",
        color: "#BFFF80",
        date: '05.12.2020',
    },
    {
        id: 2,
        title: "Veniam Lorem aute nulla ex.",
        content: "Sunt tempor eu tempor",
        color: "#FF6CA5",
        date: '09.06.2021',
    },
    {
        id: 3,
        title: "Aliquip veniam aliqua exercitation eiusmod cillum occaecat.",
        content: "Proident excepteur sit magna veniam nulla mollit elit eiusmod. Voluptate reprehenderit nostrud commodo occaecat cillum incididunt cillum velit consectetur incididunt fugiat.",
        color: "#80FFD8",
        date: '01.07.2019',
    },
    {
        id: 4,
        title: "Voluptate reprehenderit nostrud",
        content: "Proident.",
        color: "#FFC834",
        date: '13.10.2020',
    },
    {
        id: 5,
        title: "Dolore adipisicing dolor",
        content: "Sunt tempor eu tempor pariatur enim. Irure pariatur dolore magna voluptate id nisi nostrud consequat. Elit consequat anim aliquip in Lorem do officia magna veniam non aliquip laborum voluptate. Occaecat amet in exercitation amet tempor duis magna enim ipsum irure cillum. Dolore deserunt quis aliquip labore excepteur velit dolor ipsum non. Et cupidatat est excepteur duis excepteur nisi excepteur.",
        color: "#FF6CA5",
        date: '27.05.2020',
    },
];

const NoteScreen = props => {

    const [isModalVisible, setIsModalVisible] = useState(false);


    const _onPress_ModalBackdrop = () => {
        setIsModalVisible(false);
    }

    const _renderNoteItem = ({ item }) => {
        return (
            <View style={styles.getNoteContainerStyles(item.color)}>
                <View style={styles.noteTopContainer}>
                    <Text
                        style={styles.titleText}
                        numberOfLines={1}
                    >{item.title}</Text>
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <View style={styles.noteBottomContainer}>
                    <Text
                        numberOfLines={1}
                        style={styles.contentText}>{item.content}</Text>
                </View>
            </View>
        );
    }

    return (
        console.log("notlarım sayfası"),
        <>
            <View style={styles.container}>
                <FlatList
                    style={{ flex: 1 }}
                    data={notes}
                    renderItem={_renderNoteItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <Modal
                isVisible={isModalVisible}
                onBackdropPress={_onPress_ModalBackdrop}
                style={styles.modal}
                animationIn="bounceIn"
                animationOut="bounceOut"
                animationInTiming={1000}
                animationOutTiming={1000}
                backdropTransitionInTiming={1000}
                backdropColor={'pink'}
                backdropOpacity={0.8}
            >
                <NoteSelectionModal />
            </Modal>
        </>
    )
};
export default NoteScreen;