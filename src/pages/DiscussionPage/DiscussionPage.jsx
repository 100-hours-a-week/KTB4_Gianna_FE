import './DiscussionPage.css';
import { Header } from '../../components/Header/Header.jsx';
import { useState, useEffect, useRef } from 'react';
import { DiscussionLog } from './components/DiscussionLog.jsx';
import { getUserId } from '../../module/module.js';

export const DiscussionPage = () => {
    const [messageLog, setMessageLog] = useState([]); //전체 메세지
    const [message, setMessage] = useState("");
    const socketRef = useRef(null); 

    useEffect(()=>{
        const webSocket = new WebSocket("ws://localhost:8080/ws/discussion");
        socketRef.current = webSocket;

        webSocket.onopen = () => {
        console.log("WebSocket 연결 성공");
        };

        webSocket.onmessage = (event) => {
        const recievedMessage = JSON.parse(event.data);
        setMessageLog((prevMessageLog) => [...prevMessageLog, recievedMessage]);        
        
        console.log("서버에서 받은 메시지:", recievedMessage);
        console.log("prevMessages : ", messageLog);
        };

        webSocket.onerror = (error) => {
        console.error("WebSocket 에러:", error);
        };

        webSocket.onclose = () => {
        console.log("WebSocket 연결 종료");
        };

        return () =>{
            if (
                webSocket.readyState === WebSocket.OPEN ||
                webSocket.readyState === WebSocket.CONNECTING
            ) {
                webSocket.close();
            }
        }   
    }, [])
    
    function handleSendChat(){
        if (!socketRef.current || socketRef.current.readyState !== WebSocket.OPEN) {
            console.log("WebSocket이 아직 연결되지 않았습니다.");
            return;
        }
        
        const userId = getUserId();
        socketRef.current.send(JSON.stringify({
            type: "CHAT",
            content: message
        }));

        setMessage("");
    }

    return (
        <>
            <div id="headerContainer">{<Header />}</div>
            <main className="discussion-page">
                <section className="discussion-room-box">
                    <div className="discussion-room-body">
                        {<DiscussionLog messageLog={messageLog}/>}
                    </div>
                    
                    <form className="discussion-input-area">
                        <input type="text" placeholder="메시지를 입력하세요" onChange={(event)=>{setMessage(event.target.value)}} value={message}/>
                        <button type="button" onClick={handleSendChat}>전송</button>
                    </form>
                </section>
            </main>
        </>
    );
};
