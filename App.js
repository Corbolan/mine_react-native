import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native'
import params from './src/params';
import Field from './src/Components/Field'

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle}>Iniciando o Mines!</Text>
        <Text style={styles.sectionDescription}>Tamanho de grade:
        {params.getRowsAmount()}x{params.getColumnsAmount()}</Text>
        <Field/>
        <Field opened/>
        <Field opened nearMines={1}/>
        <Field opened nearMines={2}/>
        <Field opened nearMines={3}/>
        <Field opened nearMines={6}/>
      </View>
    )
  }
};


const styles = StyleSheet.create({
  container: {
    
    marginTop: '70%',
    paddingHorizontal: '20%',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    textAlign: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
});

