import { useNavigate } from "react-router-dom";
import { signUpAPIResponse } from "../../../api/users";
export const SignupSubmit = ({isSignupEnable, makeSignUpFormData}) =>{
   const navigate = useNavigate();

    async function signUpProcess() {
        const formData = makeSignUpFormData();
        const response = await signUpAPIResponse(formData);    
    
        if(response) navigate('/login');
   }
    return(
        <>
            <button id="signupBtn" type="button" disabled={!isSignupEnable} onClick={ ()=>{signUpProcess()}}>회원가입</button>
        </>
    )
}