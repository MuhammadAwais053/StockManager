import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = '@inventory_items';

export const storageService = {
  // Save items to storage
  saveItems: async (items) => {
    try {
      const jsonValue = JSON.stringify(items);
      await AsyncStorage.setItem(STORAGE_KEY, jsonValue);
      return true;
    } catch (error) {
      console.error('Error saving items:', error);
      return false;
    }
  },

  // Load items from storage
  loadItems: async () => {
    try {
      const jsonValue = await AsyncStorage.getItem(STORAGE_KEY);
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (error) {
      console.error('Error loading items:', error);
      return null;
    }
  },

  // Clear all items
  clearItems: async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEY);
      return true;
    } catch (error) {
      console.error('Error clearing items:', error);
      return false;
    }
  },
};