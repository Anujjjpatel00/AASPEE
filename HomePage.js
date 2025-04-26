import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  StatusBar,
  SafeAreaView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import DeviceUiInfo from '../utils/DeviceUiInfo';
import metrics from '../theme/metrics';
import {colors} from '../theme/colors';
import {fontSize} from '../theme/fonts';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const {margins, paddings} = metrics;

const HomePage = () => {
  const navigation = useNavigation();

  // Sample data for scrolling images
  const imageData = [
    {
      id: 1,
      image:
        'https://www.aaspee.com/wp-content/uploads/2023/06/Internal-Pipe-Pneumatic-Clamp-%E2%80%93-Non-Self.png',
      title: 'INTERNAL PIPE PNEUMATIC CLAMP - NON-SELF',
      description:
        'Aaspee Machinery offers a wide range of Pipe Welding Pneumatic Clamp.',
      longDescription:
        'A trusted internal pneumatic lineup clamp non-self manufacturer, and exporter we have a spacious warehouse that is well-designed and properly maintained to safely store the pumps. Once we understand your industrial needs, we offer quick and timely delivery of the product.',
      size: '6″ to 26″ (Non-Self)',
    },
    {
      id: 2,
      image:
        'https://www.aaspee.com/wp-content/uploads/2023/09/cs-pipe-welding-equipment-list.png',
      title: 'INTERNAL PIPE PNEUMATIC CLAMP – SELF',
      description:
        'Aaspee Machinery offers a wide range of Pipe Welding Pneumatic Clamp.',
      longDescription:
        'Contractors use a pneumatic internal line up clamp for pipeline construction in the oil and gas industry. Pneumatic Internal line up clamps are the most used equipment in such an industry. While Aaspee Machinery offer a standard pump, we may also customize one for you based on your industrial needs.',
      size: '16 & Above (Self)',
    },
    {
      id: 3,
      image:
        'https://www.aaspee.com/wp-content/uploads/2023/06/Internal-Pipe-Pneumatic-Clamp-With-Copper-Backup.png',
      title: 'INTERNAL PIPE PNEUMATIC CLAMP WITH COPPER BACKUP',
      description:
        'The AASPEE MACHINERY pipe welding pneumatic clamp copper back up assures a rapid accurate alignment.',
      longDescription:
        'The internal pipe pneumatic clamp plays a crucial role in ensuring the integrity and safety of pipelines. Its design aligns and secures pipe joints accurately, facilitating seamless welding and construction. Industries such as Oil, Gas, Pharmacy, and others that rely on pipelines use these clamps extensively.',
      size: '10” to 48”',
    },
    {
      id: 4,
      image:
        'https://www.aaspee.com/wp-content/uploads/2023/06/INTERNAL-PIPE-MECHANICAL-CLAMP.png',
      title: 'INTERNAL PIPE MECHANICAL CLAMP',
      description:
        'Aaspee Machinery is a leading manufacturer & suppliers of Internal Pipe Mechanical Clamp.',
      longDescription:
        'The mechanical internal pipe clamp is an external opening mechanism, specially designed to apply a radial force through the pipe. When pipes undergo welding, this equipment enables two pipe ends to be connected, and aligned and both the pipes are held in the same axis. \nWhile the mechanical clamp is majorly used for pipe operations such as bending, welding or moulding, we’ll suggest you equipment based on your unique',
      size: '10” to 48”',
    },
    {
      id: 5,
      image:
        'https://www.aaspee.com/wp-content/uploads/2023/06/Internal-Pipe-Hydraulic-Clamp.png',
      title: 'Internal Pipe Hydraulic Clamp',
      description:
        "Aaspee Machinery's Internal Pipe Hydraulic Clamp are custom-built, offering a range of solutions.",
      longDescription:
        'Aaspee Machinery’s Internal Pipe Hydraulic Clamp are custom-built, offering a range of solutions for accurate internal alignment.\nWe are a famous manufacturer, exporter, and wholesaler of quality Internal Pipe Hydraulic Clamp. These products are admired for their super quality and strength. \nAaspee Machinery’s large Internal Pipe Hydraulic Clamp is built tough to withstand the harshest conditions. This large hydraulic alignment clamp leaves the gap unobstructed for a full stringer bead. \nWe have clamps that have different specific pipe IDs & standards with a 12-meter reach rod, hook, and handle.',
      size: '16” to 64”',
    },
    {
      id: 6,
      image:
        'https://www.aaspee.com/wp-content/uploads/2023/06/Pipe-Line-up-Clamp.png',
      title: 'PIPE LINE-UP CLAMP (SCOOTNY) 6″ TO 10″',
      description:
        'The Aaspee Machinery’s Pipe Line-up Clamp (SCOOTNY) are custom built, offering a range of solutions.',
      longDescription:
        'The Aaspee Machinery’s Pipe Line-up Clamp (SCOOTNY) are custom built, offering a range of solutions for accurate internal alignment. These internal clamps are manufactured for precision and are field proven to be tough and durable. Pipe Line up Clamp (SCOOTNY) available 6” to 10”. Our offered Pipe Line up Clamp is great solution for small size pipeline. Pipe Line up Clamp comes with optional copper or stainless steel and comes standard with carbon steel.',
      size: '6” to 10”',
    },
  ];

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductDetail', {
          productDetails: item,
        });
      }}
      style={styles.productItem}>
      <Image
        source={{uri: item.image}}
        style={styles.productImage}
        resizeMode="contain"
      />
      <View style={{width: '65%', ...margins.mL5}}>
        <Text numberOfLines={2} style={styles.productTitle}>
          {item.title}
        </Text>

        <Text numberOfLines={1} style={styles.productSubTitle}>
          {item.description}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('ProductDetail', {
            productDetails: item,
          });
        }}
        style={styles.rightArrow}>
        <FontAwesome
          name="angle-right"
          color={colors.white}
          size={DeviceUiInfo.moderateScale(20)}
        />
      </TouchableOpacity>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={'light-content'}
        animated
        backgroundColor={colors.theme}
      />

      {/* Header with Logo & Menu Button */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.toggleDrawer()} // Open side menu
        >
          <Ionicons
            name="menu"
            color="white"
            size={DeviceUiInfo.moderateScale(25)}
          />
        </TouchableOpacity>

        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </View>

      {/* Horizontal Scrolling Product Section */}
      <View style={styles.productContainer}>
        <Text style={styles.title}>
          Cs Pipe Welding Equipment Manufacturer in India
        </Text>
        <FlatList
          style={{...paddings.pB10}}
          data={imageData}
          showsHorizontalScrollIndicator={false}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.theme,
    ...paddings.pH15,
    ...paddings.pT20,
  },
  logo: {
    width: DeviceUiInfo.moderateScale(100),
    height: DeviceUiInfo.moderateScale(50),
  },

  title: {
    fontSize: fontSize.f16,
    fontWeight: 'bold',
    ...margins.mB10,
    ...margins.mH5,
  },
  productContainer: {
    ...margins.mT15,
    ...paddings.pH10,
  },
  productItem: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f8f8f8',
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.5)',
    elevation: 6,
    ...margins.mH5,
    ...margins.mV5,
    ...paddings.pV10,
    ...paddings.pH10,
  },
  productImage: {
    width: DeviceUiInfo.moderateScale(90),
    height: DeviceUiInfo.moderateScale(80),
  },
  productTitle: {
    fontSize: fontSize.f14,
    fontWeight: 'bold',
  },
  productSubTitle: {
    ...margins.mT3,
    fontSize: fontSize.f14,
    color: colors.text_light_gray,
  },
  rightArrow: {
    backgroundColor: colors.theme,
    borderRadius: 1000,
    height: DeviceUiInfo.moderateScale(27),
    width: DeviceUiInfo.moderateScale(27),
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default HomePage;
