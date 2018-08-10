import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import t from 'tcomb-form-native';

const styles = StyleSheet.create({
  constainer: {
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
  },
});

const usuario = t.struct({
  email: t.maybe(t.String),
  usuario: t.String,
  senha: t.String,
  admin: t.Boolean,
});
const Formi = t.form.Form;

export default class Form extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Formi type={usuario} />
      </View>
    );
  }
}
