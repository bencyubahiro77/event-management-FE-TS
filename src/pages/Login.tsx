/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react"
import { useDispatch,useSelector } from 'react-redux';
import { AppDispatch,RootState } from '@/Redux/store';
import { login } from "@/Redux/Action/Login"
import MyButton from "@/MyComponent/Button"
import MyInput from "@/MyComponent/Input"
import MyLabel from "@/MyComponent/Label"
import { Link,useNavigate } from "react-router-dom"
import {toast } from "react-toastify";

const LoginForm = () => {
  const dispatch = useDispatch<AppDispatch>();
  const loading = useSelector((state: RootState) => state.auth.loading)
  const navigate = useNavigate()
  const[email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const handleSubmit =async (e: React.FormEvent) => {
    e.preventDefault(); 
    try{
      await dispatch(login({ email, password }));
      navigate("/dashboard");
    } catch(err){
      toast.error("Incorrect Email or Password")
    }
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="drop-shadow-lg ">
        <form className="box bg-white rounded-lg md:rounded-none p-4">
          <div className="text-bold mx-10 my-12 max-w-xl w-72">
            <h3 className="font-bold mb-4 text-customGray text-2xl text-center">
                  Welcome Back,
                  <br className="md:hidden" /> Log in
            </h3>
            <div className="grid pb-4 pt-4">
              <MyLabel value="Email" />
              <MyInput width="100%" value={email} type="email" onChange={(e:any)=>{ setEmail(e.target.value)}} required={true} />
            </div>
            <div className="grid">
              <MyLabel value="Password" />
              <MyInput width="100%" value={password} type="Password" onChange={(e:any)=>{ setPassword(e.target.value)}} required={true} />
            </div>
            <Link to=""><p className="pt-2">Forgot password?</p></Link>
            <MyButton
              value="Login"
              color="blue"
              width="100%"
              navigate= {handleSubmit}
              loading={loading}
              disabled={email ==='' || password ===''}
            />
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginForm
