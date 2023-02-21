/* eslint-disable */

function SignatureJoin() {
    return (
        <div className="signature-join-container">
            <div className="signature-join-banner">
                <div className="signature-join-banner-img" style={{gridRow:'1/4'}}></div>
                <div style={{gridColumn:'3/4', fontSize:'30px', fontWeight:'600', paddingTop:'30px'}}>나만의 시그니처 올리기</div>
                <div style={{gridColumn:'3/4', fontWeight:'600', color:'rgb(110, 110, 110)'}}>모여Bar 가이드에 도전하세요</div>
                <div style={{gridColumn:'3/4', color:'rgb(110, 110, 110)', marginTop:'30px'}}>♥좋아요♥를 많이 받게되면 <br /> 모여Bar 가이드에 정식 레시피로 등록됩니다. 매력적인 칵테일을 소개해주세요!</div>
            </div>
            <div className="signature-join-contents">
                <form style={{display:'grid', gridTemplateRows:'1fr 150px 150px 280px 1fr 1fr', rowGap:'20px'}}>
                    <div className="signature-contents-picture-box">
                        <h3>칵테일 사진 ▼</h3>
                        <div className="signature-picture-box signature-picture-box-grid-1" style={{border:'0px'}}>
                            <div className="signature-picture-box" style={{border:'3px solid'}}>
                                <h3 style={{textAlign:'center', marginTop:'80px'}}>사진 업로드 📸</h3>  
                            </div>
                            <div className="signature-picture-box signature-picture-box-grid-2">
                                <div style={{gridRow:'2/3', textAlign:'center', fontWeight:'600'}}>추천사진1</div>
                                <div style={{gridRow:'3/4', textAlign:'center'}}>깔끔하게 흰 배경에 <br/> 찍어보세요!</div>
                            </div>
                            <div className="signature-picture-box signature-picture-box-grid-2">
                                <div style={{gridRow:'2/3', textAlign:'center', fontWeight:'600'}}>추천사진2</div>
                                <div style={{gridRow:'3/4', textAlign:'center'}}>깔끔하게 흰 배경에 <br/> 찍어보세요!</div>
                            </div>
                            <div className="signature-picture-box signature-picture-box-grid-2">
                                <div style={{gridRow:'2/3', textAlign:'center', fontWeight:'600'}}>추천사진3</div>
                                <div style={{gridRow:'3/4', textAlign:'center'}}>깔끔하게 흰 배경에 <br/> 찍어보세요!</div> 
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>칵테일 이름 ▼</h3>
                        <input type="text" placeholder="이름을 지어주세요:)" className="signature-contents"></input>
                        <p style={{textAlign:'right', marginTop:'5px'}}>0/50</p>
                    </div>
                    <div>
                        <h3>칵테일 영문이름 ▼</h3>
                        <input type="text" placeholder="영문이름을 지어주세요:)" className="signature-contents"></input>
                        <p style={{textAlign:'right', marginTop:'5px'}}>0/50</p>
                    </div>
                    <div>
                        <h3>칵테일 설명 ▼</h3>
                        <textarea placeholder="칵테일 설명을 적어주세요:)" spellCheck="false" className="signature-contents signature-textarea"></textarea>
                        <p style={{textAlign:'right', marginTop:'5px'}}>0/200</p>
                    </div>
                    <div>
                        <h3>재료 정보 ▼</h3>
                        <div className="signature-ingredient-container">
                            <div><h3>재료1</h3></div>
                            <div style={{gridColumn:'1/3'}}><input type="text" placeholder="재료 이름을 검색해주세요"  className="signature-ingredient-contents-1" style={{width:'98.3%'}}></input></div>
                            <div><input type="text" placeholder="용량" className="signature-ingredient-contents-1"></input></div>
                            <div><input type="text" placeholder="단위" className="signature-ingredient-contents-1"></input></div>
                        </div>
                        <button className="signature-ingredient-contents-btn">재료추가</button>
                    </div>
                    <div>
                        <h3>레시피 정보 ▼</h3>
                        <textarea placeholder="레시피에 대한 설명을 적어주세요:)" spellCheck="false" className="signature-contents signature-textarea"></textarea>
                        <p style={{textAlign:'right', marginTop:'5px'}}>0/200</p>
                    </div>
                    <div>
                        <button className="signature-contents-btn">업로드</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignatureJoin;