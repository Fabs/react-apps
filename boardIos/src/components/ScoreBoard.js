import React, {
  View,
  Text,
  StyleSheet
} from 'react-native';
export default class ScoreBoard extends React.Component {
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.welcome}> Here points go :D</Text>
        <Text> Good JOB</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'black',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
