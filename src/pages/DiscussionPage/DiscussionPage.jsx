import './DiscussionPage.css';
import { Header } from '../../components/Header/Header.jsx';

export const DiscussionPage = () => {
    return (
        <>
            <div id="headerContainer">{<Header />}</div>
            <main className="discussion-page">
                <section className="discussion-room-box">
                    <div className="discussion-room-body"></div>
                    <form className="discussion-input-area">
                        <input type="text" placeholder="메시지를 입력하세요" />
                        <button type="submit">전송</button>
                    </form>
                </section>
            </main>
        </>
    );
};
