import React,{Component} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TouchableOpacity
  } from 'react-native';

  
  


const MyButton = (props) =>{


    return(
        
       
       
                       
        <TouchableOpacity onPress={()=>props.on_touch()} style={styles.ButtonView}>
      

            {props.children}
            
            
        </TouchableOpacity>
     

        

    )



}


const styles = StyleSheet.create({
    
ButtonView: {

//  height:55,
flex:1,

justifyContent:"center",
alignItems:"center",
// borderWidth:1,
// borderRadius:20,

// marginLeft:10,
// marginRight:10


},


});

export default MyButton;

