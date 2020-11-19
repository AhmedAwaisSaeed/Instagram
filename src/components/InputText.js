import React, {useState} from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';

const InputTextView = props => {
  
  return (
  <View style={{flex:1,
  flexDirection:"row",justifyContent:"space-between",

  }}>
      
       <View style={{flex:0.2,
        // backgroundColor:"red",
        justifyContent:"center",alignItems:"center"}}>
           <Text>Icon</Text>
       </View>
       
       
        <View style={[styles.InputTextView]}>
          <TextInput
  
            style={[styles.InputTextStyle, props.style]}
            {...props}

            onChangeText={(value)=>props.onChange(value)}
            value={props.value}
            onFocus={()=>props.onFocus(true)}
             placeholder={props.label}
             placeholderTextColor="#808080"
            
          />
       
        </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
    InputTextView:{

        flex:1,
     
      

    },
  InputTextStyle: {
      flex: 1,
   
    color: '#000000',
    padding: 0,
    
    
 
  },
  labelTextStyle: {

    color: '#080808',
    fontSize: RFValue(16),
    
  },
});

export default InputTextView;
