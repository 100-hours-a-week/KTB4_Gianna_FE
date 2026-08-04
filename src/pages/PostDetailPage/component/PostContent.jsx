export const PostDetail = ({post}) =>{
    return(
        <>
            <section id="postContainer">
                <img
                    id="postViewFile"
                    src={`/posts/${post.id}/image`}
                    alt={post.title || "게시글 이미지"}
                />

                <h6 id="postContent">
                    {post.content}
                </h6>
            </section>
        </>
    )   
}