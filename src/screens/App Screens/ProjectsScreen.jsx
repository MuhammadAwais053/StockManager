import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const projects = [
  {
    id: '1',
    title: 'Stock Manager',
    description: 'CRUD app for managing inventory and stock.',
    tech: 'React Native, Firebase',
    link: 'https://github.com/MuhammadAwais053/stock-manager',
  },
  {
    id: '2',
    title: 'FLORA - Your Digital Garden',
    description: 'Track and manage your plants digitally.',
    tech: 'React Native, SQLite',
    link: 'https://github.com/MuhammadAwais053/flora-app',
  },
];

export default function ProjectsScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={projects}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.tech}>{item.tech}</Text>
            <Text style={styles.link}>{item.link}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#fff' },
  card: {
    padding: 20,
    marginVertical: 10,
    backgroundColor: '#e6e6fa',
    borderRadius: 10,
  },
  title: { fontSize: 20, fontWeight: 'bold' },
  desc: { marginTop: 5, fontSize: 16 },
  tech: { marginTop: 5, fontSize: 14, color: '#888' },
  link: { marginTop: 10, color: '#3366cc' },
});
