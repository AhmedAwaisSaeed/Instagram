

import {
    SET_FEEDS,
    SET_CURRENT_FEED
    } from '../actions/actionTypes';
        
        const initialState = {
    
        feeds:[],
        cuurentFeed:0,
    
        };
        
        const reducer = (state = initialState, action) => {
          switch (action.type) {
                
                   
                  
                      case SET_FEEDS:
                        return{
                          ...state,
                           feeds:[...action.feeds],
                         
                          
                        }
                        case SET_CURRENT_FEED:
                          return{
                            ...state,
                             cuurentFeed:action.feed,
                           
                            
                          }
            default:
                    return state;
                }
         
        };
        
        
      
        
        export default reducer;
        
        