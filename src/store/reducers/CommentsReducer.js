

import {
    SET_COMMENTS
    } from '../actions/actionTypes';
        
        const initialState = {
    
        comments:[
            {
                id:1,
                feedComments:[
                    {
                        userId:1,
                        name:"abc",
                        comment:"Awesome"

                    },
                    {
                        userId:2,
                        name:"def",
                        comment:"Beautiful"

                    },
                    {
                        userId:3,
                        name:"Jack",
                        comment:"Beautiful"

                    }

                ]

            },
            {
                id:2,
                feedComments:[
                    {
                        userId:1,
                        name:"abc",
                        comment:"Awesome"

                    },
                    {
                        userId:2,
                        name:"def",
                        comment:"Beautiful"

                    }

                ]

            },
            {
                id:3,
                feedComments:[
                    {
                        userId:1,
                        name:"abc",
                        comment:"Awesome"

                    },
                    {
                        userId:2,
                        name:"def",
                        comment:"Beautiful"

                    }

                ]

            },
            {
                id:4,
                feedComments:[
                    {
                        userId:1,
                        name:"abc",
                        comment:"Awesome"

                    },
                    {
                        userId:2,
                        name:"def",
                        comment:"Beautiful"

                    }

                ]

            },
            {
                id:5,
                feedComments:[
                    {
                        userId:1,
                        name:"abc",
                        comment:"Awesome"

                    },
                    {
                        userId:2,
                        name:"def",
                        comment:"Beautiful"

                    }

                ]

            },
            {
                id:6,
                feedComments:[
                    {
                        userId:1,
                        name:"abc",
                        comment:"Awesome"

                    },
                    {
                        userId:2,
                        name:"def",
                        comment:"Beautiful"

                    }

                ]

            },
            {
                id:7,
                feedComments:[
                    {
                        userId:1,
                        name:"abc",
                        comment:"Awesome"

                    },
                    {
                        userId:2,
                        name:"def",
                        comment:"Beautiful"

                    }

                ]

            },
            {
                id:8,
                feedComments:[
                    {
                        userId:1,
                        name:"abc",
                        comment:"Awesome"

                    },
                    {
                        userId:2,
                        name:"def",
                        comment:"Beautiful"

                    }

                ]

            },
            {
                id:9,
                feedComments:[
                    {
                        userId:1,
                        name:"abc",
                        comment:"Awesome"

                    },
                    {
                        userId:2,
                        name:"def",
                        comment:"Beautiful"

                    }

                ]

            },
            {
                id:10,
                feedComments:[
                    {
                        userId:1,
                        name:"abc",
                        comment:"Awesome"

                    },
                    {
                        userId:2,
                        name:"def",
                        comment:"Beautiful"

                    }

                ]

            },
            
        ],
    
        };
        
        const reducer = (state = initialState, action) => {
          switch (action.type) {
                
                   
                  
                      case SET_COMMENTS:
                        return{
                          ...state,
                           comments:[...action.comments],
                         
                          
                        }
            default:
                    return state;
                }
         
        };
        
        
      
        
        export default reducer;
        
        