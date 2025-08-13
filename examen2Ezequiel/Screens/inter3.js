import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View, FlatList,Button } from 'react-native';
import axios from 'axios';

export default function Inter3({ navigation }) {
  const [pokemon, setPokemon] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [filteredPokemon, setFilteredPokemon] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        setPokemon(response.data.results);
        setFilteredPokemon(response.data.results);
      } catch (error) {
        console.error('Error fetching Pokémon:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    if (!searchText) {
      setFilteredPokemon(pokemon);
    } else {
      const filtered = pokemon.filter(p =>
        p.name.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredPokemon(filtered);
    }
  }, [searchText, pokemon]);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text style={styles.loadingText}>Cargando Pokémon...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Button title="ir a inter4" onPress={()=> navigation.navigate("interfaz4")}/>
      <TextInput
        style={styles.input}
        placeholder="Buscar Pokémon"
        value={searchText}
        onChangeText={setSearchText}
        autoCapitalize="none"
      />
      <FlatList
        data={filteredPokemon}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
          <Text
            style={styles.item}
            onPress={() => navigation.navigate('interfaz2', { name: item.name })}
          >
            {item.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundcolor: '#9adc32'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 18,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

