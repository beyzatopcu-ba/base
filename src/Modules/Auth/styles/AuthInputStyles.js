import { StyleSheet } from 'react-native';
import {Metrics, Fonts} from '../../../StylingConstants';
import { cn } from '../../Theming';

const styles = (Colors) => StyleSheet.create({
    inputContainer: {
        flex:1,
        paddingHorizontal: Metrics.textMargin,
        backgroundColor: Colors[cn.auth.inputBackground],
    },
    input: {
        flex:1,
        fontSize: Fonts.size(18),
        fontFamily: Fonts.type.regular,
        color: Colors[cn.auth.inputText],
    },
});

export default styles;
