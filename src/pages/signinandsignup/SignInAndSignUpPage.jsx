import React from "react";
import "./SignInAndSignUpPage.scss";
import SignIn from "../../components/signin/SignIn";
import SignUp from "../../components/signup/SignUp";

const SignInAndSignUpPage = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
)

export default SignInAndSignUpPage;