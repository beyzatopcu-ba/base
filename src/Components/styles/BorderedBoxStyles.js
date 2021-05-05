import { StyleSheet } from 'react-native';

import { Metrics} from '../../StylingConstants';

const styles = StyleSheet.create({
    container: {
        borderRadius: Metrics.borderRadiusStandard,
        borderWidth: 1,
    },
    normalHeight: {
        height: Metrics.boxNormalHeight,
    },
    tallHeight: {
        height: Metrics.normalHeight,
    },
});

export default styles;