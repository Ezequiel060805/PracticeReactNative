import { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';

export default function CaptchaLocal() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [userInput, setUserInput] = useState('');

  // Generar nueva pregunta aleatoria
  const generateCaptcha = () => {
    const a = Math.floor(Math.random() * 10) + 1;
    const b = Math.floor(Math.random() * 10) + 1;
    setNum1(a);
    setNum2(b);
    setUserInput('');
  };

  const correctAnswer = num1 + num2;

  const verifyCaptcha = () => {
    if (!userInput.trim()) {
      Alert.alert('Campo vacio', 'Por favor responde la pregunta');
      return;
    }

    if (parseInt(userInput.trim()) === correctAnswer) {
      Alert.alert('Correcto', 'CAPTCHA APROVADO!!');
    } else {
      Alert.alert('Incorrecto', 'Intenta de nuevo');
      generateCaptcha(); // Generar uno nuevo
    }
  };

  useEffect(() => {
    generateCaptcha(); // al iniciar
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Verificación CAPTCHA</Text>
      <Text style={styles.question}>¿Cuánto es {num1} + {num2}?</Text>

      <TextInput
        placeholder="Tu respuesta"
        keyboardType="numeric"
        value={userInput}
        onChangeText={setUserInput}
        style={styles.input}
      />

      <View style={styles.buttons}>
        <Button title="Verificar" onPress={verifyCaptcha} />
        <View style={{ width: 10 }} />
        <Button title="Nuevo" onPress={generateCaptcha} color="gray" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 80,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  title: {
    fontSize: 22,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  question: {
    fontSize: 20,
    marginBottom: 12,
  },
  input: {
    borderBottomWidth: 1,
    width: '60%',
    marginBottom: 20,
    fontSize: 18,
    padding: 5,
    textAlign: 'center',
  },
  buttons: {
    flexDirection: 'row',
    marginTop: 10,
  },
});
