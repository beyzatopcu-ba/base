import { StyleSheet } from 'react-native';
import { Fonts, Metrics } from '../../../StylingConstants';

export default StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: 'white'
    },
    container: {
        flex: 1,
        padding: Metrics.marginHorizontal,
    },
    scroll: {
        flexGrow: 1,
        flexShrink: 1,
    },
    inputContainer: {
        borderRadius: Metrics.borderRadiusStandard,
        backgroundColor: 'rgba(0,0,0,0.07)',
        paddingVertical: Metrics.width * 0.03,
        paddingHorizontal: Metrics.width * 0.04,
        marginBottom: Metrics.width * 0.03,
    },
    input: {
        padding: 0,
        fontFamily: Fonts.type.medium,
        fontSize: Fonts.size(14),
        color: 'black'
    },
    touchable: {
        backgroundColor: 'orange',
        borderRadius: Metrics.borderRadiusStandard,
        height: Metrics.width * 0.12,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontFamily: Fonts.type.semibold,
        fontSize: Fonts.size(20),
        color: 'white',
    },
});
