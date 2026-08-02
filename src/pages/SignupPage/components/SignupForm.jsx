export const SignupForm = ({onNicknameChange, nicknameHelperText, onEmailChange, emailHelperText, 
    onPasswordChange, pwdHelperText, onConfirmPasswordChange, confirmPwdHelperText, onProfilePictureChange, pfpHelperText }) =>{
    return (
        <>
            <div className="profile-field">
                <label htmlFor="profilePicture">프로필 사진</label>
                    <p id="pfpHelperText" className="helper-text profile-helper">{pfpHelperText}</p>
                    <label className="profile-upload" htmlFor="profilePicture">
                    <span>+</span>
                </label>
                <input id="profilePicture" type="file" accept="image/png, image/jpeg" onChange={(event)=>{onProfilePictureChange(event.target.files[0])}}/>
            </div>

            <label htmlFor="email">이메일*</label>
            <input id="email" className="email-label" type="text" placeholder="이메일을 입력하세요" onChange={(event)=>{onEmailChange(event.target.value)}}/>
            <p id="emailHelperText" className="helper-text">{emailHelperText}</p>

            <label htmlFor="password">비밀번호*</label>
            <input id="password" className="pwd-label" type="password" placeholder="비밀번호를 입력하세요" onChange={(event)=>{onPasswordChange(event.target.value)}}/>
            <p id="pwdHelperText" className="helper-text">{pwdHelperText}</p>

            <label htmlFor="confirm-password">비밀번호 확인*</label>
            <input id="confirmPassword" type="password" placeholder="비밀번호를 한번 더 입력하세요" onChange={(event)=>{onConfirmPasswordChange(event.target.value)}}/>
            <p id="confirmPwdHelperText" className="helper-text">{confirmPwdHelperText}</p>

                <label htmlFor="nickname">닉네임*</label>
                <input id="nickname" type="text" placeholder="닉네임을 입력하세요" onChange={(event)=> {onNicknameChange(event.target.value)}}/>
                <p id="nicknameHelperText" className="helper-text">{nicknameHelperText}</p>
        </>
    )
}