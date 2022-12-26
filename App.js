import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoItem';
import AddTodo from './components/addTodo';

export default function App() {

  const [todos, setTodos] = useState([
    {text: 'buy coffee', key: '1'},
    {text: 'buy milk', key: '2'},
    {text: 'buy beer', key: '3'},
  ])

  const pressHandler = (key) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.key !== key ) )
  }

  const submitHandler = (text) => {
    if(text.length > 3){
      setTodos((prevTodos) => [...prevTodos, { text, key: Math.random().toString() }])
    } else {
      Alert.alert('OOPS', 'Todos must be over 3 characters long', [
        {text: 'OK', onPress: () => console.log('OK Pressed')}
      ])
    }
   
}

  return (
    <>
    <View style={styles.container}>
    <Header />
      <View style={styles.content}>
      <AddTodo submitHandler={submitHandler} />
        <View style={styles.list}>
          <FlatList 
            data={todos}
            renderItem={({item}) => (
              <TodoItem item={item} pressHandler={pressHandler} />
            )}
          />
        </View>
      </View>
      
    </View>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderWidth: 2, borderColor: '#000', borderRadius: 4 }}>
      <View style={{ flex: 1, margin: 4 }}>
        <Text>Column 1, Row 1</Text>
      </View>
      <View style={{ flex: 1, margin: 4 }}>
        <Text>Column 2, Row 1</Text>
      </View>
      <View style={{ flex: 1, margin: 4 }}>
        <Text>Column 1, Row 2</Text>
      </View>
      <View style={{ flex: 1, margin: 4 }}>
        <Text>Column 2, Row 2</Text>
      </View>
    </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 40,

  },
  list: {
    marginTop: 20,
  }
});
