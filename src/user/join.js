import { useState } from "react";

function Join() {
    // JSON데이터를 저장할 객체
    const [joinUser,setJoinUser] = useState({
        cocktailName: '',  
        cocktailContents: '',
        recipeContents: '',
        type: 'alcohol',
        files: [],
    });

    

    return (
        <form style={{marginRight:'15%', marginLeft:'15%'}}>
            <label>
                <h3>아이디 ▼</h3>
                <input type="text" placeholder="아이디를 입력해주세요:)" className="signature-join-contents-2"></input>
                <p style={{textAlign:'right', marginTop:'5px'}}>0/50</p>
            </label>
            <label>
                <h3>패스워드 ▼</h3>
                <input type="password" placeholder="패스워드를 입력해주세요:)" className="signature-join-contents-2"></input>
                <p style={{textAlign:'right', marginTop:'5px'}}>0/50</p>
            </label>
            <label>
                <h3>이름 ▼</h3>
                <input type="text" placeholder="이름을 지어주세요:)" className="signature-join-contents-2"></input>
                <p style={{textAlign:'right', marginTop:'5px'}}>0/50</p>
            </label>
            <label>
                <h3>닉네임 ▼</h3>
                <input type="text" placeholder="닉네임을 지어주세요:)" className="signature-join-contents-2"></input>
                <p style={{textAlign:'right', marginTop:'5px'}}>0/50</p>
            </label>
            <label>
                <h3>생년월일 ▼</h3>
                <input type="date" className="signature-join-contents-2"></input>
                <p style={{textAlign:'right', marginTop:'5px'}}>0/50</p>
            </label>
            <label>
                <h3>핸드폰번호 ▼</h3>
                <input type="tel" className="signature-join-contents-2"></input>
                <p style={{textAlign:'right', marginTop:'5px'}}>0/50</p>
            </label>
            <div>
                <h3>성별 ▼</h3>
                <label>
                    <span>남성</span>
                    <input type="checkbox" name="gender" value="male" />
                </label>
                <label>
                    <span>여성</span>
                    <input type="checkbox" name="gender" value="female" />
                </label>
            </div>
            <div>
                <button type='submit' className="signature-contents-btn">회원가입</button>
            </div>
        </form>
    )
}

export default Join;