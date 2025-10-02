import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import rfSpacing from '../theme/rfSpacing';

const AllItems = ({ data, emptyMessage = 'No items available' }) => {
  const renderItem = ({ item, index }) => {
    const isLowStock = item.stock < 30;
    const backgroundColor = isLowStock ? '#FFcccc' : '#bed1b0';

    return (
      <View style={[styles.itemContainer, { backgroundColor }]}>
        <View style={styles.itemInfo}>
          <Text style={styles.itemName} numberOfLines={1}>
            {item.name}
          </Text>
          {item.unit && <Text style={styles.itemUnit}>({item.unit})</Text>}
        </View>
        <View style={styles.stockContainer}>
          <Text style={[styles.stockText, isLowStock && styles.lowStockText]}>
            {item.stock}
          </Text>
          {isLowStock && (
            <View style={styles.warningBadge}>
              <Text style={styles.warningText}>!</Text>
            </View>
          )}
        </View>
      </View>
    );
  };

  const renderEmpty = () => (
    <View style={styles.emptyContainer}>
      <Text style={styles.emptyText}>{emptyMessage}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>Items</Text>
        <Text style={styles.headingText}>Quantity</Text>
      </View>

      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.listContent}
        ListEmptyComponent={renderEmpty}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: rfSpacing['15x'],
    paddingVertical: rfSpacing['12x'],
    backgroundColor: '#384745',
    borderRadius: rfSpacing['10x'],
    marginBottom: rfSpacing['10x'],
  },
  headingText: {
    fontSize: rfSpacing['16x'],
    fontWeight: '600',
    color: 'white',
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
  itemInfo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: rfSpacing['8x'],
  },
  itemName: {
    fontSize: rfSpacing['16x'],
    fontWeight: '600',
    color: '#384745',
    flex: 1,
  },
  itemUnit: {
    fontSize: rfSpacing['12x'],
    color: '#666',
    fontStyle: 'italic',
  },
  stockContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: rfSpacing['8x'],
  },
  stockText: {
    fontSize: rfSpacing['16x'],
    fontWeight: '600',
    color: '#384745',
    minWidth: rfSpacing['40x'],
    textAlign: 'right',
  },
  lowStockText: {
    color: '#d32f2f',
  },
  warningBadge: {
    backgroundColor: '#d32f2f',
    width: rfSpacing['20x'],
    height: rfSpacing['20x'],
    borderRadius: rfSpacing['10x'],
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningText: {
    color: 'white',
    fontSize: rfSpacing['14x'],
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: rfSpacing['20x'],
    gap: 12,
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
