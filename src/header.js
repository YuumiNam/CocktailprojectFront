/* eslint-disable */
import React, { useState } from "react";
import './App.css';
import {Routes, Route, Link, useParams, useNavigate, Outlet} from 'react-router-dom';

function Header() {
    return (
      <div className='header-container'>
        <div style={{gridColumn:'1/6'}}>
          <Link to="/">
            <h1 style={{cursor:'pointer', fontSize:'40px'}}>로고</h1>
          </Link>
        </div>
          
        <div>
          <button className='login-btn'>로그인</button>
          <Link to="/join">
            <button className='login-btn'>회원가입</button>
          </Link>
        </div>

        <Link to="/cocktail" className="header-menu-box">
            <li className='header-menu'>칵테일</li>
            <div className='header-animationbar'></div>
        </Link>

        <Link to="/ingredient" className="header-menu-box">
            <li className='header-menu'>재료</li>
            <div className="header-animationbar"></div>
        </Link>

        <Link to="/board" className="header-menu-box">
            <li className='header-menu'>게시판</li>
            <div className="header-animationbar"></div>
        </Link>

        <Link to="/signature" className="header-menu-box">
            <li className='header-menu'>시그니처</li>
            <div className="header-animationbar"></div>
        </Link>

        <Link to="/" className="header-menu-box">
            <li className='header-menu'>클래스</li>
            <div className="header-animationbar"></div>
        </Link>
        

        <div style={{gridColumn:'6/7'}}>
          <input className='header-search' placeholder='만들고 싶은 칵테일 또는 재료를 검색하세요 :)'></input>
        </div>
      </div>
    )
}

export default Header;