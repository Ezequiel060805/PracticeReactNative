import React, { useEffect, useState } from 'react';
import { Image, Button, View, Text, ScrollView, Dimensions, StyleSheet, ActivityIndicator, RefreshControl,} from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;
// construccion de la grafica 
const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: {
    borderRadius: 16,
  },
  propsForDots: {
    r: '4',
    strokeWidth: '2',
    stroke: '#007AFF',
  },
};

export default function LineData({ navigation }) {
  const [lineData, setLineData] = useState(null);
  const [dailyForecast, setDailyForecast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [chartKey, setChartKey] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

// conexion con la api
  const obtenerClima = async () => {
    try {
      const res = await fetch(
       'https://api.open-meteo.com/v1/forecast?latitude=25.43&longitude=-100.98&hourly=temperature_2m&daily=temperature_2m_max,temperature_2m_min&timezone=auto' 
        
      );
      const data = await res.json();

      // Temperatura en 6 horas
      const ahora = new Date();
      const horaActual = ahora.getHours();
      const tempHora = data.hourly.temperature_2m.slice(horaActual, horaActual + 6);
      const horaLabels = data.hourly.time
        .slice(horaActual, horaActual + 6)
        .map((t) => t.split('T')[1].slice(0, 5));

      setLineData({
        labels: horaLabels,
        datasets: [
          {
            data: tempHora,
            strokeWidth: 2,
            color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
          },
        ],
      });

      // apartado pronostico diario 
      const pronostico = data.daily.time.map((fecha, i) => ({
        fecha,
        max: data.daily.temperature_2m_max[i],
        min: data.daily.temperature_2m_min[i],
      }));

      setDailyForecast(pronostico.slice(0, 5)); // Solo 5 días
      setChartKey((prev) => prev + 1);
      setLoading(false);
    } catch (error) {
      console.error('Error al obtener el clima:', error);
    }
  };

  const onRefresh = async () => {
    setRefreshing(true);
    await obtenerClima();
    setRefreshing(false);
  };

  useEffect(() => {
    obtenerClima();
    const interval = setInterval(obtenerClima, 10000);
    return () => clearInterval(interval);
  }, []);

  //colores para el degradado 
  return (
    <LinearGradient
      colors={['white', 'blue']}
      style={{ flex: 1 }}
    >
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Image 
        source={require('../assets/sun.jpg')}
        style={styles.logo}/>

        <Text style={styles.title}>Temperatura próximas 6 horas</Text>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <LineChart
            key={chartKey}
            data={lineData}
            width={screenWidth - 20}
            height={250}
            yAxisSuffix="°C"
            chartConfig={chartConfig}
            bezier
            style={styles.chart}
          />
        )}

        <Text style={styles.subtitle}>Pronóstico próximos días</Text>
        {dailyForecast.map((dia, index) => (
          <View key={index} style={styles.dayRow}>
            <Text style={styles.dayText}>{dia.fecha}</Text>
            <Text style={styles.tempText}>Max: {dia.max}°C / Min: {dia.min}°C</Text>
          </View>
        ))}
        <View style={{ marginTop: 20 }}>
          <Button 
            title="Ir a PaiData" 
            onPress={() => navigation.navigate('PaiData')} />
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    alignItems: 'center',
    paddingBottom: 50,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#003366',
  },
  chart: {
    marginVertical: 8,
    borderRadius: 16,
  },
  subtitle: {
    fontSize: 18,
    marginTop: 30,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#003366',
  },
  dayRow: {
    marginVertical: 6,
    backgroundColor: '#e6f2ff',
    padding: 10,
    width: screenWidth - 50,
    borderRadius: 10,
  },
  dayText: {
    fontSize: 16,
    color: '#000',
  },
  tempText: {
    fontSize: 14,
    color: '#333',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
});
