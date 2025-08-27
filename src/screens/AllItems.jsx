import { FlatList, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
const AllItems = ({ data }) => {
  return (
    <SafeAreaView>
      <View>
        <View style={styles.headingContainer}>
          <Text style={styles.headingText}>Items</Text>
          <Text style={styles.headingText}>Quantity</Text>
        </View>
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
            </View>
          )}
          contentContainerStyle={styles.cont}
        />
      </View>
    </SafeAreaView>
  );
};

export default AllItems;

const styles = StyleSheet.create({
  headingContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    paddingVertical: 10,
  },
  headingText: {
    fontSize: 16,
    fontWeight: '500',
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
