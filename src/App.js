/* eslint-disable */
import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, useParams, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import Main from './main/main';
import Cocktail from './cocktail/cocktail';
import CocktailDetail from './cocktail/detail';
import Ingredient from "./ingredient/ingredient";
import IngredientDetail from "./ingredient/IngredientDetail";
import Class from "./class";

function App() {

  const [cocktail, setCocktail] = useState([]);
  const [ingredient, setIngredient] = useState([]);

  // cocktail/list

  useEffect(() => {
      axios.get('cocktail/list') // cocktail/list
      .then((res) => {

      let copy = [...res.data];
      
      setCocktail(copy);
      });
  },[]);

  useEffect(() => {
    axios.get('http://localhost:3002/ingredient')
    .then((res) => {
      let copy = [...res.data];

      setIngredient(copy);
    });
  },[])

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />}></Route>
        <Route path="/cocktail" element={<Cocktail cocktail={cocktail} />}></Route>
        <Route path="/cocktail/:no" element={<CocktailDetail cocktail={cocktail} />}></Route>
        <Route path="/ingredient" element={<Ingredient ingredient={ingredient} />}></Route>
        <Route path="/ingredient/:no" element={<IngredientDetail ingredient={ingredient} />}></Route>
        <Route path="/class" element={<Class cocktail={cocktail} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
