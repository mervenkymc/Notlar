import React, { useRef, useState } from 'react';
import { View, Text, FlatList, navigate, Alert, TouchableOpacity, TextInput } from 'react-native';
import Modal from 'react-native-modal';

import { useDispatch, useSelector } from 'react-redux';
import styles from './Styles/NoteScreenStyles';
import { addNoteAC, noteListSelector } from '../../Redux/NoteRedux';




const NoteScreen = props => {
    const {navigation} = props;

    console.log('notescreen içi')

    const [isModalVisible, setIsModalVisible] = useState(false);

    const refNoteTitle = useRef('');
    const noteList = useSelector(noteListSelector);
    const dispatch = useDispatch();

    const _onPress_ModalBackdrop = () => {
        setIsModalVisible(false);
    }

    const _onPress_OpenModal = () => {
        setIsModalVisible(true);
    }

    const _onPress_AddNote = () => {
        setIsModalVisible(false);
        const note = {
            title: refNoteTitle.current,
            content: "",
            date: "21.02.2020",
            color: 'pink',
        };
        dispatch(addNoteAC(note))
    }

    const _onChangeText_NoteTitle = text => {
        refNoteTitle.current = text;
    }

    const _renderNoteItem = ({ item }) => {
        console.log('rendernoteitem içi');
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
                <TouchableOpacity onPress={_onPress_OpenModal}>
                    <Text>Yeni Ekle</Text>
                </TouchableOpacity>
                <FlatList
                    style={{ flex: 1 }}
                    data={noteList}
                    renderItem={_renderNoteItem}
                    keyExtractor={item => item.id}
                />
            </View>
            <Modal
                isVisible={isModalVisible}
                // arkaplana tıklayınca fonksiyonu
                onBackdropPress={_onPress_ModalBackdrop}
                style={styles.modal}
                // açılış animasyonu
                animationIn="fadeIn"
                // kapanış animasyonu
                animationOut="fadeOut"
            >
                <View style={styles.modalContentContainer}>
                    <TextInput 
                        placeholder="Not başlığı"
                        onChangeText={_onChangeText_NoteTitle}
                    />
                    <TouchableOpacity onPress={_onPress_AddNote}>
                        <Text>Ekle</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </>
    )
};
export default NoteScreen;