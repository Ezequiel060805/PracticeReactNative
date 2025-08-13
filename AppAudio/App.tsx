import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';
import { Audio } from 'expo-av';


export default function App() {
  const [alerts, setAlerts] = useState([]);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAlert();
    }, 10000); // timer en el que se envia mensajs

    return () => {
      clearInterval(interval);
      if (sound) sound.unloadAsync();
    };
  }, []);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('./assets/alert.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  };

  const fetchAlert = () => {
    const newAlert = {
      id: Date.now().toString(),
      title: 'Alerta exceso de papasito',
      message: 'Actividad sospechosa detectada',
      time: new Date().toLocaleTimeString(),
    };
    setAlerts(prev => [newAlert, ...prev]);
    playSound();
  };

  const renderItem = ({ item }) => (
    <View style={styles.messageBubble}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.message}>{item.message}</Text>
      <Text style={styles.time}>{item.time}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}> Papasito Center </Text>
      <FlatList
        data={alerts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        inverted // Para mostrar los mensajes nuevos abajo como en WhatsApp
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'blue',
    textAlign: 'center',
    marginBottom: 10,
  },
  messageBubble: {
    backgroundColor: '#ffffff',
    padding: 12,
    borderRadius: 12,
    marginBottom: 10,
    alignSelf: 'flex-start',
    maxWidth: '85%',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  title: {
    fontWeight: 'bold',
    color: '#d93025',
    marginBottom: 4,
  },
  message: {
    fontSize: 15,
    color: '#333333',
  },
  time: {
    fontSize: 12,
    color: 'gray',
    marginTop: 6,
    alignSelf: 'flex-end',
  },
});
