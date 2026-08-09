export const getDiscussionMessagesAPIResponse = async () => {
    try {
        const response = await fetch("/discussion/messages", {
            method: "GET",
            credentials: "include"
        });

        if (!response.ok) {
            throw new Error("토론 채팅 목록 가져오기 실패");
        }

        const result = await response.json();
        return result.data.messageList;
    } catch (error) {
        console.error("채팅 기록 조회 실패:", error);
        return [];
    }
}
