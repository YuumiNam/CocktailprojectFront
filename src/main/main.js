/* eslint-disable */
import React, { useState } from "react";
import '../App.css';

function Main() {
    const [banner, setBanner] = useState({
        title: '',
        file: [],
      });

    const handleChange = (e) => {
        const {name, value} = e.target;

        setBanner({
            ...banner,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', banner.title);
        formData.append('fileName', banner.file[0].name);
        formData.append('filePath', banner.file[0].url);

        try {
            const res = await axios.post('/main/banner', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
            console.log(res.data);
        } catch(err) {
            console.log(err);
        }        
    }

    return(
        <>
        <div className='banner'></div>
        <form onSubmit={handleSubmit} style={{margin:'50px'}}>
            <input type="file" name="file" value={banner.file} onChange={handleChange} />
            <label>배너이름 : 
                <input type="text" name="title" value={banner.title} onChange={handleChange} ></input>
            </label>
            <button type="submit" style={{marginLeft:'70px'}}>배너 업로드</button>
        </form>
        </>
    )
}

export default Main;