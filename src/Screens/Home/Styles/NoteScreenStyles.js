import {StyleSheet} from 'react-native';
import { Metrics } from '../../../Constants';

const styles = StyleSheet.create({
   container: {
        flex:1,
        paddingHorizontal: Metrics.marginHorizontal,
        backgroundColor: 'white',
    },
    citySelectionButtonContainer: {
        paddingVertical: Metrics.width * 0.05,
    },
    titleContainer: {

    },
    flatListContainer: {
        flexGrow: 1,
        paddingTop: Metrics.width * 0.05,
    },
    flatList: {
        flex: 1,
    },
    columnWrapperStyle: {
        // backgroundColor: 'yellow',
        justifyContent: 'space-between',
        paddingBottom: Metrics.width * 0.03,
    },
    contentContainerStyle: {
    },
    modal: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    noteContainer: {
        marginVertical: Metrics.width * 0.02,
        borderLeftWidth: Metrics.width * 0.01,
        borderRadius: Metrics.width * 0.005,
        paddingLeft: Metrics.width * 0.03,
    },
    noteTopContainer: {
        flexDirection: 'row',
    },
    noteBottomContainer: {

    },
    titleText: {
        flexGrow: 1,
        flexShrink: 1,
    },
    dateText: {

    },
    contentText: {

    }
});

const getNoteContainerStyles = color => {
    return [
        styles.noteContainer,
        { borderColor: color },
    ]
}

export default {
    ...styles,
    getNoteContainerStyles,
};