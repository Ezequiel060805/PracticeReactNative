
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
  Image,
  ActivityIndicator,
  Dimensions,
} from 'react-native';
import * as Progress from 'react-native-progress';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;

export default function ProgressData() {
  const [tempActual, setTempActual] = useState({ valor: 0, porcentaje: 0 });
  const [humedadActual, setHumedadActual] = useState({ valor: 0, porcentaje: 0 });
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const obtenerDatos = async () => {
    // tu lógica de obtención de datos
  };

  const onRefresh = () => {
    setRefreshing(true);
    obtenerDatos().finally(() => setRefreshing(false));
  };

  useEffect(() => {
    obtenerDatos().finally(() => setLoading(false));
  }, []);

  return (
    <LinearGradient colors={['white', 'blue']} style={{ flex: 1 }}>
      <ScrollView
        contentContainerStyle={styles.container}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <Image source={require('../assets/sun.jpg')} style={styles.logo} />

        <Text style={styles.title}>Condiciones actuales</Text>

        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : (
          <View style={styles.progressRow}>
            {/* Temperatura */}
            <View style={styles.progressItem}>
              <Progress.Circle
                size={130}
                progress={tempActual.porcentaje}
                color="#007AFF"
                showsText
                formatText={() => `${tempActual.valor}°C`}
                thickness={12}
                unfilledColor="#ffe0cc"
                borderWidth={0}
              />
              <Text style={styles.label}>Temperatura</Text>
            </View>

            {/* Humedad */}
            <View style={styles.progressItem}>
              <Progress.Circle
                size={130}
                progress={humedadActual.porcentaje}
                color="#007AFF"
                showsText
                formatText={() => `${humedadActual.valor}%`}
                thickness={12}
                unfilledColor="#cce6ff"
                borderWidth={0}
              />
              <Text style={styles.label}>Humedad</Text>
            </View>
          </View>
        )}
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
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#003366',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: screenWidth - 40,
  },
  progressItem: {
    alignItems: 'center',
  },
  label: {
    marginTop: 10,
    fontSize: 16,
    color: '#333',
  },
});


