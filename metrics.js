import DeviceUiInfo from '../utils/DeviceUiInfo';

const metrics = {
  paddings: {
    // Padding Top
    pT10: {paddingTop: DeviceUiInfo.moderateScale(10)},
    pT12: {paddingTop: DeviceUiInfo.moderateScale(12)},
    pT14: {paddingTop: DeviceUiInfo.moderateScale(14)},
    pT16: {paddingTop: DeviceUiInfo.moderateScale(16)},
    pT20: {paddingTop: DeviceUiInfo.moderateScale(20)},
    pT24: {paddingTop: DeviceUiInfo.moderateScale(24)},
    pT27: {paddingTop: DeviceUiInfo.moderateScale(27)},
    pT30: {paddingTop: DeviceUiInfo.moderateScale(30)},
    pT52: {paddingTop: DeviceUiInfo.moderateScale(52)},
    pT60: {paddingTop: DeviceUiInfo.moderateScale(60)},
    pT64: {paddingTop: DeviceUiInfo.moderateScale(64)},

    // Padding Bottom
    pB8: {paddingBottom: DeviceUiInfo.moderateScale(8)},
    pB10: {paddingBottom: DeviceUiInfo.moderateScale(10)},
    pB12: {paddingBottom: DeviceUiInfo.moderateScale(12)},
    pB14: {paddingBottom: DeviceUiInfo.moderateScale(14)},
    pB25: {paddingBottom: DeviceUiInfo.moderateScale(25)},

    // Padding Left
    pL3: {paddingLeft: DeviceUiInfo.moderateScale(3)},
    pL10: {paddingLeft: DeviceUiInfo.moderateScale(10)},
    pL15: {paddingLeft: DeviceUiInfo.moderateScale(15)},
    pL20: {paddingLeft: DeviceUiInfo.moderateScale(20)},
    pL30: {paddingLeft: DeviceUiInfo.moderateScale(30)},
    pL34: {paddingLeft: DeviceUiInfo.moderateScale(34)},
    pL40: {paddingLeft: DeviceUiInfo.moderateScale(40)},

    // Padding Right
    pR6: {paddingRight: DeviceUiInfo.moderateScale(6)},
    pR10: {paddingRight: DeviceUiInfo.moderateScale(10)},
    pR12: {paddingRight: DeviceUiInfo.moderateScale(12)},
    pR35: {paddingRight: DeviceUiInfo.moderateScale(35)},
    pR50: {paddingRight: DeviceUiInfo.moderateScale(50)},

    // Padding Horizontal
    pH2: {paddingHorizontal: DeviceUiInfo.moderateScale(2)},
    pH7: {paddingHorizontal: DeviceUiInfo.moderateScale(6)},
    pH8: {paddingHorizontal: DeviceUiInfo.moderateScale(8)},
    pH10: {paddingHorizontal: DeviceUiInfo.moderateScale(10)},
    pH12: {paddingHorizontal: DeviceUiInfo.moderateScale(12)},
    pH13: {paddingHorizontal: DeviceUiInfo.moderateScale(13)},
    pH15: {paddingHorizontal: DeviceUiInfo.moderateScale(15)},
    pH16: {paddingHorizontal: DeviceUiInfo.moderateScale(16)},
    pH18: {paddingHorizontal: DeviceUiInfo.moderateScale(18)},
    pH20: {paddingHorizontal: DeviceUiInfo.moderateScale(20)},
    pH24: {paddingHorizontal: DeviceUiInfo.moderateScale(24)},
    pH34: {paddingHorizontal: DeviceUiInfo.moderateScale(34)},
    pH50: {paddingHorizontal: DeviceUiInfo.moderateScale(50)},
    pH72: {paddingHorizontal: DeviceUiInfo.moderateScale(72)},

    // Padding Vertical
    pV2: {paddingVertical: DeviceUiInfo.moderateScale(2)},
    pV4: {paddingVertical: DeviceUiInfo.moderateScale(4)},
    pV6: {paddingVertical: DeviceUiInfo.moderateScale(6)},
    pV8: {paddingVertical: DeviceUiInfo.moderateScale(8)},
    pV9: {paddingVertical: DeviceUiInfo.moderateScale(9)},
    pV10: {paddingVertical: DeviceUiInfo.moderateScale(10)},
    pV12: {paddingVertical: DeviceUiInfo.moderateScale(12)},
    pV13: {paddingVertical: DeviceUiInfo.moderateScale(13)},
    pV14: {paddingVertical: DeviceUiInfo.moderateScale(14)},
    pV15: {paddingVertical: DeviceUiInfo.moderateScale(15)},
    pV16: {paddingVertical: DeviceUiInfo.moderateScale(16)},
    pV18: {paddingVertical: DeviceUiInfo.moderateScale(18)},
    pV40: {paddingVertical: DeviceUiInfo.moderateScale(40)},

    // Padding
    p5: {padding: DeviceUiInfo.moderateScale(5)},
    p6: {padding: DeviceUiInfo.moderateScale(6)},
    p8: {padding: DeviceUiInfo.moderateScale(8)},
    p10: {padding: DeviceUiInfo.moderateScale(10)},
    p15: {padding: DeviceUiInfo.moderateScale(15)},
    p18: {padding: DeviceUiInfo.moderateScale(18)},
    p20: {padding: DeviceUiInfo.moderateScale(20)},
    p30: {padding: DeviceUiInfo.moderateScale(30)},
  },

  margins: {
    // Margin Top
    mT3: {marginTop: DeviceUiInfo.moderateScale(3)},
    mT5: {marginTop: DeviceUiInfo.moderateScale(5)},
    mT6: {marginTop: DeviceUiInfo.moderateScale(6)},
    mT8: {marginTop: DeviceUiInfo.moderateScale(8)},
    mT10: {marginTop: DeviceUiInfo.moderateScale(10)},
    mT12: {marginTop: DeviceUiInfo.moderateScale(12)},
    mT14: {marginTop: DeviceUiInfo.moderateScale(14)},
    mT15: {marginTop: DeviceUiInfo.moderateScale(15)},
    mT16: {marginTop: DeviceUiInfo.moderateScale(16)},
    mT18: {marginTop: DeviceUiInfo.moderateScale(18)},
    mT20: {marginTop: DeviceUiInfo.moderateScale(20)},
    mT24: {marginTop: DeviceUiInfo.moderateScale(24)},
    mT28: {marginTop: DeviceUiInfo.moderateScale(28)},
    mT30: {marginTop: DeviceUiInfo.moderateScale(30)},
    mT36: {marginTop: DeviceUiInfo.moderateScale(36)},
    mT40: {marginTop: DeviceUiInfo.moderateScale(40)},
    mT45: {marginTop: DeviceUiInfo.moderateScale(45)},
    mT52: {marginTop: DeviceUiInfo.moderateScale(52)},
    mT54: {marginTop: DeviceUiInfo.moderateScale(54)},
    mT65: {marginTop: DeviceUiInfo.moderateScale(60)},

    // Margin Bottom
    mB5: {marginBottom: DeviceUiInfo.moderateScale(5)},
    mB8: {marginBottom: DeviceUiInfo.moderateScale(8)},
    mB10: {marginBottom: DeviceUiInfo.moderateScale(10)},
    mB12: {marginBottom: DeviceUiInfo.moderateScale(12)},
    mB16: {marginBottom: DeviceUiInfo.moderateScale(16)},
    mB20: {marginBottom: DeviceUiInfo.moderateScale(20)},

    // Margin Left
    mL6: {marginLeft: DeviceUiInfo.moderateScale(6)},
    mL4: {marginLeft: DeviceUiInfo.moderateScale(4)},
    mL5: {marginLeft: DeviceUiInfo.moderateScale(5)},
    mL8: {marginLeft: DeviceUiInfo.moderateScale(8)},
    mL10: {marginLeft: DeviceUiInfo.moderateScale(10)},
    mL12: {marginLeft: DeviceUiInfo.moderateScale(12)},
    mL15: {marginLeft: DeviceUiInfo.moderateScale(15)},
    mL17: {marginLeft: DeviceUiInfo.moderateScale(17)},
    mL20: {marginLeft: DeviceUiInfo.moderateScale(20)},
    mL25: {marginLeft: DeviceUiInfo.moderateScale(25)},
    mL30: {marginLeft: DeviceUiInfo.moderateScale(30)},
    mL32: {marginLeft: DeviceUiInfo.moderateScale(32)},
    mL35: {marginLeft: DeviceUiInfo.moderateScale(35)},
    mL50: {marginLeft: DeviceUiInfo.moderateScale(50)},

    // Margin Right
    mR3: {marginRight: DeviceUiInfo.moderateScale(3)},
    mR5: {marginRight: DeviceUiInfo.moderateScale(5)},
    mR8: {marginRight: DeviceUiInfo.moderateScale(8)},
    mR10: {marginRight: DeviceUiInfo.moderateScale(10)},
    mR12: {marginRight: DeviceUiInfo.moderateScale(12)},
    mR15: {marginRight: DeviceUiInfo.moderateScale(15)},

    // Margin Horizontal
    mH3: {marginHorizontal: DeviceUiInfo.moderateScale(3)},
    mH4: {marginHorizontal: DeviceUiInfo.moderateScale(4)},
    mH5: {marginHorizontal: DeviceUiInfo.moderateScale(5)},
    mH7: {marginHorizontal: DeviceUiInfo.moderateScale(7)},
    mH10: {marginHorizontal: DeviceUiInfo.moderateScale(10)},
    mH12: {marginHorizontal: DeviceUiInfo.moderateScale(12)},
    mH15: {marginHorizontal: DeviceUiInfo.moderateScale(15)},
    mH18: {marginHorizontal: DeviceUiInfo.moderateScale(18)},
    mH20: {marginHorizontal: DeviceUiInfo.moderateScale(20)},
    mH72: {marginHorizontal: DeviceUiInfo.moderateScale(72)},

    // Margin Vertical
    mV3: {marginVertical: DeviceUiInfo.moderateScale(3)},
    mV5: {marginVertical: DeviceUiInfo.moderateScale(5)},
    mV8: {marginVertical: DeviceUiInfo.moderateScale(8)},
    mV10: {marginVertical: DeviceUiInfo.moderateScale(10)},
    mV15: {marginVertical: DeviceUiInfo.moderateScale(15)},
    mV16: {marginVertical: DeviceUiInfo.moderateScale(16)},
    mV20: {marginVertical: DeviceUiInfo.moderateScale(20)},
    mV22: {marginVertical: DeviceUiInfo.moderateScale(22)},
    mV25: {marginVertical: DeviceUiInfo.moderateScale(25)},
  },
};

export default metrics;
