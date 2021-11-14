import { StatusBar } from 'expo-status-bar';
import React, {Component} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default class App extends Component {
  constructor(){
    super();
    this.state = {
      word: "",
      consonantsNo: 0,
      vowelsNo: 0,
      charactersNo: 0
    }
  }

  wordAnalyze(){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let vowelsCount = 0;
    let consonantsCount = 0;
    const charArray = this.state.word;
    const stringSplit = charArray.split('');

    for (let i = 0; i < charArray.length; i++) {
      if (vowels.includes(charArray[i])) {
        vowelsCount++
      }
      else {
        consonantsCount++
      }
    }
    
    this.setState({
      consonantsNo: consonantsCount,
      vowelsNo: vowelsCount,
      charactersNo: charArray.length
    });
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.header}>A Word Analyzer</Text>
        <br></br>
        <br></br>

        <View style={{ flexDirection: 'row'}}>
          <View style={styles.column}>
            <Text>Word</Text>
          </View>
          <View style={styles.column}>
            <TextInput style={styles.column, styles.input} onChangeText={(word) => this.setState({word})} placeholder="Enter here..."/>
          </View>
        </View>
        <br></br>
        
        <View style={{ flexDirection: 'row'}}>
        <View style={styles.column}>

        </View>
          <View style={styles.column}>
            <Button title="Analyze" color="#A9A9A9" onPress={() => this.wordAnalyze()}/>
          </View>
        </View>
        <br></br>

        <View style={{ flexDirection: 'row'}}>
          <View style={styles.column}>
            <Text>Word</Text>
          </View>
          <View style={styles.column}>
            <Text>: {this.state.word}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row'}}>
          <View style={styles.column}>
            <Text>No of Consonants</Text>
          </View>
          <View style={styles.column}>
            <Text>: {this.state.consonantsNo}</Text>
          </View>
        </View>

        <View style={{ flexDirection: 'row'}}>
          <View style={styles.column}>
            <Text>No of Vowels</Text>
          </View>
          <View style={styles.column}>
            <Text>: {this.state.vowelsNo}</Text>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View style={styles.column}>
            <Text>No of Characters</Text>
          </View>
          <View style={styles.column}>
            <Text>: {this.state.charactersNo}</Text>
          </View>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    // justifyContent: 'center',
  },

  header: {
    marginTop: 60,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center', 
    margin: 10,
  },

  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
  },

  column: {
    width: 150,
  },

});
