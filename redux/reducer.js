import { ADD_DATA,REMOVE_DATA,REMOVE_DATA_SUBCELL,ADD_DATA_SUBCELL } from './types/types'

const defaultState = {
  data: [
   {value:'Age 40+',id:'1'},
   {value:'Ethncity',id:'2'},
   {value:'Income yearly 45k+ USD+',id:'3'},
  ],
  extendedCells:[
    {value:'Black',id:'1'},
    {value:'Hispanic',id:'2'},
  ]
}

const dataReducer = (state = defaultState, action) => {
  switch (action.type) {
            case ADD_DATA:
                    return {
                      ...state,
                      data: [ ...state.data, {
                        ...action.payload,
                      }],
                  
                    }
              case REMOVE_DATA:
                        return {
                          ...state,
                          data: state.data.filter(item=>item.id !== action.id)
                        }
              case REMOVE_DATA_SUBCELL:
                return {
                  ...state,
                  extendedCells: state.extendedCells.filter(item=>item.id !== action.id)
                }
                case ADD_DATA_SUBCELL:
                  return {
                    ...state,
                    extendedCells: [ ...state.extendedCells, {
                      ...action.payload,
                    }],
                
                  }
    default:
      return state
  }
}

export default dataReducer