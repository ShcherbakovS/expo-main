import { StyleSheet, View, Pressable, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link} from 'expo-router';

type Props = {
  label: string;
  theme?: 'primary';
  onPress?: () => void;
};

export default function Button({ label, theme, onPress }: Props) {
  if (theme === 'primary') {
    return (
      <View
        style={[
          styles.buttonContainer
        ]}>
        <Pressable style={[styles.button]} onPress={onPress}>
          <Text style={[styles.buttonLabel]}>{label}</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <View style={styles.buttonContainer}>
      <Link href='/two' asChild>
      <Pressable style={styles.button} onPress={() => alert('Фото добавлено')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: { borderRadius: 8, backgroundColor: '#0072C8', width: 272, height: 40, paddingVertical: 8,  alignSelf: 'center', marginBottom: 15},
/*
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },*/
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel:{fontSize: 16, fontWeight: '400', color: '#F5F5F5', textAlign: 'center',},
/*
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },*/
});