
import {
  SET_CURRENT_FEED,
    SET_FEEDS
    } from './actionTypes';
      import {base_url} from '../../components/AllConstants';
      
      export const _setFeeds = (feeds) => {

        
      
        return(dispatch, getState)=>{ 
              dispatch ({
                type: SET_FEEDS,
                feeds:feeds
            });
        
        }
      }

      export const _setCurrentFeed = (feed) => {

        
      
        return(dispatch, getState)=>{ 
              dispatch ({
                type: SET_CURRENT_FEED,
                feed:feed
            });
        
        }
      }
      
      
       
      export const _getAllFeeds = (obj) => {
      
        
        
        return (dispatch, getState) => {

            return new Promise ((resolve,reject)=>{

            fetch(base_url+'q', {
                method: 'POST',
                headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                },
                body:JSON.stringify({...obj})
                }).then((response) => response.json())
                .then((responseJson) => {
            
                    console.log("Response is=",responseJson);
                    
                     dispatch(_setFeeds(responseJson.feeds));
                    resolve({
                        status:true
                    })
               
                })
                .catch((error) => {
                console.log('error is',error);
                
                });

            })
    
    
            
      }
      };
      
      
    
      
      
      
      
      