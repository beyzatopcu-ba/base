import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white',
    },
    container: {
        flex: 1,
        padding: Metrics.marginHorizontal,
    },
    flatList: {
        flexGrow: 1,
        flexShrink: 1,
    },
    buttonContainer: {
        alignItems: 'center',     
    },
    touchable: {
        backgroundColor: 'orange',
        borderRadius: Metrics.width * 0.2,
        justifyContent: 'center',
        alignItems: 'center',
        width: Metrics.width * 0.2,
        height: Metrics.width * 0.2,
    },
    text: {
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size(20),
        color: 'white'
    },
    separator: {
        height: StyleSheet.hairlineWidth,
        backgroundColor: 'rgba(0,0,0,0.5)',
    },
    itemTouchable: {
        marginVertical: Metrics.width * 0.02,
        paddingVertical: Metrics.width * 0.02,
    },
    itemText: {
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size(16),
    },
});
