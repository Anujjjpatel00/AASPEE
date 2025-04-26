import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from 'react-native';

const AboutCompany = ({navigation}) => {
  useEffect(() => {
    // Scroll to the top when navigating here from "Read More"
    const unsubscribe = navigation.addListener('focus', () => {
      scrollRef?.current?.scrollTo({y: 0, animated: true});
    });

    return unsubscribe;
  }, [navigation]);

  const scrollRef = React.useRef(null);

  return (
    <ScrollView style={styles.container} ref={scrollRef}>
      {/* ESC Button */}
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={styles.escButton}>
        <Text style={styles.escText}>ESC</Text>
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.pageTitle}>ABOUT COMPANY</Text>

      {/* Logo */}
      <Image
        source={require('../../assets/images/logo.png')}
        style={styles.logo}
        resizeMode="contain"
      />

      {/* First Section */}
      <View style={styles.section}>
        <Image
          source={require('../../assets/images/main-image.png')}
          style={styles.fullImage}
          resizeMode="cover"
        />
        <Text style={styles.subText}>
          Established in <Text style={styles.highlight}>2019</Text>
        </Text>
        <Text style={styles.heading}>WELCOME TO AASPEE MACHINERY</Text>
        <Text style={styles.content}>
          Since its inception in 2001, Aaspee Machinery established in the year
          2019, Aaspee Machinery Private Limited, serving our customers by
          manufacturing and supplying high-quality Oil and Gas pipeline
          equipment in India and abroad. Our offered product range consists of
          CS Pipe Welding Equipment, DSS Welding Equipment with Purging Setup,
          Pipe Lowering & Lifting Equipment, Pipe Roller & Rotator, Pipe Bending
          Equipment, Pipe Cutting & Line Pipe Plant Equipment, Pipe Coating
          Equipment, and other Engineering Components.
        </Text>
      </View>

      {/* Second Section */}
      <View style={styles.section}>
        <Image
          source={require('../../assets/images/top-image.jpg')}
          style={styles.fullImage}
          resizeMode="cover"
        />
        <Text style={styles.heading}>OUR MISSION</Text>
        <Text style={styles.content}>
          Aaspee Machinery Private Limited believes in building lasting
          relationships with employees and vendors. Our success is directly
          attributable to its employees and our partnerships with customers,
          vendors, and alliance partners.
        </Text>
      </View>

      {/* Third Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>OUR VALUES</Text>
        <Text style={styles.content}>
          - We always believe that your business deserves a better extrusion
          line.{'\n'}- It provides customers with quicker response and
          high-quality services.{'\n'}- A focused approach to customers' needs
          and business opportunities available in the global market.{'\n'}-
          Creative application of technology.{'\n'}- Provide converting
          solutions that allow our customers to compete globally and grow
          effectively in today's competitive world.{'\n'}- Modular, flexible,
          and versatile design.{'\n'}- Meet our quality objectives in each area
          of operation and stay committed to monitoring our performance and
          continually improve the effectiveness of our quality management
          system.
        </Text>
      </View>

      {/* Fourth Section */}
      <View style={styles.section}>
        <Image
          source={require('../../assets/images/team-image.png')}
          style={styles.fullImage}
          resizeMode="cover"
        />
        <Text style={styles.heading}>OUR TEAM</Text>
        <Text style={styles.content}>
          Owing to the efforts of our skilled professionals, we have been
          constantly involved in offering a qualitative assortment of products.
          We have hired a team of adroit and dedicated professionals, who work
          together in close coordination with clients in order to meet their
          respective demands.
        </Text>
      </View>

      {/* Fifth Section */}
      <View style={styles.section}>
        <Text style={styles.heading}>WHY CHOOSE US?</Text>
        <Text style={styles.content}>
          We are known in the industry as an eminent organization engaged in
          manufacturing and wholesaling a broad array of Oil and Gas Pipeline
          Equipment. The offered Oil and Gas Pipeline equipment is known in the
          industry for its high resistance to damage, longer service life, and
          smooth performance.
        </Text>
        <Text style={styles.content}>
          To ensure the presence of these features in our offered array, we make
          use of high-class raw material. Our company takes pride in providing
          Pipeline Equipment of superior quality at very affordable rates.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  escButton: {
    position: 'absolute',
    top: 15,
    right: 20,
    padding: 8,
    backgroundColor: '#1a73e8',
    borderRadius: 5,
    zIndex: 10,
  },
  escText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a73e8',
    textAlign: 'center',
    marginTop: 50,
    marginBottom: 10,
  },
  logo: {
    width: 200,
    height: 60,
    alignSelf: 'center',
    marginBottom: 20,
  },
  section: {
    marginBottom: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  fullImage: {
    width: '100%',
    height: 390,
    borderRadius: 10,
    marginBottom: 10,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1a73e8',
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: '#444',
    lineHeight: 26,
    textAlign: 'justify',
  },
  subText: {
    fontSize: 18,
    color: '#777',
    textAlign: 'center',
    marginBottom: 10,
  },
  highlight: {
    fontWeight: 'bold',
    color: '#1a73e8',
  },
});

export default AboutCompany;
