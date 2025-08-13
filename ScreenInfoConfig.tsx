import { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ListRenderItemInfo,
} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

// Definimos la interfaz de cada opción
interface Option {
  id: string;
  title: string;
  icon: string; // Nombre del ícono en FontAwesome
  info: string;
}

// Props del componente, ajusta "any" a tu tipo de navegación si usas React Navigation
interface SettingsScreenProps {
  navigation: any;
}

// Lista de opciones
const options: Option[] = [
  {
    id: '1',
    title: 'Notifications',
    icon: 'bell-o',
    info: 'Manage your notification preferences, including push and email alerts.',
  },
  {
    id: '2',
    title: 'Playback and performance',
    icon: 'play-circle-o',
    info: 'Adjust video quality, data usage, and playback performance settings.',
  },
  {
    id: '3',
    title: 'Connected apps',
    icon: 'link',
    info: 'See and manage apps and devices connected to your YouTube account.',
  },
  {
    id: '4',
    title: 'Privacy',
    icon: 'lock',
    info: 'Control your privacy settings and how your data is used.',
  },
];

export default function SettingsScreen() {
  // Estado para ítems expandidos
  const [expanded, setExpanded] = useState<string[]>([]);

  // Alterna expansión de descripción
  const toggleExpand = (id: string): void => {
    setExpanded(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  // Renderizador de ítems con tipado
  const renderItem = ({ item }: ListRenderItemInfo<Option>) => (
    <View>
      <TouchableOpacity style={styles.item} onPress={() => toggleExpand(item.id)}>
        <FontAwesome name={item.icon as any} size={24} style={styles.icon} />
        <Text style={styles.title}>{item.title}</Text>
        <FontAwesome
          name={expanded.includes(item.id) ? 'chevron-up' : 'chevron-right' as any}
          size={24}
          style={styles.arrow}
        />
      </TouchableOpacity>
      {expanded.includes(item.id) && (
        <View style={styles.infoContainer}>
          <Text style={styles.info}>{item.info}</Text>
        </View>
      )}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList<Option>
        data={options}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  item: {
    backgroundColor: '#fff',
  },
  icon: {
    marginRight: 20,
    color: '#606060',
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: '#030303',
  },
  arrow: {
    color: '#606060',
  },
  separator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#e0e0e0',
    marginLeft: 64,
  },
  infoContainer: {
    backgroundColor: '#f9f9f9',
  },
  info: {
    fontSize: 14,
    color: '#606060',
  },
});


