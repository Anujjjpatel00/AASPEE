import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const OnsiteServices = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* ESC Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.escButton}>
        <Text style={styles.escText}>ESC</Text>
      </TouchableOpacity>

      {/* Header Section */}
      <View style={styles.header}>
        <Text style={styles.headerText}>
          ONSITE SERVICES OF AASPEE MACHINERY
        </Text>
        <View style={styles.headerLine} />
      </View>

      {/* Description Section */}
      <View style={styles.content}>
        <Text style={styles.paragraph}>
          AASPEE Machinery provides worldwide onsite service either made
          equipment by AASPEE or other companies. AASPEE Machinery has
          established itself as an industry-leading onsite service provider with
          excellent service delivery and manufacturing capability. AASPEE
          Machinery is uniquely capable of responding to your project, wherever
          it is.
        </Text>

        <Text style={styles.paragraph}>
          We understand that your project may be too large or cumbersome to be
          bought to the shop or that it needs to be tested in place. We can
          access your machinery or parts at your preferred location, if possible
          repairing them onsite or coordinating shop and field work to ensure a
          comprehensive solution.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  escButton: {
    padding: 10,
    backgroundColor: '#1a73e8',
    borderRadius: 5,
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 10,
  },
  escText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    backgroundColor: '#238EE6', // ✅ Changed to solid color
    width: '100%',
    height: 180,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  headerLine: {
    width: 60,
    height: 2,
    backgroundColor: '#ffffff',
    marginTop: 6,
  },
  content: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  paragraph: {
    fontSize: 14,
    color: '#444',
    lineHeight: 22,
    marginBottom: 12,
    textAlign: 'justify',
  },
});

export default OnsiteServices;
