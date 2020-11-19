import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';
const AllComments = (props) => {
    return (
        <View style={styles.commentsMainView}>
<View style={{flex:0.1,justifyContent:"center",alignItems:"center",
// backgroundColor:"red"
}}>
        <View style={styles.circularView}></View>
                </View>
        
            <View style={{flex:1,justifyContent:"space-between",flexDirection:"row",marginLeft:"2%",alignItems:"center"}}>
                {/* <View style={{flex:0.1,justifyContent:"center"}}> */}
                    <Text style={{fontWeight:"bold"}}>{props.name}</Text>
                    {/* </View> */}
                 <View style={{flex:1,justifyContent:"center",marginLeft:"2%"}}> 
                    <Text>{props.comment}</Text>
                     </View> 
                
            </View>
                


        </View>
    )
}

export default AllComments;

const styles = StyleSheet.create({

    commentsMainView:{
        height:verticalScale(30),
        // backgroundColor:"#03f",
        flexDirection:"row",
        justifyContent:"space-between",
         marginBottom:"2%",
         marginHorizontal:"2%"

    },

    circularView:{

        width:moderateScale(25),
        height:moderateScale(25),
        borderRadius:moderateScale(50)/2,
        backgroundColor:"green",

    }

})
