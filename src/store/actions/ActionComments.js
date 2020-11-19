
import {
    SET_COMMENTS
    } from './actionTypes';
      import {base_url} from '../../components/AllConstants';
      
      export const _setComments = (comments) => {

        
      
        return(dispatch, getState)=>{ 
              dispatch ({
                type: SET_COMMENTS,
                comments:comments,
            });
        
        }
      }
      
      
       
      