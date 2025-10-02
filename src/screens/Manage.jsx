import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import rfSpacing from '../theme/rfSpacing';

const Manage = ({ data, setData }) => {
  const [itemName, setItemName] = useState('');
  const [stock, setStock] = useState('');
  const [unit, setUnit] = useState('');
  const [isEdit, setIsEdit] = useState(false);
  const [editItemId, setEditItemId] = useState(null);

  const validateInputs = () => {
    if (!itemName.trim()) {
      Alert.alert('Validation Error', 'Item name cannot be empty.');
      return false;
    }
    if (!stock.trim() || isNaN(Number(stock)) || Number(stock) < 0) {
      Alert.alert('Validation Error', 'Please enter a valid stock quantity.');
      return false;
    }
    return true;
  };

  const resetForm = () => {
    setItemName('');
    setStock('');
    setUnit('');
    setIsEdit(false);
    setEditItemId(null);
  };

  const addItemHandler = () => {
    if (!validateInputs()) return;

    const newItem = {
      id: Date.now().toString(),
      name: itemName.trim(),
      stock: Number(stock),
      unit: unit.trim() || 'pcs',
    };
    
    setData([...data, newItem]);
    Alert.alert('Success', 'Item added successfully!');
    resetForm();
  };

  const deleteItemHandler = (id, itemName) => {
    Alert.alert(
      'Confirm Delete',
      `Are you sure you want to delete "${itemName}"?`,
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Delete',
          style: 'destructive',
          onPress: () => {
            setData(data.filter(item => item.id !== id));
            if (editItemId === id) {
              resetForm();
            }
          },
        },
      ]
    );
  };

  const editItemHandler = item => {
    setIsEdit(true);
    setItemName(item.name);
    setStock(String(item.stock));
    setUnit(item.unit || '');
    setEditItemId(item.id);
  };

  const updateItemHandler = () => {
    if (!validateInputs()) return;

    setData(
      data.map(item =>
        item.id === editItemId
          ? {
              ...item,
              name: itemName.trim(),
              stock: Number(stock),
              unit: unit.trim() || item.unit,
            }
          : item
      )
    );
    
    Alert.alert('Success', 'Item updated successfully!');
    resetForm();
  };

  const cancelEdit = () => {
    resetForm();
  };

  const renderItem = ({ item }) => {
    const isLowStock = item.stock < 30;
    const backgroundColor = isLowStock ? '#FFcccc' : '#bed1b0';
    const isEditing = editItemId === item.id;

    return (
      <View style={[styles.itemContainer, { backgroundColor }, isEditing && styles.editingItem]}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName} numberOfLines={1}>
            {item.name}
          </Text>
          <Text style={styles.stockText}>
            {item.stock} {item.unit}
          </Text>
        </View>
        <View style={styles.actionButtons}>
          <Pressable
            onPress={() => editItemHandler(item)}
          >
            <Image
              style={styles.iconImage}
              source={require('../assets/edit.png')}
            />
          </Pressable>
          <Pressable
            onPress={() => deleteItemHandler(item.id, item.name)}
          >
            <Image
              style={styles.iconImage}
              source={require('../assets/delete.png')}
            />
          </Pressable>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>
            {isEdit ? 'Edit Item' : 'Add New Item'}
          </Text>
          
          <TextInput
            placeholder="Item name (e.g., Rice)"
            placeholderTextColor="#999"
            value={itemName}
            onChangeText={setItemName}
            style={styles.input}
          />
          
          <View style={styles.rowInputs}>
            <TextInput
              placeholder="Stock quantity"
              placeholderTextColor="#999"
              value={stock}
              onChangeText={setStock}
              style={[styles.input, styles.stockInput]}
              keyboardType="numeric"
            />
            <TextInput
              placeholder="Unit (kg)"
              placeholderTextColor="#999"
              value={unit}
              onChangeText={setUnit}
              style={[styles.input, styles.unitInput]}
            />
          </View>

          <View style={styles.buttonRow}>
            {isEdit && (
              <Pressable style={[styles.button, styles.cancelButton]} onPress={cancelEdit}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </Pressable>
            )}
            <Pressable
              style={[styles.button, styles.primaryButton, isEdit && styles.updateButton]}
              onPress={isEdit ? updateItemHandler : addItemHandler}
            >
              <Text style={styles.buttonText}>
                {isEdit ? 'Update Item' : 'Add Item'}
              </Text>
            </Pressable>
          </View>
        </View>

        <View style={styles.listContainer}>
          <Text style={styles.listTitle}>
            All Items ({data.length})
          </Text>
          <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={renderItem}
            contentContainerStyle={styles.listContent}
            scrollEnabled={false}
            ListEmptyComponent={
              <View style={styles.emptyContainer}>
                <Text style={styles.emptyText}>No items yet. Add your first item!</Text>
              </View>
            }
          />
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default Manage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  formContainer: {
    backgroundColor: 'white',
    padding: rfSpacing['20x'],
    borderRadius: rfSpacing['15x'],
    marginBottom: rfSpacing['20x'],
  },
  formTitle: {
    fontSize: rfSpacing['20x'],
    fontWeight: 'bold',
    color: '#384745',
    marginBottom: rfSpacing['15x'],
  },
  input: {
    borderWidth: rfSpacing['2x'],
    borderColor: '#bed1b0',
    paddingHorizontal: rfSpacing['15x'],
    paddingVertical: rfSpacing['12x'],
    borderRadius: rfSpacing['10x'],
    color: '#384745',
    fontSize: rfSpacing['16x'],
    backgroundColor: '#f9f9f9',
    marginBottom: rfSpacing['12x'],
  },
  rowInputs: {
    flexDirection: 'row',
    gap: rfSpacing['12x'],
  },
  stockInput: {
    flex: 2,
  },
  unitInput: {
    flex: 1,
  },
  buttonRow: {
    flexDirection: 'row',
    gap: rfSpacing['12x'],
    marginTop: rfSpacing['8x'],
  },
  button: {
    flex: 1,
    paddingVertical: rfSpacing['15x'],
    borderRadius: rfSpacing['12x'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  primaryButton: {
    backgroundColor: '#384745',
  },
  updateButton: {
    backgroundColor: '#668561',
  },
  cancelButton: {
    backgroundColor: '#e0e0e0',
    borderWidth: rfSpacing['2x'],
    borderColor: '#384745',
  },
  buttonText: {
    fontSize: rfSpacing['16x'],
    color: 'white',
    fontWeight: 'bold',
  },
  cancelButtonText: {
    fontSize: rfSpacing['16x'],
    color: '#384745',
    fontWeight: 'bold',
  },
  listContainer: {
    marginBottom: rfSpacing['20x'],
  },
  listTitle: {
    fontSize: rfSpacing['18x'],
    fontWeight: '600',
    marginBottom: rfSpacing['12x'],
    color: '#384745',
  },
  itemContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: rfSpacing['15x'],
    paddingVertical: rfSpacing['12x'],
    borderRadius: rfSpacing['10x'],
    marginBottom: rfSpacing['8x'],
  },
  editingItem: {
    borderWidth: rfSpacing['2x'],
    borderColor: '#668561',
  },
  itemInfo: {
    flex: 1,
    gap: rfSpacing['4x'],
  },
  itemName: {
    fontSize: rfSpacing['16x'],
    fontWeight: '600',
    color: '#384745',
  },
  stockText: {
    fontSize: rfSpacing['14x'],
    color: '#666',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: rfSpacing['10x'],
  },
  iconButton: {
    padding: rfSpacing['8x'],
    borderRadius: rfSpacing['8x'],
    minWidth: rfSpacing['40x'],
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconImage: {
    width: rfSpacing['24x'],
    height: rfSpacing['24x'],
  },
  
  listContent: {
    paddingBottom: rfSpacing['20x'],
    gap:rfSpacing['10x']
  },
  emptyContainer: {
    paddingVertical: rfSpacing['40x'],
    alignItems: 'center',
  },
  emptyText: {
    fontSize: rfSpacing['16x'],
    color: '#666',
    fontStyle: 'italic',
  },
});