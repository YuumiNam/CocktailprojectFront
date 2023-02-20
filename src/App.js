/* eslint-disable */
import React, { useEffect, useState } from "react";
import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link, useParams, useNavigate, Outlet} from 'react-router-dom';
import axios from 'axios';
import Header from './header';
import Main from './main/main';
import Cocktail from './cocktail/cocktail';
import CocktailDetail from './cocktail/cocktailDetail';
import Ingredient from "./ingredient/ingredient";
import IngredientDetail from "./ingredient/IngredientDetail";
import Class from "./class";
import Signature from "./signature/signature";
import SignatureDetail from "./signature/signatureDetail";
import {getCocktail, getIngredient} from "./api";

function App() {

  const [cocktail, setCocktail] = useState([]);
  const [ingredient, setIngredient] = useState([]);

  // 칵테일 JSON파일
  useEffect(() => {
    getCocktail(setCocktail);
  },[]);

  // 재료 JSON파일
  useEffect(() => {
    getIngredient(setIngredient);
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
        <Route path="signature" element={<Signature />}></Route>
        <Route path="signature/:no" element={<SignatureDetail />}></Route>
        <Route path="/class" element={<Class cocktail={cocktail} />}></Route>
      </Routes>
    </div>
  );
}

export default App;
