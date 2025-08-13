// SleepScreen.js
import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function SuenoScreen() {
  const [horaDormir, setHoraDormir] = useState(null);
  const [horaDespertar, setHoraDespertar] = useState(null);
  const [duracion, setDuracion] = useState(null);

  const irADormir = () => {
    const ahora = new Date();
    setHoraDormir(ahora);
    setHoraDespertar(null);
    setDuracion(null);
  };

  const despertar = () => {
    const ahora = new Date();
    setHoraDespertar(ahora);
    if (horaDormir) {
      const diferencia = (ahora - horaDormir) / 1000; // segundos
      const horas = Math.floor(diferencia / 3600);
      const minutos = Math.floor((diferencia % 3600) / 60);
      setDuracion(`${horas} horas y ${minutos} minutos`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registro de Sueño</Text>

      <View style={styles.buttonContainer}>
        <Button title="Hora de dormir" onPress={irADormir} />
        <Button title="Hora de despertar" onPress={despertar} />
      </View>

      {horaDormir && (
        <Text style={styles.text}>Hora de dormir: {horaDormir.toLocaleTimeString()}</Text>
      )}

      {horaDespertar && (
        <Text style={styles.text}>Hora de despertar: {horaDespertar.toLocaleTimeString()}</Text>
      )}

      {duracion && (
        <Text style={styles.resultado}>Dormiste {duracion}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
  },
  resultado: {
    fontSize: 20,
    color: '#00796b',
    fontWeight: 'bold',
    marginTop: 15,
  },
});
