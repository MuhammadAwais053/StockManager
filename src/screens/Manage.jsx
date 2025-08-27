import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, { useState } from 'react';

const Manage = ({ data }) => {
  const [itemName, setitemName] = useState('');
  const [stock, setstock] = useState('');
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Enter an item..."
        placeholderTextColor={'#dadada'}
        value={itemName}
        onChangeText={item => setitemName(item)}
        style={styles.input}
      />
      <TextInput
        placeholder="Enter stock..."
        placeholderTextColor={'#dadada'}
        value={stock}
        onChangeText={item => setstock(item)}
        style={styles.input}
      />
      <Pressable style={styles.Button}>
        <Text
          style={{
            fontSize: 16,
            color: 'white',
            fontWeight: 'bold',
          }}
        >
          Add Item
        </Text>
      </Pressable>
      <View style={{ marginTop: 5 }}>
        <Text style={styles.headingText}>All Items in Stock</Text>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View
              style={[
                styles.itemContainer,
                { backgroundColor: item.stock < 10 ? '#FFcccc' : '#bed1b0' },
              ]}
            >
              <Text style={styles.headingText}>{item.name}</Text>
              <Text style={styles.headingText}>{item.stock}</Text>
              <View style={{ flexDirection: 'row', gap: 7 }}>
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('../assets/edit.png')}
                />
                <Image
                  style={{ width: 30, height: 30 }}
                  source={require('../assets/delete.png')}
                />
              </View>
            </View>
          )}
          contentContainerStyle={styles.cont}
        />
      </View>
    </View>
  );
};

export default Manage;

const styles = StyleSheet.create({
  container: {
    paddingVertical: '4%',
    gap: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#bed1b0',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
  },
  Button: {
    backgroundColor: '#384745',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '500',
    marginVertical: 5,
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 7,
  },
  cont: {
    gap: 5,
  },
});
