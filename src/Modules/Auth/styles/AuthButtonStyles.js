import {StyleSheet} from 'react-native';
import {Fonts} from '../../../StylingConstants';
import { cn } from '../../Theming';

const styles = (Colors) => StyleSheet.create({
    touchable: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: Fonts.type.bold,
        fontSize: Fonts.size(18),
        color: Colors[cn.auth.coloredButtonText],
    },
});

export default styles;
