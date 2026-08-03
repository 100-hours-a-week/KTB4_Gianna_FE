export const signUpAPIResponse = async (formData) =>{
    try {
            const response = await fetch('/users/signup', {
                method: 'POST',
                credentials:"include",
                body: formData
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

export const getProfilePictureAPIResponse = async()=>{
    try {
            const response = await fetch('/users/profilePicture', {
                method: 'GET',
                credentials:"include"
            });
            if (!response.ok) {
                throw new Error('프로필 사진 조회 실패');
            }
            return await response.blob(); 
        } catch(error){
            console.error('프로필 사진 조회 중 오류 발생:', error);
            return null;
        }   
}