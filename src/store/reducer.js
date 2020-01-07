import * as actions from './action';

const initialState = {
    counter: 0,
    results: []
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case actions.INCREMENT: return {
                            ...state,
                            counter: state.counter +1
                            }
        case actions.DECREMENT: return {
                            ...state,
                            counter: state.counter -1
                            }
        case actions.ADD: return {
                            ...state,
                            counter: state.counter + action.val
                        }
        case actions.SUB: return {
                            ...state,
                            counter: state.counter - action.val
                        }
        case actions.Store_Result: return{
                                ...state,
                                results: state.results.concat({id: new Date(),value:state.counter})
                            }
        case actions.Delete_Result: const updatedArray = state.results.filter(result => result.id !== action.resultElId);
                                return{
                                    ...state,
                                    results: updatedArray
                                }
    }
    return state;
}
export default reducer;