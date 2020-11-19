import React from 'react'
import { StyleSheet, Text, View,SafeAreaView,FlatList } from 'react-native';
import TopBar from '../components/TopBar';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';
import { Navigation } from "react-native-navigation";
import {connect} from 'react-redux';
import PostComment from '../components/PostComment';
import { _setComments } from '../store/actions/ActionComments';
import AllComments from '../components/AllComments';

const CommentsScreen = (props) => {

    const back_to_screen=()=>{

        Navigation.pop(props.componentId);
      
      }

      const setCommentsArray = (currentComment)=>{

        let obj={

            userId:1,
            name:"abc",
            comment:currentComment

        }

        let allCommentsTemp=[...props.comments];

        allCommentsTemp[props.cuurentFeed].feedComments.push(obj);

        props._setComments(allCommentsTemp);
  
  
  
  
      }
  

      const _renderList = (rowData)=>{

        const item=rowData.item;

        return(

            <AllComments
            name={item.name}
            comment={item.comment}
            
            >
            </AllComments>
            
            )

      }




    return (

        <SafeAreaView style={{flex:1}}>
            
                <TopBar
                title={"Comments"}
                back={back_to_screen}
                ></TopBar>
                
            
        <View style={{flex:0.9,marginTop:"2%"}}>
        <FlatList
            data={props.comments[props.cuurentFeed].feedComments}
            renderItem={_renderList}
            keyExtractor={(id,index)=>String(index)}
            
            
            >

            </FlatList>
        </View>
        <View style={styles.postcommentView}>

            <PostComment
            setCommentsArray={setCommentsArray}
            ></PostComment>

        </View>
        </SafeAreaView>
    )
}



const styles = StyleSheet.create({
    postcommentView:{
        height:verticalScale(50),
        marginLeft:"5%"
            // backgroundColor:"red"

    }
})


const mapStateToProps = state => {
    // console.log("in map state to props");
    return {
       comments: state.CommentsReducer.comments,
       cuurentFeed: state.FeedsReducer.cuurentFeed,
     
    };
  };
  
  const mapDispatchToProps = dispatch => {
    
    return {
      
  
        _setComments: (comments) => dispatch(_setComments(comments)),
    
  
    };
  };
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(CommentsScreen);
