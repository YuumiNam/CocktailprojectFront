/* eslint-disable */
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

function Login() {
    const [userId, setUserId] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = () => {axios.post('/member/login', {
            id: userId,
            password: password,
        })
        .then(res => {
            const token = res.data.token; // 서버에서 보낸 토큰 값을 추출하여 변수에 저장
            localStorage.setItem('authToken', token); // 로컬 스토리지에 토큰 값을 저장

            console.log(token);
            navigate("/");
        })
        .catch(err => {
            console.log(err);
            alert("로그인 실패")
        });
    };

    return (
        <div className="signature-join-container">
            <div className="signature-join-contents" style={{display:'grid', gridTemplateRows:'1fr 1fr'}}>
                <label>
                    <h3>아이디 ▼</h3>
                    <input type="text" placeholder="아이디를 입력해주세요:)" className="signature-join-contents-2" value={userId} onChange={e => setUserId(e.target.value)}></input>
                    <p style={{textAlign:'right', marginTop:'5px'}}>{userId.length}/30</p>
                </label>
                <label>
                    <h3>패스워드 ▼</h3>
                    <input type="password" placeholder="패스워드를 입력해주세요:)" className="signature-join-contents-2" value={password} onChange={e => setPassword(e.target.value)}></input>
                    <p style={{textAlign:'right', marginTop:'5px'}}>{password.length}/30</p>
                </label>
                <div style={{display:'grid', gridTemplateColumns:'1fr 200px', columnGap:'2%'}}>
                    <Link to="/">
                        <button className="signature-contents-btn">취소</button>
                    </Link>
                    <button type="submit" className="signature-contents-btn" onClick={handleLogin}>로그인</button>
                </div>
            </div>
        </div>
    )
}

export default Login;