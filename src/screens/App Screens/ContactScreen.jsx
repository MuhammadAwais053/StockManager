import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Linking,
} from 'react-native';

export default function ContactScreen() {
  const [message, setMessage] = useState('');

  const handleSend = () => {
    // This would send an email, or use a backend API endpoint.
    Linking.openURL(
      `mailto:owiimemer@gmail.com?subject=Portfolio Inquiry&body=${message}`,
    );
    setMessage('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Contact Me</Text>
      <Text>Email: owiimemer@gmail.com</Text>
      <Text>GitHub: github.com/MuhammadAwais053</Text>
      <TextInput
        style={styles.input}
        placeholder="Write your message..."
        multiline
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send Message" onPress={handleSend} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 30, backgroundColor: '#fff' },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginVertical: 20,
    minHeight: 60,
  },
});
