import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

export default class DeviceUiInfo {
  static platform = Platform.OS;
  static screenSize = {width, height};
  static guidelineBaseWidth = 375;
  static guidelineBaseHeight = 812;
  static getPlatform() {
    return Platform.OS;
  }

  static scale(size) {
    return (this.screenSize.width / this.guidelineBaseWidth) * size;
  }

  static verticalScale(size) {
    return (this.screenSize.height / this.guidelineBaseHeight) * size;
  }

  static moderateScale(size, factor = 0.5) {
    const scaleFactor = Math.min(
      this.screenSize.width / this.guidelineBaseWidth,
      this.screenSize.height / this.guidelineBaseHeight,
    );
    return size + (scaleFactor * size - size) * factor;
  }
}
