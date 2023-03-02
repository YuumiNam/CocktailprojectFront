/* eslint-disable */
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignatureJoin(props) {
    // ingredient 데이터 불러오기
    const ingredient = props.ingredient;
    const navigate = useNavigate();

    // JSON데이터를 저장할 객체
    const [joinSignature,setJoinSignature] = useState({
        cocktailName: '',
        engName:'',  
        cocktailContents: '',
        recipeContents: '',
        files: null,
        amount: '',
        unit: '',
        // ingredient: [{
        //     contents: "사탕수수에서 설탕을 만들고 난 찌꺼지인 당밀(Molasses)를 이용하여 증류시켜 만든 증류주로 골드 럼은 앰버 럼으로도 불리며 연한 갈색에 깊은 맛이 특징이다. 2년간 태운 오크통에서 숙성되며 카라멜향과 바닐라, 너츠 등의 향미를 냅니다.",
        //     degree: 40,
        //     engName: "Gold rum",
        //     image: "https://cocktail-bucket.s3.ap-northeast-2.amazonaws.com/TB_ITEM_MASTER/057.%EA%B3%A8%EB%93%9C%EB%9F%BC.png",
        //     name: "골드 럼",
        //     no: 1,
        //     type: "strong",
        // }]
    });

    // input에 넣은 값을 항상 value로 업데이트 해주고 빈state객체에 저장해줌
    const handleChange = (e) => {
        const {name, value} = e.target;

        setJoinSignature({
            ...joinSignature,
            [name]: value
        });
    };

    // files는 여러장을 넣을수 있기때문에 따로빼준다음 빈state객체에 저장해줌
    const handleFileChange = (e) => {
        const newFiles = [...joinSignature.files];

        for (let i = 0; i < e.target.files.length; i++) {
            newFiles.push(e.target.files[i]);
        }

        setJoinSignature((prevState) => ({
            ...prevState,
            files: newFiles,
        }));

        // console.log(newFiles);
    };

    const handleSubmit = async (e) => {
        // form을 제출 했을때 새로고침되는 것을 방지
        e.preventDefault();

        // FormData객체에 데이터 저장
        const formData = new FormData();
        formData.append('cocktailName', joinSignature.cocktailName);
        formData.append('cocktailContents', joinSignature.cocktailContents);
        formData.append('recipeContents', joinSignature.recipeContents);
        formData.append('engName', joinSignature.engName);
        joinSignature.files.forEach((file) => {
            formData.append('files', file);
        });
        formData.append('amount', joinSignature.amount);
        formData.append('unit', joinSignature.unit);
        // formData.append('ingredient', joinSignature.ingredient);

        // 엔드포인트에 JSON파일 전달
        try {
            await axios.post('/signature/form', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              }); // http://192.168.0.4:8080/signature/form
            // console.log(res.data);
            navigate("/signature");
        } catch(err) {
            console.log(err);
        }

        // 콘솔에 띄우기
        console.log(joinSignature);
    };

    return (
        <div className="signature-join-container">
            <div className="signature-join-banner">
                <div className="signature-join-banner-img" style={{gridRow:'1/4'}}></div>
                <div style={{gridColumn:'3/4', fontSize:'30px', fontWeight:'600', paddingTop:'30px'}}>나만의 시그니처 올리기</div>
                <div style={{gridColumn:'3/4', fontWeight:'600', color:'rgb(110, 110, 110)'}}>모여Bar 가이드에 도전하세요</div>
                <div style={{gridColumn:'3/4', color:'rgb(110, 110, 110)', marginTop:'30px'}}>♥좋아요♥를 많이 받게되면 <br /> 모여Bar 가이드에 정식 레시피로 등록됩니다. 매력적인 칵테일을 소개해주세요!</div>
            </div>
            <div className="signature-join-contents">
                {/* 영문이름 grid 150px */}
                <form style={{display:'grid', gridTemplateRows:'1fr 150px 150px 280px 1fr 1fr', rowGap:'20px'}} onSubmit={handleSubmit}>
                    <div className="signature-contents-picture-box">
                        <h3>칵테일 사진 ▼</h3>
                        <div className="signature-picture-box signature-picture-box-grid-1" style={{border:'0px'}}>
                            <div className="signature-picture-box" style={{border:'3px solid'}}>
                                <input type="file" name='files' defaultValue={joinSignature.files} multiple onChange={handleFileChange} style={{textAlign:'center', marginTop:'80px'}}></input>  
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
                    <label>
                        <h3>칵테일 이름 ▼</h3>
                        <input type="text" placeholder="이름을 지어주세요:)" className="signature-join-contents-2" name='cocktailName' value={joinSignature.cocktailName} onChange={handleChange}></input>
                        <p style={{textAlign:'right', marginTop:'5px'}}>{joinSignature.cocktailName.length}/50</p>
                    </label>
                    <label>
                        <h3>칵테일 영문이름 ▼</h3>
                        <input type="text" placeholder="영문이름을 지어주세요:)" className="signature-join-contents-2" name='engName' value={joinSignature.engName} onChange={handleChange}></input>
                        <p style={{textAlign:'right', marginTop:'5px'}}>{joinSignature.engName.length}/50</p>
                    </label>
                    <label>
                        <h3>칵테일 설명 ▼</h3>
                        <textarea placeholder="칵테일 설명을 적어주세요:)" spellCheck="false" className="signature-join-contents-2 signature-textarea" name='cocktailContents' value={joinSignature.cocktailContents} onChange={handleChange}></textarea>
                        <p style={{textAlign:'right', marginTop:'5px'}}>{joinSignature.cocktailContents.length}/200</p>
                    </label>
                    <label>
                        <h3>재료 정보 ▼</h3>
                        <div className="signature-ingredient-container">
                            <div><h3>재료1</h3></div>
                            <div style={{gridColumn:'1/3'}}><input type="text" placeholder="재료 이름을 검색해주세요" className="signature-ingredient-contents-1" style={{width:'98.3%'}}></input></div>
                            <div><input type="text" name='amount' value={joinSignature.amount} onChange={handleChange} placeholder="용량" className="signature-ingredient-contents-1"></input></div>
                            <div><input type="text" name='unit' value={joinSignature.unit} onChange={handleChange} placeholder="단위" className="signature-ingredient-contents-1"></input></div>
                        </div>
                        <button className="signature-ingredient-contents-btn">재료추가</button>
                    </label>
                    <label>
                        <h3>레시피 정보 ▼</h3>
                        <textarea placeholder="레시피에 대한 설명을 적어주세요:)" spellCheck="false" className="signature-join-contents-2 signature-textarea" name='recipeContents' value={joinSignature.recipeContents} onChange={handleChange}></textarea>
                        <p style={{textAlign:'right', marginTop:'5px'}}>{joinSignature.recipeContents.length}/200</p>
                    </label>
                    <div>
                        <button type='submit' className="signature-contents-btn">업로드</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignatureJoin;