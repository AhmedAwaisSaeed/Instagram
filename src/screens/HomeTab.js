import React,{useState,useEffect} from 'react'
import { StyleSheet, Text, View,ActivityIndicator,SafeAreaView } from 'react-native'

import {_getAllFeeds,_setCurrentFeed} from '../store/actions/ActionFeeds';
import Feeds from '../components/Feeds';
import {connect} from 'react-redux';
import { Navigation } from "react-native-navigation";
const HomeTab = (props) => {
    const [loader, setLoader] =useState(true);
    const [feedsArray, setfeedsArray] =useState("");


    const moveToScreen = (screenName)=>{

      

      console.log("move to screen");

      Navigation.push(props.componentId, {
          component: {
            name: screenName,
            passProps: {
    
            },
            options: {
              statusBar: {
                // drawBehind: true,
                visible: false
              }
            }
          }
        });

    }

    useEffect(() => {
        let obj={
            "token": "R4GiauUyCIYCQwf-dUnhWA",
      "data": {
        "id": "personNickname",
        "email": "internetEmail",
        "feeds":{
            "id": "personNickname",
        "productName": "productName",
        "avatar": "personAvatar",
        "numberInt": "numberInt",
        "stringShort": "stringShort",
         "_repeat": 10
        }

        
         
       
     
      }
    }
    props._getAllFeeds(obj).then(status=>{
        if(status.status)
        {
            setLoader(false);
        }
    })

    

    }, [])


    if(loader)
    { 
      return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>

<ActivityIndicator size="large" color="#9D2382" />
      </View>
      )
    }
    else
    {
        return(
        <SafeAreaView style={{flex:1}}>

        <View style={{flex:1,marginBottom:"20%"}}>
            <Feeds
            feedsArray={props.feeds}
            setCurrentFeed={props._setCurrentFeed}
            moveToScreen={moveToScreen}></Feeds>
        </View>
        </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({})

const mapStateToProps = state => {
    
    return {
       feeds: state.FeedsReducer.feeds,
     
    };
  };
  
  const mapDispatchToProps = dispatch => {
    
    return {
      
  
     _getAllFeeds: (obj) => dispatch(_getAllFeeds(obj)),
     _setCurrentFeed: (feed) => dispatch(_setCurrentFeed(feed)),
    
  
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(HomeTab);
