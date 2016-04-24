/* @flow */
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  NavigatorIOS,
} from 'react-native';

import ScoreBoard from './src/components/ScoreBoard.js'

class boardIos extends Component {
  render() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: 'Placar',
          component: ScoreBoard
        }} />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    //backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('boardIos', () => boardIos);
