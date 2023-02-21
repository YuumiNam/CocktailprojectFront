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
                <form style={{display:'grid', gridTemplateRows:'1fr 100px 100px 1fr 1fr 1fr', rowGap:'40px'}}>
                    <div className="signature-contents-picture-box">
                        <h3>칵테일 사진 ▼</h3>
                        <div style={{display:'grid', gridTemplateColumns:'250px 1fr 1fr 1fr', columnGap:'10px'}}>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div>
                        <h3>칵테일 이름 ▼</h3>
                        <input type="text" placeholder="이름을 지어주세요:)" style={{width:'98.2%', padding:'10px', border:'1px solid', borderRadius:'10px', fontSize:'15px'}}></input>
                    </div>
                    <div>
                        <h3>칵테일 영문이름 ▼</h3>
                        <input type="text" placeholder="영문이름을 지어주세요:)" style={{width:'98.2%', padding:'10px', border:'1px solid', borderRadius:'10px', fontSize:'15px'}}></input>
                    </div>
                    <div>
                        <h3>칵테일 설명 ▼</h3>
                        <textarea placeholder="칵테일 설명을 적어주세요:)" style={{width:'98.2%', padding:'10px', resize:'none', border:'1px solid', borderRadius:'10px'}}></textarea>
                    </div>
                    <div>
                        <h3>재료 정보 ▼</h3>
                    </div>
                    <div>
                        <h3>레시피 정보 ▼</h3>
                        <textarea placeholder="레시피에 대한 설명을 적어주세요:)"></textarea>
                    </div>
                    <div>
                        <button>업로드</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignatureJoin;