import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function App() {

  const [data, setData] = useState([])

  const getMovies = async () => {
     try {
      const response = await fetch('https://reactnative.dev/movies.json');
      const json = await response.json();
      setData(json.movies);
    } catch (error) {
      console.error(error);
    } 
  }

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <View style={ styles.container}>
    
        <FlatList
          data={data}
          keyExtractor={({ id },index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}</Text>
          )}
        />
      
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});