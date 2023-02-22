/* eslint-disable */
import React, { useEffect, useState } from "react";
import '../App.css';
import '../css/cocktailandingredient.css';
import '../css/signature.css';
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
                <div key={i}>
                <div className='banner cocktail-banner'>
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
                            <div className="cocktail-banner-box-contents-isalcohol">도수 : {a.degree}도</div>
                            <div className="cocktail-ingredient-image" style={{marginLeft:'0%', marginTop:'2%'}}>
                                <div className="cocktail-banner-box-contents-favorite">❤</div>
                                <div className="cocktail-banner-box-contents-favorite" style={{fontSize:'25px', marginTop:'0px'}}>5</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{paddingLeft:'15%', paddingRight:'15%', marginTop:'100px'}}>
                    <div style={{marginBottom:'50px'}}><span style={{fontSize:'20px', fontWeight:'bold'}}>해당 재료로 만들 수 있는 칵테일 ▼</span></div>
                    <div className="signature-list">
                        <Link to={`/signature/1`}>
                            <div style={{cursor: "pointer"}}>
                                <img src="https://cocktail-bucket.s3.ap-northeast-2.amazonaws.com/TB_COCK_MASTER/71.Shirley_temple.jpg" width='280px' height='200px' style={{borderRadius:'10px'}} alt="cocktail"></img>
                                <div className='signature-contents' style={{fontWeight:'800', padding:'10px 0px'}}>칵테일</div>
                                <div className='signature-contents' style={{color:'rgb(131, 131, 131)', fontSize:'12px'}}>칵테일내용칵테일내용칵테일내용칵테일내용칵테일내용칵테일내용</div>
                            </div>
                        </Link>
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