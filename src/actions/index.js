import * as types from '../constants';
export const actChangeUserName=(value)=>{
    return{
        type:types.Change_UserName,
        data:value
    }
};
export const actChangeCourseName=(value)=>{
    return{
        type:types.Change_CourseName,
        data:value
    }
};