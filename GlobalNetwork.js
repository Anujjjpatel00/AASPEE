import React, {useEffect} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  BackHandler,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const GlobalNetwork = () => {
  const navigation = useNavigation();

  // Handle Back Button Press to go back to Home Page
  useEffect(() => {
    const backAction = () => {
      navigation.goBack(); // Navigate back to HomePage
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, [navigation]);

  return (
    <ScrollView style={styles.container}>
      {/* Global Network Section */}
      <Text style={styles.sectionTitle}>GLOBAL NETWORK</Text>
      <View style={styles.globalNetworkContainer}>
        {[
          'INDIA',
          'QATAR',
          'UAE',
          'SAUDI ARABIA',
          'SINGAPORE',
          'NIGERIA',
          'BAHRAIN',
          'IRAN',
          'KUWAIT',
          'BANGLADESH',
          'VIETNAM',
          'INDONESIA',
          'OMAN',
        ].map((country, index) => (
          <TouchableOpacity key={index} style={styles.countryButton}>
            <Text style={styles.countryText}>📍 {country}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Map Image */}
      <Image
        source={require('../../assets/images/map.png')}
        style={styles.mapImage}
      />

      {/* Features Section */}
      <View style={styles.featuresContainer}>
        {[
          {
            icon: require('../../assets/images/network-overlay.png'),
            text: 'A diverse range of products',
          },
          {
            icon: require('../../assets/images/support-icon.png'),
            text: '24/7 Support',
          },
          {
            icon: require('../../assets/images/time-icon.png'),
            text: 'Time Effectiveness',
          },
          {
            icon: require('../../assets/images/price-icon.png'),
            text: 'Competitive Prices',
          },
          {
            icon: require('../../assets/images/delivery-icon.png'),
            text: 'Timely Delivery',
          },
        ].map((item, index) => (
          <View key={index} style={styles.featureCard}>
            <Image source={item.icon} style={styles.featureIcon} />
            <Text style={styles.featureText}>{item.text}</Text>
          </View>
        ))}
      </View>

      {/* Reputed Clientele Section */}
      <View style={styles.clienteleContainer}>
        <Image
          source={require('../../assets/images/clientele-icon.png')}
          style={styles.clienteleIcon}
        />
        <Text style={styles.clienteleText}>Reputed Clientele</Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2196F3',
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  globalNetworkContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginBottom: 16,
  },
  countryButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
  },
  countryText: {
    fontSize: 14,
    color: '#000',
    fontWeight: '500',
  },
  mapImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginVertical: 16,
  },
  overlayImage: {
    width: '100%',
    height: 150,
    resizeMode: 'contain',
    marginBottom: 16,
  },
  featuresContainer: {
    marginBottom: 20,
  },
  featureCard: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 12,
  },
  featureIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  featureText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#000',
  },
  clienteleContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  clienteleIcon: {
    width: 40,
    height: 40,
    marginBottom: 8,
    resizeMode: 'contain',
  },
  clienteleText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
});

export default GlobalNetwork;
