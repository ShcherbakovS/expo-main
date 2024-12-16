import { StyleSheet, View, TouchableWithoutFeedback, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link} from 'expo-router';

type Props = {
  title: string;
  number1: number;
  number2: number;
  number3: number;
  text1: string;
  text2: string;
  text3: string;
  handlePress?: () => void;
};

export default function FormForObj({title, number1, number2, number3, text1, text2, text3, handlePress }: Props) {
 {
    return (
      <TouchableWithoutFeedback onPress={handlePress}>
        <View>
            <Text style={{ fontSize: 16, color: '#1E1E1E', fontWeight: 400, marginBottom: 8 }}>{title}</Text>
            
       

        <View style={{ backgroundColor: '#F8FAFC', flexDirection: 'row', width: '100%', height: 48, paddingTop: 6, justifyContent: 'center', marginBottom: 41,}}>

            <View style={{width: '33%', }}>
            <Text style={{ fontSize: 14, color: '#334155', textAlign: 'center' }}>{text1}</Text>
            <Text style={{ fontSize: 14, color: '#334155', textAlign: 'center' }}>{number1}</Text>
            </View>

            <View style={{width: '33%', }}>
            <Text style={{ fontSize: 14, color: '#334155', textAlign: 'center' }}>{text2}</Text>
            <Text style={{ fontSize: 14, color: '#334155', textAlign: 'center' }}>{number2}</Text>
            </View>
            
            <View style={{width: '33%', }}>
            <Text style={{ fontSize: 14, color: '#334155', textAlign: 'center' }}>{text3}</Text>
            <Text style={{ fontSize: 14, color: '#334155', textAlign: 'center' }}>{number3}</Text>
            </View>
        </View> 
        </View>
        </TouchableWithoutFeedback>

        

    );
  }
}

