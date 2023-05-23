import { TouchableOpacity, StyleSheet, Text, TextInput, View, FlatList, Alert } from 'react-native';
import { Style } from './style'
import { Participant } from '../components/Participant/'
import { useState } from 'react'




export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');


  function handleParticipantAdd() {
    if (participants.includes(participantName)) {
      return Alert.alert("Participante existe", "Já existe um participante na lista com esse nome.");
    }
    setParticipants(prevState => [...prevState, participantName]);
    setParticipantName('');
  }


  function handleParticipantRemove(name: string) {
    Alert.alert('Remover', `Remover o participante ${name}?`, [
      {
        text: 'sim',
        onPress: () => setParticipants(prevState => prevState.filter(participant => participant !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }

  return (
    <View style={Style.container}>
      <Text style={Style.eventName}>
        Nome do evento
      </Text>
      <Text style={Style.eventDate}>
        Sexta, 19 de Maio de 2023
      </Text>

      <View style={Style.add}>
        <TextInput
          style={Style.imput}
          placeholder="Digite nome do Participante"
          placeholderTextColor="#686868"
          onChangeText={setParticipantName}
          value={participantName}
        />

        <TouchableOpacity style={Style.buttonAdd} onPress={handleParticipantAdd} >
          <Text style={Style.buttonTextAdd}>
            +
          </Text>
        </TouchableOpacity>
      </View>
      <Text style={Style.list}>
        Participantes
      </Text>
      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (<>
          <Text style={Style.listEmptyText}>
            Ninguém chegou no evento ainda?
          </Text>
          <Text style={Style.listEmptyText}>
            Adicione participantes a sua lista de presença.
          </Text>
        </>
        )}
      />
    </View>
  )
}