import {
    View,
    Text,
    StatusBar,
    StyleSheet,
    TouchableOpacity,
    SafeAreaView,
    ScrollView,
    Image,
  } from 'react-native';
  import React from 'react';
  import {colors} from '../theme/colors';
  import metrics from '../theme/metrics';
  import {fontSize} from '../theme/fonts';
  import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
  import DeviceUiInfo from '../utils/DeviceUiInfo';
  
  const {margins, paddings} = metrics;
  
  const ProductDetail = ({navigation, route}) => {
    const {productDetails} = route.params;
  
    {
      console.log('productDetails', productDetails);
    }
  
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle={'light-content'} backgroundColor={colors.theme} />
  
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Details</Text>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <FontAwesome6
              style={{...paddings.pH15, zIndex: 999}}
              name="arrow-left"
              color={colors.white}
              size={DeviceUiInfo.moderateScale(20)}
            />
          </TouchableOpacity>
        </View>
  
        <ScrollView style={{...paddings.pH15}}>
          <Text style={styles.title}>{productDetails?.title}</Text>
  
          <View style={styles.imageView}>
            <View
              style={{
                borderWidth: 1,
                borderColor: colors.theme,
                borderRadius: 1000,
              }}>
              <Image
                resizeMode="contain"
                source={{uri: productDetails.image}}
                style={styles.image}
              />
            </View>
          </View>
          <Text style={styles.label}>Description</Text>
          <Text style={[styles.subTitle, {...margins.mT10}]}>
            {productDetails?.description}
          </Text>
          <Text
            style={[
              styles.subTitle,
              {color: colors.text_light_gray, fontWeight: '400', ...margins.mT10},
            ]}>
            {productDetails?.longDescription}
          </Text>
  
          <View style={styles.size}>
            <Text style={styles.subTitle}>Available Size :</Text>
            <Text style={styles.subTitle}>{productDetails.size}</Text>
          </View>
  
          <Text style={styles.label}>Features</Text>
  
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              ...margins.mT10,
            }}>
            <View style={styles.dot} />
            <Text
              style={[
                styles.subTitle,
                {fontWeight: '400', ...margins.mL4, color: colors.black},
              ]}>
              Adaptable for numerous applications, including cutting, welding,
              fabrication, construction and even plumbing.
            </Text>
          </View>
  
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              ...margins.mT5,
            }}>
            <View style={styles.dot} />
            <Text
              style={[
                styles.subTitle,
                {fontWeight: '400', ...margins.mL4, color: colors.black},
              ]}>
              Eases operations, ensuring overall ease of product usage.
            </Text>
          </View>
  
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              ...margins.mT5,
            }}>
            <View style={styles.dot} />
            <Text
              style={[
                styles.subTitle,
                {fontWeight: '400', ...margins.mL4, color: colors.black},
              ]}>
              Withstands the challenges of industrial environments, ensuring
              reliable performance.
            </Text>
          </View>
  
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'baseline',
              ...margins.mT5,
            }}>
            <View style={styles.dot} />
            <Text
              style={[
                styles.subTitle,
                {fontWeight: '400', ...margins.mL4, color: colors.black},
              ]}>
              Accommodating pipes of varying sizes and materials.
            </Text>
          </View>
  
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Make Inquiry</Text>
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  };
  
  export default ProductDetail;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    header: {
      paddingTop: DeviceUiInfo.moderateScale(25),
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: colors.theme,
      ...paddings.pV10,
    },
    headerTitle: {
      paddingTop: DeviceUiInfo.moderateScale(15),
      position: 'absolute',
      alignItems: 'center',
      color: colors.white,
      fontWeight: 'bold',
      fontSize: fontSize.f16,
      width: '100%',
      textAlign: 'center',
    },
    title: {
      fontSize: fontSize.f18,
      color: colors.black,
      fontWeight: 'bold',
      ...margins.mT15,
    },
    image: {
      height: DeviceUiInfo.moderateScale(200),
      width: DeviceUiInfo.moderateScale(200),
      alignSelf: 'center',
    },
    imageView: {
      ...margins.mT15,
      height: DeviceUiInfo.moderateScale(250),
      width: DeviceUiInfo.moderateScale(250),
      backgroundColor: colors.white,
      shadowColor: colors.theme,
      elevation: 7,
      borderRadius: 1000,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
    },
    subTitle: {
      fontSize: fontSize.f14,
      color: colors.black,
      fontWeight: '600',
    },
    size: {
      ...margins.mT10,
      flexDirection: 'row',
      justifyContent: 'space-between',
      ...paddings.pH10,
      ...paddings.pV10,
      backgroundColor: '#f8f8f8',
      borderRadius: 5,
    },
    label: {
      fontSize: fontSize.f14,
      color: colors.black,
      fontWeight: '700',
      ...margins.mT15,
    },
    dot: {
      height: DeviceUiInfo.moderateScale(6),
      width: DeviceUiInfo.moderateScale(6),
      borderRadius: 1000,
      backgroundColor: colors.black,
    },
    button: {
      ...margins.mV10,
      backgroundColor: colors.theme,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 8,
      ...paddings.pV12,
    },
    buttonText: {
      fontSize: fontSize.f14,
      color: colors.white,
      fontWeight: '600',
    },
  });
  