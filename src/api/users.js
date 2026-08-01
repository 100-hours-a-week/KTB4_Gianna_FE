export const signUpAPIResponse = async (email, password, nickname, profilePicture) =>{
    try {
            const response = await fetch('/users/signup', {
                method: 'POST',
                credentials:"include",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    password: password,
                    nickname: nickname,
                    profilePicture: profilePicture
                })
            });
            if (!response.ok) {
                throw new Error('회원가입 실패');
            }
            return true;
        } catch(error){
            console.error('회원가입 중 오류 발생:', error);
            return false;
        }   
}