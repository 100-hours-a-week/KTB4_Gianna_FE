export const PostWriteForm = ({onTitleChange, onContentChange, onFileChange}) =>{
    return (
        <div className="post-write-container">
            <label htmlFor="postWriteInputTitle">제목*</label>
            <input id="postWriteInputTitle" type="text" maxLength="26" placeholder="제목을 입력해주세요. (최대 26글자)"  onChange={(event)=>{onTitleChange(event.target.value)}}></input>

            <label htmlFor="postWriteInputContent">내용*</label>
            <textarea id="postWriteInputContent" placeholder="내용을 입력해주세요." onChange={(event)=>{onContentChange(event.target.value)}}></textarea>
            <p id="helperText" className="helper-text"></p>

            <label htmlFor="postUploadedPicture">이미지</label>
            <input id="postUploadedPicture" type="file" accept="image/png, image/jpeg" onChange={(event)=>{onFileChange(event.target.files[0])}}></input>
        </div>
    )
}
