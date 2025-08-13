import React, { useState } from 'react';
import {View, Text, TextInput, Button, FlatList, StyleSheet,} from 'react-native';
import { BarChart } from 'react-native-svg-charts';

export default function AlimentacionScreen({ navigation }) {
  const [comida, setComida] = useState('');
  const [lista, setLista] = useState([]);

  const agregarComida = () => {
    if (comida.trim() !== '') {
      setLista([...lista, comida.trim()]);
      setComida('');
    }
  };

  const contarComidas = () => {
    const conteo = {};
    lista.forEach((item) => {
      conteo[item] = (conteo[item] || 0) + 1;
    });
    return conteo;
  };

  const datos = Object.entries(contarComidas());
  const valores = datos.map(([, cantidad]) => cantidad);
  const etiquetas = datos.map(([nombre]) => nombre);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Alimentación</Text>

      <TextInput
        style={styles.input}
        placeholder="¿Qué comiste hoy?"
        value={comida}
        onChangeText={setComida}
      />
      <Button title="Agregar" onPress={agregarComida} />

      <Text style={styles.subtitle}>Lista de comidas</Text>
      <FlatList
        data={lista}
        renderItem={({ item }) => <Text style={styles.item}>• {item}</Text>}
        keyExtractor={(item, index) => index.toString()}
        style={{ maxHeight: 150 }}
      />

      {valores.length > 0 && (
        <>
          <Text style={styles.subtitle}>Gráfico de frecuencia</Text>
          <BarChart
            style={{ height: 200, marginVertical: 20 }}
            data={valores}
            svg={{ fill: '#4caf50' }}
            spacingInner={0.3}
            contentInset={{ top: 10, bottom: 10 }}
          />
          {etiquetas.map((et, i) => (
            <Text key={i} style={styles.label}>
              {et}: {valores[i]}
            </Text>
          ))}
        </>
      )}

      <View style={{ marginTop: 20 }}>
        <Button title="Ir a Ejercicio" onPress={() => navigation.navigate('Ejercicio')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 10,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 10,
    borderRadius: 6,
    borderColor: '#ccc',
  },
  item: {
    fontSize: 16,
    marginVertical: 4,
  },
  label: {
    fontSize: 14,
    textAlign: 'center',
  },
});