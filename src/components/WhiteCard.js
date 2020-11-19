import React from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';

const WhiteCard = (props) => {
    return (
        
        <View style={
        [styles.cardView ,props.style]}>
        
            {props.children}
            
        </View>
        
    )
}

export default WhiteCard;

const styles = StyleSheet.create({


    cardView: {
        shadowColor: "rgba(0, 0, 0, 0.19)",
        shadowOffset: {  width: 0,
            height: 17},
        
        
    
        elevation: 12,
        

        shadowRadius: 13,
        shadowOpacity: 1,
        borderStyle: "solid",
     
        padding:"12%",
       
    
    
         backgroundColor: '#FFFF',
       
        borderRadius: 13,
   
      },


})






