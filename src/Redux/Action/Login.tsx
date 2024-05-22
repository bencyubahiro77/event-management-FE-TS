import { loginStart, loginSuccess, loginFailure } from "../slice/Login";
import API from "@/utils/axios"
import { Dispatch } from "@reduxjs/toolkit";



interface LoginType{
    email: string,
    password: string
}
interface LoginStartAction {
    type: typeof loginStart.type;
}

interface UserData {
    message: string;
    token: string;
}
  
interface LoginSuccessAction {
    type: typeof loginSuccess.type;
    payload: UserData; 
}

interface LoginFailureAction {
    type: typeof loginFailure.type;
    payload: { error: string };
}

type LoginAction = LoginStartAction | LoginSuccessAction | LoginFailureAction;

export const login =({email, password}:LoginType)=>async (dispatch: Dispatch<LoginAction>)=>{
  
    dispatch(loginStart());
    try{
        const response = await API.post('/auth/login',{email ,password});
        dispatch(loginSuccess(response.data));
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.data.role);
        localStorage.setItem('username', response.data.data.username);
        return Promise.resolve(response.data);
    }catch(err){
        dispatch(loginFailure(err));
        return Promise.reject(err);
    }
}