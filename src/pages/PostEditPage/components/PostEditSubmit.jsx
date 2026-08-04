import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { requestCsrfAPIJsonResponse } from "../../../api/csrf";
export const PostEditSubmit = ({isPostEnable, title, content, file}) =>{
    const navigate = useNavigate();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const postId = useParams()?.postId;

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
    
    async function handleSubmitPost(){
        try{
            const csrf = await requestCsrfAPIJsonResponse();
            const formData =makePostFormData();
            setIsSubmitting(true);
            const response = await fetch(`/posts/${postId}`, {
                method: 'PATCH',
                credentials:"include",
                headers: {
                    [csrf.headerName] : csrf.token
        
                },
                body: formData
            });
        
            if (response.status === 401) {
                navigate("/login")
                return;
            }
        
            if (!response.ok) {
                throw new Error('게시글 수정 실패');
            }
        
            setIsSubmitting(false)
            navigate('/board');
        }catch(error){
            console.error('오류 발생:', error);
        }
    }

    return (
        <>
            <button id="postWriteBtn" type="button" disabled={!isPostEnable || isSubmitting} onClick={handleSubmitPost}>{isSubmitting ? "수정 중..." : "완료"}</button>
        </>
    )
}