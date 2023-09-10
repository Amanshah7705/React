"use client"
import Image from 'next/image';
import React, { useState } from 'react';
import './page1.css'
import { Dorsa, Italiana } from 'next/font/google';
import Link from 'next/link';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faHouse, faPhone, faRankingStar, faStar , faCartPlus ,faX } from '@fortawesome/free-solid-svg-icons'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import './page1.css';

const NewArrial = () => {
    const foodItems = [
        {
          id: 0,
          name: 'Samosa',
          price: 0.25,
          load: '/photo/samosa.jpeg'
        },
        {
          id: 1,
          name: 'Dadvada',
          price: 3,
          load: '/photo/dadvada.jpeg'
        },
        {
          id: 2,
          name: 'Panipuri',
          price: 0.5,
          load: '/photo/panipuri.jpeg'
        },
        {
          id: 3,
          name: 'Kachori',
          price: 2,
          load: '/photo/kachori.jpeg'
        },
        {
          id: 4,
          name: 'Momos',
          price: 5,
          load: '/photo/momos.jpeg'
        },
        {
          id: 5,
          name: 'Bhajiya',
          price: 3.5,
          load: '/photo/bhajiya.jpeg'
        },
        {
          id:6,
          name:'Vadapav',
          price:0.3,
          load:'/photo/vadapav.jpeg'
        },
        {
          id:7,
          name:'Khaman',
          price:5,
          load:'/photo/Khaman.jpeg'
        },
        {
            id:8,
            name:'Brownie Ice-Cream',
            price:2,
            load:'/photo/browny.jpeg'
        },
        {
            id:9,
            name:'Dabeli',
            price:0.60,
            load:'/photo/dabeli.jpeg'
        },
        {
            id:10,
            name:'Dokdha',
            price:2.5,
            load:'/photo/dokdha.jpeg'
        },{
            id:11,
            name:'Dosa',
            price:4,
            load:'/photo/dosa.jpeg'
        },
        {
            id:12,
            name:'Garlic-Bread',
            price:2,
            load:'/photo/garlicbread.jpeg'
        },{
            id:13,
            name:'Gulab-Jambu',
            price:5,
            load:'/photo/gulabjambu.jpeg'
        },
        {
            id:14,
            name:'Margreta Pizza',
            price:2.5,
            load:'/photo/Margritapizza.jpeg'
        },
        {
            id:15,
            name:'Mohan-Thad',
            price:5,
            load:'/photo/mohanthad.jpeg'
        }
      ]
      const sizer=foodItems.length;
      const [cost, setcost] = useState(0);
      const [it, setit] = useState(Array(sizer).fill(0));
    
      function handleevent(item, action) {
        if (action === '+') {
          const newcost = cost + foodItems[item].price;
          const newit = it;
          newit[item] = newit[item] + 1;
          setit(newit);
          setcost(newcost);
        }
        else {
          if (it[item] === 0) {
            console.log("item", it[item]);
            console.log("cost", cost);
            console.log("it", it);
            setcost(cost);
            setit(it);
          }
          else {
            const newcost = cost - foodItems[item].price;
            const newit = it;
            newit[item] = newit[item] - 1;
            setit(newit);
            setcost(newcost);
          }
        }
      }
   return(
      <div>
        <section id="header">
        <Image src={'/photo/8.jpeg'} className='logo' width="110" height="100"></Image>
        <div>
          <ul id="navbar">
            <li className='active' ><Link href={'./Login_Page'} >Login</Link></li>
            <li><Link href={'./Sign_up'}>Register</Link></li>
            <li><Link href={'./Payment'}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link></li>
            <li><Link href={'./item'}><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link></li>
            <li><Link href={'./About'}>About</Link></li>
            <li><Link href={'./Contact'}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></Link></li>
          </ul>
        </div>
      </section>
      <section id="product1" className='section-p1'>
        <h2>All Items</h2>
        <p>For Monsoon Season</p>
        <div className='pro-container'>
          <div className='pro'>
              {foodItems.map((foodItem) => (
                <div key={foodItem.id} className="des">
                  <Image src={foodItem.load} className='ola' width="225" height="225"></Image>
                   <p className='id1'>Product : {foodItem.name}</p>
                  <p className='id2'>Price : {foodItem.price} $</p>
                  <div className='button-container'>
                    <button onClick={() => handleevent(foodItem.id, '+')}><FontAwesomeIcon icon={faCartPlus}></FontAwesomeIcon></button>
                    <h5>Items: {it[foodItem.id]}</h5>
                    <button onClick={() => handleevent(foodItem.id, '-')}><FontAwesomeIcon icon={faX}></FontAwesomeIcon></button>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
      <section id="newslatter" className='section-p1 section-m1'>
        <div className='newstext'>
        <h4>
          Sign Up For Newletters
        </h4>
        <p>
          Get E-mail Updates About Our Latest <span> Special Offers. </span>
        </p>
        </div>
        <div className='form'>
          <input type="text" placeholder='Enter Your E-mail'></input>
          <button>SignUp</button>
        </div>
      </section>
      <footer className='section-p1'>
       <div className='col'>
      <Link href="/Contact">Contact Us</Link>
       </div>
       <div className="col">
        <Link href="/About">About Us</Link>
       </div>
       <div className='col'>
        <h4>My Account</h4>
        <a href="/Login_Page">Login</a>
        <a href="/Sign_up">Register</a>
        <a href="/Payment">Payment</a>
        <a href="/Cart">History</a>
       </div>
       <div className='col-install'>
       <h4>Install App</h4>
       <p>From App Store Or Google Play</p>
       <div className='row'>
       <Image src={'/photo/app.jpg'}  className="lo" width="100" height="100"></Image>
       <Image src={'/photo/play.jpg'}  className="lo" width="100" height="100"></Image>
       </div>
       </div>
      </footer>
      <div className='copyright'> 
       <p>&copy; All Right Reserved by Aman Shah</p>
       </div>
      </div>
   );
}

export default NewArrial;