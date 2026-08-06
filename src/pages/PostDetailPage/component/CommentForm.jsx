import { CommentSubmit } from "./CommentSubmit"
import { CommentItem } from "./CommentItem"
import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { requestCsrfAPIJsonResponse } from "../../../api/csrf"
export const CommentForm = () =>{
    const [comment, setComment] = useState("")
    const [commentList, setCommentList] = useState([])
    const [isEdit, setIsEdit] = useState(false);
    const [editCommentId, setEditCommentId] = useState(0);
    const postId = useParams()?.postId;

    function initialize(){
        setComment("")
        setIsEdit(false);
        setEditCommentId(0);
    }

    async function getCommentList () {
        const csrf = await requestCsrfAPIJsonResponse();
                
        try{
            const response = await fetch(`/posts/${postId}/comments`, {
                method: 'GET',
                credentials:"include",
                headers:{
                    [csrf.headerName] : csrf.token
                }
            });

            if (!response.ok) {
                throw new Error('댓글 조회 실패');
            }
    
            const data = await response.json();
            //console.log(data.data)  
            setCommentList(data.data.commentsList);
            initialize();

        }catch(error){
           console.error('로그인 중 오류 발생:', error);
        }
    }
    
    useEffect(()=>{ 
            getCommentList();
        }, [] )
    return(
        <>
           <section id="postCommentContainer" className="comment-write-container">
                <textarea id="commentContentEnter" placeholder="댓글을 남겨주세요!" value={comment} onChange={(event)=>{setComment(event.target.value)}}></textarea>
                {<CommentSubmit 
                setComment ={setComment} 
                commentValue={comment} 
                isEdit = {isEdit} 
                setIsEdit = {setIsEdit} 
                commentId ={editCommentId} 
                setEditCommentId={setEditCommentId}
                getCommentList={getCommentList}/>}
            </section>  

            {
                commentList.map((comment,idx)=>{
                    return <CommentItem 
                        key={comment.id}
                        comment={comment}
                        setComment={setComment}
                        onEdit = {setIsEdit}
                        setEditCommentId ={setEditCommentId}
                        getCommentList={getCommentList}/>
                    })
            }
        </>
    )
}