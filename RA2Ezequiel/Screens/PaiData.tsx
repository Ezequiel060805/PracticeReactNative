import React from 'react';
import { View, Text, ScrollView, Dimensions, StyleSheet, Button } from 'react-native';
import { PieChart } from 'react-native-chart-kit';
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Dimensions.get('window').width;

const chartConfig = {
  backgroundGradientFrom: '#fff',
  backgroundGradientTo: '#fff',
  decimalPlaces: 1,
  color: (opacity = 1) => `rgba(0, 122, 255, ${opacity})`,
  labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
  style: { borderRadius: 16 },
};

export default function PaiData( {navigation} ) {
  // Datos ficticios basados en temperaturas por hora
  const labels = ['12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];
  const values = [22.5, 23.1, 21.8, 20.3, 19.6, 18.2];

  const pieData = labels.map((label, index) => ({
    name: label,
    population: values[index],
    color: `rgba(0, 122, 255, ${0.6 + (index * 0.4) / labels.length})`,
    legendFontColor: '#000',
    legendFontSize: 14,
  }));

  return (
    <LinearGradient colors={['white', 'blue']} style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>Distribución de Temperaturas Próximas Horas</Text>
        <PieChart
          data={pieData}
          width={screenWidth - 20}
          height={220}
          chartConfig={chartConfig}
          accessor="population"
          backgroundColor="transparent"
          paddingLeft="15"
          absolute
          style={styles.chart}
        />
        <View style={{ marginTop: 20 }}>
          <Button 
            title="Ir a ProgressData" 
            onPress={() => navigation.navigate('ProgressData')} />
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
});
