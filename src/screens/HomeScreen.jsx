import { Pressable, StyleSheet, Text, View } from 'react-native';
import React, { useState } from 'react';
import AllItems from './AllItems';
import Manage from './Manage';
const dummyData = [
  {
    id: '1',
    name: 'potatoes',
    stock: 20,
    unit: 'kg',
  },
  {
    id: '2',
    name: 'tomatoes',
    stock: 15,
    unit: 'kg',
  },
  {
    id: '3',
    name: 'onions',
    stock: 25,
    unit: 'kg',
  },
  {
    id: '4',
    name: 'carrots',
    stock: 12,
    unit: 'kg',
  },
  {
    id: '5',
    name: 'cabbage',
    stock: 10,
    unit: 'kg',
  },
  {
    id: '6',
    name: 'cauliflower',
    stock: 8,
    unit: 'kg',
  },
  {
    id: '7',
    name: 'spinach',
    stock: 6,
    unit: 'kg',
  },
  {
    id: '8',
    name: 'broccoli',
    stock: 5,
    unit: 'kg',
  },
  {
    id: '9',
    name: 'capsicum',
    stock: 7,
    unit: 'kg',
  },
  {
    id: '10',
    name: 'brinjal',
    stock: 9,
    unit: 'kg',
  },
  {
    id: '11',
    name: 'cucumber',
    stock: 14,
    unit: 'kg',
  },
  {
    id: '12',
    name: 'green beans',
    stock: 11,
    unit: 'kg',
  },
  {
    id: '13',
    name: 'peas',
    stock: 13,
    unit: 'kg',
  },
  {
    id: '14',
    name: 'radish',
    stock: 10,
    unit: 'kg',
  },
  {
    id: '15',
    name: 'pumpkin',
    stock: 4,
    unit: 'kg',
  },
];

const HomeScreen = () => {
  const [view, setview] = useState(0);
  return (
    <View>
      <Text style={styles.text}>DashBoard</Text>
      <View style={{ flexDirection: 'row', gap: 15, marginTop: 15 }}>
        <Pressable
          style={[
            styles.pressableButton,
            view === 0 ? { backgroundColor: '#668561' } : null,
          ]}
          onPress={() => setview(0)}
        >
          <Text style={styles.buttonText}>All Items</Text>
        </Pressable>
        <Pressable
          style={[
            styles.pressableButton,
            view === 1 ? { backgroundColor: '#668561' } : null,
          ]}
          onPress={() => setview(1)}
        >
          <Text style={styles.buttonText}>Low Stock</Text>
        </Pressable>
        <Pressable
          style={[
            styles.pressableButton,
            view === 2 ? { backgroundColor: '#668561' } : null,
          ]}
          onPress={() => setview(2)}
        >
          <Text style={styles.buttonText}>Manage Stock</Text>
        </Pressable>
      </View>
      {view === 0 && <AllItems data={dummyData} />}
      {view === 1 && (
        <AllItems data={dummyData.filter(AllItems => AllItems.stock < 10)} />
      )}
      {view === 2 && <Manage />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#333',
  },
  pressableButton: {
    padding: '2%',
    backgroundColor: '#333',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: '#384745',
  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
});
