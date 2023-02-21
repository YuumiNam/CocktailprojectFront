/* eslint-disable */

function SignatureJoin() {
    return (
        <div className="signature-join-container">
            <div className="signature-join-banner">
                <div className="signature-join-banner-img" style={{gridRow:'1/4'}}></div>
                <div style={{gridColumn:'3/4', fontSize:'30px', fontWeight:'600', paddingTop:'30px'}}>나만의 시그니처 올리기</div>
                <div style={{gridColumn:'3/4', fontWeight:'600', color:'rgb(110, 110, 110)'}}>모여Bar 가이드에 도전하세요</div>
                <div style={{gridColumn:'3/4', color:'rgb(110, 110, 110)'}}>♥좋아요♥를 많이 받게되면 모여Bar 가이드에 정식 레시피로 등록됩니다. 매력적인 칵테일을 소개해주세요!</div>
            </div>
            <div className="signature-join-contents">
                <div>
                    <h3>재료정보 ▼</h3>
                </div>
                <div>
                    <h3>칵테일 이름 ▼</h3>
                </div>
                <div>
                    <h3>칵테일 영문이름 ▼</h3>
                </div>
                <div>
                    <h3>칵테일 설명 ▼</h3>
                </div>
                <div>
                    <h3>재료 정보 ▼</h3>
                </div>
                <div>
                    <h3>레시피 정보 ▼</h3>
                </div>
                <div>
                    <button>업로드</button>
                </div>
            </div>
        </div>
    )
}

export default SignatureJoin;