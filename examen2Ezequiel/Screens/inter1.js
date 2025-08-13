import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import axios from 'axios';
import { Audio } from 'expo-av';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function inter1({navigation}) {
  const [alerts, setAlerts] = useState([]);
  const [sound, setSound] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchAlert();
    }, 50000); // timer en el que se envia mensajs

    return () => {
      clearInterval(interval);
      if (sound) sound.unloadAsync();
    };
  }, []);

  const playSound = async () => {
    const { sound } = await Audio.Sound.createAsync(
      require('../assets/alert.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  };

  const fetchAlert = () => {
    const newAlert = {
      id: Date.now().toString(),
      title: 'Alerta exceso de papasito',
      message: 'Hola profe!',
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
   <LinearGradient
      colors={['white', '#9acd32']}
      style={{ flex: 1 }}
    >
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Examencito Precious</Text>
      <Button title="Ir a inter2" onPress={()=> navigation.navigate('interfaz2')} />
      <FlatList
        data={alerts}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        inverted // Para mostrar los mensajes nuevos abajo como en WhatsApp
      />
    </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9acd32',
    paddingHorizontal: 10,
    paddingTop: 40,
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
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
    color: 'white',
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
