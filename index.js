import { Navigation } from "react-native-navigation";

import App from "./App";
import React from 'react';
import HomeTab from "./src/screens/HomeTab";
import CameraTab from "./src/screens/CameraTab";
import SearchTab from "./src/screens/SearchTab";
import ActivityTab from "./src/screens/ActivityTab";
import ProfileTab from "./src/screens/ProfileTab";
import CommentsScreen from "./src/screens/CommentsScreen";
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();


function ReduxProvider(Component) {
    

  return (props) => (
      <Provider store={store}>
          <Component {...props} />
      </Provider>
  );
}

Navigation.registerComponent('WelcomeScreen', () => ReduxProvider(App), () => App);
Navigation.registerComponent('HomeTab', () => ReduxProvider(HomeTab), () => HomeTab);
Navigation.registerComponent('CameraTab', () => ReduxProvider(CameraTab), () => CameraTab);
Navigation.registerComponent('SearchTab', () => ReduxProvider(SearchTab), () => SearchTab);
Navigation.registerComponent('ActivityTab', () => ReduxProvider(ActivityTab), () => ActivityTab);
Navigation.registerComponent('ProfileTab', () => ReduxProvider(ProfileTab), () => ProfileTab);
Navigation.registerComponent('CommentsScreen', () => ReduxProvider(CommentsScreen), () => CommentsScreen);



Navigation.events().registerAppLaunchedListener(() => {
    Navigation.setDefaultOptions({
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
   Navigation.setRoot({
     root: {
       stack: {
         children: [
           {
             component: {
               name: 'WelcomeScreen'
             }
           }
         ]
       }
     }
  });
});