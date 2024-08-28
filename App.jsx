
import React, {useState} from 'react';

import {Text, View, Button, StyleSheet, TextInput} from 'react-native';

const App = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);

  const clear = () => {
    setDisplay(false);
    setName('');
    setPassword('');
    setEmail('');
  };

  return (
    <View>
      <Text style={{textAlign: 'center', fontSize: 20, paddingTop: 20}}>
        ------------ FORM -------------
      </Text>

      <TextInput
        style={styles.textInput}
        placeholder="Enter user name"
        onChangeText={text => setName(text)}
        value={name}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter user password"
        secureTextEntry={true}
        onChangeText={text => setPassword(text)}
        value={password}
      />

      <TextInput
        style={styles.textInput}
        placeholder="Enter user email"
        onChangeText={text => setEmail(text)}
        value={email}
      />

      <View style={{padding: 20}}>
        <Button
          color={'green'}
          title="Print value"
          onPress={() => setDisplay(true)}
        />
      </View>

      <View style={{padding: 20}}>
        <Button color={'red'} title="clear value" onPress={clear} />
      </View>

      {display ? (
        <View style={{margin:20,padding:20, borderWidth:2,borderColor:'red'}}>
          <Text style={styles.textBox}>user Name is : {name}</Text>
          <Text style={styles.textBox}>user Password is : {password}</Text>
          <Text style={styles.textBox}>user Email is : {email}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  textInput: {
    fontSize: 15,
    color: 'red',
    borderWidth: 3,
    borderColor: 'blue',
    borderRadius:5,
    margin: 15,
  },
  textBox: {
    fontSize: 20,
    paddingTop: 10,
    textAlign: 'center',
  },
});

export default App;
