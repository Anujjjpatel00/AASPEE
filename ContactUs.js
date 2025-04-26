import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  ScrollView,
} from 'react-native';

const ContactUs = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    code: '',
  });
  const [generatedCode, setGeneratedCode] = useState('');

  // Function to generate random code
  const generateCode = () => {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let code = '';
    for (let i = 0; i < 5; i++) {
      code += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    setGeneratedCode(code);
  };

  useEffect(() => {
    generateCode(); // Generate code on component load
  }, []);

  const handleInputChange = (field, value) => {
    setForm({...form, [field]: value});
  };

  const validateEmail = email => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  };

  const validatePhone = phone => {
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
  };

  const handleSubmit = () => {
    if (
      !form.name ||
      !form.email ||
      !form.phone ||
      !form.message ||
      !form.code
    ) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    if (!validateEmail(form.email)) {
      Alert.alert('Error', 'Invalid email format.');
      return;
    }

    if (!validatePhone(form.phone)) {
      Alert.alert('Error', 'Phone number must be 10 digits.');
      return;
    }

    if (form.code !== generatedCode) {
      Alert.alert('Error', 'Invalid code. Please try again.');
      generateCode(); // Regenerate code on failure
      return;
    }

    Alert.alert('Success', 'Your message has been sent!');
    generateCode(); // Regenerate code on success
  };

  return (
    <ScrollView style={styles.container}>
      {/* Contact Info Section */}
      <Text style={styles.headerTitle}>CONTACT US</Text>
      <Text style={styles.subHeaderTitle}>GET IN TOUCH</Text>
      <Text style={styles.description}>
        Your questions matter to us! Fill out the form below to message us your
        queries, and our efficient team will get back to you at the earliest.
      </Text>

      {/* Address Section */}
      <View style={styles.infoContainer}>
        {/* Address */}
        <View style={styles.infoRow}>
          <Image
            source={require('../../assets/images/location-logo.png')}
            style={styles.icon}
          />
          <Text style={styles.infoText}>
            A/42, Swagat Industrial Park, Bakrol-Bujrang Road, Daskroi,
            Ahmedabad - 382430, Gujarat (India)
          </Text>
        </View>

        {/* Phone */}
        <View style={styles.infoRow}>
          <Image
            source={require('../../assets/images/call-logo.png')}
            style={styles.icon}
          />
          <View>
            <Text style={styles.infoText}>Domestic: +91 7359310001</Text>
            <Text style={styles.infoText}>International: +91 7359310002</Text>
          </View>
        </View>

        {/* Email */}
        <View style={styles.infoRow}>
          <Image
            source={require('../../assets/images/email-logo.png')}
            style={styles.icon}
          />
          <View>
            <Text style={styles.infoText}>info@aaspee.com</Text>
            <Text style={styles.infoText}>sales@aaspee.com</Text>
          </View>
        </View>
      </View>

      {/* Form Section */}
      <TextInput
        style={styles.input}
        placeholder="Name*"
        value={form.name}
        onChangeText={value => handleInputChange('name', value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Email*"
        value={form.email}
        onChangeText={value => handleInputChange('email', value)}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Phone*"
        value={form.phone}
        onChangeText={value => handleInputChange('phone', value)}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Write your message here..."
        value={form.message}
        onChangeText={value => handleInputChange('message', value)}
        multiline
      />

      {/* Random Code Section */}
      <Text style={styles.codeText}>
        Input this code:{' '}
        <Text style={styles.generatedCode}>{generatedCode}</Text>
      </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the code"
        value={form.code}
        onChangeText={value => handleInputChange('code', value)}
      />

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Send Now</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f9f9f9',
  },
  headerTitle: {
    fontSize: 18,
    color: '#2196F3',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  subHeaderTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
  },
  infoContainer: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    marginBottom: 20,
  },
  infoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 12,
    resizeMode: 'contain',
  },
  infoText: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    height: 48,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  codeText: {
    fontSize: 16,
    color: '#333',
    marginBottom: 8,
  },
  generatedCode: {
    fontWeight: 'bold',
    color: '#2196F3',
  },
  submitButton: {
    backgroundColor: '#2196F3',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default ContactUs;
