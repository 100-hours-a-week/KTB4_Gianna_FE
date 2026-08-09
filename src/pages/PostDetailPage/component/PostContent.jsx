export const PostDetail = ({post}) =>{
    return(
        <>
            <section id="postContainer">
                <img
                    id="postViewFile"
                    src={`/posts/${post.id}/image`}
                    alt={post.title || "게시글 이미지"}
                />

                <p id="postContent">
                    {post.content}
                </p>
            </section>
        </>
    )   
}
