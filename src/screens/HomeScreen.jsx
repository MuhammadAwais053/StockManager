import {
  Pressable,
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
} from 'react-native';
import React, { useState, useEffect } from 'react';
import AllItems from './AllItems';
import Manage from './Manage';
import rfSpacing from '../theme/rfSpacing';
import { storageService } from '../../storage';

const HomeScreen = () => {
  const [view, setView] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const defaultItems = [
    { id: '1', name: 'Rice', stock: 50, unit: 'kg' },
    { id: '2', name: 'Wheat Flour', stock: 40, unit: 'kg' },
    { id: '3', name: 'Sugar', stock: 30, unit: 'kg' },
    { id: '4', name: 'Milk', stock: 25, unit: 'liters' },
    { id: '5', name: 'Eggs', stock: 120, unit: 'pcs' },
    { id: '6', name: 'Bread', stock: 35, unit: 'loaves' },
    { id: '7', name: 'Apples', stock: 18, unit: 'kg' },
    { id: '8', name: 'Bananas', stock: 22, unit: 'dozen' },
  ];

  useEffect(() => {
    loadData();
  }, []);

  useEffect(() => {
    if (!loading && data.length > 0) {
      saveData();
    }
  }, [data]);

  const loadData = async () => {
    const savedItems = await storageService.loadItems();
    if (savedItems && savedItems.length > 0) {
      setData(savedItems);
    } else {
      setData(defaultItems);
    }
    setLoading(false);
  };

  const saveData = async () => {
    await storageService.saveItems(data);
  };

  const lowStockThreshold = 30;
  const lowStockItems = data.filter(item => item.stock < lowStockThreshold);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#384745" />
        <Text style={styles.loadingText}>Loading inventory...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>DashBoard</Text>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{data.length}</Text>
          <Text style={styles.statLabel}>Total Items</Text>
        </View>
        <View style={[styles.statCard, styles.warningCard]}>
          <Text style={styles.statNumber}>{lowStockItems.length}</Text>
          <Text style={styles.statLabel}>Low Stock</Text>
        </View>
      </View>

      <View style={styles.buttonContainer}>
        <Pressable
          style={[styles.pressableButton, view === 0 && styles.activeButton]}
          onPress={() => setView(0)}
        >
          <Text
            style={[styles.buttonText, view === 0 && styles.activeButtonText]}
          >
            All Items
          </Text>
        </Pressable>
        <Pressable
          style={[styles.pressableButton, view === 1 && styles.activeButton]}
          onPress={() => setView(1)}
        >
          <Text
            style={[styles.buttonText, view === 1 && styles.activeButtonText]}
          >
            Low Stock
          </Text>
        </Pressable>
        <Pressable
          style={[styles.pressableButton, view === 2 && styles.activeButton]}
          onPress={() => setView(2)}
        >
          <Text
            style={[styles.buttonText, view === 2 && styles.activeButtonText]}
          >
            Manage
          </Text>
        </Pressable>
      </View>

      {view === 0 && <AllItems data={data} />}
      {view === 1 && (
        <AllItems data={lowStockItems} emptyMessage="No low stock items" />
      )}
      {view === 2 && <Manage data={data} setData={setData} />}
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: rfSpacing['10x'],
  },
  loadingText: {
    fontSize: rfSpacing['16x'],
    color: '#384745',
    fontWeight: '500',
  },
  headerText: {
    fontSize: rfSpacing['25x'],
    fontWeight: 'bold',
    color: '#384745',
    marginBottom: rfSpacing['15x'],
  },
  statsContainer: {
    flexDirection: 'row',
    gap: rfSpacing['15x'],
    marginBottom: rfSpacing['20x'],
  },
  statCard: {
    flex: 1,
    backgroundColor: '#bed1b0',
    padding: rfSpacing['15x'],
    borderRadius: rfSpacing['15x'],
    alignItems: 'center',
  },
  warningCard: {
    backgroundColor: '#FFcccc',
  },
  statNumber: {
    fontSize: rfSpacing['28x'],
    fontWeight: 'bold',
    color: '#384745',
  },
  statLabel: {
    fontSize: rfSpacing['14x'],
    color: '#384745',
    marginTop: rfSpacing['5x'],
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: rfSpacing['10x'],
    marginBottom: rfSpacing['20x'],
  },
  pressableButton: {
    flex: 1,
    padding: rfSpacing['12x'],
    backgroundColor: '#e0e0e0',
    borderRadius: rfSpacing['15x'],
    alignItems: 'center',
    borderWidth: rfSpacing['2x'],
    borderColor: '#384745',
  },
  activeButton: {
    backgroundColor: '#668561',
  },
  buttonText: {
    color: '#384745',
    fontSize: rfSpacing['14x'],
    fontWeight: '600',
  },
  activeButtonText: {
    color: 'white',
  },
});
