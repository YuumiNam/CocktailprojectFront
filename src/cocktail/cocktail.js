/* eslint-disable */
import React, { useEffect, useState } from "react";
import '../App.css';
import './cocktail.css';
import axios from 'axios';
import {Routes, Route, Link, useParams, useNavigate, Outlet} from 'react-router-dom';

function Cocktail(props) {
    // let [cocktail, setCocktail] = useState([]);

    // useEffect(() => {
    //     axios.get('http://localhost:3001/cocktail')
    //     .then((res) => {

    //     let copy = [...res.data];
        
    //     setCocktail(copy);
    //     // setCocktail((prev)=>[cocktail, ...prev]);
    //     });
    // },[]);

    const cocktail = props.cocktail;

    return (
    <div>
        <div className="cocktail-btn-box">
            <button className='cocktail-btn'>도수</button>
            <button className='cocktail-btn'>재료수</button>
            <button className='cocktail-btn'>베이스주</button>
            <button className='cocktail-btn'>정렬</button>
        </div>

        <div className="cocktail-list">
            {
                cocktail.map(function(cocktail, i) {
                    return (
                        <Link to={`/cocktail/${cocktail.no}`} key={i}>
                            <div className="cocktail-box">
                                <img src={cocktail.cocktailImage[0].url} width='280px' height='200px' style={{borderRadius:'10px'}} alt="cocktail"></img>
                                <div className='cocktail-contents' style={{fontWeight:'800', padding:'10px 0px'}}>{cocktail.name}</div>
                                <div className='cocktail-contents' style={{color:'rgb(131, 131, 131)', fontSize:'12px'}}>{cocktail.cocktailContents}</div>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </div>
    )
}

export default Cocktail;