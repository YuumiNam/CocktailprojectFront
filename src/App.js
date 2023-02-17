/* eslint-disable */
import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, useParams, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';
import Main from './main/main';
import Cocktail from './cocktail/cocktail';
import Header from './header';
import CocktailDetail from './cocktail/detail';
import Class from "./class";

function App() {

  let [cocktail, setCocktail] = useState([]);

  useEffect(() => {
      axios.get('http://localhost:3001/cocktail')
      .then((res) => {

      let copy = [...res.data];
      
      setCocktail(copy);
      // setCocktail((prev)=>[cocktail, ...prev]);
      });
  },[]);

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cocktail" element={<Cocktail cocktail={cocktail} />}></Route>
        <Route path="/cocktail/:no" element={<CocktailDetail cocktail={cocktail} />}></Route>
        <Route path="/class" element={<Class cocktail={cocktail} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
