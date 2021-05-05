import Metrics from './Metrics';

const type = {
  light: 'Quicksand-Light',
  regular: 'Quicksand-Regular',
  medium: 'Quicksand-Medium',
  semibold: 'Quicksand-SemiBold',
  bold: 'Quicksand-Bold',
  logo: 'Overlock-Black',
};

const step = Metrics.width * 0.0025;
const zero = Metrics.width * 0.002;

const size = punto => zero + step * punto;

export default {
  type,
  size,
};
