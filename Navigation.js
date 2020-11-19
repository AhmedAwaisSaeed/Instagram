import { Navigation } from 'react-native-navigation';

export const Tabs = () =>  Navigation.setRoot({
    root: {
    bottomTabs: {
        id: 'BOTTOM_TABS_LAYOUT',
        children: [
          {
            stack: {
              id: 'HomeStack',
              children: [
                {
                  component: {
                    id: 'HomeTab',
                    name: 'HomeTab'
                  }
                }
              ],
              options: {
                bottomTab: {
                  icon: require('./src/assets/home.png'),
                  selectedIconColor: '#273D6F',
                  
                  
                  
                }
              }
            }
          },
          {
            stack: {
              id: 'SearchStack',
              children: [
                {
                  component: {
                    id: 'SearchTab',
                    name: 'SearchTab'
                  }
                }
              ],
              options: {
                bottomTab: {
                    icon: require('./src/assets/search.png'),
                    selectedIconColor: '#273D6F',
                    
                }
              }
            }
          },
          {
            stack: {
              id: 'CameraStack',
              children: [
                {
                  component: {
                    id: 'CameraTab',
                    name: 'CameraTab'
                  }
                }
              ],
              options: {
                bottomTab: {
                    icon: require('./src/assets/camera.png'),
                    selectedIconColor: '#273D6F',
                }
              }
            }
          },

          {
            stack: {
              id: 'ActivityStack',
              children: [
                {
                  component: {
                    id: 'ActivityTab',
                    name: 'ActivityTab'
                  }
                }
              ],
              options: {
                bottomTab: {
                    icon: require('./src/assets/activity.png'),
                    selectedIconColor: '#273D6F',
                }
              }
            }
          },
          {
            stack: {
              id: 'ProfileStack',
              children: [
                {
                  component: {
                    id: 'ProfileTab',
                    name: 'ProfileTab'
                  }
                }
              ],
              options: {
                bottomTab: {
                    icon: require('./src/assets/profile.png'),
                    selectedIconColor: '#273D6F',
                }
              }
            }
          },
        ]
      }
      
     
    }
   
  });