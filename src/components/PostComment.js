import React,{useState} from 'react'
import { View, Text,StyleSheet,TextInput, TouchableOpacity } from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';

const PostComment = (props) => {

    const [comment, setComment] = useState("");


    return (
        <View style={[styles.InputTextView]}>
            <View style={{flex:1}}>
          <TextInput
  
            style={[styles.InputTextStyle]}


            onChangeText={(value)=>setComment(value)}
            value={comment}
             placeholder={"Add a Comment"}
            
             placeholderTextColor="#808080"
            
          />
          </View>
          <TouchableOpacity onPress={()=>props.setCommentsArray(comment)} style={{flex:0.2,backgroundColor:"pink",justifyContent:"center",alignItems:"center"}}>
              <Text>Post</Text>

          </TouchableOpacity>
       
        </View>
    )
}

export default PostComment;
const styles = StyleSheet.create({

    InputTextStyle: {
        flex: 1,
     
      color: '#000000',
      padding: 0,
      
      
   
    },
    InputTextView:{

        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
        // backgroundColor:"red"
     
      

    },

});
