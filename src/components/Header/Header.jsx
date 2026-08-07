import './Header.css'
import { useNavigate } from "react-router-dom"
import { useState } from 'react';
import { deleteCookie } from '../../api/deleteCookie';
import { getProfilePictureAPIResponse } from '../../api/users';
export const Header = () =>{
    const [curPage, setCurPage] = useState("board"); //board, myPost, discussion
    const [isToggleOpen, setIsToggleOpen] = useState(false)
    const navigate = useNavigate();
    function handleGoBack(){
        history.back();
    }

    function handleToggleClick(){
        setIsToggleOpen(!isToggleOpen)
    }

    function handleLogOut(){
        if(window.confirm('로그아웃 하시겠습니까?')){
            deleteCookie();
            navigate('/');
        }
    }

    function goToBoard(){
        navigate('/board')
    }

    function goToMyPageUpdate(){
        navigate('/mypage');
    }

    function goToMyPagePwdUpdate(){
        navigate('/mypage/password');
    }

    function handlePageChange(pageName){
        setCurPage(pageName);
        if(pageName === "discussion"){
            navigate('/discussion');
        } else if(pageName === "board"){
            navigate('/board');
        } else if(pageName === "myPost"){
            navigate('/myPost');
        }
    }
   
    return (
        <>
            <header className="main-header">
                <button id="backBtn" className="back-btn" type="button" aria-label="뒤로가기" onClick={handleGoBack}>&lt;</button>
                <h2 id="headerTitle" onClick={goToBoard}></h2>

                <button id="profileToggleBtn" className="profile-toggle-btn" type="button" aria-label="마이페이지 메뉴 열기" onClick={handleToggleClick}>
                    <img id="headerProfilePicture" src={`/users/profilePicture`} alt="프로필 사진"/>
                </button>

                <nav className="board-filter-nav">
                    <span
                        className={curPage === "board" ? "active-filter" : ""}
                        onClick={() => handlePageChange("board")}
                    >전체 게시물</span>
                    <span
                        className={curPage === "myPost" ? "active-filter" : ""}
                        onClick={() => handlePageChange("myPost")}
                    >내 게시물</span>
                    <span
                        className={curPage === "discussion" ? "active-filter" : ""}
                        onClick={() => handlePageChange("discussion")}
                    >토론의 장</span>
                </nav>
                

                <div className="mypage-toggle-container" hidden={!isToggleOpen}>
                    <ul>
                        <li><a onClick={goToMyPageUpdate}>회원정보수정</a></li>
                        <li><a onClick={goToMyPagePwdUpdate}>비밀번호수정</a></li>
                        <li id="logoutItem" onClick={handleLogOut}>로그아웃</li>
                    </ul>
                </div>
            </header>
        </>
    )
}
