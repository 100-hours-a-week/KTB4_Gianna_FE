import './MyPostPage.css';
import { Header } from '../../components/Header/Header.jsx';

export const MyPostPage = () => {
    return (
        <>
            <div id="headerContainer">{<Header />}</div>
            <main className="my-post-page">
                {/* <section className="my-post-box">
                    <h1>내 게시물</h1>
                    <p>내가 작성한 게시물이 이곳에 모입니다.</p>
                </section> */}
            </main>
        </>
    );
};
