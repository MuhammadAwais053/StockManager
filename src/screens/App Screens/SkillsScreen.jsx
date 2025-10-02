import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const skills = ['React Native', 'JavaScript', 'Git & GitHub', 'UI/UX Design'];

export default function SkillsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Skills & Technologies</Text>
      {skills.map(skill => (
        <Text style={styles.skill} key={skill}>
          {skill}
        </Text>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f0fff0',
  },
  heading: { fontSize: 22, fontWeight: 'bold', marginBottom: 20 },
  skill: { fontSize: 18, color: '#333', marginVertical: 5 },
});
