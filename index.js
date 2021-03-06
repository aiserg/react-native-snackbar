import { NativeModules, processColor } from 'react-native';

export default {
  ...NativeModules.RNSnackbar,
  show: (options) => {
    const action = options.action ? options.action.onPress : () => {};

    if (options.action && options.action.color) {
      options.action.color = processColor(options.action.color);
    }
    NativeModules.RNSnackbar.show(options, action);
  },
}
