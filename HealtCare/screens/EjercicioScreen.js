import React from "react";
import { Image, Text, StyleSheet, ScrollView, Button } from 'react-native';

export default function EjercicioScreen({ navigation }) {

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Button title="Ir a Meditacion" onPress={() => navigation.navigate('Meditacion')} />
            <Image
                source={require('../assets/abs.jpg')}
                style={styles.image}/>
            <Text style={styles.text}>Abdominales</Text>
            <Text style={styles.text1}>
                Para hacer abdominales básicos correctamente, sigue estos pasos:{'\n'}
                Acuéstate boca arriba en una colchoneta con las rodillas flexionadas y los pies apoyados en el suelo, separados al ancho de las caderas.{'\n'}
                Coloca las manos detrás de la cabeza sin tirar del cuello o crúzalas sobre el pecho para mayor comodidad.{'\n'}
                Antes de comenzar, contrae el abdomen como si quisieras pegar el ombligo a la columna para activar los músculos.{'\n'}
                Luego, exhala mientras levantas suavemente la cabeza y los hombros del suelo, manteniendo la zona lumbar pegada a la colchoneta, no hace falta sentarte por completo; con despegar los hombros es suficiente.{'\n'} 
                Mantén la mirada hacia el techo para no forzar el cuello y evita usar las manos para impulsarte.{'\n'} 
                Inhala mientras bajas de manera controlada, sin relajar del todo el abdomen entre repeticiones.{'\n'}
                Recuerda hacer el movimientolento y concentrado, priorizando la técnica antes que la cantidad.
            </Text>

            <Image
                source={require('../assets/sentadilla.jpg')}
                style={styles.image}/>
            <Text style={styles.text}>Sentadillas</Text>
            <Text style={styles.text1}>
                Para hacer sentadillas correctamente, comienza de pie con los pies separados al ancho de los hombros, las puntas ligeramente hacia afuera y los brazos extendidos al frente, flexionados o en la cintura para equilibrarte.{'\n'}
                Mantén la espalda recta, el pecho levantado y el abdomen activado durante todo el movimiento.{'\n'}
                Inspira profundamente y, al exhalar, flexiona las rodillas mientras empujas la cadera hacia atrás, como si fueras a sentarte en una silla imaginaria.{'\n'}
                Baja controladamente hasta que tus muslos queden paralelos al suelo, asegurándote de que las rodillas no sobrepasen la punta de los pies y apunten en la misma dirección que estos.{'\n'}
                Al subir, empuja con fuerza a través de los talones, estirando las piernas y contrayendo los glúteos al llegar arriba.{'\n'}
                Repite el movimiento manteniendo un ritmo constante, sin bloquear las rodillas al finalizar cada repetición, y siempre controlando que la espalda no se curve.
            </Text>

            <Image
                source={require('../assets/pesas.jpg')}
                style={styles.image}/>
            <Text style={styles.text}>Brazos</Text>
            <Text style={styles.text1}>
                Para comenzar, colócate de pie con los pies separados al ancho de las caderas, las rodillas ligeramente flexionadas y el torso firme.{'\n'}
                Sujeta una mancuerna en cada mano con un agarre en pronación y los codos pegados a los costados del cuerpo.{'\n'}
                Mantén la espalda recta, los hombros relajados y el abdomen activado para proteger la lumbar.{'\n'}
                Al iniciar el movimiento, inhala y, al exhalar, flexiona los codos llevando las mancuernas hacia los hombros sin separar los codos del torso.{'\n'}
                Mantén un ritmo controlado: sube en 2 segundos y baja en 2-3 segundos, evitando impulsos o usar el cuerpo para levantar el peso.{'\n'}
                En la parte alta, gira ligeramente las muñecas para contraer al máximo el bíceps, pero sin bloquear las articulaciones.{'\n'}
                Al bajar, extiende los brazos casi por completo para mantener tensión constante en el músculo.{'\n'}
                Repite el movimiento con atención a la técnica, no al peso: es mejor usar menos carga y hacerlo bien que lesionarte por exceso.
            </Text>

            <Image
                source={require('../assets/estiramiento.jpg')}
                style={styles.image}/>
            <Text style={styles.text}>Estiramiento</Text>
            <Text style={styles.text1}>
                Para estirar correctamente, comienza por preparar tu cuerpo y entorno.
                Busca un espacio tranquilo donde puedas moverte libremente y coloca una esterilla si vas a trabajar en el suelo.{'\n'}
                Es fundamental recordar que nunca debes estirar músculos fríos, pues esto aumenta el riesgo de lesiones.{'\n'}
                Dedica 2-3 minutos a calentar con movimientos suaves como caminar en el lugar, círculos con los brazos o rotaciones de tobillos.{'\n'}
                Una vez preparado, enfócate en tu respiración: inhala profundamente por la nariz y exhala lentamente por la boca, sincronizando cada exhalación con el momento de mayor tensión en el estiramiento.
            </Text>

            <Image
                source={require('../assets/yoga.jpg')}
                style={styles.image}/>
            <Text style={styles.text}>Yoga</Text>
            <Text style={styles.text1}>
                El yoga es un viaje de conexión entre cuerpo, mente y respiración que comienza con la preparación consciente del espacio y de uno mismo.{'\n'}
                Busca un rincón tranquilo donde puedas tender tu esterilla, lejos de distracciones, y viste ropa que te permita moverte con libertad, sintiendo el aire fluir a través de la tela.{'\n'}
                El momento ideal es aquel en el que puedas entregarte por completo, preferiblemente con el estómago ligero - espera al menos dos horas después de comer - aunque muchos encuentran en el amanecer la energía perfecta para comenzar el día o en el atardecer un refugio para liberar las tensiones acumuladas.{'\n'}
                Al pisar la esterilla, inicia tu práctica sentándote cómodamente con las piernas cruzadas en Sukhasana, la postura fácil, colocando las manos sobre las rodillas con las palmas hacia arriba para abrirte a la experiencia.{'\n'}
                Cierra los ojos suavemente y lleva tu atención al ritmo natural de tu respiración, sintiendo cómo el aire entra fresco por la nariz, llena tus pulmones y abdomen, y sale caliente, llevándose consigo cualquier pensamiento disperso.{'\n'}
                Permanece aquí durante cinco ciclos respiratorios completos, imaginando que con cada exhalación te hundes un poco más en el suelo, arraigándote al presente.
            </Text>

            <Image
                source={require('../assets/cardio.jpg')}
                style={styles.image}/>
            <Text style={styles.text}>Cardio</Text>
            <Text style={styles.text1}>
                Cuando tu cuerpo esté preparado, elige tu modalidad de cardio según tu condición física y preferencias.{'\n'}
                Si eres principiante, la caminata rápida es tu mejor aliada: mantén un ritmo donde puedas hablar con frases cortas pero no cantar, con la postura erguida, mirada al frente y brazos flexionados a 90 grados que se mueven de forma natural.{'\n'}
                Para intensidad media, el trote es ideal - comienza con intervalos de 1 minuto corriendo y 2 caminando, progresando gradualmente.{'\n'}
                Si buscas mayor desafío, el HIIT alterna 30 segundos de esfuerzo máximo con 30-60 segundos de recuperación activa.{'\n'}
                La natación, ciclismo o clases de baile también son excelentes opciones de bajo impacto.
            </Text>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        backgroundColor: 'white',
        padding: 0.5,
        alignItems: 'center'
    },
    image: {
        width: 300,
        height: 200, 
        resizeMode: 'contain'
    },
    text: {
        color: '#2c94d4',
        fontSize: 40,
        textAling: 'center',
        marginHorizontal: 10,
        marginTop: 10
    },
    text1: {
        color: 'black',
        fontSize: 20,
        textAlign: 'justify',
        marginHorizontal: 10,
        marginTop: 10
    }
});