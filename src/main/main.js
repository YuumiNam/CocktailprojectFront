/* eslint-disable */
import React, { useState } from "react";
import '../App.css';
import axios from "axios";

function Main(props) {
    const [title, setTitle] = useState("");
    const [file, setFile] = useState(null);
    const banner = props.banner;
    console.log(banner);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('file', file);

        try {
            await axios.post('/banner/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
              });
        } catch(err) {
            console.log(err);
        }
        
        console.log(formData);
    }

    return(
        <>
        <div className='banner'>
        {
        banner.map((a, i) => (
            <img key={i} src={a.filepath} alt={`Image ${i}`} />
        ))
        }
        </div>
        <form onSubmit={handleSubmit} style={{margin:'50px'}}>
            <input type="file" name="file" onChange={handleFileChange} />
            <label>배너이름 : 
                <input type="text" name="title" value={title} onChange={handleTitleChange} ></input>
            </label>
            <button type="submit" style={{marginLeft:'70px'}}>배너 업로드</button>
        </form>
        </>
    )
}

export default Main;