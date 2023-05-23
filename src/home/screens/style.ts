import { StyleSheet, Text, View } from 'react-native';

export const Style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,

  },

  eventName: {
    color: '#FDFCFE',
    fontSize: 32,
    fontWeight: 'bold',
    marginTop: 48
  },

  eventDate: {
    color: '#FDFCFE',
    fontSize: 16,
    marginBottom: 15
  },

  imput: {
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    flex: 1

  },

  buttonTextAdd: {
    color: '#fff',
    fontSize: 24,
  },

  buttonAdd: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31CF67',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 5
  },

  add: {
    flexDirection: 'row',
  },

  list: {
    color: '#fff',
    fontSize: 24,
    marginTop: 30,
    marginBottom: 50
  },


  listEmptyText: {
    color: '#FFF',
    fontSize: 14,
    textAlign: 'center',

  },

})