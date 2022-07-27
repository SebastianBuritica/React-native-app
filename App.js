import React, { useState } from 'react'
import {Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity, FlatList} from 'react-native'
import SingleTodo from './components/SingleTodo'
// import { Button } from 'react-native-web'
// import reactLogo from './assets/reactLogo.png'
// import * as ImagePicker from 'expo-image-picker' 

const App = () => {
  const [todo, setTodo] = useState('')
  const [todos, setTodos] = useState([])

  const handleAddTodo = () => {
    if(!todo) return 

    setTodos([...todos,{id:Date.now(), text:todo }])
    setTodo('')
  }

  console.log(todos)

  return ( 
    <View style={styles.container}>
      <Text style={styles.title}>Yes, another toDo app! 👾</Text>
      
    <View style={styles.inputContainer}>
      <TextInput 
      onChangeText={(text) => setTodo(text)}
      value={todo}
      placeholder='Enter a ToDo' 
      style={styles.input}
      />
      <TouchableOpacity onPress={handleAddTodo}>
        <Text style={styles.btn}>Go</Text>
      </TouchableOpacity>
    </View>

    <View style={{ width: '100%', marginTop: 15}}>
      <FlatList 
        data={todos}
        renderItem={({item})=> ( 
        <SingleTodo todo={item} todos={todos} setTodos={setTodos}/>
  )}
        
      />
    </View>

    <StatusBar style='auto' />
    </View>

    
  )
}

const styles = StyleSheet.create({
  container: {flex: 1,  alignItems: 'center', padding: 10, backgroundColor: '#b0c4de'},
  title: {fontSize: 30, fontWeight: '700', marginBottom: 8},
  inputContainer: {flexDirection: 'row', marginHorizontal: 10, alignItems: 'center'},
  input: {flex: 1, backgroundColor: '#fff', shadowColor: 'black', elevation: 10, marginRight: 4, borderRadius: 50, paddingHorizontal: 20, paddingVertical: 9},
  btn: {padding: 10, backgroundColor: '#fff', borderRadius: 50, elevation: 10}
})

export default App