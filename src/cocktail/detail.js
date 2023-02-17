/* eslint-disable */
import React, { useEffect, useState } from "react";
import '../App.css'
import axios from 'axios';
import {Routes, Route, Link, useParams, useNavigate, Outlet} from 'react-router-dom';

function CocktailDetail(props) {
    const cocktail = props.cocktail;
    const {no} = useParams();

    const eachCocktail = cocktail.filter((cocktail) => cocktail.no == no);
    console.log(eachCocktail);

    // console.log(eachCocktail[0].cocktailImage[0]);
    // let name = eachCocktail.name;
    // console.log(name);
    
    return (
        <>
        {
            eachCocktail.map(function(a, i) {
                return (
                    <div className='banner' style={{backgroundColor:'#303030', border:'1px solid white'}} key={a.no}>
                        <div style={{width:'950px', height:'400px', margin:'auto', position:'relative', top:'12%', display:'grid', gridTemplateColumns:'500px 400px', columnGap:'50px'}}>
                            <div style={{width:'510px', height:'400px', display:'grid', gridTemplateColumns:'80px 420px', columnGap:'10px'}}>
                                <div style={{width:'80px', height:'100%'}}>
                                    <div style={{width:'80px', height:'80px', marginBottom:'10px',backgroundColor:'white', borderRadius:'10px'}}></div>
                                    <div style={{width:'80px', height:'80px', marginBottom:'10px',backgroundColor:'white', borderRadius:'10px'}}></div>
                                </div>
                                <div style={{width:'420px', height:'100%'}}>
                                    <img src="https://cocktail-bucket.s3.ap-northeast-2.amazonaws.com/TB_COCK_MASTER/72.Virgin%20Colada.jpg" width='420px' height='400px' style={{borderRadius:'10px'}}></img>
                                </div>
                            </div>
                            <div style={{width:'400px', height:'100%', display:'grid', gridTemplateRows:'1fr 1fr 1fr 1fr 2fr'}}>
                                <div style={{color:'rgb(242, 92, 92)', fontWeight:'800'}}>#{(a.type == "alcohol") ? "알콜" : "논알콜"} #재료6개</div>
                                <div>
                                    <div style={{float:'left', fontSize:'30px', fontWeight:'800', color:'white', marginRight:'10px'}}>{a.name}</div>
                                    <div style={{color:'rgb(110, 110, 110)', fontWeight:'600', position:'relative', top:'5px'}}>{a.engName}</div>
                                </div>
                                <div style={{color:'white'}}>{a.cocktailContents}</div>
                                <div style={{maxWidth:'120px', maxHeight:'30px', textAlign:'center', border:'1px solid rgb(110, 110, 110)', color:'rgb(110, 110, 110)', borderRadius:'10px', paddingTop:'8px', marginTop:'15px'}}>도수 : {(a.type == "alcohol") ? "알콜" : "논알콜"}</div>
                                <div className="cocktail-ingredient-image" style={{marginLeft:'0%', marginTop:'5%'}}>
                                    <div style={{textAlign:'center', fontSize:'40px', color:'rgb(242, 92, 92)', marginTop:'7px', marginBottom:'-8px'}}>❤</div>
                                    <div style={{textAlign:'center', fontSize:'25px', color:'rgb(242, 92, 92)'}}>5</div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        <div style={{paddingLeft:'15%', paddingRight:'15%', marginTop:'100px'}}>
            <div style={{marginBottom:'50px'}}>
                <span style={{fontSize:'20px', fontWeight:'bold'}}>재료정보 ▼</span>
                <button className="cocktail-ingredient-btn"> ↻ 단위변경</button>
            </div>
            <div className="cocktail-ingredient-recipe-box">
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', padding:'2% 20%'}}>
                    <div className="cocktail-ingredient-image">
                        <img src="https://cocktail-bucket.s3.ap-northeast-2.amazonaws.com/TB_ITEM_MASTER/007.%EC%BD%94%EC%BD%94%EB%84%9B%EB%B0%80%ED%81%AC80.png" width='100%' height='100%'></img>
                    </div>
                    <div className="cocktail-ingredient-contents">코코넛밀크</div>
                    <div className="cocktail-ingredient-contents">음료수</div>
                    <div className="cocktail-ingredient-contents">30ml</div>
                </div>
                
                <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr 1fr', padding:'2% 20%'}}>
                    <div className="cocktail-ingredient-image">
                        <img src="https://cocktail-bucket.s3.ap-northeast-2.amazonaws.com/TB_ITEM_MASTER/007.%EC%BD%94%EC%BD%94%EB%84%9B%EB%B0%80%ED%81%AC80.png" width='100%' height='100%'></img>
                    </div>
                    <div className="cocktail-ingredient-contents">코코넛밀크</div>
                    <div className="cocktail-ingredient-contents">음료수</div>
                    <div className="cocktail-ingredient-contents">30ml</div>
                </div>
            </div>
        </div>

        <div style={{paddingLeft:'15%', paddingRight:'15%', marginTop:'100px'}}>
            <div style={{marginBottom:'50px'}}>
                <span style={{fontSize:'20px', fontWeight:'bold'}}>레시피 설명 ▼</span>
            </div>
            <div className="cocktail-ingredient-recipe-box">
                <div style={{paddingLeft:'20%'}}>
                    <p className="cocktail-recipe-contents">1. 믹서기에 으깬 얼음을 넣는다.</p>
                    <p className="cocktail-recipe-contents">2. 코코넛 밀크(또는 코코넛 크림이나 코코넛 시럽) 30ml와 파인애플 주스 120ml를 추가한다. </p>
                    <p className="cocktail-recipe-contents">3. 부드러워질 때까지 갈아서 허리케인 잔에 붓는다.</p>
                    <p className="cocktail-recipe-contents">4. 휘핑크림으로 토핑하고 웨지 파인애플과 마라스키노 체리로 장식한다.</p>
                </div>
            </div>
        </div>
        </>
    )
}
export default CocktailDetail;