import * as types from '../constants';

const initialState = {
    userName: "Redux-Demo",
    courseName: "Redux-ReactJs",
};
const rootReducer = ( state = initialState , action)=>{
    switch(action.type){
        case types.Change_UserName:
            return{
                ...state,
                userName:action.data,
            };
        case types.Change_CourseName:
            return{
                ...state,
                courseName:action.data,
            };
        default:
            return state;
    }
}
export default rootReducer;