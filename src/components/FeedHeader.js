import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';

const FeedHeader = (props) => {
    return (
        <View style={{flex:1}}>
        <View style={{flex:1,flexDirection:"row",justifyContent:"space-between"}}>
        <View style={{flex:0.15,justifyContent:"center",alignItems:"center",
    // backgroundColor:"grey"
    }}>
            <View style={styles.circularView}>
                <Image style={styles.imageStyle} source={{uri:props.avatar}}></Image>
            </View>

        </View>
        <View style={{flex:1,justifyContent:"center"}}><Text>{props.productName}</Text></View>
        </View>
    </View>
    )
}

export default FeedHeader;

const styles = StyleSheet.create({
    circularView:{

        width:moderateScale(25),
        height:moderateScale(25),
        borderRadius:moderateScale(50)/2,
         backgroundColor:"green",
        justifyContent:"center",
        alignItems:"center"

    },
    imageStyle:{
        height:"70%",
        width:"100%",
        resizeMode:"contain"

    }
})
