import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Style } from './style'

type Props = {
  name: string;
  onRemove: () => void;
}

export function Participant({ name, onRemove }: Props) {

  return (
    <>
      <View style={Style.container}>
        <Text style={Style.name}>
          {name}
        </Text>


        <TouchableOpacity style={Style.buttonRemove} onPress={onRemove}>
          <Text style={Style.buttonTextRemove}>
            -
          </Text>
        </TouchableOpacity>
      </View>
    </>
  )
}