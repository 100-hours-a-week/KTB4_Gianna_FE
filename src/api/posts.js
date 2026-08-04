import { requestCsrfAPIJsonResponse } from "./csrf";

export const createPostAPI = async (formData) => {
        try{
            const csrf = await requestCsrfAPIJsonResponse();
            const response = await fetch(`/posts`, {
                method: 'POST',
                credentials:"include",
                headers: {
                    [csrf.headerName] : csrf.token
        
                },
                body: formData
            });
        
            if (!response.ok) {
                throw new Error('게시글 작성 실패');
            }
            
            return true;
        }catch(error){
            console.error('오류 발생:', error);
        }
        return false;
    }