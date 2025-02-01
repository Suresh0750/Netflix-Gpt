

const checkValidData = ({isSignInForm,name,email,password})=>{
    const isNameValidation = (/^[A-Za-z][A-Za-z0-9_]{7,29}$/).test(name)
    const isEmailValidation = (/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)
    const isPasswordValidation = (/(?=^.{6,10}$)(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&amp;*()_+}{&quot;:;'?/&gt;.&lt;,])(?!.*\s).*$/).test(password)
    if(!isSignInForm&&!isNameValidation){
        return 'Please enter valid name'
    }
    if(!isEmailValidation){
        return 'Please enter valid email'
    }
    if(!isPasswordValidation){
        return 'Please enter valid password'
    }
    return null
}

export {checkValidData}