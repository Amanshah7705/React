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
const FoodDeliveryPage = () => {
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
  return (
    <div>
      <section id="header">
        <Image src={'/photo/8.jpeg'} className='logo' width="110" height="100" alt="description of image" ></Image>
        <div>
          <ul id="navbar">
            <li className='active' ><Link href={'./Login_Page'} >Login</Link></li>
            <li><Link href={'./Sign_up'}>Register</Link></li>
            <li><Link href={'./Cart'}><FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon></Link></li>
            <li><Link href={'./Home'}><FontAwesomeIcon icon={faHouse}></FontAwesomeIcon></Link></li>
            <li><Link href={'./About'}>About</Link></li>
            <li><Link href={'./Contact'}><FontAwesomeIcon icon={faPhone}></FontAwesomeIcon></Link></li>
          </ul>
        </div>
      </section>
      <section id="hero">
        <h4>Discount Season</h4>
        <h2>Super Value Deals</h2>
        <h1>On All Products</h1>
        <p>Save More With Coupons & Up To 80% Off! </p>
        {/* <button>Order Now</button> */}
        <button onClick={console.log("click")} >
          Order Now
          <svg width="79" height="3" viewBox="0 0 79 46" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_618_1123)">
              <path d="M42.9 2H76.5L34.5 44H2L42.9 2Z" fill="url(#paint0_linear_618_1123)" />
            </g>
            <defs>
              <filter id="filter0_f_618_1123" x="0" y="0" width="78.5" height="46" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_618_1123" />
              </filter>
              <linearGradient id="paint0_linear_618_1123" x1="76.5" y1="2.00002" x2="34.5" y2="44" gradientUnits="userSpaceOnUse">
                <stop stop-color="white" stop-opacity="0.6" />
                <stop offset="1" stop-color="white" stop-opacity="0.05" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </section>
      <section id="feature" className='section-p1'>
        <div className='fe-box'>
          <Image src={'/photo/shiping.png'} alt='not found' width="200" height="200"></Image>
          <h6>Free Shipping</h6>
        </div>
        <div className='fe-box'>
          <Image src={'/photo/service.png'} alt='not found' width="200" height="200"></Image>
          <h6>24/7 Service</h6>
        </div>
        <div className='fe-box'>
          <Image src={'/photo/discount.jpg'} alt='not found' width="200" height="250"></Image>
          <h6>Save Money</h6>
        </div>
      </section>
      <section id="product1" className='section-p1'>
        <h2>Latest Trading Food</h2>
        <p>For Monsoon Season</p>
        <div className='pro-container'>
          <div className='pro'>
              {foodItems.map((foodItem) => (
                <div key={foodItem.id} className="des">
                  <Image src={foodItem.load} className='ola' width="225" height="225" alt="description of image"></Image>
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
      <sectin id="banner" class="section-m1">
        <h4>Sponsored By</h4>
        <h2>Up To <span className='nahi'>50% Off</span> In All The Items</h2>
        <button class='glowing-btn'><span class='glowing-txt'>C<span class='faulty-letter'>L</span>ICK</span></button>
      </sectin>
    </div>
  );
}

export default FoodDeliveryPage;