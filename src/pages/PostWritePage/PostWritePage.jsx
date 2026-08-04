import './PostWritePage.css'
import { PostWriteForm } from './components/PostWriteForm';
import { PostWriteSubmit } from './components/PostWriteSubmit';
import { Header } from '../../components/Header/Header';
import { useState } from 'react';
export const PostWritePage = () =>{
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [file, setFile] = useState(null);

    function makePostFormData(){
        const formData = new FormData();
        formData.append(
            "request",
            new Blob(
                [
                    JSON.stringify({
                        title: title,
                        content: content
                    }),
                ],
        { type: "application/json" }
        )
        );

        if (file instanceof File) {
            formData.append("file", file);
        }
       return formData;
    
    }

    const isPostEnable = title.trim().length > 0 && content.trim().length > 0;
    return(
        <>
            <div id="headerContainer">
                <Header/>
            </div>

            <main className="post-write-page">
                <h1 id="postWriteTitle">취향 기록</h1>
                <PostWriteForm 
                    onTitleChange={setTitle}
                    onContentChange={setContent} 
                    onFileChange={setFile}/>
                <PostWriteSubmit 
                    isPostEnable={isPostEnable}
                    makePostFormData={makePostFormData}/>
            </main>
        </>
    );
}