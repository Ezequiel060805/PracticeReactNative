import React, {useState, useRef} from "react";
import {View,Text,Button,StyleSheet} from "react-native";

export default function MeditacionScreen({ navigation}) {
    const [tiempo,setTiempo] = useState(0);
    const [activo,setActivo] = useState(false);
    const intervalo =useRef(null);

    const iniciar = () => {
        if (!activo) {
            setActivo(true);
            intervalo.current = setInterval(() => {
                setTiempo((prev) => prev + 1);
            }, 1000);
        }
    };

    const pausar = () => {
        clearInterval(intervalo.current);
        setActivo(false);
    };

    const reiniciar = () => {
        clearInterval(intervalo.current);
        setActivo(false);
        setTiempo(0);
    };

    const formatoTiempo = (segundos) => {
        const min = Math.floor(segundos / 60);
        const sec = segundos % 60;
        return `S{min.toString().padStart(2,'0')}:${sec.toString().padStart(2,'0')}`;
    };

    return (
        <View style={StyleSheet.container}>
            <Text style={styles.title}>Meditacion</Text>
            <Text style={styles.times}>{formatoTiempo(tiempo)}</Text>

            <View style={styles.buttonGroup}>
                <Button title={activo ? "Pausar" : "Iniciar"} onPress={activo ? pausar : iniciar} />
                <Button title="Reiniciar" onPress={reiniciar} />
            </View>

            <View style={styles.bottomButton}>
                <Button title="Ir a sueño" onPress={() => navigation.navigate('Sueno')}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f1f9ff'
    },
    title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
        color: '#2c94d4',
    },
    timer: {
        fontSize: 64,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#333'
    },
    buttonGroup: {
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20
    },
    buttonGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        gap: 10,
        marginBottom: 20
    },
    bottomButton: {
        marginTop: 30,
        width: '60%',
        alignSelf: 'center'
    }
});
