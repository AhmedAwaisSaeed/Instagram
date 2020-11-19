import React from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';

const TopBar = (props) => {
  
    return(

    <View style={[styles.rowContainer,props.style]}>
      
    <TouchableOpacity
    onPress={()=> props.back()}
    style={{flex:0.2,
      
    //    backgroundColor:"orange",
      justifyContent:"center",
      alignItems:"center"
      }}>

        <Image
            source={require('../assets/arrowPointToRight.png')}
            style={{
                // flex:1,
                 width:"30%",
                 height:"30%",
                 
                  // backgroundColor:"red",
                resizeMode:"contain",
                // tintColor:"#fff"
            
        }}
            ></Image> 
      


      </TouchableOpacity>


      




    <View style={{flex:1,
       justifyContent:"center",
    //    alignItems:"center",
      // backgroundColor:"red",
    // alignItems:"center"
    }}><Text style={styles.titleText}>{props.title}</Text></View>
    
  
      
    </View>

    )
  }
  


export default TopBar;

const styles = StyleSheet.create({
rowContainer:{

  height:verticalScale(60),
  flexDirection:"row",
  justifyContent:"space-between",
//   backgroundColor:"pink",
  
   borderBottomWidth:0.5,
  

},

  titleText:{
    fontSize:RFValue(20),
    
    color: "#000000",
    lineHeight: 27,
    letterSpacing: 0,
  }
})


