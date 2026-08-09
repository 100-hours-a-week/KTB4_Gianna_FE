export const DiscussionLog = ({ messageLog }) => {
    return (
        <>
            {messageLog.map((message, index) => (
                <div key={index}>
                    {message.content}
                </div>
            ))}
        </>
    );
};