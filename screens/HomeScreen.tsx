import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import albumCategories from '../assets/data/albumCategories';

import AlbumCategory from '../components/AlbumCategory';


export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <FlatList 
        data={albumCategories}
        renderItem={({ item }) => (
          <AlbumCategory 
            title={item.title}
            albums={item.albums}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
