"use client"
import React from 'react'
import Link from 'next/link'
import './page1.css'
import { useRouter } from 'next/navigation';
import {useForm}  from 'react-hook-form'
import * as yup from 'yup'
import { useState } from 'react';
import {yupResolver} from "@hookform/resolvers/yup"
const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = '/register'
import { useContext } from 'react';
import  AuthContext from '../context/AuthProvider'
import axios from 'axios';
export default  function Login_page() {
  const {setAuth} = useContext(AuthContext);
  const router = useRouter();
   const [user,setuser] = useState({
      UserName:'',
      Password:''
   });
  const schema = yup.object().shape({
            UserName:yup.string().required(),
            Password:yup.string().required().min(4).max(20),
        });

            const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    });
  
  const onSubmit = (data) => {
       const newData={
      UserName:'',
      Password:'',
       }
       newData.UserName=data.UserName,
       newData.Password=data.Password,
       setuser(newData);
        axios.post('http://localhost:8000/auth/login',newData)
       .then((res)=>{
        console.log(res)
       })
       .catch((err)=>{
        console.log(err)
       })
        router.push('/item');
  };

  return (
    <div className="login_form_container">
    <div className="login_form">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)} > 
      <div className="input_group">
        <i className="fa fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          className="input_text"
          autoComplete="off"
          {...register("UserName")}
        />
      </div>
      <div className="input_group">
        <i className="fa fa-unlock-alt"></i>
        <input
          type="password"
          placeholder="Password"
          className="input_text"
          {...register("Password")}
          autoComplete="off"
        />
      </div>
      <div className="button_group" id="login_button">
        {/* <button type="submit" onClick={handleClick
        }>Login</button> */}
        {/* <lable>Login</lable> */}
        <input type="submit"></input>
      </div>
      <div className="fotter">
        <a>Forgot Password ?</a>
        <Link href='/Sign_up'>SingUp</Link>
      </div>
      </form>
    </div>
  </div>
  )
}

