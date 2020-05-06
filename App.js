import React, {useState} from 'react';
import {View,Text,StyleSheet, FlatList} from 'react-native';
import Header from './components/Header';
import ListItem from './components/ListItem';

import AddItem from './components/AddItem'; 

const App = () => {
  const [items,setItems] = useState([
    {id:Math.floor(Math.random() * 1000) ,text:'Milk'},
    {id:Math.floor(Math.random() * 1000) ,text:'Eggs'},
    {id:Math.floor(Math.random() * 1000) ,text:'Bread'},
    {id:Math.floor(Math.random() * 1000) ,text:'Juice'}
  ]);


  const deleteItem = (id) =>{
    setItems(prevItems=>{
      return prevItems.filter(item=>item.id!=id);
    });
  };
  const addItem = (text) =>{
    setItems(prevItems=>{
      console.log("adding item")
      return [{id:Math.floor(Math.random() * 1000),text},...prevItems];
    });
  };
  return (
      <View style={styles.container}>
        <Header title='Shpooing List'/>
        <AddItem addItem={addItem}/>
        <FlatList 
          data={items} renderItem={({item}) => (
            <ListItem item={item} deleteItem={deleteItem}/>
          )} />
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
