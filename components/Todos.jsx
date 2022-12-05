import { View, Text, StyleSheet,FlatList } from 'react-native'
import React from 'react'
import { COLORS, Todos, SHADOWS, FONTS, SIZES} from '../constants';
import Header from './Header';



const TodoItem = ({todo})=>{
  if(!todo.task){
    return (
      <View style={styles.taskActions}>
        <Text style={styles.fadeText}>5 items left</Text>

        <Text style={styles.deepText}>Clear completed</Text>
      </View>
    )
  }
  return (
    <View style={styles.taskContainer}>
      <View style={styles.taskChecker}></View>
      <Text style={[styles.task, todo.completed && styles.checked]}>{todo.task}</Text>
    </View>
  )
}


const TaskFilters = ()=>{
  return (
    <View style={styles.taskFilters}>
      <Text style={[styles.deepText, styles.activeText]}>All</Text>
      <Text style={[styles.deepText]}>Active</Text>
      <Text  style={[styles.deepText]}>Completed</Text>
    </View>
  )
}

const TodoList = () => {
  return (
    <>
      <View style={styles.container}>
        
        <FlatList 
          contentContainerStyle={styles.content}
          
          data={Todos}
          renderItem={({item:todo})=><TodoItem todo={todo}/>}
          keyExtractor={(item)=> item.id}
          showsVerticalScrollIndicator={false}
          ItemSeparatorComponent={<View style={styles.line}></View>}
          ListHeaderComponent={<Header/>}
          
          ListFooterComponent={()=>(
            <>
              <TaskFilters/>


              <View style={styles.footer}>
                <Text style={styles.fadeText}>Drag and drop to reorder list</Text>
              </View>
            </>
          )}
        />

        
      </View>

    </>
  )
}

export default TodoList;


const styles = StyleSheet.create({
  container:{
    alignItems:'center',    
    width: '100%',
  },

  content:{
    maxWidth:'99%',
    width:500,
    backgroundColor:COLORS.lightMode.veryLightGray,
    borderRadius:10,
  },

  line:{
    height:1,
    backgroundColor:COLORS.lightMode.veryLightGrayishBlue,
  },
  
  taskContainer:{
    paddingVertical:20,
    paddingLeft:10,
    paddingRight:3,
    backgroundColor:'transparent',

    flexDirection:'row',
    alignItems:'center',

  },

  taskChecker:{
    width:20,
    height:20,
    borderColor:COLORS.lightMode.veryLightGrayishBlue,
    borderWidth:1,
    borderRadius:10,

    marginRight:10,
  },
  task:{
    fontFamily:FONTS.regular, 
    fontSize:SIZES.font,
  },
  checked:{
    color:COLORS.darkMode.darkGrayishBlue,
    textDecorationLine:'line-through',
  },
  taskActions:{
    borderTopWidth:1,
    borderTopColor:COLORS.lightMode.veryLightGrayishBlue,
    padding:15,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',



  },

  taskFilters: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-evenly',
    marginTop:15,
    paddingVertical:13,
    backgroundColor:COLORS.lightMode.veryLightGray,
    ...SHADOWS.dark,
  },


  footer:{

    justifyContent:'center',
    alignItems:'center',

    marginVertical:20,
  },



  fadeText:{
    fontFamily:FONTS.regular, 
    fontSize:SIZES.font,
    color:COLORS.lightMode.darkGrayishBlue,
  },
  deepText:{
    fontFamily:FONTS.bold, 
    fontSize:SIZES.font,
    color:COLORS.darkMode.darkGrayishBlue,
  },
  activeText:{
    
    color:COLORS.activeLink,
  }
})