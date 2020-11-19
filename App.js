import React,{useState} from 'react'
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { scale, verticalScale, moderateScale  } from 'react-native-size-matters';
import MyInputText from './src/components/InputText';
import WhiteCard from './src/components/WhiteCard';
import MyButton from './src/components/MyButton';
import { Navigation } from "react-native-navigation";
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scrollview';
import {Tabs} from './Navigation';
import {connect} from 'react-redux';

const App = (props) => {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [opacityEmail, setOpacityEmail] = useState(false);
  const [opacityPassword, setOpacityPassword] = useState(false);

  const onPressedSignIn= ()=>{

    Navigation.setDefaultOptions({
     
        bottomTabs: { visible: true, drawBehind:true, animate: false,
          titleDisplayMode: "alwaysHide",
        
        },
        topBar: {
          visible: false,
          drawBehind: false,
          animate: false,
        },

      statusBar: {

           drawBehind: false,
           visible: false,
          //  backgroundColor:"#FFFF",
          //  style: 'dark',

       
   },
        
    })

    Tabs();

   

  }
 
  return (
    <SafeAreaView style={{flex:1}}>
    <View style={styles.container}>

      <View style={styles.logoConatiner}>

<Text style={styles.logoText}>Instagram</Text>
      </View>


      <View style={styles.startedConatiner}>

<Text style={styles.startedText}>Let's Get Started</Text>
      </View>

      <KeyboardAwareScrollView keyboardShouldPersistTaps="handled"
  
  style={{flex:1}}
   contentContainerStyle={{
     
  }}
   >

      <View style={{height:verticalScale(55),
        
        }}>

    <WhiteCard style={{
        height:verticalScale(50),
        padding:0,
        marginHorizontal:"5%",
        borderRadius: 8,
        flexDirection:"row",
        elevation:5,
        marginTop:"1%",
        opacity:opacityEmail ? 1:0.5
        
    }}>
        <MyInputText

        value={email}
        onChange={setEmail}
        label={"Register Email Address"}
        onFocus={setOpacityEmail}

        
        ></MyInputText>
        </WhiteCard>

      </View>


      <View style={{height:verticalScale(55),
      marginTop:"5%"
        // backgroundColor:"#fff"
        }}>

      <WhiteCard style={{
        height:verticalScale(50),
        padding:0,
        marginHorizontal:"5%",
        marginBottom:"5%",
        borderRadius: 8,
        flexDirection:"row",
        elevation:5,
        opacity:opacityPassword ? 1:0.5
        // marginTop:"1%"
    }}>

            <MyInputText

            value={password}
            onChange={setPassword}
            label={"Password"}
            secureTextEntry={true}
            onFocus={setOpacityPassword}


            ></MyInputText>

            </WhiteCard>

      </View>


      <WhiteCard style={{
        height:verticalScale(50),
        padding:0,
        marginHorizontal:"5%",
        marginBottom:"5%",
        borderRadius: 8,
        flexDirection:"row",
        elevation:5,
        backgroundColor:"#00CCBB",
        marginTop:"10%"
    }}>

            <MyButton on_touch={()=>onPressedSignIn()}>
                <Text style={styles.ButtonTextStyle}>SIGN IN</Text>
              </MyButton>

      </WhiteCard>

      <View style={{
        flexDirection:"row",
        justifyContent:"space-between",
        height:verticalScale(30),
        // backgroundColor:"pink",
        marginHorizontal:"5%"
      }}>

        <TouchableOpacity><Text>Forgot Passowrd?</Text></TouchableOpacity>
        <TouchableOpacity><Text>New user here? Sign Up</Text></TouchableOpacity>


      </View>


      <View style={{
        height:verticalScale(10),
        justifyContent:"center",
        alignItems:"center",
        marginTop:"5%"
      }}><Text style={{fontSize:RFValue(10)}}>or sign in with</Text></View>

<View style={{flexDirection:"row",justifyContent:"center"}}>
<View style={[styles.circleView,{backgroundColor:"red"}]}></View>


<View style={styles.circleView}></View>
      </View>
      

      </KeyboardAwareScrollView>
    </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    //  backgroundColor:"#0ef",
      backgroundColor:"#FFFFFF",
  },
  logoConatiner:{

    height:verticalScale(200),

    //  backgroundColor:"#09C7BA",
     justifyContent:"flex-end",
    alignItems:"center"

  },
  logoText:{

    fontSize:RFValue(28),

  },
  startedConatiner:{

    height:verticalScale(80),

    // backgroundColor:"orange",
    justifyContent:"center",alignItems:"center"



  },
  startedText:{

    fontSize:RFValue(18),

  },
  circleView:{
    height:moderateScale(40),
    width:moderateScale(40),
    borderRadius:moderateScale(80)/2,
    backgroundColor:"#39559F",
    justifyContent:"center",
    alignItems:"center",
    marginTop:"5%",
    marginLeft:"5%"

  }

})


const mapStateToProps = state => {
  // console.log("in map state to props");
  return {
    // person: state.SignInReducer.person,
   
  };
};

const mapDispatchToProps = dispatch => {
  // console.log("in map dispatch to props");
  return {
    

  //  _signin: (email,password) => dispatch(_signin(email,password)),
  

  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
