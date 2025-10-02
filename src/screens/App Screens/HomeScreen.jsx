import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Photo.jpg')} style={styles.image} />
      <Text style={styles.name}>Muhammad Awais</Text>
      <Text style={styles.tagline}>React Native Developer</Text>
      <Text style={styles.about}>
        Passionate developer focused on building beautiful and functional mobile
        apps. Open to collaborations and freelance work.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f5f5f5',
  },
  image: { width: 120, height: 120, borderRadius: 60, margin: 20 },
  name: { fontSize: 28, fontWeight: 'bold' },
  tagline: { fontSize: 18, color: '#666' },
  about: { marginTop: 15, fontSize: 16, color: '#444', textAlign: 'center' },
});
