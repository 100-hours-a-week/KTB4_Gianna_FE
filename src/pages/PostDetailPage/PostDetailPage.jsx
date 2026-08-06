import './PostDetailPage.css';
import { getUserId, getUser } from '../../module/module';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { requestCsrfAPIJsonResponse } from '../../api/csrf';
import { PostDetail } from './component/PostContent';
import { PostHeader } from './component/PostHeader';
import { CommentForm } from './component/CommentForm';
import { Header } from '../../components/Header/Header';
export const PostDetailPage = () =>{
    const [post, setPost] = useState(null);
    const postId = useParams()?.postId;


    function checkIsAuthor(){
        const userId = getUserId();
        return post.userId === userId;
    }
    useEffect( ()=>{
        async function getPost() {
            const csrf = await requestCsrfAPIJsonResponse();
            try{
                const response = await fetch(`/posts/${postId}`, {
                    method: 'GET',
                    credentials:"include",
                    headers: {
                        [csrf.headerName] : csrf.token
                    },
                });

                if (!response.ok) {
                    throw new Error('게시물 상세 조회 실패');
                }

                const data = await response.json();
                setPost(data.data)
                
        }catch(error){
            console.error('boardView 오류 발생:', error);
        }   
        }
        getPost();
        }, [postId])

    if (!post) {
        return <p>로딩중...</p>;
    }

    const isAuthor = checkIsAuthor();
    
    return (
        <>
            <div id="headerContainer">{<Header/>}</div>
            <main className="board-view-page">
                <article className="post-detail">
                    <div id="postHeader">
                        {<PostHeader  post ={post} isAuthor={isAuthor}/>}
                    </div>

                    <div id="postContainer">
                        {<PostDetail post ={post}/>} 
                    </div>
                </article>

                <section id="commentListContainer" className="comment-list-container">
                    {<CommentForm/>}
                </section>
            </main>
        </>       
 )    
}