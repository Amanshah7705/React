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
export default function Sign_page() {
 // <AuthProvider>
  const {setAuth} = useContext(AuthContext);
  const router = useRouter();
   const [user,setuser] = useState({
      FullName:'',
      Address:'',
      UserName:'',
      Email:'',
      Password:'',
   });
    const schema = yup.object().shape({
           FullName:yup.string().required(),
           Address:yup.string().required(),
           UserName:yup.string().required(),
           Email:yup.string().email().required(),
           Password:yup.string().required().min(4).max(20),
           ConfirmPassword:yup.string().oneOf([yup.ref("Password"),null]).required(),
        });

            const {register,handleSubmit,formState:{errors}} = useForm({
        resolver:yupResolver(schema)
    });

  const onSubmit = (data) => {
      const result1 = USER_REGEX.test(data.UserName);
      const result2 = PWD_REGEX.test(data.Password);
      if(result1 && result2)
      {
       const newData={
      FullName:'',
      Address:'',
      UserName:'',
      Email:'',
      Password:'',
       }
       newData.FullName=data.FullName,
       newData.Address=data.Address,
       newData.UserName=data.UserName,
       newData.Email=data.Email,
       newData.Password=data.Password,
       setuser(newData);
       axios.post('http://localhost:8000/auth/signup',newData)
       .then((res)=>{
        console.log(res)
       })
       .catch((err)=>{
        console.log(err)
       })
        router.push('/Login_Page');
      }
  };

  return (
    <div className="login_form_container">
    <div className="login_form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit(onSubmit)} > 
      <div className="input_group">
        <input
          type="text"
          placeholder="Full Name"
          className="input_text"
          autoComplete='off'
          {...register("FullName")}
        />
      </div>
      
      <div className="input_group">
        <input
          type="text"
          placeholder="Address"
          className="input_text"
          autoComplete="off"
          {...register("Address")}
        />
      </div>
      <div className="input_group">
        <input

          type="text"
          placeholder="Username"
          className="input_text"
          autoComplete="off"
          {...register("UserName")}
        />
      </div>
      <div className="input_group">
        <input
       
          type="email"
          placeholder="Email"
          className="input_text"
          autoComplete="off"
          {...register("Email")}
        />
      </div>
      <div className="input_group">
        <input
       
          type="password"
          placeholder="Password"
          className="input_text"
          autoComplete="off"
          {...register("Password")}
        />
      </div>
      <div className="input_group">
        <input
        
          type="password"
          placeholder="Confirm-Password"
          className="input_text"
          autoComplete="off"
          {...register("ConfirmPassword")}
        />
      </div>
      <div className="button_group" id="login_button">
      <input type="submit"></input>
      </div>
      </form>
    </div>
  </div>
  )
 // </AuthProvider>
}


