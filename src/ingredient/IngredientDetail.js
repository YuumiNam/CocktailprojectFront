/* eslint-disable */
import React, { useEffect, useState } from "react";
import '../App.css';
import '../css/cocktailandingredient.css';
import axios from 'axios';
import {Routes, Route, Link, useParams, useNavigate, Outlet} from 'react-router-dom';

function IngredientDetail(props) {
    const ingredient = props.ingredient;
    const {no} = useParams();
    // console.log(ingredient);

    const eachIngredient =  ingredient.filter((ingredient) => ingredient.no == no);
    
    return (
        <>
        {
        eachIngredient.map(function(a, i) {
            return (
                <div className='banner cocktail-banner' key={a.no}>
                    <div className="cocktail-banner-box">
                        <div className="cocktail-banner-box-piturebox">
                            <div style={{width:'420px', height:'100%', backgroundColor:'white', borderRadius:'10px'}}>
                                {/* {a.cocktailImages[0].url} */}
                                <img src={a.image} width='420px' height='400px' style={{borderRadius:'10px'}}></img> 
                            </div>
                        </div>
                        <div className="cocktail-banner-box-contentsbox">
                            <div style={{color:'rgb(242, 92, 92)', fontWeight:'800'}}>#{(a.type == "alcohol") ? "알콜" : "논알콜"} #재료6개</div>
                            <div>
                                <div className="cocktail-banner-box-contents-name">{a.name}</div>
                                <div className="cocktail-banner-box-contents-engname">{a.engName}</div>
                            </div>
                            <div style={{color:'white', overflow:'hidden', textOverflow:'ellipsis'}}>{a.contents}</div>
                            <div className="cocktail-banner-box-contents-isalcohol">도수 : {(a.type == "alcohol") ? "알콜" : "논알콜"}</div>
                            <div className="cocktail-ingredient-image" style={{marginLeft:'0%', marginTop:'5%'}}>
                                <div className="cocktail-banner-box-contents-favorite">❤</div>
                                <div className="cocktail-banner-box-contents-favorite" style={{fontSize:'25px', marginTop:'0px'}}>5</div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        }
        </>
    )
}
export default IngredientDetail;