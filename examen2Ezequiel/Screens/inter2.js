import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity,Button } from 'react-native';
import { BarChart } from 'react-native-chart-kit';
import { Dimensions } from 'react-native';

export default function inter2({ navigation }) {
  const pokemonStats = {
    labels: ['HP', 'Ataque', 'Defensa', 'Velocidad'],
    datasets: [
      {
        data: [75, 25, 76, 120], 
        color: (opacity = 1) => `rgba(255, 213, 0, ${opacity})`, // Amarillo tipo Pikachu
      },
    ],
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Estadísticas de Lapras</Text>
      
      {/* Gráfica de barras */}
      <BarChart
        data={pokemonStats}
        width={Dimensions.get('window').width - 40}
        height={300}
        yAxisLabel=""
        yAxisSuffix=""
        chartConfig={{
          backgroundGradientFrom: '#f5f5f5',
          backgroundGradientTo: '#f5f5f5',
          color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
          barPercentage: 0.7,
          propsForLabels: {
            fontSize: 12,
          },
        }}
        style={styles.chart}
      />

      {/* Botón para regresar */}
      <Button title="ir inter3" onPress={()=> navigation.navigate('interfaz3')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9acd32',
    padding: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },
  chart: {
    marginVertical: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  button: {
    backgroundColor: '#0a66c2',
    padding: 12,
    borderRadius: 8,
    marginTop: 5,
    width: '100%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
