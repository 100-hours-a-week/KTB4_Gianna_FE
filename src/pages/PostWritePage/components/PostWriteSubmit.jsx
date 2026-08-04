import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { createPostAPI } from "../../../api/posts";

export const PostWriteSubmit = ({isPostEnable, makePostFormData}) =>{
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    async function handleSubmitPost () {
        if (!isPostEnable || isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        const formData = makePostFormData();
        const success = await createPostAPI(formData);

        if(success){
            navigate('/board');
            return;
        }

        setIsSubmitting(false);
    }

    return (
        <>
            <button id="postWriteBtn" type="button" disabled={!isPostEnable || isSubmitting} onClick={handleSubmitPost}>
                {isSubmitting ? "작성 중 ..." : "작성"}
            </button>
        </>
    )
}