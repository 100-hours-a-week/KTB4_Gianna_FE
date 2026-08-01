import { useNavigate } from "react-router-dom";
import { signUpAPIResponse } from "../../../api/users";
export const SignupSubmit = ({isSignupEnable, nickname, email, password, profilePicture}) =>{
   const navigate = useNavigate();

    async function signUpProcess() {
        const response = await signUpAPIResponse(email, password, nickname, profilePicture);    
    
        if(response) navigate('/login');
   }
    return(
        <>
            <button id="signupBtn" type="button" disabled={!isSignupEnable} 
            onClick={ async () => 
            { if(isSignupEnable) 
                await signUpProcess();
            }}>회원가입</button>
        </>
    )
}