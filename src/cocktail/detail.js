/* eslint-disable */
import React, { useEffect, useState } from "react";
import '../App.css'
import axios from 'axios';
import {Routes, Route, Link, useParams, useNavigate, Outlet} from 'react-router-dom';

function CocktailDetail() {
    return (
        <>
        <div className='banner'>
            <div style={{width:'900px', height:'400px', backgroundColor:'skyblue', margin:'auto', position:'relative', top:'12%', display:'grid', gridTemplateColumns:'500px 400px', columnGap:'50px'}}>
                <div style={{width:'510px', height:'400px', backgroundColor:'yellow', display:'grid', gridTemplateColumns:'80px 420px', columnGap:'10px'}}>
                    <div style={{width:'80px', height:'100%'}}></div>
                    <div style={{width:'420px', height:'100%'}}>
                        <img src="https://cocktail-bucket.s3.ap-northeast-2.amazonaws.com/TB_COCK_MASTER/72.Virgin%20Colada.jpg" width='420px' height='400px' style={{borderRadius:'10px'}}></img>
                    </div>
                </div>
                <div style={{width:'350px', height:'100%', backgroundColor:'red'}}>

                </div>
            </div>
        </div>
        <div style={{paddingLeft:'10%', paddingRight:'10%', marginTop:'100px'}}>
            <div style={{marginBottom:'50px'}}>
                <span style={{fontSize:'20px', fontWeight:'500'}}>재료정보</span>
                <button>단위변경</button>
            </div>
            <div style={{width:'100%', height:'100px', border:'1px solid black'}}></div>
        </div>
        </>
    )
}
export default CocktailDetail;