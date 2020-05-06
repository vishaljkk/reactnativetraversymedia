import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import Header from './components/Header';

const App = () => {
  return (
      <View style={styles.container}>
        <Header title='Shpooing List'/>
      </View>
  );
};

Header.defaultProps = {
  title: 'Shopping List',
};


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
})


export default App;
