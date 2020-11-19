import React,{useState} from 'react'
import { StyleSheet, Text, View,FlatList,Image, TouchableOpacity } from 'react-native'

import WhiteCard from '../components/WhiteCard';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';
import ReadMore from 'react-native-read-more-text';
import FeedHeader from '../components/FeedHeader';


const Feeds = (props) => {

    const _renderTruncatedFooter = (handlePress) => {
        return (
          <Text style={[styles.cardText,
        //   {backgroundColor:"grey"}
          {color:"#B3BBC6"}]} onPress={handlePress}>
            ...more
          </Text>
        );
      }
    
     const  _renderRevealedFooter = (handlePress) => {
        return (
          <Text style={[styles.cardText,
          {color:"#B3BBC6"}]} onPress={handlePress}>
            Show less
          </Text>
        );
      }
    
     const  _handleTextReady = () => {
    
      }
    
  

const _renderList=(rowData)=>{

    const item=rowData.item;
    const index=rowData.index;
    let words=item.stringShort.split(" ").length;
    console.log(words);
    return(

        
        <View style={{
            flex:1,
        //   backgroundColor:"orange",
        marginBottom: (index+1 == props.feedsArray.length) ? null:"5%"}}>
          
        <WhiteCard
        style={styles.feedCardStyle}>
              <View style={{height:"15%",backgroundColor:"#0ef"}}>
            <FeedHeader
                avatar={item.avatar}
                productName={item.productName}
                >
            </FeedHeader>
            </View>
           
            <View style={{height:"85%",
            backgroundColor:"red"
            }}>
            <Image source={{uri:item.avatar}} style={styles.imageStyle}></Image>
            </View>


        </WhiteCard>

        <View style={styles.likesViewStyle}>
        <Text style={{fontWeight:"bold"}}>{item.numberInt} Likes</Text>
        </View>

        <View style={styles.descriptionView}>
        
        <ReadMore
              numberOfLines={1}
              renderTruncatedFooter={_renderTruncatedFooter}
              renderRevealedFooter={_renderRevealedFooter}
              onReady={_handleTextReady}>
              <Text style={styles.cardText}>
                {item.stringShort}
              </Text>
            </ReadMore>
            <TouchableOpacity onPress={()=>{
                props.setCurrentFeed(index);
                props.moveToScreen("CommentsScreen");
                
                }}
                style={{marginTop:"2%"}}>
            <Text style={[styles.cardText,{fontWeight:"bold"}]}>View All comments</Text>
        </TouchableOpacity>
        </View>

        

        </View>

    )

}

    return (
        <View style={{flex:1,
        }}>
        <View style={styles.allFeedsView}>
            <Text style={[styles.titleText,{color:"#00CCBC"}]}>... All Feeds ...</Text>
        </View>
        <View style={{flex:1}}>
        <FlatList
            data={props.feedsArray}
            renderItem={_renderList}
            keyExtractor={(id,index)=>String(index)}
            removeClippedSubviews={false}>

        </FlatList>
            </View>
        </View>
    )
}

export default Feeds;

const styles = StyleSheet.create({
    allFeedsView:{
        height:verticalScale(20), 
        marginVertical:"2%",
        justifyContent:"center",
        alignItems:"center"

    },
    titleText:{
        fontSize:RFValue(15),
        fontWeight:"bold",
        color:"#000"
    },
    center:{
        justifyContent:"center",
        alignItems:"center",
        flex:1
    },
    cardText:{
        fontSize:RFValue(12),
        textAlign:"left",
        
        // backgroundColor:"green"
    },
    feedCardStyle:{

        height:verticalScale(250),
        width:"100%",
       
       padding:0,      
       borderRadius: 8,
    
       elevation:5,
        margin:"3%",
        marginLeft:0,
       backgroundColor:"#ffff",

    },
    likesViewStyle:{

        height:verticalScale(10),
        marginHorizontal:"3%"

    },
    descriptionView:{
        flex:1,
        //  backgroundColor:"pink",
        marginHorizontal:"3%",
        marginVertical:"5%"
    },
    imageStyle:{
        flex:1,
        resizeMode:"contain"

    }
})
