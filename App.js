import React from 'react';
import {
  StyleSheet, Text, View,
} from 'react-native';
import Form from './components/Form';

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4e006d',
  },
});

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.paragraph}>
          Hello World !
        </Text>
        <Form />
      </View>
    );
  }
}
