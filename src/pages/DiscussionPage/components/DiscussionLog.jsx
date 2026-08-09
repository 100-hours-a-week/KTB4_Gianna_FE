export const DiscussionLog = ({ messageLog, currentUserId }) => {
    return (
        <div className="discussion-log">
            {messageLog.map((message, index) => (
                <div
                    className={`discussion-message-row ${Number(message.userId) === currentUserId ? "mine" : "theirs"}`}
                    key={index}
                >
                    <div className="discussion-message-bubble">
                        <span className="discussion-message-nickname">{message.nickname}</span>
                        <p>{message.content}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};
